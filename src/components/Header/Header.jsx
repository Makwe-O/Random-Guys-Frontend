import React, { Component } from 'react';
import { ReactComponent as SearcIcon } from '../../assets/search.svg';
import './Header.scss';
class Header extends Component {
  state = {
    search: ''
  };
  render() {
    return (
      <div className='header'>
        <div className='container'>
          <div className='logo'>Logo</div>
          <div className='header__container'>
            <h1 className='header__title'>Star Wars Directory</h1>
            <h3 className='header__subtitle'>
              Find your favorite Characters, Films, Species, StarShip and
              Planets
            </h3>

            <form className='header-form'>
              <div className='header-form__search-icon'>
                <SearcIcon />
              </div>
              <span>
                <input type='text' placeholder='Anakin' />
              </span>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
