import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getActiveUser, selectActiveUser } from '../store/auth'

const Dashboard = () => {
    const user = useSelector(selectActiveUser)

    return (
        <>
            <h3> {user ? `Hello, ${user.username}` : ''} </h3>
            <h4> <Link to={'/movies'}> Here you can browse your favourite movies! </Link> </h4>
        </>
    )
}

export default Dashboard