import React, {useState} from "react";
import Tracklist from "../Tracklist/Tracklist";



function SearchBar(props){

    const [inputValue, setInputValue] = useState('');

    function submit(event){
        event.preventDefault();
        props.search(inputValue);
    }  

    function handleChange(event){
        setInputValue(event.target.value);
        console.log(inputValue)
    }
/* 
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
      }
    
      const handleChange = (event) => {
        setInputValue(event.target.value);
    
    } */

    return (
        <div className ="main"> 
        
            <div className="Search_bar"> 

{/*             <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" value={inputValue} onChange={handleChange} />
               </label>
               <button type="submit">Submit</button>
            </form> */}

{/*             <form onSubmit='https://accounts.spotify.com/authorize?response_type=token&client_id=368150b868984cf686e852f56b5d5b6f&scope=user-read-private user-read-email&redirect_uri=http://localhost:3000'>
                <label>
                    <input className="Search_bar_input" type="text" placeholder="Search.." onChange={handleChange}/>
                </label>
                <a href = 'https://accounts.spotify.com/authorize?response_type=token&client_id=368150b868984cf686e852f56b5d5b6f&scope=user-read-private user-read-email&redirect_uri=http://localhost:3000'>
                     <button type="submit">Submit</button> 
                </a>

            </form> */}

                <input className="Search_bar_input" type="text" placeholder="Search.." onChange={handleChange}/>
                <a href = 'https://accounts.spotify.com/authorize?response_type=token&client_id=368150b868984cf686e852f56b5d5b6f&scope=user-read-private user-read-email&redirect_uri=http://localhost:3000/'>
                     <button type="submit" onClick={submit}>Submit</button> 
                </a>
            
            </div>
           
        </div>
    )

    
}

export default SearchBar;


/*             <input className="Search_bar_input" id="input" type="text" placeholder="Search.." name="searchInput"/>
            <input type="submit" id="submit" onClick={submit} /> */
            