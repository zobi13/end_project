import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getActiveUser, selectActiveUser } from '../store/auth'

const Dashboard = () => {
    const user = useSelector(selectActiveUser)

    return (
        <>
            {user ? `Hello ${user.username}` : ''}
        </>
    )
}

export default Dashboard