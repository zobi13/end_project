import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectGenres } from '../../store/genres/selectors';
import { selectDislikeActive, selectLikeActive, selectMovie } from "../../store/movies/selectors";
import { getDislikeActive, getLikeActive, getMovie, setDislikeActive, setLikeActive, setMovie } from '../../store/movies/slice';

const SingleMoviePage = () => {
    const router = useRouter()
    const { id } = router.query
    const dispatch = useDispatch();
    const movie = useSelector(selectMovie);

    const isLikeActive = useSelector(selectLikeActive)
    const isDislikeActive = useSelector(selectDislikeActive)

    useEffect(() => {
        dispatch(getMovie(id));
        // dispatch(getLikeActive())
        // dispatch(getDislikeActive())
        // console.log("Like ", isLikeActive);
        // console.log("Dislike ", isDislikeActive);
    }, [dispatch, id, isDislikeActive, isLikeActive]);


    const genres = useSelector(selectGenres)

    const setLike = () => {
        dispatch(setLikeActive(!isLikeActive))
    }

    const setDislike = () => {
        dispatch(setDislikeActive(!isDislikeActive))
    }

    const handleLike = () => {
        if (isDislikeActive) {
            setLike()
            setDislike()
        }
        setLike()
    }

    const handleDislike = () => {
        if (isLikeActive) {
            setDislike()
            setLike()
        }
        setDislike()
    }

    const genreName = (g) => {
        const str = ""
        for (const genre of genres) {
            if (genre.id === g) {
                if (g == movie.genre[0]) {
                    str += genre.name;
                }
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
                    <strong>Genres: &nbsp; </strong>
                    {movie?.genre.map(g => (
                        <div key={g}>{genreName(g)}</div>
                    ))}
                </div>
            </div>
            <div className='mt-3'>
                <img src={movie?.cover_image} alt='Not available' width={300} height={350} />
            </div>
            <div className='d-flex justify-content-left'>
                <div style={{ marginRight: 10 }}>
                    <div> Likes: </div>
                    {isLikeActive ? (
                        <button className='bg-warning m-1' onClick={() => { handleLike() }}>
                            {movie?.likes}
                        </button>
                    ) : (
                        <button className='m-1' onClick={() => { handleLike() }}>
                            {movie?.likes}
                        </button>
                    )}
                </div>
                <div style={{ marginRight: 10 }}>
                    <div> Dislikes: </div>
                    {isDislikeActive ? (
                        <button className='m-1 bg-warning' onClick={() => { handleDislike() }}>
                            {movie?.dislikes}
                        </button>
                    ) : (
                        <button className='m-1' onClick={() => { handleDislike() }}>
                            {movie?.dislikes}
                        </button>
                    )}
                </div>
                <div>
                    <div> Views:   </div>
                </div>
            </div>
        </div>
    )
}

export default SingleMoviePage
