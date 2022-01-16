import React from "react";
import "./Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-option">
          <h3>Get In Touch</h3>
          <ul>
            <li>Contact Us on +918950754626</li>
            <li>Email Us on info@kuberebikes.com</li>
          </ul>
        </div>
        <div className="footer-option">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Become a Dealer</li>
          </ul>
        </div>
        <div className="footer-option">
          <h3>Models</h3>
          <ul>
            <li>Juniper</li>
            <li>Vamos</li>
            <li>Festiva</li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div>© Kuber E-Bikes 2021 All rights reserved.</div>
        <div>
          <a href="https://www.facebook.com/kuberebikes/">
            <FacebookIcon fontSize="small" />
          </a>
        </div>
        <div>Made with in Kuber E-Bikes</div>
      </div>
    </div>
  );
}

export default Footer;
