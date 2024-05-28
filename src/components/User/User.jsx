import React, { useContext, useEffect } from 'react'
import Profile from "../Profile/Profile"
import { UserContext } from '../../context/UsersContext'

const User = () => {

    const { getUserInfo, token, user } = useContext(UserContext)

    useEffect(() => {
        getUserInfo()
    }, [token])
    console.log(user);

    if (!user) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Profile />
            <p>User : {user.email}</p>
            <p>Orders : {user.Orders}</p>
            <p>Role : {user.role}</p>
        </div>
    )
}

export default User