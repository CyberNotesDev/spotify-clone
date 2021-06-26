import React from 'react'
import "./../css/Sidebar.css";
import SpotifyLogo from "./../images/spotify-logo.jpg";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-logo-container">
                <img className="sidebar-logo" src={SpotifyLogo} alt="Spotify" />
            </div>
            <div>
                <h2>yes</h2>
            </div>
        </div>
    )
}

export default Sidebar
