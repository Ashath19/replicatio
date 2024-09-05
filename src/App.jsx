import React, { useState, useEffect } from 'react';
import "./App.css"
import { Link } from 'react-router-dom';
import heart from './assets/ico-heart2.png'; // Import the heart image
import logo from './assets/logo.png'; // Import the logo image
import bird1 from './assets/ico-bird-l.png'; // Adjust the path as needed
import bird2 from './assets/ico-bird-r.png'; // Adjust the path as needed

const App = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-11-22T00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);
  return (
    <div>
      <div className="parent-div">
        <div className="left-container"></div>
        
        <div className="content">
          <div className="transx">
            <div className="navbar">
              <div className="container">
                <div className="nav-links">
                  <Link className="logonav" to="/">
                    <img src={logo} alt="Logo" className="nav-logo" />
                  </Link>
                  <Link to="/about" className="logonav">
                      <div className="menu-item">
                        <h3>ABOUT</h3>
                        <p className="subitm">OUR HISTORY</p>
                      </div>
                    </Link>
                    <Link to="/gallery" className="logonav">
                      <div className="menu-item">
                        <h3>GALLERY</h3>
                        <p className="subitm">OUR PICTURES</p>
                      </div>
                    </Link>
                    <Link to="/ceremony" className="logonav">
                      <div className="menu-item">
                        <h3>CEREMONY</h3>
                        <p className="subitm">ALL INFORMATION</p>
                      </div>
                    </Link>
                    <Link to="/rsvp" className="logonav">
                      <div className="menu-item" >
                        <h3>RSVP</h3>
                        <p className="subitm">EVENTS ATTENDING</p>
                      </div>
                    </Link>
                    <Link to="/blog" className="logonav">
                      <div className="menu-item">
                        <h3>BLOG</h3>
                        <p className="subitm">ALL THE NEWS!</p>
                      </div>
                    </Link>
                    <Link to="/registry" className="logonav">
                      <div className="menu-item">
                        <h3>REGISTRY</h3>
                        <p className="subitm">OUR GIFT LIST</p>
                      </div>
                    </Link>
                </div>
              </div>
            </div>
            <div className="heading">
              <h1 className="cuplehead">Josh & Hanna</h1>
            </div>
            <div>
              <img className="heart1" src={heart} alt="❤️" />
            </div>
            <br />
            <div className="birds">
            <h3 className="beforecd">
            <img src={bird2} alt="🐦" className="rbird"/>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
              {"November 22, 2024 in Los Angeles, CA".toUpperCase()}
              &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
              <img src={bird1} alt="🐦" className="rbird"/>
              </h3>
            
            </div>
            <div className="countdown">
            <div>
                <span className="time">{timeLeft.days || '0'}</span>
                <small>Days</small>
              </div>
              <div>
                <span className="time">{timeLeft.hours || '00'}</span>
                <small>Hours</small>
              </div>
              <div>
                <span className="time">{timeLeft.minutes || '00'}</span>
                <small>Minutes</small>
              </div>
              <div>
                <span className="time">{timeLeft.seconds || '00'}</span>
                <small>Seconds</small>
              </div>
        </div>
    
          <div className="aftertime">{"Until we get married!".toUpperCase()}</div>
          <div className="quote">
          <img className="heart1" src={heart} alt="❤️" />
            <p className="quotes">&quot;When I saw you I fell in love, and you smiled because you knew.&quot;
            <br /></p>
          
          <span><b>William Shakespeare</b></span>
          </div>
        </div>
       
      </div>
      <div className="right-container"></div>
    </div>
  </div>
  )
}

export default App