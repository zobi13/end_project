import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectIsAuthenticated, setToken } from '../store/auth';

const Navbar = () => {
    const router = useRouter()
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const dispatch = useDispatch()

    // if (typeof window !== 'undefined') {
    //     const access = localStorage.getItem('access')
    //     console.log(access);
    //     dispatch(setToken(access))
    // }
    useEffect(() => {
        const access = localStorage.getItem('access')
        if (access) {
            dispatch(setToken(access))
        }
    }, [])


    function handleLogout() {
        dispatch(logout());
        router.push('/login')
    }
    return (
        <nav className="navbar navbar-expand sticky-top navbar-light bg-dark">
            <ul className='navbar-nav m-1'>
                <li className='border-dark rounded navbar-brand active p-2 bg-warning text-dark'>
                    <Link href="/home">
                        <a className='text-dark text-decoration-none'>Home</a>
                    </Link>
                </li>
                {isAuthenticated ? (
                    <>
                        <li className="nav-item nav-link p-2">
                            <Link href={{ pathname: "/movies", query: { page: 1 } }}>
                                <a className='text-light'> Movies </a>
                            </Link>
                        </li>
                        <li className="nav-item nav-link p-2">
                            <Link href="/dashboard">
                                <a className='text-light'>Dashboard</a>
                            </Link>
                        </li>
                        <li className="nav-item nav-link p-2">
                            <Link href="/movies/create">
                                <a className='text-light'>Add a movie</a>
                            </Link>
                        </li>
                        <li className="nav-item nav-link p-2 align-self-right">
                            <button type="button" className='border rounded border-dark btn-warning bg-warning' onClick={handleLogout}> Logout </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="nav-item p-2 ">
                            <Link href="/login">
                                <a className='text-light'>Login</a>
                            </Link>
                        </li>
                        <li className="nav-item p-2">
                            <Link href="/register">
                                <a className='text-light'>Register</a>
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav >
    )
}

export default Navbar
