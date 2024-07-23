import React from 'react'
import { useAuth } from '../../context/authContext/index'
import { Link } from 'react-router-dom'
import { executeSignOut } from '../../firebase/auth'

const Header = () => {

    const { currentUser, userLoggedIn, loading } = useAuth();

    console.log(userLoggedIn);
    console.log("currentUser", currentUser);

    const onLogout = () => {
        executeSignOut();
    }

    return (
        <div>
            { userLoggedIn ? (
                <div>
                    <div>Welcome back!</div>
                    <button onClick={onLogout}>log out</button>
                </div>
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
