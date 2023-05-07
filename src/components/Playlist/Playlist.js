import React from "react";

function Playlist(props){

    return(

        <li> <h1>{props.track.name}</h1>  
            <span>{props.track.artist}</span> |
            <span>{props.track.album}</span> 
        </li>


    )
}

export default Playlist;

