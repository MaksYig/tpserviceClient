import React from 'react';
import {Button,IconButton} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AdminAddTourStepper from './AdminAddTourStepper'
import LibraryAddOutlinedIcon from '@material-ui/icons/LibraryAddOutlined';
import makeStyles from './styles';


export default function FormDialog() {
  const classes = makeStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant='outlined' color='primary' onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <IconButton size={'small'} onClick={handleClickOpen}>
        <LibraryAddOutlinedIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
        className={classes.Dialog}
      >
        <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Email Address'
            type='email'
            fullWidth
          /> */}
          <AdminAddTourStepper />
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleClose} color='primary'>
            Subscribe
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
