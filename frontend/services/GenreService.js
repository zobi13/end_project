import React from 'react'
import HttpService from './HttpService';

class GenreService extends HttpService {
    getAll = async () => {
        const { data } = await this.client.get("/genres");
        return data;
    };

    get = async (id) => {
        const { data } = await this.client.get(`/genres/${id}`);
        return data;
    };
}

const genreService = new GenreService();
export default genreService;
