export function selectMovies(state) {
  return state.movies.allMovies.data;
}

export function selectMovie(state) {
  return state.movies.selectedMovie.data;
}

export function selectLikeActive(state) {
  return state.movies.selectedMovie.likeActive
}

export function selectDislikeActive(state) {
  return state.movies.selectedMovie.dislikeActive;
}