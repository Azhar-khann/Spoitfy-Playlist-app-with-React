import React, {useState} from 'react';



function Track(props){

    function Submit(e){
        props.addToPlaylist(props.trackObject);
        props.handleplaylist(props.trackObject)
    }

    return(

        <li> 

            <h2>{props.trackObject.name}</h2>  
            <span>{props.trackObject.artist}</span> |
            <span>{props.trackObject.album}</span> 
            <button className='add_remove' type ="submit" onClick = {Submit} value={props.trackObject}> add </button> 
            <hr></hr>

        </li>
                   
    )
    
}

export default Track;

