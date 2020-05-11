import React from 'react';
import Proptypes from 'prop-types';
import '../assets/styles/Components/Carousel-item.scss';
import PlayIcon from '../assets/img/play-icon.png';
import PlusIcon from '../assets/img/plus-icon.png'
import Carousel from './Carousel';

const CarouselItem = ({cover,title,year,contentRating,duration}) =>(
    
    <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title}  />
    <div className="carousel-item__details">
      <div>
        <img className="carousel-item__details--img" src={PlayIcon} alt="Play Icon"/> 
        <img className="carousel-item__details--img" src={PlusIcon} alt="Plus Icon"/> 
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">
        {`${year} ${contentRating} ${duration}`}
      </p>
    </div>
  </div>
);

CarouselItem.proptypes = {
   cover: Proptypes.string,
   title: Proptypes.string,
   year: Proptypes.number,
   contentRating: Proptypes.string,
   duration: Proptypes.number
}

export default CarouselItem;
