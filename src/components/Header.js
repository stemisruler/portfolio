import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'q') {
        navigate("/");
      } else if (event.key === 'w') {
        navigate("/about");
      } else if (event.key === 'e') {
        navigate("/portfolio");
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [navigate]);

  const handleClick = () => {
    navigate('/');
  }
  return (
    <header>
      <div className='wrap headerWrap'>
        <h1 className='logo' onClick={handleClick}>김동원</h1>
        <nav>
          <ul>
            <li><Link to="/">Home(q)</Link></li>
            <li><Link to="/about">About(w)</Link></li>
            <li><Link to="/portfolio">Portfolio(e)</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
