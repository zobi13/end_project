import { useRouter } from 'next/router';
import { useState } from 'react';

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
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        required
                        placeholder="First name"
                        value={userData.first_name}
                        onChange={({ target }) =>
                            setUserData({ ...userData, first_name: target.value })
                        }
                    />
                    <input
                        required
                        placeholder="Last name"
                        value={userData.last_name}
                        onChange={({ target }) =>
                            setUserData({ ...userData, last_name: target.value })
                        }
                    />
                </div>
                <div>
                    <input
                        required
                        placeholder="Username"
                        value={userData.username}
                        onChange={({ target }) =>
                            setUserData({ ...userData, username: target.value })
                        }
                    />
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
                <div>
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
                <div>
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

                <button>Register</button>
            </form>
        </div>
    )
}

export default Register
