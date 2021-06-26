import React from 'react'
import "./../css/Header.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Header() {
    return (
        <div className="header">
            <div className="back-forward">
                <div className="arrow-back-container"> 
                    <ArrowBackIosIcon className="arrow-back" />
                </div>
                <div className="arrow-forward-container">
                    <ArrowForwardIosIcon className="arrow-forward" />
                </div>
            </div>
            <div className="button-signin">
                <button className="sign-up">Sign Up</button>
                <button className="log-in">Log In</button>
            </div>
        </div>
    )
}

export default Header
