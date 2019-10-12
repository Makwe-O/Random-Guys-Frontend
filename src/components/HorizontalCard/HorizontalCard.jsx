import React from 'react';
import './HorizontalCard.scss';
const HorizontalCard = ({ peopleData, dataSource }) => {
  switch (dataSource) {
    case 'people':
      return (
        <div className='horizontal-card'>
          <div className='horizontal-card__image'></div>
          <div className='horizontal-card__body'>
            <div className='horizontal-card__title'>{peopleData.name}</div>
            <p className='horizontal-card__description'>
              Height: {peopleData.height}
            </p>
            <p className='horizontal-card__description'>
              Mass: {peopleData.mass}
            </p>
            <p className='horizontal-card__description'>
              Hair Color: {peopleData.hair_color}
            </p>
            <div className='horizontal-card__footer'>
              <button className='btn'>Read More</button>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default HorizontalCard;
