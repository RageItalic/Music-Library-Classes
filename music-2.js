class Library{
  constructor(name, creator){
    this.name = name;
    this.creator = creator;
    this.playlist = [];
  }
  addPlaylist (playlists){
    this.playlist.push(playlists);
  }
}

class Track{
  constructor(title, rating, length){
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

class Playlist{
  constructor(name){
    this.name = name;
    tracks = [];
  }

  addTrack(track){
    this.tracks.push(track);
  }

  getRating(){
    var rating = 0;
    for(var i = 0; i < this.tracks.length; i++){
      rating += this.tracks[i].rating;
    }
    return (rating/this.tracks.length);
  }

  duration(){
    var dur = 0;
    for (var q = 0; q < this.tracks.length; q++){
      dur += this.tracks[q].length;
    }
    return dur;
  }
}