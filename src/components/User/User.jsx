import React, { useContext, useEffect } from 'react'
import Profile from "../Profile/Profile"
import { UserContext } from '../../context/UsersContext'

const User = () => {

    const { getUserInfo ,token, user} = useContext(UserContext)
    
    console.log(user);
    useEffect(() =>{
        getUserInfo()
    },[token])

  return (
    <div>
        <Profile/>
        <p>User : {user.email}</p>
        <p>Orders : {user.Orders}</p>
        <p>Role : {user.role}</p>
    </div>
  )
}

export default User