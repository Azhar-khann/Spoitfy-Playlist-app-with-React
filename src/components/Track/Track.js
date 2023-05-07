import React, {useState} from 'react';
import Playlist_logic from '../Playlist_logic/Playlist_logic';


function Track(props){

    const [showTrack, setshowTrack] = useState(false);

    function submit(){
        setshowTrack(true);
    }

    return(
        
        <li> 
            <h1>{props.trackObject.name}</h1>  
            <span>{props.trackObject.artist}</span> |
            <span>{props.trackObject.album}</span> 
            <button type ="submit" onClick = {submit}> add </button> 
            return {showTrack && <Playlist_logic track = {props.trackObject}/>}
        </li>
        
    
    )
    
}

export default Track;