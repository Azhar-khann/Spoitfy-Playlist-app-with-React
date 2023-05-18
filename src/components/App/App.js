import './App.css';
import Searchbar from '../SearchBar/SearchBar';
import Tracklist from '../Tracklist/Tracklist';
import React, {useState} from "react";


import { access_token } from '../../util/Spotify';
import { search, get_user_id, create_playlist, add_tracks_to_playlist} from '../../util/Spotify';


function App() {

  const [showTrack, setshowTrack] = useState(false);
  const[tracklist,setTracklist] = useState(null);
  const[user_token,set_user_token] = useState('');


  function url_token(){
    if (user_token === '' || user_token === null){
      const Url = window.location.hash.substring(1);
      const urlParams = new URLSearchParams(Url);
      const token = urlParams.get('access_token');
      //console.log('token=',token)
      set_user_token(token)
      
      //console.log('usertoken=',user_token)
    }

  }

  function results(input){

    //console.log('input=',input)
    //console.log(user_token)
    search(user_token,input).then( list => {

      setTracklist(list)
      setshowTrack(true);
      window.history.replaceState({}, document.title, window.location.pathname);

    })    
    
  }

  function playlist(name,tracks){

    get_user_id(user_token).then(id =>{
      create_playlist(user_token,id,name).then(playlist_id =>{
        add_tracks_to_playlist(user_token,playlist_id,tracks)
      })

    })

  }
  

  return (

    <div>
      <h1>Jamming</h1>
      <Searchbar search = {results} user_token={user_token} url_token ={url_token}/>
      {showTrack && <Tracklist tracklist = {tracklist} playlist = {playlist}/>} 
    </div>
    
  );

}

export default App;
