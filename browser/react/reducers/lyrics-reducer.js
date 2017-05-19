import {SET_LYRICS} from '../constants';

const initialState = {text: ''};

export default function reducer (state = initialState, action) {

    const newState = Object.assign({}, state);

    switch (action.type) {
        case 'SET_LYRICS':
            newState.text = action.lyric;
            break;
        default:
            break;
    }
    return newState
}