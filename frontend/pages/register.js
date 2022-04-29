import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { register } from '../store/auth';

const Register = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [userData, setUserData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        re_password: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(register(userData));

        router.push('/login')
    }
    return (
        <div className='m-2'>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className='m-1 d-flex '>
                    <div className='p-2'>
                        <input
                            required
                            placeholder="First name"
                            value={userData.first_name}
                            onChange={({ target }) =>
                                setUserData({ ...userData, first_name: target.value })
                            }
                        />
                    </div>
                    <div className='p-2'>
                        <input
                            required
                            placeholder="Last name"
                            value={userData.last_name}
                            onChange={({ target }) =>
                                setUserData({ ...userData, last_name: target.value })
                            }
                        />
                    </div>
                </div >
                <div className='m-1 d-flex'>
                    <div className='p-2'>
                        <input
                            required
                            placeholder="Username"
                            value={userData.username}
                            onChange={({ target }) =>
                                setUserData({ ...userData, username: target.value })
                            }
                        />
                    </div>
                    <div className='p-2'>
                        <input
                            required
                            type="email"
                            placeholder="Email"
                            value={userData.email}
                            onChange={({ target }) =>
                                setUserData({ ...userData, email: target.value })
                            }
                        />
                    </div>
                </div>
                <div className='m-1 d-flex'>
                    <div className='p-2'>
                        <input
                            required
                            type="password"
                            placeholder="Password"
                            value={userData.password}
                            onChange={({ target }) =>
                                setUserData({ ...userData, password: target.value })
                            }
                        />
                    </div>
                    <div className='p-2'>

                        <input
                            required
                            type="password"
                            placeholder="Confirm password"
                            value={userData.re_password}
                            onChange={({ target }) =>
                                setUserData({ ...userData, re_password: target.value })
                            }
                        />
                    </div>
                </div>
                <div>
                    <button style={{ fontSize: 16, width: 85, height: 50, marginLeft: 157 }} className="btn btn-warning text-dark border-dark mt-2">Register</button>
                    <div className="pt-2">
                        <Link href="/login">
                            <a style={{ marginLeft: 110 }} className="text-secondary">Already have an account?</a>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register
