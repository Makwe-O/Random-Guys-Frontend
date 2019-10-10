import React from 'react';
import HomePage from './pages/Hompage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Header from './components/Header/Header';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage/CategoryPage';
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/:categoryId' component={CategoryPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
