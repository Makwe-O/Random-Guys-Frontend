import React from 'react';
import VerticalCard from '../../components/VerticalCard/VerticalCard';

const CategoryPage = ({ match }) => {
  return (
    <div className='container'>
      <div className='category-section'>
        <h2 className='category-section__title'>{match.params.categoryId}</h2>
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
    </div>
  );
};

export default CategoryPage;
