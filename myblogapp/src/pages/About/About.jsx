import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <div className="about_container">
      <div className="about_signin">
        <ul>
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.2 }}
          >
            <Link className="item1" to="/signIn">
              SIGN IN
            </Link>
          </motion.li>
        </ul>
      </div>

      <div className="container1">
        <img
          className="img"
          src="assets/images/51971-hello.gif"
          alt="welcome"
        />

        <div className="content">
          <h1 className="title">
            Welcome to <span className="name">MyBlogApp</span>
          </h1>
          <p className="para">
            MyBlogApp, mission is to provide valuable insights and information
            to our readers on a wide range of topics and also a platform for
            bloggers to showcase their knowledge and experiences by creating
            blogs. Whether you're looking for advice on personal development,
            business strategies, health and wellness, or just want to stay
            up-to-date on the latest trends and news, we've got you covered.{" "}
            <br />
            <br />
            It's open for all whosoever has interested in blogging so that one
            can share their experiences and knowledge on topics they have very
            well knowledge of. We strive to create high-quality, engaging
            content that is both informative and enjoyable to read. We believe
            that learning should be a lifelong pursuit, and our blog is the
            perfect place to start. We welcome feedback and suggestions from our
            readers, so please feel free to reach out to us with any questions
            or comments. <br />
            <br />
            Thank you for visiting our blog, and we hope you enjoy reading our
            content as much as we enjoy creating it!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
