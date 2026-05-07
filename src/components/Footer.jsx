import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <h2 className="brand-name">Leena Sri K<span>.</span></h2>
            <p className="brand-tagline">Building the future of web & cloud systems with precision and purpose.</p>
          </div>
          
          <div className="footer-nav">
             <div className="footer-social-links">
               <a href="https://github.com/leena0110" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                 <i className="fab fa-github"></i>
               </a>
               <a href="https://www.linkedin.com/in/leena-sri-k-5bb814367/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                 <i className="fab fa-linkedin"></i>
               </a>
               <a href="mailto:leenasri0110@gmail.com" aria-label="Email">
                 <i className="fas fa-envelope"></i>
               </a>
             </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} Leena Sri K. All rights reserved.</p>
          <div className="footer-location">
            <i className="fas fa-map-marker-alt"></i> Coimbatore, Tamil Nadu
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
