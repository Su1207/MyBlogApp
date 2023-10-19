import React, { useState, useEffect } from "react";
import bg1 from "../images/create-background1.jpg";
import bg2 from "../images/create-background2.jpg";
import bg3 from "../images/create-background3.jpg";
import bg4 from "../images/create-background4.jpg";

const images = [bg1, bg2, bg3, bg4];
const interval = 5000; // Change the background every 5 seconds (5000 milliseconds)

const BackgroundImageChanger = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const currentImage = images[currentImageIndex];
  const style = {
    backgroundImage: `url(${currentImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "120vh",
  };

  return <div style={style}></div>;
};

export default BackgroundImageChanger;
