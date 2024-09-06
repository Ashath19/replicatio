import "./App.css"
import { useState, useEffect } from 'react';
import Loading from './loading';
import { Link } from 'react-router-dom';
import heart from './assets/ico-heart2.png'; // Import the heart image
import logo from './assets/logo.png';

const Rsvp = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
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
                  <div className="navbar">
                    <Link to="/about">
                      <div className="menu-item">
                        <h3>ABOUT</h3>
                        <p className="subitm">OUR HISTORY</p>
                      </div>
                    </Link>
                    <Link to="/gallery">
                      <div className="menu-item">
                        <h3>GALLERY</h3>
                        <p className="subitm">OUR PICTURES</p>
                      </div>
                    </Link>
                    <Link to="/ceremony" >
                      <div className="menu-item">
                        <h3>CEREMONY</h3>
                        <p className="subitm">ALL INFORMATION</p>
                      </div>
                    </Link>
                    <Link to="/rsvp" className="cursel">
                      <div className="menu-item">
                        <h3>RSVP</h3>
                        <p className="subitm">EVENTS ATTENDING</p>
                      </div>
                    </Link>
                    <Link to="/blog">
                      <div className="menu-item">
                        <h3>BLOG</h3>
                        <p className="subitm">ALL THE NEWS!</p>
                      </div>
                    </Link>
                    <Link to="/registry">
                      <div className="menu-item">
                        <h3>REGISTRY</h3>
                        <p className="subitm">OUR GIFT LIST</p>
                      </div>
                    </Link>
                  </div>
                </div>
                
                </div>
                
              </div>
              <h1>Website Building in process</h1>
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

export default Rsvp