import React, { useState } from 'react';
import MovieList from './MovieList';

function SearchBar() {
  const [movieName, setMovieName] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleSearch = () => {
    if (movieName.trim() === "") {
      return;
    }
    setShowResult(true);
  };

  return (
    <>
      {!showResult ? (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
          <h1 className="text-4xl font-bold mb-6 text-center animate-fade-in">Find Your Favorite Movie</h1>
          <div className="flex gap-3 bg-gray-800 p-3 rounded-lg shadow-xl w-full max-w-lg animate-fade-in">
            <input
              type="text"
              value={movieName}
              onChange={(e) => setMovieName(e.target.value)}
              className="p-3 w-full text-lg bg-gray-700 text-white rounded-md focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all"
              placeholder="Enter movie name..."
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white px-6 py-3 text-lg rounded-md hover:bg-blue-600 transition-all shadow-md"
            >
              Search
            </button>
          </div>
        </div>
      ) : (
        <div className="animate-fade-in">
          <MovieList sendMovie={movieName} />
        </div>
      )}
    </>
  );
}

export default SearchBar;
