import React from 'react';
import './HorizontalCard.scss';
const HorizontalCard = () => {
  return (
    <div className='horizontal-card'>
      <div className='horizontal-card__image'></div>
      <div className='horizontal-card__body'>
        <div className='horizontal-card__title'>Ghost</div>
        <p className='horizontal-card__description'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
        <div className='horizontal-card__footer'>
          <button className='btn'>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
