import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function MovieList({ sendMovie }) {
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchMovieData = useCallback(async () => {
        if (!sendMovie) return;

        setLoading(true);
        setError(null);

        const controller = new AbortController(); // To cancel previous requests
        const signal = controller.signal;

        try {
            const URL = `https://www.omdbapi.com/?apikey=226caa34&s=${sendMovie}`;
            const response = await fetch(URL, { signal });

            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }

            const data = await response.json();
            if (data.Response === "False") {
                throw new Error(data.Error || "No movies found");
            }

            setMovieList(data.Search || []);
        } catch (err) {
            if (err.name !== "AbortError") {
                setError(err.message);
            }
        } finally {
            setLoading(false);
        }

        return () => controller.abort(); // Cleanup function
    }, [sendMovie]);

    useEffect(() => {
        fetchMovieData();
    }, [fetchMovieData]);

    // 🟢 Improved Loading Screen
    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-3xl font-bold text-black animate-pulse">Loading movies...</p>
            </div>
        );
    }

    // 🔴 Error Message UI
    if (error) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-2xl text-red-500 font-bold">{error}</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-4xl text-white font-bold text-center mb-6">Movie Results</h1>
            <h2 className="text-lg text-gray-400 text-center mb-8">
                Showing results for: <span className="text-blue-400 font-semibold">{sendMovie}</span>
            </h2>

            {movieList.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {movieList.map((movie) => (
                        <div
                            key={movie.imdbID}
                            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer transform hover:scale-105"
                            onClick={() => navigate('/movie-details', { state: { movie } })}
                        >
                            <img
                                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'}
                                alt={movie.Title}
                                className="w-full h-64 object-cover rounded-md mb-2"
                            />
                            <h3 className="text-lg text-white font-semibold">{movie.Title}</h3>
                            <p className="text-gray-400">({movie.Year})</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-400 text-xl">No movies found</p>
            )}
        </div>
    );
}

export default MovieList;
