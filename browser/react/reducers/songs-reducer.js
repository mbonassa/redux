import {RECEIVE_SONGS} from '../constants';

const initialState = {
    songs: []
}

export default function reducer (state = initialState, action) {

    const newState = Object.assign({}, state);

    switch (action.type) {
        case 'RECEIVE_SONGS':
            newState.songs = action.songs;
            break;
        default:
            break;
    }

    return newState
}

