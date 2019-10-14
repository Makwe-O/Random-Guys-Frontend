import React from 'react';
import VerticalCard from '../VerticalCard/VerticalCard';
import { connect } from 'react-redux';
import * as peopleActions from '../../actions/peopleActions/people';
import * as planetActions from '../../actions/planetActions/planet';
import * as starshipActions from '../../actions/starshipActions/starship';
import { createStructuredSelector } from 'reselect';
import {
  peopleSearchData,
  peopleSearchParameter
} from '../../selectors/peopleSelectors/people';
import {
  planetSearchData,
  planetSearchParameter
} from '../../selectors/planetSelectors/planet';
import {
  starshipSearchData,
  starshipSearchParameter
} from '../../selectors/starshipSelectors/starship';
const SearchResultList = ({
  peopleSearchData,
  planetSearchData,
  starshipSearchData,
  searchPeople,
  searchPlanets,
  searchStarships,
  peopleSearchParameter,
  planetSearchParameter,
  starshipSearchParameter
}) => {
  const paginateNext = (action, searchParam, dataReuslt) => {
    action(searchParam, dataReuslt.next.split('=')[2]);
  };
  const paginatePrevious = (action, searchParam, dataReuslt) => {
    action(searchParam, dataReuslt.previous.split('=')[2]);
  };
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
        <div className='paginate'>
          {starshipSearchData.previous ? (
            <button
              className='btn paginate__previous'
              onClick={() =>
                paginatePrevious(
                  searchStarships,
                  starshipSearchParameter,
                  starshipSearchData
                )
              }
            >
              Previous
            </button>
          ) : null}
          {starshipSearchData.next ? (
            <button
              className='btn '
              onClick={() =>
                paginateNext(
                  searchStarships,
                  starshipSearchParameter,
                  starshipSearchData
                )
              }
            >
              next
            </button>
          ) : null}
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
        <div className='paginate'>
          {planetSearchData.previous ? (
            <button
              className='btn paginate__previous'
              onClick={() =>
                paginatePrevious(
                  searchPlanets,
                  planetSearchParameter,
                  planetSearchData
                )
              }
            >
              Previous
            </button>
          ) : null}
          {planetSearchData.next ? (
            <button
              className='btn '
              onClick={() =>
                paginateNext(
                  searchPlanets,
                  planetSearchParameter,
                  planetSearchData
                )
              }
            >
              next
            </button>
          ) : null}
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
        <div className='paginate'>
          {peopleSearchData.previous ? (
            <button
              className='btn paginate__previous'
              onClick={() =>
                paginatePrevious(
                  searchPeople,
                  peopleSearchParameter,
                  peopleSearchData
                )
              }
            >
              Previous
            </button>
          ) : null}
          {peopleSearchData.next ? (
            <button
              className='btn '
              onClick={() =>
                paginateNext(
                  searchPeople,
                  peopleSearchParameter,
                  peopleSearchData
                )
              }
            >
              next
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  searchPeople: peopleActions.search_people,
  searchPlanets: planetActions.search_planets,
  searchStarships: starshipActions.search_starships
};
const mapStateToProps = createStructuredSelector({
  peopleSearchData,
  planetSearchData,
  starshipSearchData,
  peopleSearchParameter,
  planetSearchParameter,
  starshipSearchParameter
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultList);
