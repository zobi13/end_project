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
        alert("Successfully added a movie!")

        router.push('/movies')
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
                        <textarea
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
                            type={"url"}
                            placeholder="Image URL"
                            value={movieData.cover_image}
                            onChange={({ target }) =>
                                setMovieData({ ...movieData, cover_image: target.value })
                            }
                        />
                    </div>
                    <div>
                        Select genre / genres: <br />
                        <select multiple onChange={({ target }) => {
                            const value = Array.from(target.selectedOptions, option => option.value)
                            setMovieData({ ...movieData, genre: value })
                        }} >
                            {genres.map(genre => (
                                <option key={genre.id} value={genre.id} > {genre.name} </option>
                            ))}
                        </select>
                    </div>
                </div>

                <button>Add</button>
            </form >
        </div >
    )
}

export default AddMovie

