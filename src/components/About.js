import React, { useState } from 'react'
import '../css/About.css'

const About = () => {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className='wrap aboutWrap'>
      <div className='aboutImgSection'>
        <img src='./img/coding_me.png' alt='coding_me'></img>
      </div>
      <div className='aboutMeSection'>
        <h2>AboutMe.</h2>
        <span>프론트엔드 개발자 희망</span>
        <p>UI보다는 기능 구현 쪽에 더 강점이 있습니다. 백엔드와 연결해야 하는 일, API 쓰는 일, 기획에 핵심적인 기능을 구현하는 일을 더 잘합니다. 프로젝트의 팀장을 맡으며 NOLMUG이라는 리액트 웹 기획과 데이터 생성에 핵심적인 역할을 했습니다.
</p>
        
        <h3>USING NOW :</h3>
        <div className='usingNowImg'>
          <img src='./img/html.png' alt='htmlIcon'></img>
          <img src='./img/css.png' alt='cssIcon'></img>
          <img src='./img/js.png' alt='jsIcon'></img>
          <img src='./img/react.png' alt='reactIcon'></img>
          <img src='./img/git.png' alt='gitIcon'></img>
          <img src='./img/figma.png' alt='figmaIcon'></img>
        </div>
        <button className='aboutContactButton' onClick={toggleModal}>Contact Me</button>
        {showModal && 
        <div className='modalOverlay'>
          <div className='modalContent'>
            <h3 style={{marginBottom:'1rem'}}>Contact Me</h3>
            <ul>
              <li>Naver: aassdn@naver.com</li>
              <li>Google: ralralralila@gmail.com</li>
            </ul>
            <button onClick={toggleModal} className='modalButton'>Close</button>
          </div>
        </div>
      }
      </div>
    </div>
  )
}

export default About