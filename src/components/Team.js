import { useState } from "react";
import { motion } from "framer-motion";

const Team = () => {
  const [b1, setB1] = useState(false);
  const [b2, setB2] = useState(false);
  const [b3, setB3] = useState(false);

  const iconVar = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: { duration: 0.6, type: "tween" },
    },
  };

  return (
    <section className="TeamSec" id="Team">
      <p>Specialties</p>
      <h1>Our Team</h1>
      <div className="TeamContainer">
        <div className="image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaKaqC_wi9F6EZbDFj1ta1yYhPD4Q8NzYBoA&usqp=CAU" />
          <div
            className="text"
            onMouseOver={() => {
              setB1(true);
            }}
            onMouseOut={() => {
              setB1(false);
            }}
          >
            <h3>Venkatesh Bhatt</h3>
            <p>CEO</p>
            <div className="icons">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-google-plus-g"></i>
            </div>
          </div>
        </div>
        <div className="image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaKaqC_wi9F6EZbDFj1ta1yYhPD4Q8NzYBoA&usqp=CAU" />
          <div className="text">
            <h3>Damodharan</h3>
            <p>Chef</p>
            <div className="icons">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-google-plus-g"></i>
            </div>
          </div>
        </div>
        <div className="image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaKaqC_wi9F6EZbDFj1ta1yYhPD4Q8NzYBoA&usqp=CAU" />
          <div className="text">
            <h3>Ashwin Kumar</h3>
            <p>Chef</p>
            <div className="icons">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-google-plus-g"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
