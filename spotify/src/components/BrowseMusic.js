import React from 'react'
import "./../css/Browsemusic.css";

import BrowseMusicRow from './BrowseMusicRow';
import BrowseMusicPlaylist from './BrowseMusicPlaylist';

import Woman from "./../images/woman.jpg";

import Summerbreakouts from "./../images/summerbreakouts.jpg";
import Hothits from "./../images/2ndgirl.jpg";
import MostNe from "./../images/mostNe.jpg";
import JustGood from "./../images/justgoodmusic.jpg";

import Ed from "./../images/ed.jpg";
import Mint from "./../images/mint.jpg";
import HotCountry from "./../images/hotcountry.jpg";

function BrowseMusic() {
    return (
        <div className="browse-music">
            <div className="browse-music-row">
                <BrowseMusicRow title="The state of music today" description={null} seeAll />
                <div className="browse-music-row-bottom">
                    <BrowseMusicPlaylist image={Summerbreakouts} title="Summer Breakouts" description="Introducing Summer Breakouts, featuring exciting artists and songs to soundtrack your summer '21. Cover: BIA" likes="4,998 likes" songs="70 songs" playTime="3 hr 37 min" />
                    <BrowseMusicPlaylist image={Hothits} title="Hot Hits USA" description="The hottest tracks in the United States. Cover: Dua Lipa" likes="268,562 likes" songs="50 songs" playTime="2 hr 37 min" />
                    <BrowseMusicPlaylist image={MostNe} title="Most Necessary" description="The official voice of generation next. Cover: Iamdoechii" likes="2,506,134 likes" songs="100 songs" playTime="4 hr 35 min" />
                    <BrowseMusicPlaylist image={JustGood} title="Just Good Music" description="JP Saxe is taking over to share tracks of his new album and other favorites" likes="665,782 likes" songs="87 songs" playTime="4 hr 47 min" />
                    <BrowseMusicPlaylist image={Woman} title="Today's Singer-Songwriters" description="The very best new songs from modern singer-songwriters. Cover: JP Saxe" likes="8,826 likes" songs="95 songs" playTime="5 hr 28 min" />
                    <BrowseMusicPlaylist image={Ed} title="Today's Top Hits" description="Ed Sheeran is on top of the Hottest 50!" likes="28,767,617 likes" songs="56 songs" playTime="2 hr 54 min" />
                    <BrowseMusicPlaylist image={Mint} title="mint" description="The world's biggest dance hits. Featuring new music from Dillon Francis & Shift K3Y, Diplo, Damian Lazarus & Jungle, and more!" likes="5,840,032 likes" songs="95 songs" playTime="5 hr" />
                    <BrowseMusicPlaylist image={HotCountry} title="Hot Country" description="Today's top country hits of the week, worldwide! Cover: Lady A" likes="6,401,143 likes" songs="52 songs" playTime="2 hr 49 min" />
                </div>
            </div>
            <div className="browse-music-row">
                <BrowseMusicRow title="Focus" description="Music to help you concentrate." seeAll />
                <div className="browse-music-row-bottom">
                    <BrowseMusicPlaylist image={Woman} title="Summer Breakouts" desciption="Introducing Summer Breakouts, featuring exciting artists and songs to soundtrack your summer '21. Cover: BIA" likes="4,998 likes" songs="70 songs" playTime="3 hr 37 min" />
                </div>
            </div>
            <div className="browse-music-row">
                <BrowseMusicRow title="Mood" description="Playlists to match your mood." seeAll />
                <div className="browse-music-row-bottom">
                    <BrowseMusicPlaylist image={Woman} title="Summer Breakouts" desciption="Introducing Summer Breakouts, featuring exciting artists and songs to soundtrack your summer '21. Cover: BIA" likes="4,998 likes" songs="70 songs" playTime="3 hr 37 min" />
                </div>
            </div>
            <div className="browse-music-row">
                <BrowseMusicRow title="Popular new releases" description={null} seeAll />
                <div className="browse-music-row-bottom">
                    <BrowseMusicPlaylist image={Woman} title="Summer Breakouts" desciption="Introducing Summer Breakouts, featuring exciting artists and songs to soundtrack your summer '21. Cover: BIA" likes="4,998 likes" songs="70 songs" playTime="3 hr 37 min" />
                </div>
            </div>
            <div className="browse-music-row">
                <BrowseMusicRow title="Saturday fun" description={null} seeAll />
                <div className="browse-music-row-bottom">
                    <BrowseMusicPlaylist image={Woman} title="Summer Breakouts" desciption="Introducing Summer Breakouts, featuring exciting artists and songs to soundtrack your summer '21. Cover: BIA" likes="4,998 likes" songs="70 songs" playTime="3 hr 37 min" />
                </div>
            </div>
            <div className="browse-music-row">
                <BrowseMusicRow title="Soundtrack your home" description={null} seeAll={false} />
                <div className="browse-music-row-bottom">
                    <BrowseMusicPlaylist image={Woman} title="Summer Breakouts" desciption="Introducing Summer Breakouts, featuring exciting artists and songs to soundtrack your summer '21. Cover: BIA" likes="4,998 likes" songs="70 songs" playTime="3 hr 37 min" />
                </div>
            </div>
        </div>
    )
}

export default BrowseMusic
