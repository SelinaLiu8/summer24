import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { useAuth } from '../../../context/authContext/index'
import { executeSignInWithEmailAndPassword, executeGoogleSignIn } from '../../../firebase/auth'

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    const onSubmit= async(e) => {
        e.preventDefault();

        if (!isSignedIn) {
            setIsSignedIn(true);
            await executeSignInWithEmailAndPassword(username, password);
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <label for="first"> Username:</label>
                    <input type="text" 
                        id="first" 
                        name="first" 
                        placeholder="Enter your Username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required/>
                <label for="password">Password:</label>
                    <input type="password"
                        id="password" 
                        name="password"
                        placeholder="Enter your Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required/>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login;