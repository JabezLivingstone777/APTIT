import React from 'react';
import { Link } from "react-router-dom";
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">About Us</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Established in 2016, APT IT  has grown from a tech recruitment agency
              into a dynamic, forward-thinking IT enterprise that specializes in delivering custom
              software development, enterprise-grade solutions, and strategic IT consulting services.
              Headquartered in New York, we bridge global expertise in an agile environment to help our
              clients accelerate innovation and drive business growth.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-semibold transition-colors">
              <Link to="/about" >
                Checkout More
              </Link>
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaboration"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;