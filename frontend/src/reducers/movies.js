import {
    LOAD_MOVIES_FAIL,
    LOAD_MOVIES_SUCCESS
} from '../actions/types';

const initialState = {
    all: null
};

const moviesReducer = (state = initialState, action) => {
    const { type, payload } = action;
    console.log(payload)

    switch(type) {
        case LOAD_MOVIES_SUCCESS:
            return {
                ...state,
                all: payload.movies
            }
        case LOAD_MOVIES_FAIL:
            return {
                ...state,
                all: null
            }
        default:
            return state;
    };
};

export default moviesReducer;