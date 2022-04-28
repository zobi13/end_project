import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import genreService from '../../services/GenreService';
import { selectGenre, selectGenres } from '../../store/genres/selectors';
import { getGenre } from '../../store/genres/slice';
import { selectMovie } from "../../store/movies/selectors";
import { getMovie } from '../../store/movies/slice';

const SingleMoviePage = () => {
    const router = useRouter()
    const { id } = router.query
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getMovie(id));
    }, [dispatch, id]);

    const movie = useSelector(selectMovie);

    const genres = useSelector(selectGenres)


    const genreName = () => {
        for (const genre of genres) {
            if (genre.id === movie?.genre) {
                return genre.name;
            }
        }
    }

    return (
        <div>
            <h2> {movie?.title} </h2>
            <p> {movie?.description} </p>
            <div>
                Genre: {genreName()}
            </div>
            <div>
                <img src={movie?.cover_image} alt='Not available' width={300} height={400} />
            </div>
        </div>
    )
}

export default SingleMoviePage
