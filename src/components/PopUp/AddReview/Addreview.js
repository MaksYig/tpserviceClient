import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {Button,Box} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Rating from '@material-ui/lab/Rating';
import {createRating} from '../../../redux/actions/rating'


const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

export default function Addreview(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(4.5);
  const [hover, setHover] = useState(-1);
  const [feedBack, SetFeedBack]= useState();
  const user = useSelector(state => state.auth?.user);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange=(e)=>{
    SetFeedBack(e.target.value)
  }
  const handleSumit = (e)=>{
    const formData = {
      tour: props?.tourId,
      user: user?._id,
      review: feedBack,
      rating: value,
    };
    dispatch(createRating(formData));
    setOpen(false);
    console.log(formData);
  }

  return (
    <div>
      <Button variant='contained' color='primary' onClick={handleClickOpen}>
        Add Review
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Adding Tour Review</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please leave your Rating and feedback!
          </DialogContentText>
          <Box textAlign='center' mt={2}>
            <Rating
              name='hover-feedback'
              size='large'
              value={value}
              precision={0.5}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
            />
            {value !== null && (
              <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </Box>
          <Box mt={3} width='100%'>
            <TextField
              id='tour-review'
              label='Add feedback'
              multiline
              rows={3}
              fullWidth
              variant='outlined'
              onChange={handleChange}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleSumit} color='primary'>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
