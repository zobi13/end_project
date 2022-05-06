import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { selectCurrentPage, selectMovies } from "../store/movies/selectors";
import { getMovies, getPaginatedMovies } from "../store/movies/slice";
import { useRouter } from "next/router";
import movieService from "../services/MovieService";
import _, { debounce } from "lodash"
import Sidebar from "../components/Sidebar";

const Movies = () => {
    const movies = useSelector(selectMovies);
    const dispatch = useDispatch();
    const router = useRouter()

    const [queryBuilder, setQueryBuilder] = useState("")
    //Kada se ode na sledeci page, queryBuilder treba da se updatuje (npr ako se sa page 1 ode na page 2, queryBuilder
    // ce trebati da se updatuje sa '?page=1' na '?page=2').
    // Kada se ukuca searchTerm, queryBuilder se opet treba updatovati i to tkd se 'title=asd' doda na vec postojeci
    // queryBuilder koji je recimo '?page=1', pa onda queryBuilder ispadne '?page=1&title=asd' i onda se posalje
    // GET request na backend koji bi trebao da dobavi prvi page filtriranih filmova po title
    // Isto tako i sa zanrovima, ako se pritisne jedan filter recimo 'Fantasy', onda queryBuilder postane
    //  '?page=1&genre=genreId', tj 'title' treba da se zameni sa 'genre'

    const [searchTerm, setSearchTerm] = useState({
        value: ""
    });

    // useEffect(() => {
    //     dispatch(getPaginatedMovies(pageNumber.page))
    // })

    const [pageNumber, setPageNumber] = useState("")

    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    // const prevPage = null;
    // const nextPage = null;

    // useEffect(() => {
    //     setPageNumber(router.query.page);
    //     console.log(pageNumber);

    //     // if (pageNumber?.page == 1) {
    //     //     setNextPage(parseInt(pageNumber?.page) + 1)
    //     //     setPrevPage(null)

    //     // }
    //     // if (pageNumber?.page >= 2) {
    //     //     setNextPage(parseInt(pageNumber?.page) + 1)
    //     //     setPrevPage(parseInt(pageNumber?.page) - 1)

    //     // }
    //     dispatch(getMovies(pageNumber))
    //     console.log(movies);
    // }, [pageNumber, dispatch, movies])


    function handleChange(event) {
        setSearchTerm(event.target.value);
    }

    const search = (searchTerm) => {
        if (!searchTerm || searchTerm.length > 0) {
            dispatch(getMovies(searchTerm));
            router.push(`/movies?title=${searchTerm}`)
        }
    };
    const debouncedSearch = useCallback(_.debounce(search, 750), []);


    const current_page = router.query.page || 1;

    useEffect(() => {

        dispatch(getPaginatedMovies(current_page));
        // console.log(pageNumber);
        // setPageNumber(router.query)
        // console.log(pageNumber);
        debouncedSearch(searchTerm);
    }, [searchTerm, current_page]);


    console.log(current_page);
    console.log(movies);


    return (
        <div className="d-flex justify-content-between">
            <div>
                <h2 className="mt-3">Movies</h2>

                <div className="m-3 d-flex justify-content-center" >
                    <input onSubmit={search} onChange={handleChange} type={"search"} placeholder="Search for a movie..." className="border border-dark" style={{ width: 400, height: 50 }} />
                    <button type="submit" className="border border-dark btn-warning"> Search </button>
                </div>

                <div style={{
                    marginLeft: 7,
                    marginRight: 3,
                    padding: 5,
                    display: 'flex',
                    flexWrap: 'wrap',
                }}>
                    {movies &&
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
                        ))}
                    {movies.results?.length === 0 && <div> No movies have been found </div>}
                </div>
                {/* {router.query.page && ( */}
                <div>
                    <ul className="d-flex justify-content-around">
                        {(current_page > 1) && (
                            <li>
                                <Link href={`?page=${parseInt(current_page) - 1}`}>
                                    <a>Previous</a>
                                </Link>
                            </li>
                        )}
                        <li>
                            Page: {current_page}
                        </li>
                        {((movies.results?.length == 10) && !router.query.title) && (
                            <li>
                                <Link href={`?page=${parseInt(current_page) + 1}`}>
                                    <a>Next</a>
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
                {/* )} */}
            </div>
            {/* <div>
                <Sidebar />
            </div> */}
        </div>
    );
}

export default Movies