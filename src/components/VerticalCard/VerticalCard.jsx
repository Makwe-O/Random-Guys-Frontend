import React from 'react';
import './VerticalCard.scss';
const VerticalCard = ({ dataSource, starshipData, planetData, peopleData }) => {
  switch (dataSource) {
    case 'starship':
      return (
        <div className='vertical-card'>
          <img
            src='https://res.cloudinary.com/dnavbc7ny/image/upload/v1570838439/star%20wars/planet-1.jpg'
            alt='#'
          />
          <div className='vertical-card__body'>
            <div className='vertical-card__title'>{starshipData.name}</div>
            <p className='vertical-card__description'>
              Model: {starshipData.model}
            </p>
            <p className='vertical-card__description'>
              Manufacturer: {starshipData.manufacturer}
            </p>
            <p className='vertical-card__description'>
              Cost In Credits:
              {starshipData.cost_in_credits}
            </p>
            <div className='vertical-card__footer'>
              <button className='btn'>Read More</button>
            </div>
          </div>
        </div>
      );
    case 'planet':
      return (
        <div className='vertical-card'>
          <img
            src='https://res.cloudinary.com/dnavbc7ny/image/upload/v1570648427/star%20wars/hero-banner.jpg'
            alt='#'
          />
          <div className='vertical-card__body'>
            <div className='vertical-card__title'>{planetData.name}</div>
            <p className='vertical-card__description'>
              Rotation Period: {planetData.rotation_period}
            </p>
            <p className='vertical-card__description'>
              Orbital Period: {planetData.orbital_period}
            </p>
            <p className='vertical-card__description'>
              Diameter:
              {planetData.diameter}
            </p>
            <div className='vertical-card__footer'>
              <button className='btn'>Read More</button>
            </div>
          </div>
        </div>
      );

    case 'people':
      return (
        <div className='vertical-card'>
          <img
            src='https://res.cloudinary.com/dnavbc7ny/image/upload/v1570648427/star%20wars/hero-banner.jpg'
            alt='#'
          />
          <div className='vertical-card__body'>
            <div className='vertical-card__title'>{peopleData.name}</div>
            <p className='vertical-card__description'>
              Height: {peopleData.height}
            </p>
            <p className='vertical-card__description'>
              Mass: {peopleData.mass}
            </p>
            <p className='vertical-card__description'>
              Hair Color:
              {peopleData.hair_color}
            </p>
            <div className='vertical-card__footer'>
              <button className='btn'>Read More</button>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default VerticalCard;
