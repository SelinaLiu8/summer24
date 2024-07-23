import React, { useState, useContext } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { useAuth } from '../../../context/authContext/index'
import { executeCreateUserWithEmailAndPassword } from '../../../firebase/auth'

const Register = () => {

    const { userLoggedIn } = useAuth();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmedPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        
        if (!isRegistering) {
            if (password != confirmPassword) {
                setErrorMessage("Passwords are not the same");
            }
            else {
                setIsRegistering(true);
                await executeCreateUserWithEmailAndPassword(username, password);
            }
        }
    }

    return (
        <div>
            { userLoggedIn && (<Navigate to={'/'} replace={true}/>)}
            <h2>Register</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="first">Username:</label>
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
                <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password"
                        id="confirmPassword" 
                        name="confirmPassword"
                        placeholder="Enter your Password Again" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmedPassword(e.target.value)}
                        required/>
                <button type='submit'>Login</button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    )
}

export default Register