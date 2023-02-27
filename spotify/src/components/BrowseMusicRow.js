import React from 'react'
import "./../css/Browsemusicrow.css";
import Playlist from "./Playlist";

function BrowseMusicRow({ title }) {
    return (
        <div className="browse-music-row">
            <div>
                <h3>{title}</h3>
            </div>

            <div className='playlist-row'>
                <Playlist title="Peaceful Piano" description="Relax and indulge with beautiful piano pieces
"/>
                <Playlist title="Deep Focus" description="RKeep calm and focus with ambient and post-rock music."/>
                <Playlist />
                <Playlist />
                <Playlist />
                <Playlist />
                <Playlist />
                <Playlist />
            </div>
        </div>
    )
}

export default BrowseMusicRow
