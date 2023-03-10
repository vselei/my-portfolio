import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Slide from './Slide';
import '../styles/Slides.css';

const Slides = ({
  projects
}: {
  projects: Array<{ title: string; content: string; src: string; github: string; link?: string; }>;
}) => {
  return (
    <Swiper
      breakpoints={{
        640: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 4
        }
      }}
      slidesPerView={1}
      spaceBetween={25}
      navigation={true}
      loop={true}
      modules={[Pagination, Navigation]}
    >
      {projects.map(p => (
        <SwiperSlide key={p.title}>
          <Slide title={p.title} content={p.content} src={p.src} github={p.github} link={p.link} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slides;
