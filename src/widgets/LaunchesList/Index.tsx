import React from 'react';
import MList from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { queryUpcomingLaunches } from '@shared/api/index';
import Skeleton from './ui/Skeleton.jsx';

const List = ({
  setSelectedLaunch,
}: {
  setSelectedLaunch: React.Dispatch<React.SetStateAction<{}>>;
}) => {
  const { data, status } = queryUpcomingLaunches();
  const launches = data || [];
  return (
    <MList>
      {status === 'loading' &&
        Array.from({ length: 10 }, (_, index) => <Skeleton key={index} />)}
      {launches.map((item) => {
        const time = item.t0 && new Date(item.t0).toLocaleString('ru');
        const header = `${item.provider.name} • ${item.name}`;
        const subheader = `${item.provider.name} • ${item.vehicle.name} • ${
          time || 'Время старта неизвестно'
        }`;

        return (
          <ListItem
            onClick={() => setSelectedLaunch(item)}
            disablePadding
            key={item.id}>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar alt={item.name} src={item.image} />
              </ListItemAvatar>
              <ListItemText primary={header} secondary={subheader} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </MList>
  );
};

export default List;
