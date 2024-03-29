import React from 'react';
import {NavLink} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { BurstMode, House, Favorite } from '@material-ui/icons';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
   };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLinkClick =()=>{
    setAnchorEl(null);
  }
  return (
    <div>
      <Button
        aria-controls='customized-menu'
        aria-haspopup='true'
        variant='contained'
        color='primary'
        onClick={handleClick}
      >
        Menu
      </Button>
      <StyledMenu
        id='customized-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleLinkClick}>
          <ListItemIcon>
            <BurstMode fontSize='small' />
          </ListItemIcon>
          <NavLink to='/tours'>
            <ListItemText primary='Tours' />
          </NavLink>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleLinkClick}>
          <ListItemIcon>
            <House fontSize='small' />
          </ListItemIcon>
          <NavLink to='/rents'>
            <ListItemText primary='Rents' />
          </NavLink>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleLinkClick}>
          <ListItemIcon>
            <Favorite fontSize='small' />
          </ListItemIcon>
          <NavLink to='/dates'>
            <ListItemText primary='Dates' />
          </NavLink>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
