import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import * as singleStarwarDataActions from '../../actions/singleStarwarDataAction/singleStarwarData';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { createStructuredSelector } from 'reselect';
import {
  singleStarwarData,
  singleStarwarDataError
} from '../../selectors/singleStarwarDataSelectors/singleStarwarData';
import './SingleItemPage.scss';

const SingleItemPage = ({
  match,
  getSingleItemData,
  singleStarwarData,
  singleStarwarDataError
}) => {
  useEffect(() => {
    const fetchData = async () => {
      await getSingleItemData(match.url);
    };
    fetchData();
  }, [getSingleItemData, match.url]);
  return (
    <>
      {singleStarwarDataError ? (
        <NotFoundPage />
      ) : (
        <div className='container'>
          {Object.entries(singleStarwarData).length === 0 &&
          singleStarwarData.constructor === Object ? (
            <>
              <div>
                <Skeleton duration={2} height={500} />
              </div>
              <div>
                <Skeleton duration={2} height={250} />
              </div>
              <div>
                <Skeleton duration={2} height={250} />
              </div>
            </>
          ) : (
            <>
              <div className='category-section'>
                <h2 className='category-section__title'>
                  {singleStarwarData.name}
                </h2>
                <div
                  className='single-data__background'
                  style={{
                    backgroundImage:
                      'url(https://res.cloudinary.com/dnavbc7ny/image/upload/v1570838439/star%20wars/planet-1.jpg)'
                  }}
                ></div>
              </div>

              <div className='single-data__body'>
                <div>Name: {singleStarwarData.name} </div>
                {match.params.category === 'starships' ? (
                  <>
                    <div>Model: {singleStarwarData.model}</div>
                    <div>Manufacturer: {singleStarwarData.manufacturer}</div>
                    <div>
                      Cost In Credits: {singleStarwarData.cost_in_credits}
                    </div>
                    <div>Length: {singleStarwarData.length}</div>
                    <div>
                      Max Atmosphering Speed:
                      {singleStarwarData.max_atmosphering_speed}
                    </div>
                    <div>Crew: {singleStarwarData.crew}</div>
                    <div>Passengers: {singleStarwarData.passengers}</div>
                    <div>
                      Cargo Capacity: {singleStarwarData.cargo_capacity}
                    </div>
                    <div>Consumables: {singleStarwarData.consumables}</div>
                    <div>
                      Hyperdrive Rating: {singleStarwarData.hyperdrive_rating}
                    </div>
                    <div>MGLT: {singleStarwarData.MGLT}</div>
                    <div>
                      Starship Class: {singleStarwarData.starship_class}
                    </div>
                  </>
                ) : match.params.category === 'planets' ? (
                  <>
                    <div>
                      Rotation Period: {singleStarwarData.rotation_period}
                    </div>
                    <div>
                      Orbital Period: {singleStarwarData.orbital_period}
                    </div>
                    <div>Diameter: {singleStarwarData.diameter}</div>
                    <div>Climate: {singleStarwarData.climate}</div>
                    <div>Gravity: {singleStarwarData.gravity}</div>
                    <div>Terrain: {singleStarwarData.terrain}</div>
                    <div>Surface Water: {singleStarwarData.surface_water}</div>
                    <div>Population: {singleStarwarData.population}</div>
                  </>
                ) : (
                  <>
                    <div>Height: {singleStarwarData.height}</div>
                    <div>Mass: {singleStarwarData.mass}</div>
                    <div>Hair Color: {singleStarwarData.hair_color}</div>
                    <div>Skin Color: {singleStarwarData.skin_color}</div>
                    <div>Eye Color: {singleStarwarData.eye_color}</div>
                    <div>Birth Year: {singleStarwarData.birth_year}</div>
                    <div>Gender: {singleStarwarData.gender}</div>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

const mapDispatchToProps = {
  getSingleItemData: singleStarwarDataActions.get_single_data
};

const mapStateToProps = createStructuredSelector({
  singleStarwarData,
  singleStarwarDataError
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleItemPage);
