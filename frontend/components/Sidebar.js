import React from 'react'
import { useSelector } from 'react-redux'
import { selectGenres } from '../store/genres/selectors'

const Sidebar = () => {
    const genres = useSelector(selectGenres)
    return (
        <div>
            {genres?.map(genre => (
                <span key={genre.id}> {genre.name} </span>
            ))}
        </div>
    )
}

export default Sidebar
