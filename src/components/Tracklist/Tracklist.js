import React from "react";
import Track from "../Track/Track";

function Tracklist(props){
    return( 
        <div>
           <ul> 
            {props.tracklist.map(track =>
                <Track trackObject = {track}/>)}
           </ul>
        </div>
        
    )
}

export default Tracklist;