import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createMovie } from '../store/movies';

const AddMoviePage = () => {
    const history = useHistory();
    const dispatch = useDispatch
    const [movieData, setMovieData] = useState({
        title: "",
        description: "",
        cover_image: "",
        user: "",
        genre: "",
    });
    function handleSubmit(event) {
        event.preventDefault();
        dispatch(createMovie(movieData));

        history.push('/login')
    }
    return (
        <div>
            <h2>Add a movie</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        required
                        placeholder="Title"
                        value={movieData.title}
                        onChange={({ target }) =>
                            setMovieData({ ...movieData, title: target.value })
                        }
                    />
                    <div>
                        <input
                            required
                            placeholder="Description"
                            value={movieData.description}
                            onChange={({ target }) =>
                                setMovieData({ ...movieData, description: target.value })
                            }
                        />
                    </div>
                    <div>
                        <input
                            required
                            placeholder="Cover image"
                            value={movieData.cover_image}
                            onChange={({ target }) =>
                                setMovieData({ ...movieData, cover_image: target.value })
                            }
                        />
                    </div>
                    <div>
                        <input
                            required
                            type="text"
                            placeholder="User"
                            value={movieData.user}
                            onChange={({ target }) =>
                                setMovieData({ ...movieData, user: target.value })
                            }
                        />
                    </div>
                    <div>
                        <input
                            required
                            type="text"
                            placeholder="Genre"
                            value={movieData.genre}
                            onChange={({ target }) =>
                                setMovieData({ ...movieData, genre: target.value })
                            }
                        />
                    </div>
                </div>

                <button>Add</button>
            </form>
        </div>
    )
}

export default AddMoviePage
