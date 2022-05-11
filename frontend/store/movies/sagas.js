import { takeLatest, call, put } from "redux-saga/effects";
import { setCurrentPage, searchOrFilterMovies, getMovies, setMovies, createMovie, getMovie, setMovie } from "./slice";
import movieService from "../../services/MovieService";

function* handleGetMovies(action) {
  console.log(action.payload);
  try {
    const movies = yield call(movieService.getAll, action.payload);
    yield put(setMovies(movies));
  } catch (error) {
    console.error(error);
  }
}

function* handleSearchOrFilterMovies(action) {
  console.log(action.payload);
  try {
    const movies = yield call(movieService.searchOrFilter, action.payload)
    yield put(setMovies(movies))
  } catch (error) {
    console.error(error)
  }
}

function* handleCreateMovie(action) {
  try {
    const movie = yield call(movieService.add(), action.payload.movie);
    console.log('Dobio add');

    if (action.payload.onSuccess) {
      yield call(action.payload.onSuccess, movie);
    }
  } catch (error) {
    console.error(error);
  }
}

function* handleGetMovie(action) {
  try {
    const movie = yield call(movieService.get, action.payload);

    yield put(setMovie(movie));
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetMovies() {
  yield takeLatest(getMovies.type, handleGetMovies);
}

export function* watchFilterMovies() {
  yield takeLatest(searchOrFilterMovies.type, handleSearchOrFilterMovies);
}

export function* watchCreateMovie() {
  yield takeLatest(createMovie.type, handleCreateMovie);
}

export function* watchGetMovie() {
  yield takeLatest(getMovie.type, handleGetMovie);
}
