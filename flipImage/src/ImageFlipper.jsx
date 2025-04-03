import { useState, useEffect } from "react";
import "./App.css";

function ImageFlipper() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      setRotateX((prevX) => {
        if (e.key === "ArrowUp") return (prevX + 180) % 360;
        if (e.key === "ArrowDown") return (prevX - 180 + 360) % 360;
        return prevX;
      });

      setRotateY((prevY) => {
        if (e.key === "ArrowRight") return (prevY + 180) % 360;
        if (e.key === "ArrowLeft") return (prevY - 180 + 360) % 360;
        return prevY;
      });
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="center min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>

      <div className="flip-container border border-purple-500 shadow-[0_0_40px_rgba(147,51,234,0.5)] rounded-lg p-2 relative">
        <div
          className="flipper transition-transform duration-[1200ms] ease-out"
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          }}
        >
          <div className="front absolute w-full h-full">
            <img
              src="https://plus.unsplash.com/premium_photo-1734543932103-37f616c1b0b1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="cat"
              className="image-style rounded-lg shadow-lg"
            />
          </div>
          <div className="back absolute w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="another_cat"
              className="image-style rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageFlipper;
