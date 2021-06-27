import React from 'react'
import "./../css/Browsemusicrow.css";

function BrowseMusicRow({ title, description, seeAll}) {
    return (
        <div className="browse-music-row-top">
            <div className="browse-music-title">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className="browse-music-see-all">
                {
                    seeAll && <h3>See All</h3>
                }
            </div>
        </div>
    )
}

export default BrowseMusicRow
