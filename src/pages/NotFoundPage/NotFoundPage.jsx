import React from 'react';
import './NotFound.scss';
import { ReactComponent as NotFound } from '../../assets/notFound.svg';
const NotFoundPage = () => {
  return (
    <>
      <div className='container'>
        <div className='not-found'>
          <NotFound />
          <p>Oops... How did you get here :)</p>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
