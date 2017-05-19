import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';
import artistsReducer from './reducers/artists-reducer';
import albumsReducer from './reducers/albums-reducer';
import playlistsReducer from './reducers/playlists-reducer';
import songsReducer from './reducers/songs-reducer';
import {createStore, combineReducers} from 'redux';
import {applyMiddleware} from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const result = applyMiddleware(loggerMiddleware)
const thunk = applyMiddleware(thunkMiddleware)

export default createStore(combineReducers({
    lyrics: lyricsReducer,
    player: playerReducer,
    artists: artistsReducer,
    albums: albumsReducer,
    playlists: playlistsReducer,
    songs: songsReducer
}), result, thunk);


// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
