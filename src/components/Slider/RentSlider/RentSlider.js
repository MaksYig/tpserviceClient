import React, {Fragment} from 'react';
import Swiper from 'react-id-swiper';
import {
  Grid,
  CardMedia,
  Box,
  Typography,
  Paper
} from '@material-ui/core';

const images = [
  {
    src:
      'https://i.pinimg.com/originals/40/91/5c/40915cb639023d77bfe8acaa9cd0f42e.jpg',
    id: '001',
  },
  {
    src:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80',
    id: '002',
  },
];

const RentSlider = (props) => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    spaceBetween: 30,
    autoplay:{ delay: 6000 },
    breakpoints: {
      360: {
        slidesPerView: 1,
      },
      660: {
        slidesPerView: 1,
        // slidesPerView: 2,
      },
      960: {
        // slidesPerView: 2,
        slidesPerView: 1,
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      },
    },
  };

  return (
    <Swiper {...params}>
      {images.map(image =>{
        return (
          <Grid key={image.id} >
            <CardMedia image={image.src} style={{ height: 370 }} />
          </Grid>
        );
      })}
    </Swiper>
  );
};

export default RentSlider;
