import HttpService from "./HttpService";

class MovieService extends HttpService {

  searchOrFilter = async ({ title, genre }) => {
    console.log(title);
    const access = localStorage.getItem('access');
    if (!title && !genre) {
      const { data } = await this.client.get("/movies", access);
      return data
    } else if (!genre) {
      const { data } = await this.client.get(`filterMovies/?title=${title}`, access)
      return data;
    } else if (!title) {
      const { data } = await this.client.get(`/filterMovies/?genre=${genre}`, access)
      return data;
    }
  };

  getAll = async (current_page) => {
    const access = localStorage.getItem('access')
    if (!current_page) {
      const { data } = await this.client.get("/movies", access)
      return data
    } else {
      const { data } = await this.client.get(`/movies?page=${current_page}`)
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
