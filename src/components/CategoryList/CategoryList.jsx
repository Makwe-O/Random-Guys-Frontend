import React from 'react';
import VerticalCard from '../VerticalCard/VerticalCard';
import HorizontalCard from '../HorizontalCard/HorizontalCard';
import './CategoryList.scss';
const CategoryList = () => {
  return (
    <div className='container'>
      <div className='category-section'>
        <h2 className='category-section__title'>Popular StarShips</h2>
        <hr />
        <div className='three-colum-grid'>
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
        </div>
        <div className='view-more'>
          <button className='btn btn__full'>View More</button>
        </div>
      </div>

      <div className='category-section'>
        <h2 className='category-section__title'>Popular Planets</h2>
        <hr />
        <div className='three-colum-grid'>
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
        </div>
        <div className='view-more'>
          <button className='btn btn__full'>View More</button>
        </div>
      </div>

      <div className='category-section'>
        <h2 className='category-section__title'>Popular People</h2>
        <hr />
        <div className='two-colum-grid'>
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
        </div>
        <div className='view-more'>
          <button className='btn btn__full'>View More</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
