import React, { useState } from 'react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Paper,
  Container,
  Button,
  Grid,
  CardMedia,
  Card,
  Typography,
  Box,
  CardContent,
  CardHeader,
  CardActions,
  CardActionArea,
} from '@material-ui/core';
import ImageAvatar from '../../components/Avatar/Avatar';
import Rating from '@material-ui/lab/Rating';
import makeStyles from './styles';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]);

export const TourReviewSlider = ({ reviewArr }) => {
  const classes = makeStyles();
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{ delay: 6000 }}
      loop={true}
      className={classes.reviewSwiperContainer}
      // navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: false }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      breakpoints={{
        360: {
          // width: 320,
          slidesPerView: 1,
        },
        660: {
          // width: 620,
          slidesPerView: 2,
        },
        960: {
          // width: 920,
          slidesPerView: 4,
        },
      }}
      // height='100%'
      // effect='fade'
    >
      {reviewArr?.map((review, index) => (
        <Grid item key={index} className={classes.GridItemReview}>
          <SwiperSlide>
            <Card className={classes.review}>
              <CardHeader
                avatar={
                  <ImageAvatar
                    src={`https://tpservice.herokuapp.com/public/img/users/${review?.user?.photo}`}
                    flag
                    flagsrc={`https://tpservice.herokuapp.com/public/img/flags/${
                      review?.user?.country?.toLowerCase() + '.svg'
                    }`}
                    size='medium'
                  />
                }
                // action={
                //   // <IconButton aria-label='settings'>
                //   //   {/* <MoreVertIcon /> */}
                //   // </IconButton>
                // }
                title={review?.user?.name}
                subheader={new Date(review?.createdAt).toLocaleDateString(
                  'en-gb',
                  {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  }
                )}
              />
              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {review?.review}
                </Typography>
                <Box
                  component='fieldset'
                  mb={3}
                  borderColor='transparent'
                  display='flex'
                  justifyContent='center'
                >
                  <Rating
                    name='read-only'
                    value={review?.rating}
                    readOnly
                    precision={0.5}
                  />
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
        </Grid>
      ))}
    </Swiper>
  );
};
