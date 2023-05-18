import React, {useState} from "react";
import Tracklist from "../Tracklist/Tracklist";



function SearchBar(props){

    const [inputValue, setInputValue] = useState('');

    function submit(event){
        event.preventDefault();
        console.log(inputValue)
        props.search(inputValue);
    }  

    function handleChange(event){
        setInputValue(event.target.value);
    }

    if (props.user_token === '' || props.user_token === null){
        props.url_token()
        //console.log('usertoken 1=',props.user_token)
        return (
        <div className ="main"> 
        
            <div className="Search_bar"> 


                <input className="Search_bar_input" type="text" placeholder="Search.." onChange={handleChange}/>
                <a href = 'https://accounts.spotify.com/authorize?response_type=token&client_id=368150b868984cf686e852f56b5d5b6f&scope=user-read-private user-read-email playlist-modify-public&redirect_uri=http://localhost:3000/'>
                     <button type="submit" >Submit</button> 
                </a>
              
            </div>
           
        </div>
           
        )

    } else{
        //console.log('usertoken 2=',props.user_token)
        return (
            <div className ="main"> 
            
                <div className="Search_bar"> 
    
    
                    <input className="Search_bar_input" type="text" placeholder="Search.." onChange={handleChange}/>
                    <button type="submit" onClick={submit}>Submit</button> 
                
                </div>
               
            </div>
            )
    }

    
}

export default SearchBar;


/*             <input className="Search_bar_input" id="input" type="text" placeholder="Search.." name="searchInput"/>
            <input type="submit" id="submit" onClick={submit} /> */
            