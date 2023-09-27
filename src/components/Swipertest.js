// A와 B를 합친 코드

// Import Swiper React components
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Portfolio 프로젝트 데이터
const projects = [
  {
    image: 'image1.png',
    title: 'Project 1',
    subTitle: 'Sub Title 1',
    introduce: 'This is project 1',
    github: 'https://github.com/project1',
    demo: 'https://demo.com/project1'
  },
  {
    image: 'image2.png',
    title: 'Project 2',
    subTitle: 'Sub Title 2',
    introduce: 'This is project 2',
    github: 'https://github.com/project2',
    demo: 'https://demo.com/project2'
  },
  {
    image: 'image3.png',
    title: 'Project 3',
    subTitle: 'Sub Title 3',
    introduce: 'This is project 3',
    github: 'https://github.com/project3',
    demo: 'https://demo.com/project3'
  },
  {
    image: 'image3.png',
    title: 'Project 3',
    subTitle: 'Sub Title 3',
    introduce: 'This is project 3',
    github: 'https://github.com/project3',
    demo: 'https://demo.com/project3'
  },
  {
    image: 'image3.png',
    title: 'Project 3',
    subTitle: 'Sub Title 3',
    introduce: 'This is project 3',
    github: 'https://github.com/project3',
    demo: 'https://demo.com/project3'
  },

];

const Swipertest = () => {
  return (
    <main className="portfolio">
      <h2>Portfolio.</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <h4>{project.subTitle}</h4>
            <p>{project.introduce}</p>
            <div className="linkBox">
              <a href={project.github} target="_blank" rel="noopener noreferrer">Github Link</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo Page Link</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default Swipertest;
