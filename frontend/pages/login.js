import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/auth";
import Link from 'next/link'

export default function Login() {
    const router = useRouter()
    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(login(credentials));
        router.push('/dashboard')
    }


    return (
        <div className="m-3 p-2">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="p-2">
                    <input
                        required
                        type="email"
                        placeholder="Email"
                        value={credentials.email}
                        onChange={({ target }) =>
                            setCredentials({ ...credentials, email: target.value })
                        }
                    />
                </div>
                <div className="p-2">
                    <div>
                        <input
                            required
                            type="password"
                            placeholder="Password"
                            value={credentials.password}
                            onChange={({ target }) =>
                                setCredentials({ ...credentials, password: target.value })
                            }
                        />
                    </div>
                    <div>
                        <button style={{ fontSize: 16, width: 75, height: 50, marginLeft: 50 }} className="btn btn-warning text-dark border-dark mt-2">Login</button>

                    </div>
                    <div className="pt-2">
                        <Link href="/register">
                            <a className="text-secondary">Don't have an account?</a>
                        </Link>
                    </div>
                </div>
            </form >
            admin@example.com
        </div >
    );
}
