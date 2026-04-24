import React from 'react';
import aboutImg1 from '../assets/about-img1.png';
import googleMap from '../assets/google-map.png';
import { ChevronRight } from 'lucide-react';
import appDevelopmentImg from '../assets/Techeminence/app-development.png';
import webDevelopmentImg from '../assets/Techeminence/development.svg';
import staffManagementImg from '../assets/Techeminence/staff-management.svg';
import { Link } from "react-router-dom";
import ServiceCardModern from './ui/ServiceCardModern';

const Services = () => {
  const servicesList = [
    {
      title: "Mobile App Development",
      description: "We engineer high-performance, custom mobile apps that drive massive user acquisition and ensure long-term market leadership.",
      icon: appDevelopmentImg,
      link: "/mobile"
    },
    {
      title: "Web Development",
      description: "We build intuitive, scalable web platforms designed to convert visitors into loyal customers and accelerate your business growth.",
      icon: webDevelopmentImg,
      link: "/webdesign"
    },
    {
      title: "Staff Augmentation",
      description: "We provide elite, vetted developers on-demand, enabling you to rapidly scale teams, modernize systems, and accelerate transformation.",
      icon: staffManagementImg,
      link: "/staff-augmentation"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Section */}
      <div
        className="relative py-20 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold text-orange-500 mb-4">Services</h1>
          <div className="flex items-center justify-center text-white">
            <Link to="/" className="hover:text-orange-400 transition-colors cursor-pointer">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-orange-400" />
            <span className="text-orange-500">Services</span>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 pointer-events-none select-none">
            <img
              src={googleMap}
              alt="World map background"
              className="w-full max-w-3xl mx-auto opacity-60"
              style={{ zIndex: 0 }}
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Welcome to APTIT
            </h2>
            <p className="text-xl text-gray-500 mb-12">
              Engineering Tomorrow's Tech - Today!
            </p>
          </div>
          <div className="relative mb-20">
            <img
              src={aboutImg1}
              alt="Professional team illustration"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Services Section - Updated Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 px-4">
            {servicesList.map((service, index) => (
              <ServiceCardModern 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;