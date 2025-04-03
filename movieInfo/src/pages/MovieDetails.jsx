import { useParams, Link } from "react-router-dom";
import { useMovies } from "../context/MovieContextProvider";

function MovieDetails() {
  const { id } = useParams();
  const { movieList } = useMovies();
  const movieDetail = movieList.find((movie) => movie.id == id);

  if (!movieDetail) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p className="text-red-500 text-lg">Movie not found! 🔍</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-lg w-full text-center border border-gray-700">
        <h2 className="text-4xl font-bold text-blue-400 drop-shadow-lg mb-4">🎬 {movieDetail.title}</h2>
        <p className="text-gray-400 text-lg">Release Year: <span className="text-white font-semibold">{movieDetail.year}</span></p>
        
        <Link 
          to="/" 
          className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
}

export default MovieDetails;
