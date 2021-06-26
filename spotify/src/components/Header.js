import React from 'react'
import "./../css/Header.css";

function Header() {
    return (
        <div className="header">
            <div className="back-forward">
                <h3>back</h3>
                <h3>forward</h3>
            </div>
            <div className="button-signin">
                <button className="sign-up">Sign Up</button>
                <button className="log-in">Log In</button>
            </div>
        </div>
    )
}

export default Header
