import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "../images";
console.log(images);


export default function SimpleSlider() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 8000,
      cssEase: 'linear',
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      pauseOnHover: false
    };
    
    return (
      <Slider {...settings}>
        {Object.keys(images).map((key, index) => (
            <div key={index} className="carousel-image" >
                <img key={index} src={images[key]} alt={key} />
            </div>
            ))}
      </Slider>

    /*return (
    <Slider {...settings}>
      {images.map((img, index) => (
          <div key={index} className="carousel-image">
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
    </Slider>*/
    );
  }