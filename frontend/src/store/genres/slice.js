import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    getGenres() { },
    getGenre() { },
};

const genresSlice = createSlice({
    name: "genres",
    initialState: {
        allGenres: null,
        selectedGenre: null,
    },
    reducers: {
        setGenres(state, action) {
            state.allGenres = action.payload;
        },
        setGenre(state, action) {
            state.selectedGenre = action.payload;
        },
        ...middlewareActions,
    },
});

export default genresSlice.reducer;

export const { getGenres, setGenres, getGenre, setGenre } =
    genresSlice.actions;
