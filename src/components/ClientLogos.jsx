import React from "react";
import logo1 from "../assets/Client-logos/Untitled design (1).png";
import logo2 from "../assets/Client-logos/Untitled design (2).png";
import logo3 from "../assets/Client-logos/Untitled design (3).png";
import logo4 from "../assets/Client-logos/Untitled design (4).png";
import logo5 from "../assets/Client-logos/Untitled design (5).png";
import logo6 from "../assets/Client-logos/Untitled design (6).png";
import logo7 from "../assets/Client-logos/Untitled design (7).png";
import logo8 from "../assets/Client-logos/Untitled design (8).png";
import logo9 from "../assets/Client-logos/Untitled design (9).png";
import logo10 from "../assets/Client-logos/Untitled design (10).png";
import logo11 from "../assets/Client-logos/Untitled design (11).png";
import logo12 from "../assets/Client-logos/Untitled design (12).png";
import logo13 from "../assets/Client-logos/Untitled design(13).png";

const ClientLogos = () => {
  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7,
    logo8, logo9, logo10, logo11, logo12, logo13,
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-10">
        Our Clients
      </h2>
      <div className="overflow-hidden relative mb-6">
        <div className="flex animate-scroll whitespace-nowrap hover:animation-pause">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className="inline-block mr-6 h-16 object-contain"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 30s linear infinite;
          }
          .hover\\:animation-pause:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default ClientLogos;
