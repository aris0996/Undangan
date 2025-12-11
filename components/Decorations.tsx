import React from 'react';

export const MandalaTop = () => (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10 pointer-events-none">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-[spin_60s_linear_infinite]">
      <path fill="#F59E0B" d="M42.7,-73.4C55.9,-66.3,67.6,-56.9,76.5,-45.5C85.4,-34.1,91.5,-20.7,90.4,-7.8C89.3,5.1,81,17.5,72.4,28.7C63.8,39.9,54.9,49.9,44.2,57.7C33.5,65.5,21,71.1,7.9,72.4C-5.2,73.7,-18.8,70.7,-31.1,64.3C-43.4,57.9,-54.4,48.1,-63.4,36.5C-72.4,24.9,-79.4,11.5,-78.9,-1.7C-78.4,-14.9,-70.4,-27.9,-60.8,-38.7C-51.2,-49.5,-40,-58.1,-28.1,-66.1C-16.2,-74.1,-3.6,-81.5,8.2,-80.1C20,-78.7,40,-80.5,42.7,-73.4Z" transform="translate(100 100)" />
    </svg>
  </div>
);

export const FlowerDivider = () => (
  <div className="flex justify-center items-center gap-4 my-8 opacity-40">
    <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-500"></div>
    <div className="text-amber-500 text-xl">✤</div>
    <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-500"></div>
  </div>
);
