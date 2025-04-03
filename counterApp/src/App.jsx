import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const add = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  
  const sub = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);
  
  const reset = useCallback(() => {
    setCount(0);
  }, []);  

  useEffect(() => {
    const counter = parseInt(localStorage.getItem("counter")) || 0;
    setCount(counter);
  }, []);

  useEffect(() => {
    localStorage.setItem("counter", count);
  }, [count]);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white/20 backdrop-blur-lg shadow-lg rounded-lg p-8 text-center w-96">
        <h1 className="text-3xl font-bold text-white mb-4">My Counter App</h1>
        <h2 className="text-6xl font-bold text-white mb-6">{count}</h2>
        <div className="flex justify-center space-x-4">
          <button
            className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-md text-white transition-all duration-300"
            onClick={add}
          >
            Increment
          </button>
          <button
            className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-md text-white transition-all duration-300"
            onClick={sub}
          >
            Decrement
          </button>
        </div>
        <button
          className="mt-4 px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-md text-white transition-all duration-300"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
