import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/auth';

const navbar = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const logoutHandler = () => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(logout());
    };

    const authLinks = (
        <>
            <div className='nav'>
                <li className='nav-item text-light'>
                    <Link href='/dashboard'>
                        <a className={
                            router.pathname === '/dashboard' ? 
                            'nav-link active text-light' : 'nav-link text-light'
                        }>
                            Dashboard
                        </a>
                    </Link>
                </li>
                <li className='nav-item'>
                    <a 
                        className='nav-link text-light'
                        href='#!'
                        onClick={logoutHandler}
                    >
                        Logout
                    </a>
                </li>
                <li className='nav-item text-light'>
                    <Link href='/movies'>
                        <a className={
                            router.pathname === '/movies' ? 
                            'nav-link active text-light' : 'nav-link text-light'
                        }>
                            Movies
                        </a>
                    </Link>
                </li>
            </div>
        </>
    );

    const guestLinks = (
        <>
            <div className='nav'>
                <li className='nav-item'>
                    <Link href='/register'>
                        <a className={
                            router.pathname === '/register' ? 
                            'nav-link active text-light' : 'nav-link text-light'
                        }>
                            Register
                        </a>
                    </Link>
                </li>
                <li className='nav-item text-light'>
                    <Link href='/login'>
                        <a className={
                            router.pathname === '/login' ? 
                            'nav-link active text-light' : 'nav-link text-light'
                        }>
                            Login
                        </a>
                    </Link>
                </li>
            </div>
        </>
    );

    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
            <div className='container-fluid p-2'>
                <Link href='/'>
                    <a className='navbar-brand text-warning'>
                        HOME
                    </a>
                </Link>
                <button 
                    className='navbar-toggler' 
                    type='button' 
                    data-bs-toggle='collapse' 
                    data-bs-target='#navbarNav' 
                    aria-controls='navbarNav' 
                    aria-expanded='false' 
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon' ></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                        </li>
                        
                        {
                            isAuthenticated ? authLinks : guestLinks
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default navbar;
