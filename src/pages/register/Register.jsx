import React from 'react'
import "./register.css";

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>User Name</label>
                <input type="text" className="registerInput" placeholder="Enter your User Name" />
                <label>E mail</label>
                <input type="text" className="registerInput" placeholder="Enter your Email" />
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password" />

                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">Login</button>
        </div>
    )
}
