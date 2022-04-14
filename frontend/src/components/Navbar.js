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
        <nav>
            <ul>
                {isAuthenticated ? (
                    <>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/movies">Movies</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/movies/create">Add a movie</Link>
                        </li>
                        <li>
                            <button type="button" onClick={handleLogout}> Logout </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </>
                )}

            </ul>
        </nav>
    );
}
