import React from 'react';
import { Link } from 'react-router-dom';
import './HorizontalCard.scss';
const HorizontalCard = ({ peopleData, dataSource }) => {
  switch (dataSource) {
    case 'people':
      const getPeoplepId = peopleData.url.split('/');
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
              <div>
                <Link to={`/people/${getPeoplepId[5]}`} className='btn'>
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default HorizontalCard;
