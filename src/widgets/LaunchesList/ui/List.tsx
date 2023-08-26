'use client';
import React from 'react';
import MList from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { queryUpcomingLaunches } from '@shared/api/index';
import Skeleton from './Skeleton.tsx';
import '../index.scss';
import Link from 'next/link';
import { toDisplayableDate } from '@shared/utils';

const List = () => {
  const { data, isLoading } = queryUpcomingLaunches();
  const launches = data || [];

  const skeletons = Array.from({ length: 10 }, (_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <MList
      sx={{
        height: '100vh',
        overflow: 'auto',
        paddingRight: 0,
      }}>
      {isLoading && skeletons}

      {launches.map((item) => {
        const time = toDisplayableDate(item.t0);
        const header = `${item.provider.name} • ${item.name}`;
        const subheader = `${item.provider.name} • ${item.vehicle.name} • ${
          time || 'Время старта неизвестно'
        }`;

        return (
          <ListItem disablePadding key={item.id}>
            <Link
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
              href={`/launch/${item.id}`}>
              <ListItemButton
                sx={{
                  textDecoration: 'none',
                }}>
                <ListItemAvatar>
                  <Avatar alt={item.name} src={item.image} />
                </ListItemAvatar>
                <ListItemText primary={header} secondary={subheader} />
              </ListItemButton>
            </Link>
          </ListItem>
        );
      })}
    </MList>
  );
};

export default List;
