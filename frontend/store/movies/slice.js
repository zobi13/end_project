import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getMovies() { },
  createMovie() { },
  getMovie() { },
  filterMovies() { },
  getPaginatedMovies() { }
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    allMovies: {
      current_page: 0,
      data: []
    },
    selectedMovie: null,
  },
  reducers: {
    setMovies(state, action) {
      state.allMovies.data = action.payload;
    },
    setMovie(state, action) {
      state.selectedMovie = action.payload;
    },
    ...middlewareActions,
  },
});

export default moviesSlice.reducer;

export const { setCurrentPage, getPaginatedMovies, filterMovies, getMovies, setMovies, createMovie, getMovie, setMovie } =
  moviesSlice.actions;
