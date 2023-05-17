
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
        console.log('get=',getToken)
    }) 
    
    .catch(error => console.log(error)); 

    console.log('get=',getToken)
    return getToken
}    



async function search(token,query){

    let tracks = []
    //let uris = []

    const searchQuery = query
    await fetch(`https://api.spotify.com/v1/search?q=${searchQuery}&type=track`,{

        headers: {'Authorization': 'Bearer' + ' ' +  token}

    })
    .then( async response =>{
        if(response.ok){
        const jsonResponse = await response.json();
        return jsonResponse
        }
        throw new Error('Request failed!')
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
    return tracks

}

async function get_user_id(token){
    
    let user_id = ''

    await fetch('https://api.spotify.com/v1/me', {
        method: 'GET',
        headers: {'Authorization': 'Bearer' + ' ' + token}
    })
    .then(response => response.json())

    .then(data => {
        //console.log(data.id);
        user_id = data.id

    })
    .catch(error => {
        console.error('Error:', error);
    });

    return user_id
}

async function create_playlist(){
    const token = 'BQD0zJFG4j6Jo4oIKstspNMvFUFFdUucHCOQR5FmtyCFrgdWmJO6s11bXR3As-ieNFybfJ3GWyk2NE8i3jNXDOVtnNXO2xyXbVBrpgcfwZEl55w-Zv5NoGHXAVbd-0DHag8B6cZ1KFn2m2XJ4sqY1xOnZnbY6_TMTMXJuqq95tveAtXGWdIfb8893mLAlFtl0M49IsXagTzpbbtA5Y96ZL64WIfmYwIKuxS_XEyKBBwcSykcfA';
    const id = '31z4ue7ge54fln2tdysnaazmf4qa';
    
    const playlistData = {
        name: 'first Playlist',
        description: 'New playlist description',
        public: true
    };

    await fetch(`https://api.spotify.com/v1/users/${id}/playlists`, {
        method: 'POST',
        headers: {'Authorization': 'Bearer' + ' ' + token, 'Content-Type': 'application/json'},
        body: JSON.stringify(playlistData)
    })
    .then(response => response.json())

    .then(data => {
        console.log(data);

    })
    .catch(error => {
        console.error('Error:', error);

    });

}

async function Save_playlist(user_id){


    const playlist = {"uris":["spotify:track:5dntGTbUtmUO239wQ0k3yM",
    "spotify:track:0lnxrQAd9ZxbhBBe7d8FO8",
    "spotify:track:2n3CaPGPLYnYAvTEwKCX8t",

    "spotify:track:7GLqR9ToJLb0PV3XyNAWNm"]}

    //const user_id = '31b2nuoszj5sgz4u7cdcrgoryeum'
    const name = "First Playlist"

    await fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {

        method: 'POST',
        headers: {'Authorization': 'Bearer' + ' ' +  'BQAaZ2E8si5xvqAr7YYClmT8SUsQBCWkGP2fAI83uzh6fSRu_QXwdsmCOE-HjPSBtaQhVD5GBIJgXJ4s0uy6ieLFMtvUX0mBOJT3Qt-fYVkw7WNrJas3'},
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

/* const token = 'BQAaZ2E8si5xvqAr7YYClmT8SUsQBCWkGP2fAI83uzh6fSRu_QXwdsmCOE-HjPSBtaQhVD5GBIJgXJ4s0uy6ieLFMtvUX0mBOJT3Qt-fYVkw7WNrJas3'
console.log(token.slice(0,116)) */

/* for (let i = 0;i<token.length;i++){
    console.log(i,token[i])*/


module.exports= {access_token:access_token , search: search};

//console.log(access_token())
//console.log(Save_playlist())
//console.log(search())
//console.log(get_user_id())
//console.log(create_playlist())