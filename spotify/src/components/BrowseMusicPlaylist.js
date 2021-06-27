import React from 'react'
import "./../css/Browsemusicplaylist.css";

function BrowseMusicPlaylist({ image, title, description, likes, songs, playTime }) {
    return (
        <div className="browse-music-playlist">
            <div className="browse-music-playlist-image">
                <img src={image} alt={title} />
            </div>
            <div className="browse-music-playlist-info">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default BrowseMusicPlaylist
