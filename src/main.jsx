import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import About from './about';
import Gallery from './gallery';
import Ceremony from './ceremony';
import RSVP from './rsvp';
import Blog from './blog';
import Registry from './registry';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/ceremony" element={<Ceremony />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/registry" element={<Registry />} />
      </Routes>
    </Router>
  </React.StrictMode>
);