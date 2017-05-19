import {START_PLAYING, STOP_PLAYING, SET_CURRENT_SONG, SET_LIST, SET_PROGRESS} from '../constants';
import axios from 'axios';

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

export const setCurrentSongList = function (currentSongList) {
  return {
    type: SET_LIST,
    currentSong: currentSongList
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
  