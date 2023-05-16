
const client_id = '368150b868984cf686e852f56b5d5b6f';
const client_secret = '9689ec2455924e3fabd8a59e68399f85';



async function access_token() {

    let getToken = 'hello';

    await fetch("https://accounts.spotify.com/api/token",{

        method: 'POST',
        headers: {'Content-type': 'application/x-www-form-urlencoded'},
        body: 'grant_type=client_credentials&client_id=' + client_id +'&client_secret=' + client_secret
    
     }

    ) 
    .then(response =>{

        if (response.ok){
            const jsonResponse =  response.json();
            return jsonResponse
        }
        throw new Error('Request failed!')
    }

    )
    .then(data =>{
        getToken = data.access_token;
    }) 
    
    .catch(error => console.log(error)); 

    console.log(getToken)
    return getToken
}    



async function search(token,query){

    let tracks = []
    let uris = []

    const searchQuery = query
    await fetch(`https://api.spotify.com/v1/search?q=${searchQuery}&type=track`,{

        headers: {'Authorization': 'Bearer' + ' ' +  token }

    })
    .then( async response =>{
        const jsonResponse = await response.json();
        return jsonResponse
    }) 
    .then(data => { 

        const length = data.tracks.items.length

        for (let i = 0; i <= length-1;i++){

            let dict = {}
            dict.name = data.tracks.items[i].name
            dict.artist = data.tracks.items[i].artists[0].name
            dict.album = data.tracks.items[i].album.name
            dict.id = i
            dict.uri = data.tracks.items[i].uri
            //uris.push(dict.uri)
            tracks.push(dict)

        }
    })
    console.log(tracks)
    //const uri_json = {"uris":uris}
    //console.log(uri_json)
    return tracks

}

async function Save_playlist(){

    const playlist = {"uris":["spotify:track:5dntGTbUtmUO239wQ0k3yM",
    "spotify:track:0lnxrQAd9ZxbhBBe7d8FO8",
    "spotify:track:2n3CaPGPLYnYAvTEwKCX8t",

    "spotify:track:7GLqR9ToJLb0PV3XyNAWNm"]}

    const user_id = '31b2nuoszj5sgz4u7cdcrgoryeum'
    const name = "First Playlist"

    await fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {

        method: 'POST',
        headers: {'Authorization': 'Bearer' + ' ' +  'BQBqoYMvlQ-cekkO0xZOznKXZwoWdLEzRDhOS4mTzi1STfDbc80zzo4j__XQSU3hhljzXJjAPqKDCBowWx_-12iStOEgrDSWIKLuJx7HwrwnN_23FX3g'},
        body:  {"name": "First Playlist"}

    })
    .then(async response =>{

        if (response.ok){
            const jsonResponse =  await response.json();
            console.log(jsonResponse)
            return jsonResponse
        }
        throw new Error('Request failed yes!')
    })
}




module.exports= {access_token:access_token , search: search};

//console.log(access_token())
//console.log(Save_playlist())
//console.log(search())