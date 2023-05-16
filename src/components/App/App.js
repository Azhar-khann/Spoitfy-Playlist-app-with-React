import './App.css';
import Searchbar from '../SearchBar/SearchBar';
import Tracklist from '../Tracklist/Tracklist';
import React, {useState} from "react";


import { access_token } from '../../util/Spotify';
import { search } from '../../util/Spotify';


function App() {

  const [showTrack, setshowTrack] = useState(false);
  const[tracklist,setTracklist] = useState(null);
  const[user_token,set_user_token] = useState(null);

  //let ggtoken = ''
/* 
  function getToken(input){
    console.log(input)
    access_token()
    .then(token => {
        return token
      } 

    ).then(user_token => {
        search(user_token,input).then( list => {

          setTracklist(list)
          setshowTrack(true);

        })
      }  
    )

  }*/

  async function results(input){

    const Url = window.location.hash.substring(1);
    const urlParams = new URLSearchParams(Url);
    const token = urlParams.get('access_token');

    window.history.replaceState({}, document.title, window.location.pathname);

    const set_token = set_user_token(token)
    console.log('token=',token)
    console.log('input=',input)
    search(token,input).then( list => {

      setTracklist(list)
      setshowTrack(true);

    })
    
    
  }
  

  return (

    <div>
      <h1>Jamming</h1>
      <Searchbar search = {results} />
      {showTrack && <Tracklist tracklist = {tracklist}/>} 
    </div>
    
  );
}

export default App;
