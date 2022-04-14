import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectMovie } from '../store/movies/selectors';
import { getMovie } from '../store/movies/slice';

const SingleMoviePage = () => {
    const { id } = useParams()
    // console.log(id);
    const movie = useSelector(selectMovie);
    const dispatch = useDispatch();
    console.log(movie);

    useEffect(() => {
        dispatch(getMovie(id));
    }, [dispatch, id]);



    return (
        <div>
            Single movie detail page

            <p> {movie?.title} </p>
            <p> {movie?.description} </p>
            <div>
                <img src={movie?.cover_image} />
            </div>
        </div>
    )
}

export default SingleMoviePage
