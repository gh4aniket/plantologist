import React from "react";

const CircularProgress = ({ value }) => {
  // Ensure value stays between 0 and 100
  const progress = Math.min(Math.max(value, 0), 100);

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-20 h-20 rounded-full bg-gray-200">
        <div
          className="absolute top-0 left-0 w-full h-full rounded-full"
          style={{
            background: `conic-gradient(#22c55e ${progress * 3.6}deg, transparent 0deg)`
          }}
        ></div>
        <div className="absolute top-2 left-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] rounded-full bg-white flex items-center justify-center">
          <span className="text-lg font-semibold text-gray-700">{progress}% </span>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
