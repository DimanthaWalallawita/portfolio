import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import first from "../Assets/Images/IMG_0550-01-01.jpeg";
import second from "../Assets/Images/IMG_3449-01.jpeg";
import third from "../Assets/Images/DSC04730.jpg";
import forth from "../Assets/Images/DSC04740.jpg";
import "../Assets/CSS/FlipCards.css";

const FlipCards = () => {

  const cardBodyRef = useRef(null);
    const scrollAmount = 1; // Amount to scroll in each interval
    const scrollIntervalTime = 50; // Time between scrolls in milliseconds
    let direction = 5; // 1 for down, -1 for up

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (cardBodyRef.current) {
                const { scrollTop, scrollHeight, clientHeight } = cardBodyRef.current;

                // Change direction if at the bottom or top
                if (scrollTop + clientHeight >= scrollHeight) {
                    direction = -5; // Change to up
                } else if (scrollTop <= 0) {
                    direction = 5; // Change to down
                }

                // Scroll the container
                cardBodyRef.current.scrollBy({
                    top: scrollAmount * direction,
                    behavior: 'smooth',
                });
            }
        }, scrollIntervalTime);

        return () => clearInterval(scrollInterval); // Clean up on unmount
    }, []);

  return (
    <div className="card-body" ref={cardBodyRef}>
      <div className="cards">
        <div className="card-inner">
          <div className="front-card">
            <img src={forth} alt="" />
          </div>

          <div className="back-card">
            <div className="stack">
              <h5 style={{ margin: 0, color: "#fff" }}>PHP</h5>
              <h5 style={{ margin: 0, color: "#fff" }}>HTML/CSS</h5>
              <h5 style={{ margin: 0, color: "#fff" }}>JS</h5>
              <h5 style={{ margin: 0, color: "#fff" }}>MYSQL</h5>
              <h5 style={{ margin: 0, color: "#fff" }}>Figma</h5>
            </div>

            <div className="project-description">
              <p>
                This is my project fdhgd dfgdfg dgedfgde drfgdfgd gdfg eg
                fdgfdgdgdfgdfgfdgdfgdfdgdfg dgdg dfgd dfg
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="card-inner">
          <div className="front-card">
            <img src={first} alt="" />
          </div>

          <div className="back-card">
            <div className="stack">
              <h5 style={{ margin: 0, color: "#fff" }}>PHP</h5>
              <h5 style={{ margin: 0, color: "#fff" }}>HTML/CSS</h5>
              <h5 style={{ margin: 0, color: "#fff" }}>JS</h5>
              <h5 style={{ margin: 0, color: "#fff" }}>MYSQL</h5>
              <h5 style={{ margin: 0, color: "#fff" }}>Figma</h5>
            </div>

            <div className="project-description">
              <p>
                This is my project fdhgd dfgdfg dgedfgde drfgdfgd gdfg eg
                fdgfdgdgdfgdfgfdgdfgdfdgdfg dgdg dfgd dfg
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="card-inner">
          <div className="front-card">
            <img src={second} alt="" />
          </div>

          <div className="back-card">
            <div className="stack">
              <h5 style={{ margin: 0, color: "#fff" }}>PHP</h5>
              <h5 style={{ margin: 0, color: "#fff" }}>HTML/CSS</h5>
              <h5 style={{ margin: 0, color: "#fff" }}>JS</h5>
              <h5 style={{ margin: 0, color: "#fff" }}>MYSQL</h5>
              <h5 style={{ margin: 0, color: "#fff" }}>Figma</h5>
            </div>

            <div className="project-description">
              <p>
                This is my project fdhgd dfgdfg dgedfgde drfgdfgd gdfg eg
                fdgfdgdgdfgdfgfdgdfgdfdgdfg dgdg dfgd dfg
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="card-inner">
          <div className="front-card">
            <img src={third} alt="" />
          </div>

          <div className="back-card">
            <div className="stack">
              <h5 style={{ margin: 0, color: "#fff" }}>PHP</h5>
              <h5 style={{ margin: 0, color: "#fff" }}>HTML/CSS</h5>
              <h5 style={{ margin: 0, color: "#fff" }}>JS</h5>
              <h5 style={{ margin: 0, color: "#fff" }}>MYSQL</h5>
              <h5 style={{ margin: 0, color: "#fff" }}>Figma</h5>
            </div>

            <div className="project-description">
              <p>
                This is my project fdhgd dfgdfg dgedfgde drfgdfgd gdfg eg
                fdgfdgdgdfgdfgfdgdfgdfdgdfg dgdg dfgd dfg
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCards;
