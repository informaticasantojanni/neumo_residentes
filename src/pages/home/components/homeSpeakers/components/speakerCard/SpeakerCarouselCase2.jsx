import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';
import useData from '../../../../useData';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SpeakerCard from './SpeakerCard';


const SpeakerCarouselCase2 = () => {

  const { speakers } = useData()

  return (


    <Swiper

      breakpoints={{
        375:{
          spaceBetween:20,
          slidesPerView:1,
        },
        1366:{
          spaceBetween:20,
          slidesPerView:2,
        }
      }}
      loop= {true}
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
        speakers.map((speaker, index)=>(
          <SwiperSlide
            key={index}
          >
            <SpeakerCard 
              {...speaker}
            />

          </SwiperSlide>
        ))
      }
    </Swiper>




  )
}

export default SpeakerCarouselCase2