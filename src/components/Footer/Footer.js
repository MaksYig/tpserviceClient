import React from 'react';
import makeStyles from './styles';
import { NavLink } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Box, Typography } from '@material-ui/core';

export default function LabelBottomNavigation() {
  const classes = makeStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.footer}>
      {/* <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          label='Recents'
          value='recents'
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label='Favorites'
          value='favorites'
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label='Nearby'
          value='nearby'
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label='Folder'
          value='folder'
          icon={<FolderIcon />}
        />
      </BottomNavigation> */}
      <Box textAlign='center' pt={0.4} pb={0}>
        <Typography className={classes.footerText}>
          © 2021{' '}
          <a target='_blank' href='http://maksydev.site/'>
            Maksydev.site
          </a>
        </Typography>
      </Box>
    </Box>
  );
}
