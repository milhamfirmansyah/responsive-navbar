import React, { Component } from 'react';
import Slider from 'react-slick';
import './carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-prev-arrow" onClick={onClick}>
    <div>
      <i class="bi bi-arrow-left-short"></i>
    </div>
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="custom-next-arrow" onClick={onClick}>
    <div>
      <i class="bi bi-arrow-right-short"></i>
    </div>
  </div>
);

export default class MultipleItems extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <h2> This is Carousel </h2>
          <Slider {...settings}>
            <div className="content">
              <h3>1</h3>
            </div>
            <div className="content">
              <h3>2</h3>
            </div>
            <div className="content">
              <h3>3</h3>
            </div>
            <div className="content">
              <h3>4</h3>
            </div>
            <div className="content">
              <h3>5</h3>
            </div>
            <div className="content">
              <h3>6</h3>
            </div>
            <div className="content">
              <h3>7</h3>
            </div>
            <div className="content">
              <h3>8</h3>
            </div>
            <div className="content">
              <h3>9</h3>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
