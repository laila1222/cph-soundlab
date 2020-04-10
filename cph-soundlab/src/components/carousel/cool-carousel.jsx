import React, { useState } from "react";
import "./_cool-carousel.scss";
import Record1 from "../../images/records/record1.jpg";
import Record2 from "../../images/records/record2.jpg";
import Record3 from "../../images/records/record3.jpg";
import Record4 from "../../images/records/record4.jpg";
import Record5 from "../../images/records/record5.jpg";
import Record6 from "../../images/records/record6.jpg";
import Record7 from "../../images/records/record7.jpg";
import Record8 from "../../images/records/record8.jpg";
import Record9 from "../../images/records/record9.jpg";

function CoolCarousel() {
  let recordsArray = [
    Record1,
    Record2,
    Record3,
    Record4,
    Record5,
    Record6,
    Record7,
    Record8,
    Record9,
  ];

  const [X, setX] = useState(0);

  const goLeft = () => {
      console.log(X);
      X === 0 ? setX(- 100* (recordsArray.length -1)) : setX(X + 100)
  };

  const goRight = () => {
    console.log(X);
    (X === - 100* (recordsArray.length -1)) ? setX(0) : setX(X - 100);
  };

  return (
    <div className="slider">
      {recordsArray.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${X}%)` }}
          >
            <img src={item} alt="record image" className="slide__image" />
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        left
      </button>
      <button id="goRight" onClick={goRight}>
        right
      </button>
    </div>
  );
}

export default CoolCarousel;
