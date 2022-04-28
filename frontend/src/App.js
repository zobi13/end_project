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
import SingleMoviePage from "./pages/SingleMoviePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from './Components/shared/PrivateRoute';
import GuestRoute from './Components/shared/GuestRoute';
import Navbar from './Components/Navbar';
import { getActiveUser, selectIsAuthenticated } from "./store/auth";
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMoviePage from './pages/AddMoviePage';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getActiveUser());
    }
  }, []);

  return (
    <div className='App bg-light' >
      <Router>
        <Navbar />
        <Switch>
          {/* Trebali bi biti private route */}
          <PrivateRoute path='/movies/create'>
            <AddMoviePage />
          </PrivateRoute>
          <PrivateRoute path='/movies/:id'>
            <SingleMoviePage />
          </PrivateRoute>
          <PrivateRoute exact path='/movies'>
            <AppMovies />
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
