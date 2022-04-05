import {
    LOAD_MOVIES_SUCCESS,
    LOAD_MOVIES_FAIL
} from './types';

export const load_movies = () => async dispatch => {
    try {
        const res = await fetch('/api/imdb/movies', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        const data = await res.json();
        console.log(data)

        if (res.status === 200) {
            dispatch({
                type: LOAD_MOVIES_SUCCESS,
                payload: data
            });
        } else {
            dispatch({
                type: LOAD_MOVIES_FAIL
            });
        }
    } catch(err) {
        dispatch({
            type: LOAD_MOVIES_FAIL
        });
    }
};