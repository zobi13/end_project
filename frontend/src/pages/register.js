import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { register } from '../actions/auth';
import Layout from '../hocs/Layout';
import Loader from 'react-loader-spinner';
import router from 'next/router';
import Link from 'next/link';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const register_success = useSelector(state => state.auth.register_success);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const loading = useSelector(state => state.auth.loading);

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        re_password: '',
    });

    const {
        first_name,
        last_name,
        email,
        username,
        password,
        re_password
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(register(first_name, last_name, username, email, password, re_password));
            // dispatch(register(formData));
    };

    if (typeof window !== 'undefined' && isAuthenticated)
        router.push('/dashboard');
    if (register_success)
        router.push('/login');

    return (
        <Layout
            title='Register'
            content='Resiger page for this auth tutorial on httpOnly cookies'
        >
            <h1 className='display-4 mt-5'>Register Page</h1>
            <form className='bg-light p-5 mt-5 mb-5' onSubmit={onSubmit}>
                <h3 className='text-warning bg-dark p-2 col-md-3'>Create An Account</h3>
                <div className='form-group col-md-6'>
                    <label className='form-label mt-5' htmlFor='first_name'>
                        <strong>First Name*</strong>
                    </label>
                    <br/>
                    <input
                        className='form-control'
                        type='text'
                        name='first_name'
                        placeholder='First Name*'
                        onChange={onChange}
                        value={first_name}
                        required
                    />
                </div>
                <div className='form-group col-md-6'>
                    <label className='form-label mt-3' htmlFor='last_name'>
                        <strong>Last Name*</strong>
                    </label>
                    <br/>
                    <input
                        className='form-control'
                        type='text'
                        name='last_name'
                        placeholder='Last Name*'
                        onChange={onChange}
                        value={last_name}
                        required
                    />
                </div>
                <div className='form-group col-md-6'>
                    <label className='form-label mt-3' htmlFor='username'>
                        <strong>Username*</strong>
                    </label>
                    <br/>
                    <input
                        className='form-control'
                        type='text'
                        name='username'
                        placeholder='Username*'
                        onChange={onChange}
                        value={username}
                        required
                    />
                </div>
                <div className='form-group col-md-6'>
                    <label className='form-label mt-3' htmlFor='email'>
                        <strong>Email*</strong>
                    </label>
                    <br/>
                    <input
                        className='form-control'
                        type='email'
                        name='email'
                        placeholder='Email*'
                        onChange={onChange}
                        value={email}
                        required
                    />
                </div>
                <div className='form-group col-md-6'>
                    <label className='form-label mt-3' htmlFor='password'>
                        <strong>Password*</strong>
                    </label>
                    <br/>
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
                <div className='form-group col-md-6'>
                    <label className='form-label mt-3' htmlFor='re_password'>
                        <strong>Confirm Password*</strong>
                    </label>
                    <br/>
                    <input
                        className='form-control'
                        type='password'
                        name='re_password'
                        placeholder='Confirm Password*'
                        onChange={onChange}
                        value={re_password}
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
                            <button className='btn btn-primary mt-5 bg-dark text-warning' type='submit'>
                                Create Account
                            </button>
                            <div>
                                <p className='mt-2'> 
                                    <Link href="/login">
                                        <a className='link-warning'> Already have an account? </a>
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

export default RegisterPage;
