import React, { Component } from "react";
import Slider from "react-slick";

import Card from "../Card";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      accessibility: true
    };
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </Slider>
      </div>
    );
  }
}
