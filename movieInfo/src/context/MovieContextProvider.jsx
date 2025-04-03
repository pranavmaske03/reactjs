import React, { useContext } from "react";
import MovieContext from "./MovieContext";

const movieList = [
    { id: 1, title: "Interstellar", year: 2010 },
    { id: 2, title: "Inception", year: 2015 },
    { id: 3, title: "The Dark Knight", year: 2017 },
    { id: 4, title: "Infinity War", year: 2014 },
    { id: 5, title: "Batman", year: 2011 },
    { id: 6, title: "From", year: 2017 },
    { id: 7, title: "Dark", year: 2020 },
    { id: 8, title: "EndGame", year: 2023 },
    { id: 9, title: "The Braking Bad", year: 2005 },
    ]

const MovieContextProvider = ({children}) => {
    return (
        <MovieContext.Provider value={{movieList}}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider;
export const useMovies = () => useContext(MovieContext);