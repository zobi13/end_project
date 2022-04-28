import genreService from "../../services/GenreService";
import { takeLatest, call, put } from "redux-saga/effects";
import { getGenres, setGenres, getGenre, setGenre } from "./slice";




function* handleGetGenres(action) {
    try {
        const genres = yield call(genreService.getAll, action.payload);
        yield put(setGenres(genres));
    } catch (error) {
        console.error(error);
    }
}

function* handleGetGenre(action) {
    try {
        const genre = yield call(genreService.get, action.payload);

        yield put(setGenre(genre));
    } catch (error) {
        console.log(error);
    }
}