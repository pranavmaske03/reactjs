import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

function MovieDetails() {
    const location = useLocation();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const movieID = location.state?.movie?.imdbID;

    const fetchMovieDetails = useCallback(async () => {
        if (!movieID) return;

        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=226caa34&i=${movieID}`);
            const data = await response.json();

            if (data.Response === "True") {
                setMovie(data);
            } else {
                throw new Error(data.Error);
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [movieID]);

    useEffect(() => {
        fetchMovieDetails();
    }, [fetchMovieDetails]);

    if (loading) return <p className="text-center text-lg font-semibold text-black">Loading movie details...</p>;
    if (error) return <p className="text-center text-red-500 font-semibold">{error}</p>;

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
            {movie && (
                <div 
                    className="absolute inset-0 bg-cover bg-center blur-lg opacity-30"
                    style={{ backgroundImage: `url(${movie.Poster})` }}
                ></div>
            )}
            {movie && (
                <div className="relative z-10 max-w-4xl bg-gray-800 bg-opacity-90 shadow-lg rounded-lg p-8">
                    <h1 className="text-4xl font-bold text-center mb-4">{movie.Title}</h1>
                    <div className="flex flex-col md:flex-row gap-6">
                        <img 
                            src={movie.Poster} 
                            alt={movie.Title} 
                            className="w-full md:w-1/3 max-w-xs mx-auto rounded-lg shadow-md"
                        />
                        <div className="flex flex-col justify-center space-y-3 text-gray-300">
                            <p><strong>📅 Released:</strong> {movie.Released}</p>
                            <p><strong>🎬 Genre:</strong> {movie.Genre}</p>
                            <p><strong>🎥 Director:</strong> {movie.Director}</p>
                            <p><strong>👨‍🎤 Actors:</strong> {movie.Actors}</p>
                            <p><strong>🌍 Country:</strong> {movie.Country}</p>
                            <p><strong>⭐ IMDb Rating:</strong> {movie.imdbRating} ({movie.imdbVotes} votes)</p>
                            <p><strong>🏆 Awards:</strong> {movie.Awards}</p>
                            <p><strong>🕒 Runtime:</strong> {movie.Runtime}</p>
                            <p><strong>💰 Box Office:</strong> {movie.BoxOffice}</p>
                            <p className="text-gray-400 text-sm"><strong>📜 Plot:</strong> {movie.Plot}</p>
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        <Link 
                            to="/" 
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-md"
                        >
                            🔙 Back to Search
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MovieDetails;