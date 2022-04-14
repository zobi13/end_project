import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AppMovies from "./pages/Movies";
import AddMoviePage from "./pages/AddMoviePage";
import SingleMoviePage from "./pages/SingleMoviePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from './Components/shared/PrivateRoute';
import GuestRoute from './Components/shared/GuestRoute';
import Navbar from './Components/Navbar';
import { getActiveUser, selectIsAuthenticated } from "./store/auth";
import Dashboard from './pages/Dashboard';

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getActiveUser());
    }
  }, []);

  return (
    <div className='App' >
      <Router>
        <Navbar />
        <Switch>
          {/* Trebali bi biti private route */}
          <PrivateRoute exact path='/movies'>
            <AppMovies />
          </PrivateRoute>
          <PrivateRoute exact path='/movies/create'>
            <SingleMoviePage />
          </PrivateRoute>
          <PrivateRoute exact path='/movies/:id'>
            <AddMoviePage />
          </PrivateRoute>
          <PrivateRoute exact path='/dashboard'>
            <Dashboard />
          </PrivateRoute>

          {/* A ovi guest rute */}
          <GuestRoute exact path='/login'>
            <Login />
          </GuestRoute>
          <GuestRoute exact path='/register' >
            <Register />
          </GuestRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
