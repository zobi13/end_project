import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Layout from '../hocs/Layout';
import Link from 'next/link'

const Dashboard = () => {
    const router = useRouter();

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const user = useSelector(state => state.auth.user);
    const loading = useSelector(state => state.auth.loading);
    // console.log(user)

    if (typeof window !== 'undefined' && !loading && !isAuthenticated)
        router.push('/login');

    return (
        <Layout
            title='Dashboard'
            content='Dashboard page'
        >
            <div className='p-5 bg-light rounded-3'>
                <div className='container-fluid py-3'>
                    <h1 className='display-5 fw-bold'>
                        User Dashboard
                    </h1>
                    <p className='fs-4 mt-3'>
                        Welcome <b className='text-warning'> {user !== null && user.first_name}! </b>
                        <Link href={'/movies'}> Check out the latest movies! </Link>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
