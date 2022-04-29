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

    console.log(movie);


    const genreName = (g) => {
        const str = "Genres: "
        for (const genre of genres) {
            if (genre.id === g) {
                if (genre.id == 1)
                    str += genre.name;
                else {
                    str = ", " + genre.name
                }
                return str;
            }
        }
    }

    return (
        <div className='m-3'>
            <h2> {movie?.title} </h2>
            <p> {movie?.description} </p>
            <div>
                <div className='d-flex justify-content-left'>
                    {/* <strong>Genres{":\t"} </strong> */}
                    {movie?.genre.map(g => (
                        <div key={g}>{genreName(g)}</div>
                    ))}
                </div>
            </div>
            <div className='mt-3'>
                <img src={movie?.cover_image} alt='Not available' width={300} height={350} />
            </div>
        </div>
    )
}

export default SingleMoviePage
