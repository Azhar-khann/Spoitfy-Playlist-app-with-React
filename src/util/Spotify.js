
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

async function create_playlist(token,user_id,name){

    
    const playlistData = {
        name: name,
        description: 'New playlist description',
        public: true
    };
    let playlist_id = ''

    await fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
        method: 'POST',
        headers: {'Authorization': 'Bearer' + ' ' + token, 'Content-Type': 'application/json'},
        body: JSON.stringify(playlistData)
    })
    .then(response => response.json())

    .then(data => {
        console.log(data);
        playlist_id = data.id

    })
    .catch(error => {
        console.error('Error:', error);

    });

    console.log(playlist_id)
    return playlist_id
}

async function add_tracks_to_playlist(token, playlist_id,tracks){

    //console.log('uris=',tracks)
    const data = {
        uris: tracks,
        position: 0
    };

    await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
}



module.exports= {access_token:access_token , search: search, get_user_id: get_user_id, create_playlist:create_playlist, add_tracks_to_playlist:add_tracks_to_playlist};

//console.log(access_token())
//console.log(Save_playlist())
//console.log(search())
//console.log(get_user_id())
//console.log(create_playlist())