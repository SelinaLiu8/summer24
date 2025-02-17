import React, { useState, useContext } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { useAuth } from '../../../context/authContext/index'
import { executeSignInWithEmailAndPassword, executeGoogleSignIn } from '../../../firebase/auth'

const Login = () => {

    const { userLoggedIn } = useAuth();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    console.log("user logged in", userLoggedIn);

    const onSubmit= async(e) => {
        e.preventDefault();

        if (!isSignedIn) {
            setIsSignedIn(true);
            await executeSignInWithEmailAndPassword(username, password).catch((error) => {
                console.log(error.message)
                setErrorMessage(error.message);
                console.log("error message: ", errorMessage)
                setIsSignedIn(false);
            });

        }
    }

    const onGoogleSignIn = (e) => {
        e.preventDefault();
        if (!isSignedIn) {
            setIsSignedIn(true);
            executeGoogleSignIn().catch(error => {
                setErrorMessage(error.message);
                setIsSignedIn(false);
            })
        }
    }

    return (
        <div>
            { userLoggedIn && (<Navigate to={'/'} replace={true}/>)}
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="first"> Username:</label>
                    <input type="text" 
                        id="first" 
                        name="first" 
                        placeholder="Enter your Username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required/>
                <label htmlFor="password">Password:</label>
                    <input type="password"
                        id="password" 
                        name="password"
                        placeholder="Enter your Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required/>
                <button type='submit'>Login</button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <button onClick={onGoogleSignIn}>Google Sign In</button>
            <p>Don't have an account? <Link to={'/register'}>Register Here!</Link></p>
        </div>
    )
}

export default Login;