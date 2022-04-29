import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { getActiveUser, selectActiveUser, selectIsAuthenticated } from '../store/auth'
import axios from 'axios'
import authService from '../services/AuthService'

const dashboard = () => {
    const user = useSelector(selectActiveUser);
    const dispatch = useDispatch()

    return (
        <div className='m-3'>
            <h3> {user ? `Hello, ${user.username}` : ''} </h3>
            <h4>
                <Link href='/movies'>
                    <a className='text-warning'>Here you can browse your favourite movies!</a>
                </Link>
            </h4>
        </div>
    )
}

export default dashboard