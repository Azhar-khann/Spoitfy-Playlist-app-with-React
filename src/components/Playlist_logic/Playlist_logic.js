import React, { useState } from "react";
import Playlist from "../Playlist/Playlist";



function Playlist_logic(props){
    //console.log(props.playlist_tracklist)
 

    function remove_track(track){
        props.remove_track(track)
        
    }


    return (

        <div>
            <ul>
            {props.playlist_tracklist.map(track =>
                <Playlist trackObject = {track} remove_track = {remove_track}/>)}
            </ul>

        </div>
    )
        
        
}

export default Playlist_logic;