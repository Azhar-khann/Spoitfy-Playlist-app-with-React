import React, {useState} from "react";
import Track from "../Track/Track";
import Playlist_logic from "../Playlist_logic/Playlist_logic";


function Tracklist(props){
    
    const [showTrack, setshowTrack] = useState(false);
    const[playlist_tracklist,set] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function AddToPlaylist(e){
        setshowTrack(true);

    }

    function handlePlaylist(e){
        if (playlist_tracklist.includes(e) === false){
            set([...playlist_tracklist,e]);
        }
    }

    function remove_track(track){
        const updatedList = playlist_tracklist.filter((listItem) => listItem !== track);
        set(updatedList);
        
    }

    function handlename(event){
        setInputValue(event.target.value);
    }

    function add_playlist(){
     
        const uri_array = []
        for (let i = 0; i <= playlist_tracklist.length-1;i++){
            uri_array.push(playlist_tracklist[i].uri)
        }
        props.playlist(inputValue,uri_array)
    }

    
    return( 
        <div className="flex_box">

            <div className="SearchResults">

                <h1>Results</h1>
                <hr className="Results_line"></hr>
                <ul>
                    {props.tracklist.map(track =>
                        <Track trackObject = {track} addToPlaylist = {AddToPlaylist} handleplaylist = {handlePlaylist} />)}                               
                </ul>

            </div>

            <div className="Playlist">

                <input type = "text" name="playlist_name" placeholder="Name your Playlist" onChange={handlename}/>
                <hr className="playlist_line"></hr>

                {showTrack && <Playlist_logic  playlist_tracklist = {playlist_tracklist} remove_track ={remove_track}/>}
                <div>
                    <button type="submit" id="add_to_playlist" onClick={add_playlist}>Submit</button>
                </div>


            </div>


        </div>
        
    )

} 
export default Tracklist;