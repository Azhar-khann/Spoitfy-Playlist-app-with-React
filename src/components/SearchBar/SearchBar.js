import React, {useState} from "react";
import Track from '../Track/Track';
import Tracklist from "../Tracklist/Tracklist";

function SearchBar(props){
    const [showTrack, setshowTrack] = useState(false);

    let tracklist = [
        {
            name:'Hello',
            artist:'Eminem',
            album: 'Reputation',
            id:1
    
        },
        {
            name:'world',
            artist:'taylor',
            album:'wednesday',
            id:2
        }
    ]

    function submit(){
        setshowTrack(true);
    }

    return (
        <div className ="main"> 
            <div className="Search_bar">      
            <input type="text" placeholder="Search.." name="search"/>
            <button type = "submit" onClick={submit}>Search</button>
            </div>
            {showTrack && <Tracklist tracklist = {tracklist}/>}
        </div>
    )

    
}

export default SearchBar;