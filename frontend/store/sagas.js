import * as moviesSagas from "./movies/sagas";
import * as authSagas from "./auth/sagas";
import * as genresSagas from "./genres/sagas";

const sagas = {
  ...moviesSagas,
  ...authSagas,
  ...genresSagas,
};

export default sagas;
