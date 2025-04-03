import React, { useState, useEffect, useRef } from "react";

const StopWatch = () => {
const [time, setTime] = useState(0);
const [isRunning, setIsRunning] = useState(false);
const intervalRef = useRef(null);

const startWatch = () => {
    if (!isRunning) {
        setIsRunning(true);
        const startTime = Date.now() - time;
        intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
        }, 10);
    }
};

const stopWatch = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
};

const resetWatch = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
};

const formatTime = (ms) => {
    const milliseconds = Math.floor((ms % 1000) / 10);
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor(ms / (1000 * 60 * 60));

    return `${String(hours).padStart(2, "0")}:` +
            `${String(minutes).padStart(2, "0")}:` +
            `${String(seconds).padStart(2, "0")}:` +
            `${String(milliseconds).padStart(2, "0")}`;
};

useEffect(() => {
    return () => clearInterval(intervalRef.current);
}, []);

return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold mb-6">Stopwatch</h1>
        <div className="text-6xl font-mono bg-gray-800 px-8 py-4 rounded-lg shadow-md">
        {formatTime(time)}
        </div>
        <div className="mt-6 flex gap-4">
        <button 
            onClick={startWatch} 
            className="bg-green-500 px-6 py-3 rounded-lg shadow-md text-white text-lg font-semibold hover:bg-green-600 transition">
            Start
        </button>
        <button 
            onClick={stopWatch} 
            className="bg-red-500 px-6 py-3 rounded-lg shadow-md text-white text-lg font-semibold hover:bg-red-600 transition">
            Stop
        </button>
        <button 
            onClick={resetWatch} 
            className="bg-blue-500 px-6 py-3 rounded-lg shadow-md text-white text-lg font-semibold hover:bg-blue-600 transition">
            Reset
        </button>
        </div>
    </div>
    );
};

export default StopWatch;
