import HttpService from "./HttpService";

// Kada se upise nesto u search bar, taj searchTerm se posalje kroz sagu do movieServicea i fetchuje se page 1
// odgovarajucih filmova
// Kada se, u slucaju da ima vise od 10 filmova, klikne na "Next" ili "Previous", onda se tek treba poslati
// podatak o tome koja je stranica (sledeca ili prosla) - konkretno, recimo da je korisnik na /movies?title=a
// (ovde se nalaze 10 filmova), pa onda ako klikne na next, onda se treba poslati request na /movies?title=a&page=2
// Pa onda, ako korisnik klikne na "Previous", onda se treba poslati request na /movies?title=a&page=1 itd...

class MovieService extends HttpService {

  getAll = async ({ page, genre, title }) => {
    const access = localStorage.getItem('access')
    if (!page && !genre && !title) {
      const { data } = await this.client.get("/movies", access)
      return data
    } else if (!genre && !title) {
      const { data } = await this.client.get(`/movies?page=${page}`)
      return data
    } else if (!genre || genre == "") {
      const { data } = await this.client.get(`/movies/?page=${page}&title=${title}`)
      return data
    } else if (!title || title == "") {
      const { data } = await this.client.get(`/movies/?page=${page}&genre=${genre}`)
      return data
    }
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
