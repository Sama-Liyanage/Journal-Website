import React from 'react'
import "./login.css";

export default function Login() {
    return (
        <div className="login">
            <form className="loginForm">
                <label>E mail</label>
                <input type="text" placeholder="Enter your Email" />
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />

                <button className="loginButton">LogIn</button>
            </form>
            <button className="loginRegisterButton">Register</button>
        </div>
    )
}
