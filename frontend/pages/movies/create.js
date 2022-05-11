import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import movieService from '../../services/MovieService';
import { selectGenres } from '../../store/genres/selectors';


const AddMovie = () => {
    const router = useRouter();
    const [movieData, setMovieData] = useState({
        title: "",
        description: "",
        cover_image: "",
        genre: [],
    });
    const genres = useSelector(selectGenres)

    function handleSubmit(event) {
        event.preventDefault();
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

