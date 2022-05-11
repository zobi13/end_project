import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectGenres } from '../store/genres/selectors'
import { searchOrFilterMovies } from '../store/movies/slice'

const Sidebar = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const genres = useSelector(selectGenres)

    const searchValue = {
        title: "",
        genre: ""
    }

    const filter = async (e, genre) => {
        e?.preventDefault();
        searchValue.genre = genre
        if (genre) {
            dispatch(searchOrFilterMovies(searchValue));
            router.push(`/movies?genre=${genre}`)
        }
    };
    return (
        <div>
            <ul>
                {genres?.map(genre => (
                    <li style={{ fontSize: 24, marginRight: 35, marginTop: 15 }} key={genre.id}>
                        <Link href={`/movies?genre=${genre.id}`}>
                            <a onClick={(e) => filter(e, genre.id)} className='text-dark'> {genre.name} </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default Sidebar
