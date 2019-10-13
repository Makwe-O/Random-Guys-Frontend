import React from 'react';
import VerticalCard from '../VerticalCard/VerticalCard';
const SearchResultList = ({
  peopleSearchData,
  planetSearchData,
  starshipSearchData
}) => {
  return (
    <div className='container'>
      <div className='category-section'>
        <h2 className='category-section__title'>Search Result for StarShips</h2>
        <hr />
        <div className='three-colum-grid'>
          {starshipSearchData.count > 0 ? (
            starshipSearchData.results.map(data => (
              <VerticalCard
                key={data.name}
                starshipData={data}
                dataSource={'starships'}
              />
            ))
          ) : (
            <>
              <div style={{ textAlign: 'center' }}>
                No results for StarShips
              </div>
            </>
          )}
        </div>
      </div>

      <div className='category-section'>
        <h2 className='category-section__title'>Search Result for Planets</h2>
        <hr />
        <div className='three-colum-grid'>
          {planetSearchData.count > 0 ? (
            planetSearchData.results.map(data => (
              <VerticalCard
                key={data.name}
                planetData={data}
                dataSource={'planets'}
              />
            ))
          ) : (
            <>
              <div style={{ textAlign: 'center' }}>No results for Planets</div>
            </>
          )}
        </div>
      </div>

      <div className='category-section'>
        <h2 className='category-section__title'>Search Result for People</h2>
        <hr />
        <div className='three-colum-grid'>
          {peopleSearchData.count > 0 ? (
            peopleSearchData.results.map(data => (
              <VerticalCard
                key={data.name}
                peopleData={data}
                dataSource={'people'}
              />
            ))
          ) : (
            <>
              <div style={{ textAlign: 'center' }}>No results for People</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultList;
