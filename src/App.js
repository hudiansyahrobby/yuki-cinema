import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { isUserLoggedIn } from './actions/userAction';
import HomePage from './pages/HomePage';
// import AdminRoute from './HOC/AdminRoute';
// import UserRoute from './HOC/UserRoute';
import MoviePage from './pages/MoviePage';
import MovieDetailPage from './pages/MovieDetailPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import AddMoviePage from './pages/AddMoviePage';
import AddCategoryPage from './pages/AddCategoryPage';
import AddTimePage from './pages/AddTimePage';
import AddSchedulePage from './pages/AddSchedulePage';
import SchedulePage from './pages/SchedulePage';

function App() {
  const dispatch = useDispatch();
  dispatch(isUserLoggedIn());

  return (
    <Router>
      <Switch>
        <Route path='/add-schedule' component={AddSchedulePage} />
        <Route path='/category' component={AddCategoryPage} />
        <Route path='/time' component={AddTimePage} />
        <Route path='/add-category' component={AddCategoryPage} />
        <Route path='/add-movie' component={AddMoviePage} />
        <Route path='/schedule' component={SchedulePage} />
        <Route path='/signin' component={LoginPage} />
        <Route path='/signup' component={SignupPage} />
        <Route path='/movies/:id' component={MovieDetailPage} />
        <Route path='/movies' component={MoviePage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
