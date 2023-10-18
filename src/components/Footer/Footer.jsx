import React from "react";
import "./Footer.css"; // Create a separate CSS file for styling the footer
import { BsFillTelephoneFill, BsFacebook, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3>
          My<span>Blog</span>App
        </h3>
        <p className="footer-links">
          <a href="#">About</a> | <a href="#">Blogs</a> | <a href="#">News</a> |{" "}
          <a href="#">Trends</a>
        </p>
        <p className="footer-company-name">
          Copyright &copy; 2023 <strong>MyBlogApp</strong> All rights reserved
        </p>
      </div>

      <div className="footer-center">
        <div>
          <MdLocationOn
            className="icons"
            color="white"
            size="25px"
            style={{
              borderRadius: "50%",
              verticalAlign: "middle",
              background: "#33383B",
              lineHeight: "42px",
              margin: "10px",
            }}
          />
          <p>
            <span>Una</span> Himachal Pradesh
          </p>
        </div>

        <div>
          <BsFillTelephoneFill
            className="icons"
            color="white"
            size="25px"
            style={{
              borderRadius: "50%",
              verticalAlign: "middle",
              background: "#33383B",
              lineHeight: "42px",
              margin: "10px",
            }}
          />
          <p>+91 9602787267</p>
        </div>

        <div style={{ verticalAlign: "middle" }}>
          <MdEmail
            className="icons"
            color="white"
            size="25px"
            style={{
              borderRadius: "50%",
              verticalAlign: "middle",
              background: "#33383B",
              lineHeight: "42px",
              margin: "10px",
            }}
          />
          <p>
            <a href="#">surajmaheshwari159@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About</span>
          <strong>MyBlogApp</strong> is a blogging website which contains
          insightful and valuable blogs with a wide range of topics and also a
          platform for bloggers to showcase their knowledge and experiences by
          creating blogs..
        </p>
        <div className="footer-icons">
          <a href="#">
            <BsFacebook color="white" size="25px" />
          </a>
          <a href="#">
            <AiFillInstagram color="white" size="25px" />
          </a>
          <a href="#">
            <BsLinkedin color="white" size="25px" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <div className="footer-content">
  <div className="contact-info">
    <h3>Contact Me:</h3>
    <div className="contact-icons">
      {/* Phone Icon with Phone Number 
      <a href="tel:+1234567890">
        <BsFillTelephoneFill className="telephone" size="25px" />
        <p>123-456-7890</p>
      </a>
      {/* Email Icon with Email Address 
      <a href="mailto:surajmaheshwari159@gmail.com">
        <MdEmail className="email_logo" size="25px" />
        <span>surajmaheshwari159@gmail.com</span>
      </a>
    </div>
  </div>
  <div className="social-icons">
    {/* Add your social media icons here 
    <a href="#" target="_blank" rel="noopener noreferrer">
      <AiFillInstagram size="25px" />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook"></i>
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram"></i>
    </a>
  </div>
</div>; */
}
