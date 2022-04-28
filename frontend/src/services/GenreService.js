import React from 'react'
import HttpService from './HttpService';

class GenreService extends HttpService {
    getAll = async () => {
        const access = localStorage.getItem('access');
        const { data } = await this.client.get("/genres", access);
        return data;
    };

    get = async (id) => {
        const access = localStorage.getItem('access');
        const { data } = await this.client.get(`/genres/${id}`, access);
        return data;
    };
}

const genreService = new GenreService();
export default genreService;
