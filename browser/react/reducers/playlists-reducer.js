import {RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST} from '../constants';

const initialState = {
    playlists: [],
    selectedPlaylist: {}
}

export default function reducer (state = initialState, action) {

    const newState = Object.assign({}, state);

    switch (action.type) {
        case 'RECEIVE_PLAYLISTS':
            newState.playlists = action.playlists;
            break;
        case 'RECEIVE_PLAYLIST':
            newState.selectedPlaylist = action.selectedPlaylist;
            break;
        default:
            break;
    }

    return newState
}

