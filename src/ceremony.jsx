import "./App.css";
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import border1 from './assets/about/border1.png';
import heart from './assets/ico-heart2.png'; // Import the heart image
const ceremony = () => {
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
                    <Link to="/ceremony" className="cursel">
                      <div className="menu-item">
                        <h3>CEREMONY</h3>
                        <p className="subitm">ALL INFORMATION</p>
                      </div>
                    </Link>
                    <Link to="/rsvp">
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
              <div className="heading">
                            <h1 className="abouthead">Ceremony</h1>
                            <img src={border1} alt="---------------" />
                            </div>
                <div className="info">
                  <p className="p1">Coming to our wedding? Well here’s the details on the big day!</p>
                  <p className="p2">Don’t forget to <Link to="/rvsp">RSVP</Link>. See you there!</p>
                </div>
                <div>
                <div className="container3">
        <div className="section3">
            <h2>Main Ceremony</h2>
            <p>We like everything on the wedding day be perfect!</p>
            <p className="location">St. Jacob's Chapel</p>
            <p className="address">24 Jump Street, Los Angeles 12345, CA</p>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d-122.419415484681!3d37.77492927975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7e9e6e1b%3A0x4c4b8e8b8b8b8b8b!2sBeach%20Ave!5e0!3m2!1sen!2sus!4v1633024800000!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div className="section3">
            <h2>Wedding Party</h2>
            <p>We have reserved a great hall!</p>
            <p className="location">Petersen Village Inn</p>
            <p className="address">55 Hop Street, Los Angeles 54321, CA</p>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d-122.419415484681!3d37.77492927975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7e9e6e1b%3A0x4c4b8e8b8b8b8b8b!2sBeach%20St!5e0!3m2!1sen!2sus!4v1633024800000!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>
            </div>
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
  );
}

export default ceremony;