"use client";

import React from "react";

const ProgressCircle = ({ percentage = 85 }) => {
  return (
    <div className="relative w-[100px] h-[100px] mx-auto">
      <svg className="transform -rotate-90" width="100" height="100" viewBox="0 0 36 36">
        <circle
          className="text-gray-200"
          strokeWidth="3"
          stroke="currentColor"
          fill="transparent"
          r="16"
          cx="18"
          cy="18"
        />
        <circle
          className="text-[#1DA1F2] animate-progress-circle"
          strokeWidth="3"
          strokeDasharray={`${percentage}, 100`}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="16"
          cx="18"
          cy="18"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-[28px] font-bold text-[#1E1E1E]">
        {percentage}%
      </div>

      <style jsx>{`
        @keyframes progressCircle {
          0% {
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dashoffset: ${100 - percentage};
          }
        }

        .animate-progress-circle {
          animation: progressCircle 2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ProgressCircle;
