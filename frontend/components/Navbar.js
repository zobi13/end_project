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
        <ul>
            {isAuthenticated ? (
                <>
                    <li className='navbar-brand active p-2'>
                        <Link href="/">  Home </Link>
                    </li>
                    <li className="nav-item p-2">
                        <Link href="/movies">Movies</Link>
                    </li>
                    <li className="nav-item p-2">
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item p-2">
                        <Link href="/movies/create">Add a movie</Link>
                    </li>
                    <li className="nav-item p-2 align-self-right">
                        <button type="button" onClick={handleLogout}> Logout </button>
                    </li>
                </>
            ) : (
                <>
                    <li className="nav-item p-2 ">
                        <Link href="/login">Login</Link>
                    </li>
                    <li className="nav-item p-2">
                        <Link href="/register">Register</Link>
                    </li>
                </>
            )}
        </ul>
    )
}

export default Navbar
