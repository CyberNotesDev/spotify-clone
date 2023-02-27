import React from 'react'
import "./../css/Sidebar.css";
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-logo-container">
                {/* <img className="sidebar-logo" src={SpotifyLogo} alt="Spotify" /> */}
            </div>
            <div className="sidebar-links">
                <div className="side-bar-links-important">
                    <div className="sidebar-links-top">
                        <SidebarRow selected Icon={HomeIcon} title="Home" />
                        <SidebarRow Icon={SearchIcon} title="Search" />
                        <SidebarRow Icon={VideoLibraryIcon} title="Your Library" />
                    </div>
                    <div className="sidebar-links-bottom">
                        <SidebarRow Icon={AddBoxOutlinedIcon} title="Create Playlist" />
                        <SidebarRow Icon={FavoriteIcon} title="Liked Songs" />
                    </div>
                </div>
                <div className="sidebar-links-other">
                    <a>Cookies</a>
                    <a>Privacy</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
