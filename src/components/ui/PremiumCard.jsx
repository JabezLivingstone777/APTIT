import React from 'react';
import { motion } from 'framer-motion';

const PremiumCard = ({ title, text, icon, image }) => {
  return (
    <div
      className="relative h-full min-h-[22em] w-full border-2 border-orange-500/20 rounded-[1.5em] bg-gradient-to-br from-orange-600 via-orange-500/80 to-orange-400/20 text-white p-[1.5em] flex justify-center items-left flex-col gap-[1em] backdrop-blur-[12px] hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 group/card hover:-translate-y-2"
    >
      {/* Glossy Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-orange-400/30 via-orange-300/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-[1.5em]"
      ></div>
      
      {/* Pulse Background */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.1),transparent_60%)] group-hover/card:animate-pulse"
      ></div>

      {/* Top Decorative Dots */}
      <div className="absolute top-4 right-4 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-orange-200/50"></div>
        <div className="w-2 h-2 rounded-full bg-orange-200/30"></div>
        <div className="w-2 h-2 rounded-full bg-orange-200/10"></div>
      </div>

      <div
        className="relative z-10 transition-transform duration-300 group-hover/card:translate-y-[-2px] space-y-3"
      >
        <div className="mb-4 transform group-hover/card:scale-110 transition-transform duration-300 inline-block">
          {image ? (
            <img src={image} alt={title} className="w-16 h-16 object-contain" />
          ) : (
            <div className="text-4xl opacity-90">{icon || "🚀"}</div>
          )}
        </div>
        <h1
          className="text-[1.8em] font-bold bg-gradient-to-r from-white via-orange-100 to-orange-200 bg-clip-text text-transparent leading-tight"
        >
          {title}
        </h1>
        <p className="text-[0.95em] text-orange-50/90 leading-relaxed font-light">
          {text}
        </p>
      </div>

      <button
        className="relative h-fit w-fit px-[1.4em] py-[0.7em] mt-2 border-[1px] border-orange-200/30 rounded-full flex justify-center items-center gap-[0.7em] overflow-hidden group/btn hover:border-orange-200/50 hover:shadow-lg hover:shadow-orange-500/20 active:scale-95 transition-all duration-300 backdrop-blur-[12px] bg-orange-500/10"
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-orange-600/40 via-orange-400/40 to-orange-600/40 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"
        ></div>

        <p className="relative z-10 font-medium tracking-wide">Explore Now</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="relative z-10 w-5 h-5 group-hover/btn:translate-x-[10%] transition-transform duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          ></path>
        </svg>
      </button>

      {/* Bottom Decorative Blur */}
      <div
        className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-orange-300/20 to-transparent blur-sm group-hover/card:animate-pulse"
      ></div>
    </div>
  );
};

export default PremiumCard;
