import React from 'react'
import "./../css/Browsemusic.css";
import BrowseMusicRow from './BrowseMusicRow';

function BrowseMusic() {
    return (
        <div className="browse-music">
            <BrowseMusicRow title="The state of music today" description={null} seeAll />
            <BrowseMusicRow title="Focus" description="Music to help you concentrate." seeAll />
            <BrowseMusicRow title="Mood" description="Playlists to match your mood." seeAll />
            <BrowseMusicRow title="Popular new releases" description={null} seeAll />
            <BrowseMusicRow title="Saturday fun" description={null} seeAll />
            <BrowseMusicRow title="Soundtrack your home" description={null} seeAll={false} />
        </div>
    )
}

export default BrowseMusic
