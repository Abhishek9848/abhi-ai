import React from 'react';
import gpt3Logo from '../../assets/logo.png';
import './footer.css';


const Footer = () => {
  const year = new Date().getFullYear()
  return (<div className="footer section__padding">
    <div className="footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="footer-links">
      <div className="footer-links_logo">
        <img src={gpt3Logo} alt="logo" />
        <p>Created by Abhishek Sharma, <br /> All Rights Reserved</p>
      </div>
      <div className="footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Get in touch</h4>
        <p>Om enclave part -2, faridabad, haryana</p>
        <p>000-0000000</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>@{year} created by Abhishek Sharma. All rights reserved.</p>
    </div>
  </div>)
};

export default Footer;