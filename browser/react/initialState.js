const initialState = {
  albums: [],
  artists: [],
  selectedAlbum: {},
  selectedArtist: {},
  currentSong: {},
  currentSongList: [],
  isPlaying: false,
  progress: 0,
  playlists: [],
  selectedPlaylist: {},
  songs: []
};

export default initialState;

//isPlaying, currentSong, currentSongList

//export const START_PLAYING = 'START_PLAYING';
// export const STOP_PLAYING = 'STOP_PLAYING';
// export const SET_CURRENT_SONG = 'SET_CURRENT_SONG';
// export const SET_LIST = 'SET_LIST';