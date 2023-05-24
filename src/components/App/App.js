import './App.css';
import Searchbar from '../SearchBar/SearchBar';
import Tracklist from '../Tracklist/Tracklist';
import React, {useState} from "react";


import { access_token } from '../../util/Spotify';
import { search, get_user_id, create_playlist, add_tracks_to_playlist} from '../../util/Spotify';


function App() {

  const [showTrack, setshowTrack] = useState(false);
  const[tracklist,setTracklist] = useState(null);
  let [storedToken,setstoredToken] = useState(localStorage.getItem('spotifyToken'));
  console.log('storedtoken=',storedToken)

  const issuanceTime = parseInt(localStorage.getItem('spotifyTokenIssuedAt'));
  console.log('issuance time=',issuanceTime)

  

  function url_token(){

    //if (storedToken === '' || storedToken === 'null' || storedToken === null){
      const Url = window.location.hash.substring(1);
      const urlParams = new URLSearchParams(Url);
      const token = urlParams.get('access_token');
      
      localStorage.setItem('spotifyToken', token)
      localStorage.setItem('spotifyTokenIssuedAt', Math.floor(Date.now() / 1000));

      setstoredToken(localStorage.getItem('spotifyToken'))
      window.history.replaceState({}, document.title, window.location.pathname);

    //}

  }

  if (storedToken && issuanceTime) {
    const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds
    console.log('current time=',currentTime)

    if (currentTime - issuanceTime >= 3600) {
      console.log('expried token')
      url_token()
      //localStorage.setItem('spotifyTokenIssuedAt', Math.floor(Date.now() / 1000));
    }
  }

  function results(input){

    //console.log('input=',input)
    
    search(storedToken,input).then( list => {

      setTracklist(list)
      setshowTrack(true);
      //window.history.replaceState({}, document.title, window.location.pathname);

    })    
    
  }

  function playlist(name,tracks){
    
    get_user_id(storedToken).then(id =>{
      create_playlist(storedToken,id,name).then(playlist_id =>{
        add_tracks_to_playlist(storedToken,playlist_id,tracks)
      })

    })

  }
  

  return (

    <div>
      <h1>Jamming</h1>
      <Searchbar search = {results} url_token ={url_token}/>
      {showTrack && <Tracklist tracklist = {tracklist} playlist = {playlist}/>} 
    </div>
    
  );

}

export default App;
