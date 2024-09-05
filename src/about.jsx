import "./App.css";
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import border1 from './assets/about/border1.png';
import bride from './assets/about/bride.jpg';
import groom from './assets/about/groom.jpg';
import heart from './assets/ico-heart2.png';
import ring from './assets/about/engagement.jpg';

function About() {
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
                                        <Link to="/about" className="cursel">
                                            <div className="menu-item" >
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
                                        <Link to="/ceremony">
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
                            <h1 className="abouthead">About Us</h1>
                            <img src={border1} alt="---------------" />
                        </div>
                        <div className="container2">
                            <div className="profile2">
                                <img alt="Portrait of Josh Smith, the groom, smiling in a suit and tie" src={groom} />
                                <h2 className="pplname">
                                    Josh Smith
                                </h2>
                                <h3>
                                    The Groom
                                </h3>
                                <p>
                                    Hanna is loving, kind, gentle, patient, and did I mention hot!? She's unlike any person I have ever met. She's many more things, but those are the gifts I learned about her very quickly...
                                </p>
                            </div>
                            <div className="profile2">
                                <img alt="Portrait of Hanna Cliff, the bride, smiling in a white dress" src={bride} />
                                <h2 className="pplname">
                                    Hanna Cliff
                                </h2>
                                <h3>
                                    The Bride
                                </h3>
                                <p>
                                    Where do I start? How about the night we met. I was the maid of honor at my best friend Melissa's wedding. I actually met Josh the day before the wedding, at the rehearsal...
                                </p>
                            </div>
                        </div>
                        <div className="heading">
                            <h1 className="abouthead">Our Timeline</h1>
                            <img src={border1} alt="---------------" />
                            <div className="timeline">
   <div className="container4 left">
    <div className="content2">
     <h2>
      Day we met each other
     </h2>
     <span> A special day for us!</span>
     <p>
      We have met each other in November 2011 while a friend's wedding. Josh asked a mutual friend for Hanna's number and the rest is history!
     </p>
    </div>
    <div className="date">
     <span>11/22</span>
     <span>2011</span>
    </div>
   </div>
   <div className="container4 right">
    <div className="content2">
     <h2>Our First Trip</h2>
     <p>
      We plan a 3 month tour of Europe. It was an unforgettable experience and enough learning and fellowship.
     </p>
    </div>
    <div className="date">
     <span>02/23</span>
     <span>2012</span>
    </div>
   </div>
   <div className="container4 left">
    <div className="content2">
     <h2>
      Our Engagement
     </h2>
    <span>A funny day</span>
     <img alt="Engagement rings on a blue box" src={ring}/>
    </div>
    <div className="date">
     <span>05/24</span>
     <span>2013</span>
    </div>
   </div>
   <div className="container4 right">
    <div className="content2">
    <h2>Our Wedding Day</h2>
     <p>
      Will planned a picnic in the park just after sunset to watch the July 4th fireworks display. He popped the question as fireworks burst overhead, and of course, Diane said yes! They celebrated with their families the next day with dinner and a champagne toast.
     </p>
    </div>
    <div className="date">
     <span>11/22</span>
     <span>2014</span>
    </div>
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

export default About;
