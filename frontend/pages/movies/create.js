import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import movieService from '../../services/MovieService';
import { selectActiveUser } from '../../store/auth';
import { selectGenres } from '../../store/genres/selectors';
import { getGenres } from '../../store/genres/slice';
import { createMovie } from '../../store/movies/slice';
import Select from "react-select"

const AddMovie = () => {
    const router = useRouter();
    // console.log(author);
    const dispatch = useDispatch()
    // const [selectOptions, setSelectOptions] = useState([]);
    const [movieData, setMovieData] = useState({
        title: "",
        description: "",
        cover_image: "",
        genre: [],
    });
    const genres = useSelector(selectGenres)
    useEffect(() => {
        console.log("zanrovi", genres)
    }, [genres])

    function handleSubmit(event) {
        event.preventDefault();
        // dispatch(createMovie(movieData));
        console.log(movieData);
        movieService.add(movieData);
        router.push('/movies')
    }
    return (
        <div className='container'>
            <h2 className='m-2'>Add a movie</h2>

            <form onSubmit={handleSubmit}>
                <div className='form-group m-2 row'>
                    <div className='col-lg-7 m-1'>
                        <input
                            className='form-control'
                            required
                            placeholder="Title"
                            value={movieData.title}
                            onChange={({ target }) =>
                                setMovieData({ ...movieData, title: target.value })
                            }
                        />
                    </div>
                    <div className='col-lg-7 m-1'>
                        <textarea
                            className='form-control'
                            rows={3}
                            required
                            placeholder="Description"
                            value={movieData.description}
                            onChange={({ target }) =>
                                setMovieData({ ...movieData, description: target.value })
                            }
                        />
                    </div>
                    <div className='col-lg-7 m-1'>
                        <input
                            className='form-control'
                            required
                            // type={"url"}
                            placeholder="Image URL"
                            value={movieData.cover_image}
                            onChange={({ target }) =>
                                setMovieData({ ...movieData, cover_image: target.value })
                            }
                        />
                    </div>
                    <div className='col-lg-7 m-3'>
                        <div>
                            <div className='col-lg-4'>
                                <h5> Select genres: </h5>
                                <select className='custom-select' id="inputGroupSelect01" multiple onChange={({ target }) => {
                                    const value = Array.from(target.selectedOptions, option => option.value)
                                    setMovieData({ ...movieData, genre: value })
                                }} >
                                    {genres.map(genre => (
                                        <option key={genre.id} value={genre.id} > {genre.name} </option>
                                    ))}
                                </select>
                            </div>
                            <button style={{ fontSize: 20, width: 80, height: 50 }} className="btn btn-warning text-dark border-dark mt-3">Add</button>
                        </div>
                    </div>
                </div>

            </form >
        </div >
    )
}

export default AddMovie

