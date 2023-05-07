import React from "react";
import Playlist from "../Playlist/Playlist"

function Playlist_logic(props){
    let id_track = []
    if (id_track.includes(props.track.id) === false){
        id_track.push(props.id)
        return <Playlist track = {props.track}/>
        
    } else{
        return alert('Track has been added')
    }
}

export default Playlist_logic;