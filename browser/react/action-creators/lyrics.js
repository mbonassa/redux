import {SET_LYRICS} from '../constants';
import axios from 'axios';

export const setLyrics = function (text) {
    return {
        type: SET_LYRICS,
        lyric: text
    };
};

export const fetchLyrics = function (artist, song) {
  return function (dispatch, getState) {
    axios.get(`/api/lyrics/${artist}/${song}`)
      .then(res => {
        dispatch(setLyrics(res.data.lyric));
      });
  };
};

export const startPlaying = function () {
  return {
    type: START_PLAYING
  }
}

export const stopPlaying = function () {
  return {
    type: STOP_PLAYING
  }
}

export const setCurrentSong = function (currentSong) {
  return {
    type: SET_CURRENT_SONG,
    currentSong: currentSong
  }
}

export const setList = function (currentSong) {
  return {
    type: SET_LIST,
    currentSong: currentSong
  }
}

export const play = () => dispatch => {
  AUDIO.play();
  dispatch(startPlaying());
};

export const pause = () => dispatch => {
  AUDIO.pause();
  dispatch(stopPlaying());
};

export const load = (currentSong, currentSongList) => dispatch => {
  AUDIO.src = currentSong.audioUrl;
  AUDIO.load();
  dispatch(setCurrentSongList(currentSongList));
  dispatch(setCurrentSong(currentSong));
};

export const startSong = (song, list) => dispatch => {
  dispatch(pause());
  dispatch(load(song, list));
  dispatch(play());
};

export const toggle = () => (dispatch, getState) => {
  const { isPlaying } = getState().player;
  if (isPlaying) dispatch(pause()); 
  else dispatch(play());
};

export const toggleOne = (selectedSong, selectedSongList) => 
  (dispatch, getState) => {
    const { currentSong } = getState().player;
    if (selectedSong.id !== currentSong.id)
      dispatch(startSong(selectedSong, selectedSongList));
    else dispatch(toggle());
};

export const next = () => 
  (dispatch, getState) => {
    dispatch(startSong(...skip(1, getState().player)));
};

export const prev = () => 
  (dispatch, getState) => {
    dispatch(startSong(...skip(-1, getState().player)));
};
  

const fetchAlbumsFromServer =() => {
  return dispatch => {
    axios.get('/api/albums')
      .then(res => res.data)
      // use the dispatch method the thunkMiddleware gave us
      .then(albums => dispatch(receiveAlbumsFromServer(albums)));
  }
}

const playSong = songId => {
  return dispatch => {
    // side effects, like using the audio element belong in async action creators too, even if they aren't "async"
    audio.play()
    dispatch(selectSong(songId));
  }
}

const doSeveralThings = (stuffId, thingsId) => {
  return dispatch => {
    // we can also use async action creators to compose several actions into one!
    dispatch(doStuff(stuffId));
    dispatch(doThing(thingId));
  }
}
