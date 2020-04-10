import React, { Component } from "react";
import Slider from "react-slick";
import Record1 from "../../images/records/record1.jpg";
import Record2 from "../../images/records/record2.jpg";
import Record3 from "../../images/records/record3.jpg";
import Record4 from "../../images/records/record4.jpg";
import Record5 from "../../images/records/record5.jpg";
import Record6 from "../../images/records/record6.jpg";
import Record7 from "../../images/records/record7.jpg";
import Record8 from "../../images/records/record8.jpg";
import Record9 from "../../images/records/record9.jpg";
import Bakerman from "../../images/BakermanBgThis.jpg";
import DocLounge from "../../images/Doc-lounge.jpg";
import HotelBoy from "../../images/Hotel-boy.jpg";
import ImagineHero from "../../images/imagineHero.jpg";
import RecordReleases from "../../images/Recordreleases.jpg";
import UnderBroen from "../../images/UnderBron.png";




import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './_carousel.scss';

const recordsArray = [Bakerman, DocLounge, HotelBoy, ImagineHero, RecordReleases, UnderBroen, Record1, Record2, Record3, Record4, Record5, Record6, Record7, Record8, Record9]

export default function SimpleCarousel() {
    const renderSlides = () =>
      recordsArray.map(recordImg => (
        <div className="carousel__image-container">
          <img className="carousel__image" src={recordImg} alt="record"/>
        </div>
      ));
  
    return (
      <div className="carousel" data-aos="fade-up">
        <Slider dots={true}
        slidesToShow={3}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={5000}>{renderSlides()}</Slider>
      </div>
    );
  }