import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import VerticalCard from '../../components/VerticalCard/VerticalCard';
import * as catergoryActions from '../../actions/categoryActions/category';
import { createStructuredSelector } from 'reselect';
import {
  categoryData,
  categoryDataError
} from '../../selectors/categorySelectors/category';
import Skeleton from 'react-loading-skeleton';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const CategoryPage = ({
  match,
  getCategory,
  categoryData,
  categoryDataError
}) => {
  const { category } = match.params;

  useEffect(() => {
    const fetchData = async () => {
      await getCategory(category);
    };
    fetchData();
  }, [getCategory, category]);

  const paginateNext = () => {
    getCategory(category, categoryData.next.split('=')[1]);
  };
  const paginatePrevious = () => {
    getCategory(category, categoryData.previous.split('=')[1]);
  };

  return (
    <>
      {categoryDataError ? (
        <NotFoundPage />
      ) : (
        <div className='container'>
          <div className='category-section'>
            <h2 className='category-section__title'>{category}</h2>
            <hr />
            <div className='three-colum-grid'>
              {categoryData.results ? (
                categoryData.results.map(data => (
                  <VerticalCard
                    key={data.name}
                    starshipData={data}
                    peopleData={data}
                    planetData={data}
                    dataSource={category}
                  />
                ))
              ) : (
                <>
                  <div>
                    <Skeleton duration={2} height={250} />
                  </div>
                  <div>
                    <Skeleton duration={2} height={250} />
                  </div>
                  <div>
                    <Skeleton duration={2} height={250} />
                  </div>
                  <div>
                    <Skeleton duration={2} height={250} />
                  </div>
                  <div>
                    <Skeleton duration={2} height={250} />
                  </div>
                  <div>
                    <Skeleton duration={2} height={250} />
                  </div>
                </>
              )}
            </div>
            <div className='paginate'>
              {categoryData.previous ? (
                <button
                  className='btn paginate__previous'
                  onClick={() => paginatePrevious()}
                >
                  Previous
                </button>
              ) : null}
              {categoryData.next ? (
                <button className='btn ' onClick={() => paginateNext()}>
                  next
                </button>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapDispatchToprops = {
  getCategory: catergoryActions.get_category
};

const mapStateToProps = createStructuredSelector({
  categoryData,
  categoryDataError
});

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(CategoryPage);
