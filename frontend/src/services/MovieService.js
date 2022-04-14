import HttpService from "./HttpService";

class MovieService extends HttpService {

  getAll = async () => {
    const access = localStorage.getItem('access');
    const { data } = await this.client.get("/movies", access);
    return data;
  };

  get = async (id) => {
    const access = localStorage.getItem('access');
    const { data } = await this.client.get(`/movies/${id}`, access);
    return data;
  };

  add = async (newMovie) => {
    const { data } = await this.client.post("/movies/create/", newMovie);
    return data;
  };

  edit = async (id, movie) => {
    const { data } = await this.client.patch(`/movies/${id}/`, movie);
    return data;
  };

  delete = async (id) => {
    const { data } = await this.client.delete(`/movies/${id}/`);
    return data;
  };
}

const movieService = new MovieService();
export default movieService;
