import React from 'react';
import './VerticalCard.scss';
const VerticalCard = () => {
  return (
    <div className='vertical-card'>
      <img
        src='https://res.cloudinary.com/dnavbc7ny/image/upload/v1570648427/star%20wars/hero-banner.jpg'
        alt='#'
      />
      <div className='vertical-card__body'>
        <div className='vertical-card__title'>Ghost</div>
        <p className='vertical-card__description'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
        <div className='vertical-card__footer'>
          <button className='btn'>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default VerticalCard;
