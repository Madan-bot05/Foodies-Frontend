import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { topMeal } from './topMeals';
import CaroselItem from './CaroselItem';

function Carosel() {
  return (
    <div>
        <Slider>
            {topMeal.map((item)=><CaroselItem image={item.image} title={item.title}/>)}
        </Slider>
    </div>
  )
}

export default Carosel