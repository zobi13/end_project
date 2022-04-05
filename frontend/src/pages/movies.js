import React from 'react'
import Image from 'next/image'
import Layout from '../hocs/Layout';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';


const MoviesPage = () => {
    const router = useRouter();

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const loading = useSelector(state => state.auth.loading);
    const movies = useSelector(state => state.movies.movies)
    console.log(movies)
    // console.log(isAuthenticated)

    if (typeof window !== 'undefined' && !loading && !isAuthenticated)
        router.push('/login');
  return (
    <>
    <Layout
        title={"Movies"}
        content={"This is where you search for a movie"}
    >
        <div className='container bg-light'>
            <h1 className='m-3'> Movies: </h1>
            <div className="row">
                {/* {movies.map(movie => { */}
                    <div className="col-2">
                        <Image 
                            src='/../public/static/batman2022.jpeg'
                            width='150'
                            height='200'
                            alt='batman image'
                        />
                        {/* <h3>{movie.title}</h3> */}
                        <div className='text-break'>
                            <p> movie.description </p>
                            <p> Genre: </p>
                        </div>
                    </div>
                {/* })} */}
            </div>
            <div className='row m-4'>
                <div className='col'>
                    <div className="input-group">
                        <div className="form-outline col-xl-6">
                            <input type="search" id="form1" className="form-control" placeholder='Search movies'/>
                        </div>
                        <button type="button" className="btn btn-warning">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
    </>
  )
}

export default MoviesPage
