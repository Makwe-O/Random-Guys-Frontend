import React from 'react';
import HomePage from './pages/Hompage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Header from './components/Header/Header';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import SingleItemPage from './pages/SingleItemPage/SingleItemPage';
import SearchResultPage from './pages/SearchResultPage/SearchResultPage';
function App() {
  return (
    <div>
      <Switch>
        <Route component={Header} />
      </Switch>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/search' component={SearchResultPage} />
        <Route exact path='/:category' component={CategoryPage} />
        <Route exact path='/:category/:categoryid' component={SingleItemPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
