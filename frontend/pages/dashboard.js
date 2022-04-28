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
        <>
            <h3> {user ? `Hello, ${user.username}` : ''} </h3>
            <h4> <Link href='/movies'> Here you can browse your favourite movies! </Link> </h4>
        </>
    )
}

export default dashboard