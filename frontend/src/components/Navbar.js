import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectActiveUser, selectIsAuthenticated } from "../store/auth";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Navbar() {

    const history = useHistory()
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const dispatch = useDispatch()

    function handleLogout() {
        dispatch(logout());
        history.push('/login')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="collapse navbar-collapse" id="navbarNav">

                <ul className="navbar-nav">
                    {isAuthenticated ? (
                        <>
                            <li className='navbar-brand active p-2 bg-warning'>
                                <Link style={{ textDecoration: 'none' }} className='text-dark' to="/">  <b> Home </b> </Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link style={{ textDecoration: 'none' }} to="/movies" className='text-warning'>Movies</Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link style={{ textDecoration: 'none' }} to="/dashboard" className='text-warning'>Dashboard</Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link style={{ textDecoration: 'none' }} to="/movies/create" className='text-warning'>Add a movie</Link>
                            </li>
                            <li className="nav-item p-2 align-self-right">
                                <button type="button" className='text-dark bg-warning' onClick={handleLogout}> Logout </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item p-2 ">
                                <Link className='text-warning' to="/login">Login</Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link className='text-warning' to="/register">Register</Link>
                            </li>
                        </>
                    )}

                </ul>
            </div>
        </nav>
    );
}
