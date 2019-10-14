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
              Cargo Capacity: {starshipData.cargo_capacity}
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
              Temperature: {planetData.temperature}
            </p>
            <p className='vertical-card__description'>
              Population: {planetData.population}
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
              Birth Year: {peopleData.birth_year}
            </p>
            <p className='vertical-card__description'>
              Gender: {peopleData.gender}
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
