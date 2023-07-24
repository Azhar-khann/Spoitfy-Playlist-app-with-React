import React from "react";


function Playlist(props){

    function handleClick(){
        props.remove_track(props.trackObject)
    }

    return(

        <li>
             <h2>{props.trackObject.name}</h2>  
            <span>{props.trackObject.artist}</span> |
            <span>{props.trackObject.album}</span> 
            <button className='add_remove' type ="submit" onClick = {handleClick} >Cut </button> 
            <hr></hr>

        </li>

    )
}

export default Playlist;

