import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';
import useData from '../../../useData';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import DirectoresCard from './DirectoresCard';


const DirectoresCarousel = () => {

  const { directores } = useData()

  return (
    <div className='mx-2'>
      <Swiper

        breakpoints={{
          375: {
            spaceBetween: 20,
            slidesPerView: 1,
          },
          1366: {
            spaceBetween: 20,
            slidesPerView: 2,
          }
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='w-full pb-5'
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      >
        {
          directores.map((director, index) => (
            <SwiperSlide
              key={index}
            >
              <DirectoresCard
                {...director}
              />

            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>

  )
}

export default DirectoresCarousel