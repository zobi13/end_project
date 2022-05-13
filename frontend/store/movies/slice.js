import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getMovies() { },
  createMovie() { },
  getMovie() { },
  getLikeActive() { },
  getDislikeActive() { }
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    allMovies: {
      data: []
    },
    selectedMovie: {
      likeActive: false,
      dislikeActive: false,
      data: null
    },
  },
  reducers: {
    setMovies(state, action) {
      state.allMovies.data = action.payload;
    },
    setMovie(state, action) {
      state.selectedMovie.data = action.payload;
    },
    setLikeActive(state, action) {
      state.selectedMovie.likeActive = action.payload
    },
    setDislikeActive(state, action) {
      state.selectedMovie.dislikeActive = action.payload
    },
    ...middlewareActions,
  },
});

export default moviesSlice.reducer;

export const { getMovies, setMovies, createMovie, getMovie, setMovie, setDislikeActive, setLikeActive, getLikeActive, getDislikeActive } =
  moviesSlice.actions;
