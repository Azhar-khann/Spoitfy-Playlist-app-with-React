
//console.log('hello');

const client_id = '368150b868984cf686e852f56b5d5b6f';
const client_secret = '9689ec2455924e3fabd8a59e68399f85';

async function access_token() {
    
    let getToken = '';

    await fetch("https://accounts.spotify.com/api/token",{

        method: 'POST',
        headers: {'Content-type': 'application/x-www-form-urlencoded'},
        body: 'grant_type=client_credentials&client_id=' + client_id +'&client_secret=' + client_secret
    
    }

    ).then(async response =>{
        if (response.ok){
            const jsonResponse = await response.json();
            return jsonResponse
        }
        throw new Error('Request failed!')

    }

    ).then(data =>{
        getToken = data.access_token;
    }

    ).catch(error => console.log(error));

   console.log(getToken)
   return getToken

}  

async function search(){

    let tracks = []

    const searchQuery = "happy"
    await fetch(`https://api.spotify.com/v1/search?q=${searchQuery}&type=track`,{

        headers: {'Authorization': 'Bearer' + ' BQCycv2i10I1nWBY91OSpAtwVySsMRv5azPV2IHG_zHTuYG5PF2e-88YmXcmAlQl1mICNzfZZu83TinjbJeHQPlNRY51Essb19zMWM9DDx_GRT168zf6'}

    })
    .then( async response =>{
        const jsonResponse = await response.json();
        return jsonResponse
    }) 
    .then(data => { 

        const length = data.tracks.items.length

        for (let i = 0; i <= length-1;i++){
            //songs.push(data.tracks.items[i].name)
            //console.log(data.tracks.items[i].artists[0].name)
            //console.log(data.tracks.items[i].name)
            //console.log(data.tracks.items[i].album.name)

            let dict = {}
            dict.name = data.tracks.items[i].name
            dict.artist = data.tracks.items[i].artists[0].name
            dict.album = data.tracks.items[i].album.name
            dict.id = i

            tracks.push(dict)

        }
    })
    console.log(tracks)
    return tracks


}





//console.log(access_token())
console.log(search())