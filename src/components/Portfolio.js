import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../css/Portfolio.css'

const projects = [
  {
    image: 'img/project2.png',
    title: '동방 리뉴얼',
    subTitle: '개인 프로젝트 / 사기업 / 리뉴얼 / 웹 ',
    introduce: '동방이라는 해운 물류 회사를 리뉴얼 했습니다. HTML, CSS, JS, Swiper 그리고 SVG 이미지에 mouseOver 기능과 스크롤에 따른 애니메이션 효과를 넣는 방법을 익힐 수 있었습니다.',
    github: 'https://github.com/stemisruler/Personal_Company_renewal_Dongbang',
    demo: 'https://stemisruler.github.io/Personal_Company_renewal_Dongbang/'
  },
  {
    image: 'img/project1.png',
    title: '대전 사이버 도서관 리뉴얼',
    subTitle: '팀 프로젝트 / 공공기관 / 리뉴얼 / 웹',
    introduce: '팀원 세명과 대전 공공 도서관을 리뉴얼 했습니다. 팀원과 작업 시 지켜야할 코딩 규칙과 HTML, CSS, JS 그리고 배너 슬라이드를 만들며 Swiper 활용법을 익힐 수 있었습니다.',
    github: 'https://github.com/stemisruler/Team_Public_renewal_DaejeonCyberLibrary',
    demo: 'https://stemisruler.github.io/Team_Public_renewal_DaejeonCyberLibrary/'
  },
  {
    image: 'img/project3.png',
    title: 'NOLMUG 웹',
    subTitle: '팀 프로젝트 / 창작 / 웹',
    introduce: '리액트를 활용한 프로젝트로 대전 20대를 대상으로 한 음식점, 카페, 핫플레이스 추천 웹입니다. 리액트와 날씨 API, 지도 API,  data.js 사용법을 익힐 수 있었습니다. 또, 일체형 디자인을 익힐 수 있었습니다.',
    github: 'https://github.com/stemisruler/Team_Utility_creation_Nolmug',
    demo: 'https://nolmug.netlify.app/'
  },
  {
    image: 'img/project4.png',
    title: '주식 얀데레 앱',
    subTitle: '개인 프로젝트 / 창작 / 앱',
    introduce: '캐릭터가 주식 명언을 말해주거나, 주식에 손해를 봤을 때 위로가 되는 말을 해줍니다. 구글 플레이스토어 앱 업로드 방법과 리액트 네이티브 expo를 활용하는 방법에 대해 익힐 수 있었습니다.',
    github: 'https://github.com/stemisruler/Personal_Creation_StockYandere',
    demo: 'https://play.google.com/store/apps/details?id=com.stemisruler.snack346edaede3804a36b287e7762e0bbb93&hl=ko-KR'
  },
  {
    image: 'img/project4.png',
    title: '주식 모의투자 앱 with 메스가키',
    subTitle: '개인 프로젝트 / 창작 / 앱',
    introduce: '모의투자 앱입니다. 메스가키 캐릭터가 주식 수익률에 따라 조언을 해주거나 승부욕을 자극하는 말을 해줍니다. 리액트 네이티브 expo와 Python Flask API 만들기 및 리액트 네이티브에서 갖고 와 활용하는 법을 익힐 수 있었습니다.',
    github: 'https://github.com/project5',
    demo: 'https://demo.com/project5'
  },

];

const Portfolio = () => {
  return (
    <main className="wrap portfolio">
      <h2>Portfolio.</h2>
      <div className='swiperContentsWrap'>
      <button className="prev-button"><img src="img/Prev.png" alt="Next" /></button>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={3} 
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30
            },
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.next-button',
            prevEl: '.prev-button',
          }}
        >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className='swiperSlideCustom'>
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <h4>{project.subTitle}</h4>
                <p>{project.introduce}</p>
                <div className="linkBox">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        <button className="next-button"><img src="img/Next.png" alt="Next" /></button>
      </div>
    </main>
  );
};

export default Portfolio;
