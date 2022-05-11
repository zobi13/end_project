import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { selectActiveUser } from '../store/auth'


const dashboard = () => {
    const user = useSelector(selectActiveUser);

    return (
        <div className='m-3'>
            <h3> {user ? `Hello, ${user.username}` : ''} </h3>
            <h4>
                <Link href='/movies?page=1'>
                    <a className='text-warning'>Here you can browse your favourite movies!</a>
                </Link>
            </h4>
        </div>
    )
}

export default dashboard