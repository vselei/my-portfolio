import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Slide from './Slide';

const Slides = ({
  projects
}: {
  projects: Array<{ title: string; content: string }>;
}) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {projects.map(p => (
        <SwiperSlide>
          <Slide title={p.title} content={p.content} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slides;
