import React, {useState} from "react";
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
    const [newlist, setnewlist] = useState(tracklist);

    function submit(){
        setshowTrack(true);
    }

    return (
        <div className ="main"> 
        
            <div className="Search_bar">      
            <input className="Search_bar_input" type="text" placeholder="Search.." name="search"/>
            <button type = "submit" onClick={submit}>Search</button>
            </div>

            {showTrack && <Tracklist tracklist = {newlist}/>}

           
        </div>
    )

    
}

export default SearchBar;