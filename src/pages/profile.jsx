import React from 'react'
import useLogin from '../hooks/useLogin'

const ProfilePage = () => {
    const username = useLogin();
    return (
        <>
            My Profile
            username : {username}
        </>
    )
}

export default ProfilePage