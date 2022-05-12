import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectGenres } from '../store/genres/selectors'

const Sidebar = () => {
    const genres = useSelector(selectGenres)
    return (
        <div>
            <ul>
                {genres?.map(genre => (
                    <li style={{ fontSize: 24, marginRight: 35, marginTop: 15 }} key={genre.id}>
                        <Link href={`/movies?page=1&genre=${genre.id}`}>
                            <a className='text-dark'> {genre.name} </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default Sidebar
