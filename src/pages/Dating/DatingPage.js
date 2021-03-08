import React,{useRef,Fragment} from 'react'
import makeStyles from './styles'
import {Grid,Box} from '@material-ui/core';
import DatingCard from '../../components/DatingCard/DatingCard'
import './DatingPage.scss'
 

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const items =[1,2,3]
export default function DatingPage() {
  const classes = makeStyles();
    const prevRef = useRef(null);
    const nextRef = useRef(null);
  return (
    <Fragment>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-outside-button-next',
          prevEl: '.swiper-outside-button-prev',
        }}
        // allowTouchMove={false}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <Box>
          {items.map((item) => (
            <SwiperSlide>
              <DatingCard />
            </SwiperSlide>
          ))}
        </Box>
      </Swiper>
      <Box position='absolute' className={classes.RowsBox}>
        <div class='swiper-outside-button-prev'></div>
        <div class='swiper-outside-button-next'>
          <div class='heartbeatloader-like'>
            <svg
              class='svgdraw-like'
              width='100%'
              height='100%'
              viewBox='0 0 150 400'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                class='path-like'
                d='M 0 200 l 40 0 l 5 -40 l 5 40 l 10 0 l 5 15 l 10 -140 l 10 220 l 5 -95 l 10 0 l 5 20 l 5 -20 l 30 0'
                fill='transparent'
                stroke-width='4'
                stroke='black'
              />
            </svg>
            <div class='innercircle-like'></div>
            <div class='outercircle-like'></div>
          </div>
        </div>
      </Box>
    </Fragment>
  );
}
