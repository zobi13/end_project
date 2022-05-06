import HttpService from "./HttpService";

class MovieService extends HttpService {

  getAll = async (searchTerm) => {
    const access = localStorage.getItem('access');
    if (!searchTerm) {
      const { data } = await this.client.get("/movies", access);
      return data
    } else {
      const { data } = await this.client.get(`/movies?title=${searchTerm}`, access)
      return data;
    }
  };

  paginate = async (pageNumber) => {
    const access = localStorage.getItem('access')
    if (!pageNumber) {
      const { data } = await this.client.get("/movies", access)
      return data
    } else {
      const { data } = await this.client.get(`/movies?page=${pageNumber}`)
      return data
    }
  }

  filter = async (filterTerm) => {
    const access = localStorage.getItem('access');

    const { data } = await this.client.get(`/movies?genre=${filterTerm}`, access)

    return data;
  }

  get = async (id) => {
    const access = localStorage.getItem('access');
    const { data } = await this.client.get(`/movies/${id}`, access);
    return data;
  };

  add = async (newMovie) => {
    console.log(newMovie);
    const access = localStorage.getItem('access')
    const { data } = await this.client.post("/movies/", newMovie, access);
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
