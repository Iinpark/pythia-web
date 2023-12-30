import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import fetchUpcomingLaunches from '@shared/api/queryFns/fetchUpcomingLaunches.ts';

const getToken = () =>
  new Promise((resolve, reject) => {
    if (!process.env.SERVICE_ACCOUNT) {
      reject('SERVICE_ACCOUNT environment variable is not set');
      return;
    }
    const string = Buffer.from(process.env.SERVICE_ACCOUNT, 'base64').toString(
      'utf8'
    );
    const key = JSON.parse(string);
    const jwtClient = new google.auth.JWT(
      key.client_email,
      undefined,
      key.private_key,
      ['https://www.googleapis.com/auth/indexing'],
      undefined
    );

    jwtClient.authorize(async function (err, tokens) {
      if (err || !tokens?.access_token) {
        console.error(err);
        reject(err);
        return;
      }
      resolve(tokens.access_token);
    });
  });

export async function GET() {
  try {
    const token = await getToken();
    const launches = await fetchUpcomingLaunches();
    const host = process.env.APP_HOST;

    const launchRoutes = launches.map((launch) => ({
      url: `${host}/launch/${launch.id}`,
      type: 'URL_UPDATED',
    }));
    const requests = launchRoutes.map((route) => {
      let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(route),
      };
      return fetch(
        'https://indexing.googleapis.com/v3/urlNotifications:publish',
        options
      );
    });

    const answer = await Promise.all(requests);
    const json = await Promise.all(answer.map((res) => res.json()));

    return NextResponse.json({ ok: true, result: json });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, error });
  }
}
