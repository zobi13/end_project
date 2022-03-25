import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { login, reset_register_success } from '../actions/auth';
import Layout from '../hocs/Layout';
import Loader from 'react-loader-spinner';
import Link from 'next/link'

const LoginPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const loading = useSelector(state => state.auth.loading);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const {
        email,
        password,
    } = formData;

    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(reset_register_success());
    }, [dispatch]);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(login(email, password));
    };

    if (typeof window !== 'undefined' && isAuthenticated)
        router.push('/dashboard');

    return (
        <Layout
            title='Login'
            content='Register page for this auth tutorial on httpOnly cookies'
        >
            <h1 className='display-4 mt-5'>Login Page</h1>
            <form className='bg-light p-5 mt-5 mb-5' onSubmit={onSubmit}>
                <h3 className='text-warning bg-dark px-4 col-md-4'>Log Into Your Account</h3>
                <div className='form-group'>
                    <label className='form-label mt-3' htmlFor='email'>
                        <strong>Email*</strong>
                    </label>
                    <input
                        className='form-control'
                        type='text'
                        name='email'
                        placeholder='Email*'
                        onChange={onChange}
                        value={email}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label className='form-label mt-3' htmlFor='password'>
                        <strong>Password*</strong>
                    </label>
                    <input
                        className='form-control'
                        type='password'
                        name='password'
                        placeholder='Password*'
                        onChange={onChange}
                        value={password}
                        minLength='8'
                        required
                    />

                </div>
                {
                    loading ? (
                        <div className='d-flex justify-content-center align-items-center mt-5'>
                            <Loader
                                type='Oval'
                                color='#00bfff'
                                width={50}
                                height={50}
                            />
                        </div>
                    ) : (
                        <>
                            <button className='btn btn-dark text-warning mt-5' type='submit'>
                                Login
                            </button>
                            <div>
                                <p> 
                                    Don't have an account? 
                                    <Link href="/register">
                                        <a className='link-warning'> Create an account </a>
                                    </Link>
                                </p>
                            </div>
                        </>
                    )
                }
            </form>
        </Layout>
    );
};

export default LoginPage;
