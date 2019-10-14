import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SearcIcon } from '../../assets/search.svg';
import { connect } from 'react-redux';
import * as peopleActions from '../../actions/peopleActions/people';
import * as planetActions from '../../actions/planetActions/planet';
import * as starshipActions from '../../actions/starshipActions/starship';
import './Header.scss';
const Header = ({ history, searchPeople, searchPlanets, searchStarships }) => {
  const [searchparameter, setSearchParameter] = useState('');

  const handleChange = e => {
    setSearchParameter(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await searchPeople(searchparameter);
    await searchPlanets(searchparameter);
    await searchStarships(searchparameter);
    await history.push('/search');
  };

  return (
    <div className='header'>
      <div className='container'>
        <div className='logo'>
          <Link to='/'>
            <img
              className='header__logo'
              src='https://res.cloudinary.com/dnavbc7ny/image/upload/v1571016866/star%20wars/logo.png'
              alt='logo'
            />
          </Link>
        </div>
        <div className='header__container'>
          <h1 className='header__title'>
            {' '}
            <img
              className='header__logo'
              src='https://res.cloudinary.com/dnavbc7ny/image/upload/v1571016866/star%20wars/logo.png'
              alt='logo'
            />
            <span>Directory</span>
          </h1>
          <h3 className='header__subtitle'>
            Find your favorite Characters, Films, Species, StarShip and Planets
          </h3>

          <form
            className='header-form'
            onSubmit={e => {
              handleSubmit(e);
            }}
          >
            <button type='submit' className='header-form__search-icon'>
              <SearcIcon />
            </button>
            <span>
              <input
                onChange={e => {
                  handleChange(e);
                }}
                type='text'
                placeholder='Anakin'
              />
            </span>
          </form>
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

export default connect(
  null,
  mapDispatchToProps
)(Header);
