import React, {useState} from "react";
import Tracklist from "../Tracklist/Tracklist";



function SearchBar(props){

    const [inputValue, setInputValue] = useState('');

    function submit(event){
        event.preventDefault();
        //console.log(inputValue)
        props.search(inputValue);
    }  

    function handleChange(event){
        setInputValue(event.target.value);
    }

    if (localStorage.getItem('spotifyToken') === '' || localStorage.getItem('spotifyToken') === 'null' || localStorage.getItem('spotifyToken') === null){
        props.url_token()
        //console.log('usertoken 1=',localStorage.getItem('spotifyToken'))
        return (
        <div className ="main"> 
        
            <div className="Search_bar"> 


                <input className="Search_bar_input" type="text" placeholder="Search.." onChange={handleChange}/>
                <a href = 'https://accounts.spotify.com/authorize?response_type=token&client_id=368150b868984cf686e852f56b5d5b6f&scope=user-read-private user-read-email playlist-modify-public&redirect_uri=http://localhost:3000/'>
                     <button type="submit" >Search</button> 
                </a>
              
            </div>
           
        </div>
           
        )

    } else{
        return (
            <div className ="main"> 
            
                <div className="Search_bar"> 
    
    
                    <input className="Search_bar_input" type="text" placeholder="Search.." onChange={handleChange}/>
                    <button type="submit" onClick={submit}>Search</button> 
                
                </div>
               
            </div>
            )
    }

    
}

export default SearchBar;

