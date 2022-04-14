import * as moviesSagas from "./movies/sagas";
import * as authSagas from "./auth/sagas";

const sagas = {
  ...moviesSagas,
  ...authSagas,
};

export default sagas;
