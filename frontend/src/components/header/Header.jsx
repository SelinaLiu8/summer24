import React from 'react'
import { useAuth } from '../../context/authContext/index'
import { Link } from 'react-router-dom'

const Header = () => {

    const { currentUser, userLoggedIn, loading } = useAuth();

    return (
        <div>
            <img src="" alt="" />
            { userLoggedIn ? (
                <div>Welcome back!</div>
                ) : (
                // Code to render when user is not logged in
                <div>
                    <Link to='/login'>Login</Link>
                </div>
            )}

        </div>
    )
}

export default Header;
