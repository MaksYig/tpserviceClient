import React,{useRef} from 'react'
import makeStyles from './styles'
import {Grid,Box} from '@material-ui/core';
import DatingCard from '../../components/DatingCard/DatingCard'
 

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
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      navigation={{
        navigation: {
          prevEl: prevRef.current ? prevRef.current : undefined,
          nextEl: nextRef.current ? nextRef.current : undefined,
        },
      }}
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
  );
}
