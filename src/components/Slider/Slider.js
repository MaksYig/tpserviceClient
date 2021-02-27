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
  Button,
  Grid,
  CardMedia,
  Typography,
  Box,
  CardActionArea,
} from '@material-ui/core';
import ImageAvatar from '../../components/Avatar/Avatar';
import makeStyles from './styles';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]);
const slider = [
  {
    url:
      'https://c.pxhere.com/images/87/31/d43f9e1c93e29e2827fbfeeac08e-1450369.jpg!d',
    title: 'Title 1',
    text:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
  },
  {
    url:
      'https://strollinggreece.com/wp-content/uploads/2019/08/Orlias-waterfall-northern-Greece.jpg',
    title: 'Title 2',
    text:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
  },
];
export const MainSlider = () => {
  const classes = makeStyles();
  return (
    <Swiper
      spaceBetween={2}
      slidesPerView={1}
      autoplay={{ delay: 6000 }}
      loop={true}
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      height='90vh'
      // effect='fade'
    >
      <Grid container>
        {slider.map((slide, index) => (
          <SwiperSlide key={index}>
            <Grid item>
              <CardActionArea style={{ opacity: 0.7 }}>
                <CardMedia
                  style={{ height: '90vh' }}
                  className={classes.media}
                  image={slide.url}
                  title='Paella dish'
                />
              </CardActionArea>
              <Box
                position='absolute'
                top={'10%'}
                left={'50%'}
                className={classes.SlideTextBox}
              >
                <Paper
                  elevation={3}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.4)',
                    padding: '15px 25px',
                  }}
                >
                  <Typography variant='h2'>{slide.title}</Typography>
                  <Typography variant='body1'>{slide.text}</Typography>
                  <Button>Check it...</Button>
                </Paper>
              </Box>
            </Grid>
          </SwiperSlide>
        ))}
      </Grid>
    </Swiper>
  );
};