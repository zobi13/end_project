export function selectMovies(state) {
  // console.log(state.movies.allMovies);
  return state.movies.allMovies.data;
}

export function selectMovie(state) {
  return state.movies.selectedMovie;
}
