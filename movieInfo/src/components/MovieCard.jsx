import { Link } from "react-router-dom";

function MovieCard({ id, title, year }) {
  return (
    <div className="bg-gray-800 bg-opacity-70 text-white p-5 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Movie Title */}
      <h3 className="text-xl font-bold text-blue-400 drop-shadow-lg text-center">{title}</h3>
      {/* View Details Button */}
      <Link
        to={`/movie/${id}`}
        className="mt-3 block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center transition-all duration-300"
      >
        View Details
      </Link>
    </div>
  );
}

export default MovieCard;
