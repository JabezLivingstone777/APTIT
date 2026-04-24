import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCardModern = ({ title, description, icon, link }) => {
  return (
    <Link to={link} className="block w-full">
      <div
        className="relative overflow-hidden w-full h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-orange-500 shadow-xl group"
      >
        <div className="z-10 absolute w-full h-full peer"></div>
        
        {/* Top left bubble */}
        <div
          className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-orange-400/80 transition-all duration-500"
        ></div>
        
        {/* Bottom right content bubble */}
        <div
          className="absolute flex p-6 text-sm sm:text-base text-center items-center justify-center peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-orange-300/90 text-slate-900 transition-all duration-500 opacity-0 peer-hover:opacity-100 font-medium"
        >
          {description}
        </div>

        {/* Main Title Content */}
        <div className="w-full h-full items-center justify-center flex flex-col uppercase text-white p-6 transition-opacity duration-300 group-hover:opacity-0">
          <div className="mb-4 bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
            <img src={icon} alt={title} className="w-12 h-12 brightness-0 invert" />
          </div>
          <span className="text-center text-lg sm:text-xl">{title}</span>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCardModern;
