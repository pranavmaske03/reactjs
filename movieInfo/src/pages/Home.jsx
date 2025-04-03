import React from "react";
import MovieCard from "../components/MovieCard";
import { useMovies } from "../context/MovieContextProvider";

export default function Home() {
    const { movieList } = useMovies();

  return (
    <>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-100 tracking-wide drop-shadow-lg">
            🎬 Movie Collection
        </h1>

        {/* Movie Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {movieList.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
            ))}
        </div>
        </div>
    </>
  );
}
