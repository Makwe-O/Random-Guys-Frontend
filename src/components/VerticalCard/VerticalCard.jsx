import React from 'react';
import { Link } from 'react-router-dom';
import './VerticalCard.scss';
import { motion } from 'framer-motion';
const VerticalCard = ({ dataSource, starshipData, planetData, peopleData }) => {
  switch (dataSource) {
    case 'starships':
      const getStarshipId = starshipData.url.split('/');
      return (
        <motion.div
          className='vertical-card'
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src='https://res.cloudinary.com/dnavbc7ny/image/upload/v1571018074/star%20wars/starship-3.jpg'
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
              <Link to={`/starships/${getStarshipId[5]}`} className='btn'>
                Read More
              </Link>
            </div>
          </div>
        </motion.div>
      );
    case 'planets':
      const getPlanetId = planetData.url.split('/');
      return (
        <motion.div
          className='vertical-card'
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src='https://res.cloudinary.com/dnavbc7ny/image/upload/v1570838439/star%20wars/planet-1.jpg'
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
              <Link to={`/planets/${getPlanetId[5]}`} className='btn'>
                Read More
              </Link>
            </div>
          </div>
        </motion.div>
      );

    case 'people':
      const getPeopleId = peopleData.url.split('/');

      return (
        <motion.div
          className='vertical-card'
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src='https://res.cloudinary.com/dnavbc7ny/image/upload/v1570656730/star%20wars/character-1.jpg'
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
              <Link to={`/people/${getPeopleId[5]}`} className='btn'>
                Read More
              </Link>
            </div>
          </div>
        </motion.div>
      );

    default:
      return null;
  }
};

export default VerticalCard;
