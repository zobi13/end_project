import Layout from '../hocs/Layout';

const homePage = () => (
    <Layout
        title='Home'
        content='Home page for this auth tutorial on httpOnly cookies with json web tokens'
    >
        <div className='p-5 bg-light rounded-3'>
            <div className='container-fluid py-3'>
                <h1 className='display-5 fw-bold'>Home Page</h1>
                <p className='fs-4 mt-3'>
                    Welcome to a movie site! <br/>
                    Here you can see info about the latest movies!
                </p>
            </div>
        </div>
    </Layout>
);

export default homePage;