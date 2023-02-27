import React from "react";
import { StyleSheet, css } from "aphrodite";

const style = StyleSheet.create({
    playlistCard: {
        borderRadius: 5,
        color: "white",
        width: 150,
        height: 235,
    },
})

const Playlist = ({title, description}) => {
    return (
        <div className={css(style.playlistCard)}>
            <div className="playlist-title">
                <h4>{title}</h4>
            </div>
            <div className="playlist-descrption">{description}</div>
        </div>
    );
}

export default Playlist;