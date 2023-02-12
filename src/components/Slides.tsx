import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/Slides.css';

import { Pagination, Navigation } from 'swiper';

const Slides = () => {
  return (
    <Swiper
      pagination={{
        type: 'bullets'
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    ></Swiper>
  );
};

export default Slides;
