import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { selectMovies } from "../store/movies/selectors";
import { getMovies } from "../store/movies/slice";
import { useRouter } from "next/router";
import { debounce } from "lodash"
import Sidebar from "../components/Sidebar";


const Movies = () => {
    const movies = useSelector(selectMovies);
    const dispatch = useDispatch();
    const router = useRouter()
    const currentPage = router.query.page || 1;

    function handleChange(event) {
        router.push(`/movies?page=1&title=${event.target.value}`)
    }

    const debouncedHandleChange = debounce(handleChange, 750);

    const handleSearch = () => {
        const query = {
            title: router.query.title,
            genre: router.query.genre,
            page: router.query.page
        }

        dispatch(getMovies(query))
    }

    useEffect(() => {
        handleSearch()
    }, [router.query.page, router.query.title, router.query.genre])


    return (
        <div className="d-flex justify-content-between">
            <div>
                <h2 className="mt-3">Movies</h2>

                <div className="m-3 d-flex justify-content-center" >
                    <input onChange={debouncedHandleChange} type={"search"} placeholder="Search for a movie..." className="border border-dark" style={{ width: 400, height: 50 }} />
                    <button type="submit" className="border border-dark btn-warning"> Search </button>
                </div>

                <div style={{
                    marginLeft: 7,
                    marginRight: 3,
                    padding: 5,
                    display: 'flex',
                    flexWrap: 'wrap',
                }}>
                    {movies.results && (
                        movies.results?.map((movie) => (
                            <div
                                key={movie.id}
                                style={{
                                    border: "3px solid black",
                                    width: 300,
                                    marginTop: 10,
                                    marginLeft: 2,
                                    marginRight: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    backgroundColor: "light",
                                    paddingLeft: 4,
                                    paddingTop: 4,
                                }}
                            >
                                <p>
                                    <strong>Name:</strong> <i className='text-warning'> {movie.title} </i>
                                </p>
                                <p>
                                    <strong> Description: </strong> <i className='text-warning'>{movie.description} </i>
                                </p>
                                <div className="m-2">
                                    <img style={{ border: "2px solid gray" }} width={175} height={150} src={movie.cover_image} />
                                </div>
                                <Link href={`/movies/${movie.id}`}>
                                    <a className="text-dark">View movie details</a>
                                </Link>
                            </div>
                        )))}
                    {movies.results?.length === 0 && <div> No movies have been found </div>}
                </div>
                {(!router.query.title && !router.query.genre) && (
                    <div>
                        <ul className="d-flex justify-content-around">
                            {(currentPage > 1) ? (
                                <li>
                                    <Link href={`/movies?page=${parseInt(currentPage) - 1}`}>
                                        <a>Previous</a>
                                    </Link>
                                </li>
                            ) : <div> </div>}
                            <li>
                                Page: {currentPage}
                            </li>
                            {(movies.results?.length == 10 && movies?.count > 10) ? (
                                <li>
                                    <Link href={`/movies?page=${parseInt(currentPage) + 1}`}>
                                        <a>Next</a>
                                    </Link>
                                </li>
                            ) : <div> </div>}
                        </ul>
                    </div>
                )}
                {router.query.title && (
                    <div>
                        <ul className="d-flex justify-content-around">
                            {(currentPage > 1) ? (
                                <li>
                                    <Link href={`/movies?page=${parseInt(currentPage) - 1}&title=${router.query.title}`}>
                                        <a>Previous</a>
                                    </Link>
                                </li>
                            ) : <div> </div>}
                            <li>
                                Page: {currentPage}
                            </li>
                            {(movies.results?.length == 10 && movies?.count > 10) ? (
                                <li>
                                    <Link href={`/movies?page=${parseInt(currentPage) + 1}&title=${router.query.title}`}>
                                        <a>Next</a>
                                    </Link>
                                </li>
                            ) : <div> </div>}
                        </ul>
                    </div>
                )}
                {/* genres pages */}
                {router.query.genre && (
                    <div>
                        <ul className="d-flex justify-content-around">
                            {(currentPage > 1) ? (
                                <li>
                                    <Link href={`/movies?page=${parseInt(currentPage) - 1}&genre=${router.query.genre}`}>
                                        <a>Previous</a>
                                    </Link>
                                </li>
                            ) : <div> </div>}
                            <li>
                                Page: {currentPage}
                            </li>
                            {(movies.results?.length == 10 && movies?.count > 10) ? (
                                <li>
                                    <Link href={`/movies?page=${parseInt(currentPage) + 1}&genre=${router.query.genre}`}>
                                        <a>Next</a>
                                    </Link>
                                </li>
                            ) : <div> </div>}
                        </ul>
                    </div>
                )}
            </div>
            <div>
                <Sidebar />
            </div>
        </div>
    );
}

export default Movies