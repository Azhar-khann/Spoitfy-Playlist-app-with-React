let tracklist = {
    track1:{
        name:'Hello',
        artist:'Eminem',
        album: 'Reputation'

    },
    track2:{
        name:'world',
        artist:'taylor',
        album:'wednesday'
    }
}
console.log(tracklist.track1)
for (const i in tracklist){
    console.log(tracklist[i].name);

}