import React, { useEffect } from 'react';
import VerticalCard from '../VerticalCard/VerticalCard';
import HorizontalCard from '../HorizontalCard/HorizontalCard';
import './CategoryList.scss';
import { connect } from 'react-redux';
import * as peopleActions from '../../actions/peopleActions/people';
import * as starshipActions from '../../actions/starshipActions/starship';
import * as planetActions from '../../actions/planetActions/planet';
import { createStructuredSelector } from 'reselect';
import { peopleData } from '../../selectors/peopleSelectors/people';
import { starshipData } from '../../selectors/starshipSelectors/starship';
import { planetData } from '../../selectors/planetSelectors/planet';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

const CategoryList = ({
  getPeople,
  getStarships,
  getPlanets,
  peopleData,
  starshipData,
  planetData
}) => {
  useEffect(() => {
    const fetchData = async () => {
      await getStarships();
      await getPlanets();
      await getPeople();
    };
    fetchData();
  }, [getPeople, getStarships, getPlanets]);

  return (
    <div className='container'>
      <div className='category-section'>
        <h2 className='category-section__title'>Popular StarShips</h2>
        <hr />
        <div className='three-colum-grid'>
          {starshipData.results ? (
            starshipData.results
              .filter((data, index) => index < 6)
              .map(data => (
                <VerticalCard
                  key={data.name}
                  starshipData={data}
                  dataSource={'starships'}
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
        <div className='view-more'>
          <Link to='/starships' className='btn btn__full'>
            View More
          </Link>
        </div>
      </div>

      <div className='category-section'>
        <h2 className='category-section__title'>Popular Planets</h2>
        <hr />
        <div className='three-colum-grid'>
          {planetData.results ? (
            planetData.results
              .filter((data, index) => index < 3)
              .map(data => (
                <VerticalCard
                  key={data.name}
                  planetData={data}
                  dataSource={'planets'}
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
            </>
          )}
        </div>
        <div className='view-more'>
          <Link to='/planets' className='btn btn__full'>
            View More
          </Link>
        </div>
      </div>

      <div className='category-section'>
        <h2 className='category-section__title'>Popular People</h2>
        <hr />
        <div className='two-colum-grid'>
          {peopleData.results ? (
            peopleData.results
              .filter((data, index) => index < 4)
              .map(data => (
                <HorizontalCard
                  key={data.name}
                  peopleData={data}
                  dataSource={'people'}
                />
              ))
          ) : (
            <>
              <div>
                <Skeleton duration={2} height={150} />
              </div>
              <div>
                <Skeleton duration={2} height={150} />
              </div>
              <div>
                <Skeleton duration={2} height={150} />
              </div>
              <div>
                <Skeleton duration={2} height={150} />
              </div>
            </>
          )}
        </div>
        <div className='view-more'>
          <Link to='/people' className='btn btn__full'>
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  peopleData,
  starshipData,
  planetData
});

const mapDispatchToProps = {
  getPeople: peopleActions.get_people,
  getStarships: starshipActions.get_starships,
  getPlanets: planetActions.get_planet
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);
