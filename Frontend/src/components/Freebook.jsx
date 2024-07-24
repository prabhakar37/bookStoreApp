import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import Card from "./Card";

import axios from "axios";

export const Freebook = () => {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async()=>{
      try {
        const res = await axios.get("http://localhost:4001/book")   // api ka URL
        console.log(res.data)
        const data =res.data.filter((data) => data.category === "Free");
        setBook(data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  }, [])

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
          {book.map ( (item) => (
            <Card item={item} key={item.id}/>
          ))}
        </Slider>
      </div>
    </div>
  );
};
