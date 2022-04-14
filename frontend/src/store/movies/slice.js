import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getMovies() { },
  createMovie() { },
  getMovie() { },
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    allMovies: null,
    selectedMovie: null,
  },
  reducers: {
    setMovies(state, action) {
      state.allMovies = action.payload;
    },
    setMovie(state, action) {
      state.selectedMovie = action.payload;
    },
    ...middlewareActions,
  },
});

export default moviesSlice.reducer;

export const { getMovies, setMovies, createMovie, getMovie, setMovie } =
  moviesSlice.actions;