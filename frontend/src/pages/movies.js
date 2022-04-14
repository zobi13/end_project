import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { selectMovies } from "../store/movies/selectors";
import { getMovies } from "../store/movies/slice";

export default function AppMovies() {
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();

  // console.log('Selektovao movies', movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);


  return (
    <div style={{ marginLeft: 5 }}>
      <h2>Movies</h2>
      {movies &&
        movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              border: "3px solid orange",
              width: 300,
              marginTop: 15,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p>
              <strong>Name:</strong> {movie.title}
            </p>
            <p>
              <strong> Description: </strong> {movie.description}
            </p>
            <Link to={`/movies/${movie.id}`}>View movie details</Link>
          </div>
        ))}
    </div>
  );
}
