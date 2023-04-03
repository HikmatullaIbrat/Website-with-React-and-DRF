import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => (
    
  
  <footer id="footer">

    <div className="footer-newsletter">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nullLink quae legam multos aute sint culpLink legam noster magna</p>
          </div>
          <div className="col-lg-6">
            <form action="" method="post">
              <input type="email" name="email" /><input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <Link to="#">Home</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="#">About us</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="#">Services</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="#">Terms of service</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="#">Privacy policy</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <Link to="#">Web Design</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="#">Web Development</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="#">Product Management</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="#">Marketing</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="#">Graphic Design</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
              A108 Adam Street <br />
              New York, NY 535022<br />
              United States <br /><br />
              <strong>Phone:</strong> +1 5589 55488 55<br />
              <strong>Email:</strong> info@example.com<br />
            </p>

          </div>

          <div className="col-lg-3 col-md-6 footer-info">
            <h3>About Eterna</h3>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nadLink terrLink videLink magnLink deritLink valies dartLink donnLink mare fermentum iaculis eu non diam phasellus.</p>
            <div className="social-links mt-3">
              <Link to="#" className="twitter"><i className="bx bxl-twitter"></i></Link>
              <Link to="#" className="facebook"><i className="bx bxl-facebook"></i></Link>
              <Link to="#" className="instagram"><i className="bx bxl-instagram"></i></Link>
              <Link to="#" className="google-plus"><i className="bx bxl-skype"></i></Link>
              <Link to="#" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Eterna</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
      
      </div>
    </div>
  </footer>
   
);

export default Footer;