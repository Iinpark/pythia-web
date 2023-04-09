import React from 'react';
import MList from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import getLaunches from './hooks/getLaunches.js';

const List = ({setSelectedLaunch}) => {
  const items = getLaunches();
  return (
    <MList>
      {items.length === 0 && 'Загрузка...'}
      {
        items.map((item) => {
          const time = item.t0 && new Date(item.t0).toLocaleString('ru');
          const header = `${item.provider.name} • ${item.name}`;
          const subheader = `${item.provider.name} • ${item.vehicle.name} • ${time || 'Время старта неизвестно'}`;

          return <ListItem onClick={() => setSelectedLaunch(item)} disablePadding key={item.id}>
            <ListItemButton>
              <ListItemAvatar >
                <Avatar alt={item.name} src={item.image} />
              </ListItemAvatar>
              <ListItemText primary={header} secondary={subheader} />
            </ListItemButton>
          </ListItem>
        })
      }
    </MList>
  );
};

export default List;
