import React from 'react';
import { Link } from 'react-router-dom';
import './HorizontalCard.scss';
import { motion } from 'framer-motion';
const HorizontalCard = ({ peopleData, dataSource }) => {
  switch (dataSource) {
    case 'people':
      const getPeoplepId = peopleData.url.split('/');
      return (
        <motion.div
          className='horizontal-card'
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
        >
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
              <div className='btn--low'>
                <Link to={`/people/${getPeoplepId[5]}`} className='btn'>
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      );
    default:
      return null;
  }
};

export default HorizontalCard;
