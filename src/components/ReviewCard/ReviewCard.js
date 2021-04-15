import React, { useState, useEffect, Fragment } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { getMyReviews } from '../../redux/actions/rating';
import makeStyles from './styles';

export default function ReviewCard() {
  const classes = makeStyles();
  const dispatch = useDispatch();
  const [reviews, setReviews] = useState();
  const Data = useSelector((state) => state.rating.myReviews?.data?.myReviews);
  useEffect(() => {
    dispatch(getMyReviews());
  }, []);
  useEffect(() => {
    setReviews(Data);
  }, [Data]);
  console.log('RATINGS', reviews);
  return (
    <Fragment>
      {reviews?.map((review) => (
        <Grid item xs={12} md={3} key={review._id}>
          <Paper elevation={3}>
            <Card>
              <CardMedia
                // className={classes.media}
                image='https://www.meissl.com/media/images/8f24db1f/schweiz.jpg'
                // title={tour.name}
                style={{ height: '150px' }}
              />
              <CardContent>
                <Typography component='div' variant='h6'>
                  {review?.tour?.name} Tour
                </Typography>
                <Typography
                  component='div'
                  variant='body2'
                  className={classes.Review}
                  color='textSecondary'
                >
                  {review?.review}
                </Typography>
                <Box
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <Box
                    component='fieldset'
                    mb={3}
                    borderColor='transparent'
                    className={classes.Rating}
                  >
                    <Rating
                      name='read-only'
                      value={review?.rating}
                      precision={0.5}
                      readOnly
                    />
                  </Box>
                  <Typography
                    component='span'
                    variant='body2'
                    color='textSecondary'
                  >
                    {new Date(review?.createdAt).toLocaleDateString('en-gb', {
                      day: 'numeric',
                      month: 'numeric',
                      year: 'numeric',
                    })}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                {new Date(review?.createdAt).toDateString() + 10 <
                  Date.now() && (
                  <Button variant='contained' color='secondary'>
                    Delete review
                  </Button>
                )}
              </CardActions>
            </Card>
          </Paper>
        </Grid>
      ))}
    </Fragment>
  );
}
