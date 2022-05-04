import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { selectMovies } from "../store/movies/selectors";
import { getMovies } from "../store/movies/slice";
import { useRouter } from "next/router";
import movieService from "../services/MovieService";
import _, { debounce } from "lodash"

const Movies = () => {
    const movies = useSelector(selectMovies);
    const dispatch = useDispatch();
    const router = useRouter()

    const [searchTerm, setSearchTerm] = useState({
        value: ""
    });

    // console.log('Selektovao movies', movies);

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    // const handleChange = ({ target }) => {
    //     const value = target.value;
    //     setSearchTerm({ ...searchTerm, value })
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault()

    //     const searchedMovies = movieService.search(searchTerm.value).then(res => console.log(res))

    //     router.push('/movies/?title=' + searchTerm.value)
    // }

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

    useEffect(() => {
        debouncedSearch(searchTerm);
    }, [searchTerm]);



    return (
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
                    movies.map((movie) => (
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
                {movies?.length === 0 && <div> No movies have been found </div>}
            </div>
        </div>
    );
}

export default Movies