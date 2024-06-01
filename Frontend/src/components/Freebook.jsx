import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../public/list.json";
import Card from "./Card";

export const Freebook = () => {
  const filterData = list.filter((data) => data.category === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
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
    <div className="mx-20 my-10 ">
      <div>
        <h1 className="text-3xl ">Free books</h1>
        <p className="my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          accusamus totam corporis molestias ullam cupiditate dicta incidunt
          corrupti doloribus est.
        </p>
      </div>
      <div className="">
        <Slider {...settings} className="">
          {filterData.map ( (item) => (
            <Card item={item} key={item.id}/>
          ))}
        </Slider>
      </div>
    </div>
  );
};
