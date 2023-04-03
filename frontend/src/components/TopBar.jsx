import React from 'react';
import { Link } from 'react-router-dom';
const TopBar = () => (
    <section id="topbar" className="d-flex align-items-center">
    <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
        <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
      </div>
      <div className="social-links d-none d-md-flex align-items-center">
        <Link to="#" className="twitter"><i className="bi bi-twitter"></i></Link>
        <Link to="#" className="facebook"><i className="bi bi-facebook"></i></Link>
        <Link to="#" className="instagram"><i className="bi bi-instagram"></i></Link>
        <Link to="#" className="linkedin"><i className="bi bi-linkedin"></i></Link>
      </div>
    </div>
  </section>
);

export default TopBar;