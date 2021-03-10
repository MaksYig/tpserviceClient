import React, { useRef, Fragment, useState, useEffect } from 'react';
import makeStyles from './styles';
import { Grid, Box } from '@material-ui/core';
import DatingCard from '../../components/DatingCard/DatingCard';
import './DatingPage.scss';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
let items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function DatingPage() {
  const classes = makeStyles();
  const [realIndex, SetRealIndex] = useState(0);
  const [array, SetArray] = useState(items);

  useEffect(() => {
    console.log('RealIndex', realIndex);
    console.log(array.length);
  }, [realIndex]);
  const handleLike = () => {
   const newArr = array.filter((item) => item !== realIndex);

  };
  return (
    <Fragment>
      <Swiper
        style={{ paddingBottom: '10px' }}
        allowTouchMove={false}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-outside-button-next',
          prevEl: '.swiper-outside-button-prev',
        }}
        onSlideChangeTransitionStart={(swiper) => console.log('START', swiper)}
        onSlideNextTransitionEnd={(swiper) => {
          console.log('NEXT', swiper);
          SetRealIndex(swiper.realIndex);
        }}
        onSlideChange={(swiper) => console.log('slide change', swiper)}
      >
        <Box>
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <DatingCard />
            </SwiperSlide>
          ))}
        </Box>
      </Swiper>
      <Box position='absolute' className={classes.RowsBox}>
        <div className='swiper-outside-button-prev'></div>
        <div className='swiper-outside-button-next' onClick={handleLike}>
          <div className='heartbeatloader-like'>
            <svg
              className='svgdraw-like'
              width='100%'
              height='100%'
              viewBox='0 0 150 400'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                className='path-like'
                d='M 0 200 l 40 0 l 5 -40 l 5 40 l 10 0 l 5 15 l 10 -140 l 10 220 l 5 -95 l 10 0 l 5 20 l 5 -20 l 30 0'
                fill='transparent'
                strokeWidth='4'
                stroke='black'
              />
            </svg>
            <div className='innercircle-like'></div>
            <div className='outercircle-like'></div>
          </div>
        </div>
      </Box>
    </Fragment>
  );
}
