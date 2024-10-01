import React, { useEffect } from "react";
import NavigationBar from "../Components/NavigationBar";
import "../Assets/CSS/index.css";
import first from "../Assets/Images/1.png";
import second from "../Assets/Images/2.png";
import third from "../Assets/Images/3.png";
import fourth from "../Assets/Images/4.png";
import fifth from "../Assets/Images/5.png";
import sixth from "../Assets/Images/6.png";
import seventh from "../Assets/Images/7.png";
import eighth from "../Assets/Images/8.png";
import ninth from "../Assets/Images/9.png";
import facebook from "../Assets/Images/facebook.png";
import Linkedin from "../Assets/Images/linkedin.png"
import instagram from "../Assets/Images/instagram.png";
import github from "../Assets/Images/github.png";
import Cards from "../Components/FlipCards";

const Index = () => {
  useEffect(() => {
    const handleParallax = (e) => {
      document.querySelectorAll(".object").forEach((move) => {
        const movingValue = move.getAttribute("data-value");
        const x = (e.clientX * movingValue) / 250;
        const y = (e.clientY * movingValue) / 250;

        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    // Attach the event listener
    document.addEventListener("mousemove", handleParallax);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleParallax);
    };
  }, []); // Empty dependency array to run once on mount

  return (
    <main>
      <NavigationBar />

      <div className="index-main">
        <div className="left-side">
          <div className="movingtext-div">
            <h1 className="moving-text">
              SOFTWARE ENGINEER . UX/UI DESIGNER . MOBILE APP DEVELOPER
            </h1>
          </div>

          <div className="container">
            <h2 className="object" data-value="3">
              Hi Everyone👋
              <span>
                <br />
                Welcome to my portfolio
              </span>
            </h2>

            <img src={first} className="object" data-value="-2" alt="" />
            <img src={second} className="object" data-value="6" alt="" />
            <img src={third} className="object" data-value="4" alt="" />
            <img src={fourth} className="object" data-value="-6" alt="" />
            <img src={fifth} className="object" data-value="8" alt="" />
            <img src={sixth} className="object" data-value="-4" alt="" />
            <img src={seventh} className="object" data-value="5" alt="" />
            <img src={eighth} className="object" data-value="-9" alt="" />
            <img src={ninth} className="object" data-value="-5" alt="" />
          </div>

          <div className="social-Media">
            <img src={ instagram } alt="" className="social-media-icon"/>
            <img src={ facebook } alt="" className="social-media-icon"/>
            <img src={ Linkedin } alt="" className="social-media-icon"/>
            <img src={ github } alt="" className="social-media-icon"/>
          </div>
        </div>

        <div className="right-side">
          <Cards/>
        </div>
      </div>
    </main>
  );
};

export default Index;
