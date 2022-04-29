import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { selectMovies } from "../store/movies/selectors";
import { getMovies } from "../store/movies/slice";

const Movies = () => {
    const movies = useSelector(selectMovies);
    const dispatch = useDispatch();

    // console.log('Selektovao movies', movies);

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);


    return (
        <div>
            <h2 className="mt-3">Movies</h2>

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
            </div>
        </div>
    );
}

export default Movies