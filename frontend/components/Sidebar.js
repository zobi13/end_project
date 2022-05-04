import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectGenres } from '../store/genres/selectors'
import { getMovies, filterMovies } from '../store/movies/slice'

const Sidebar = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const genres = useSelector(selectGenres)

    // const filter = (e, genre) => {
    //     console.log(genre);
    //     if (!genre) {
    //         dispatch(getMovies(genre));
    //         router.push(`/movies?genre=${genre.id}`)
    //     }
    // };
    const filter = async (e, genre) => {
        e?.preventDefault();
        console.log(`clicked ${genre}`);
        if (genre) {
            dispatch(filterMovies(genre));
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
