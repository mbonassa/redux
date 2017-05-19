import {RECEIVE_ALBUMS, RECEIVE_ALBUM} from '../constants';
import axios from 'axios';

export const receiveAlbumsFromServer = function (albums) {
    return {
        type: 'RECEIVE_ALBUMS',
        albums: albums
    }
}

export const fetchAlbumsFromServer =() => {
  return dispatch => {
    axios.get('/api/albums')
      .then(res => res.data)
      // use the dispatch method the thunkMiddleware gave us
      .then(albums => dispatch(receiveAlbumsFromServer(albums)));
  }
}

export const receiveAlbumFromServer = function (album) {
    return {
        type: 'RECEIVE_ALBUM',
        selectedAlbum: selectedAlbum
    }
}

export const fetchAlbumFromServer = (albumId) => {
    return dispatch => {
        axios.get(`/api/albums/${albumId}`)
          .then(res => res.data)
          .then(album => dispatch(receiveAlbumFromServer(album)))
    }
}