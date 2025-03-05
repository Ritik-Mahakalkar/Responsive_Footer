import React from 'react'
import './FooterI.css'
const FooterI = () => {
  return (
    <div classNameName='footerI_main_container'>
           <footer>
        <div className="footer-container">
            <div className="footer-logo">
                <img src="https://nuvoco.com/static/media/footer_logo.13cf32d4bb3fa3fa49c1.gif" alt="Company Logo"/><br/>
               
                
            </div>
           
            <div className="footer-section links">
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Gallary</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="footer-section contact">
                <h2>Contact Info</h2>
                <p><i className="fas fa-map-marker-alt"></i>  Nagpur, India</p>
                <p><i className="fas fa-phone"></i>  +1 234 567 890</p>
                <p><i className="fas fa-envelope"></i>  abc@gmail.com</p>
            </div>
            <div className="footer-section social">
                <h2>Follow Us</h2>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </div><br/>

        <div className="footer-bottom">
            <p>&copy; 2025 YourWebsite. All rights reserved.</p>
        </div>

        
        <button id="scrollTopBtn" className="scroll-top">↑</button>
    </footer>
      
    </div>
  )
}

export default FooterI
