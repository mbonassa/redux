import {RECEIVE_ARTISTS, RECEIVE_ARTIST} from '../constants';

const initialState = {
    artists: [],
    selectedArtist: {}
}

export default function reducer (state = initialState, action) {

    const newState = Object.assign({}, state);

    switch (action.type) {
        case 'RECEIVE_ARTISTS':
            newState.artists = action.artists;
            break;
        case 'RECEIVE_ARTISTS':
            newState.selectedArtist = action.selectedArtist;
            break;
        default:
            break;
    }

    return newState
}

