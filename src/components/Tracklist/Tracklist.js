import React, {useState} from "react";
import Track from "../Track/Track";
import Playlist_logic from "../Playlist_logic/Playlist_logic";


function Tracklist(props){
    
    const [showTrack, setshowTrack] = useState(false);
    const[playlist_tracklist,set] = useState([]);

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

    
    return( 
        <div className="flex_box">

            <div className="SearchResults">

                <h1>Results</h1>
                <ul>
                    {props.tracklist.map(track =>
                        <Track trackObject = {track} addToPlaylist = {AddToPlaylist} handleplaylist = {handlePlaylist} />)}
                        
                                          
                </ul>

            </div>

            <div className="Playlist">

                <input type = "text" name="playlist_name"/>
                <hr className="playlist_line"></hr>

                {showTrack && <Playlist_logic  playlist_tracklist = {playlist_tracklist} remove_track ={remove_track}/>}
                <div>
                    <button type="submit" id="add_to_playlist">Submit</button>
                </div>


            </div>


        </div>
        
    )

} 
export default Tracklist;