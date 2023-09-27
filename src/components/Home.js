import React from 'react';
import TypingEffect from './TypingEffect';

const Home = () => {

  return (
    <div className='home'>
      <h1>Hello</h1>
      <TypingEffect />
      <a href="https://github.com/stemisruler" target="_blank" rel="noopener noreferrer">
        <img src='/img/github.png' alt='github_img'/>
      </a>

      <a href="https://app.netlify.com/teams/stemisruler/overview" target="_blank" rel="noopener noreferrer">
        <img src='/img/netlify.png' alt='netlify_img'/>
      </a>

    </div>
  );
}

export default Home;
