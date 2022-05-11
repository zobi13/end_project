export function selectMovies(state) {
  return state.movies.allMovies.data;
}

export function selectMovie(state) {
  return state.movies.selectedMovie;
}
