const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'https://lldev.thespacedevs.com/2.2.0/'
    : 'https://ll.thespacedevs.com/2.2.0/';

type endpoint = string;
type fetchInit = RequestInit;
const slashDedublicator = (endpoint: endpoint) => {
  return endpoint.replace(/([^:]\/)\/+/g, '$1');
};

const fetcher = (endpoint: endpoint, init?: fetchInit) => {
  const normalizedEndpoint = endpoint.includes('2.2.0')
    ? endpoint
    : `/2.2.0/${endpoint}`;
  const url = new URL(slashDedublicator(normalizedEndpoint), baseUrl);

  return fetch(url, init);
};

export default fetcher;
