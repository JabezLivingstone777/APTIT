import React from 'react';
import aboutImg1 from '../assets/about-img1.png';
import googleMap from '../assets/google-map.png';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import TestimonialSection from './TestimonialSection';
import ServiceCardPremium from './ui/ServiceCardPremium';
import appDevelopmentImg from '../assets/Techeminence/app-development.png';
import webDevelopmentImg from '../assets/Techeminence/development.svg';
import staffManagementImg from '../assets/Techeminence/staff-management.svg';
import { Link } from "react-router-dom";

import AboutExperienceSection from './ui/AboutExperienceSection';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative py-20 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521790361543-f645cf042ec4?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-gray-900/80 to-slate-900/90"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold text-orange-500 mb-4 drop-shadow-lg">
            About Us
          </h1>
          <div className="flex items-center justify-center text-white">
            <Link to="/" className="hover:text-orange-400 transition-colors cursor-pointer">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-orange-400" />
            <span className="text-orange-500 font-semibold">About Us</span>
          </div>
        </div>
      </div>

      {/* New Professional Experience Section */}
      <AboutExperienceSection />


      {/* Hero Section with Team Image */}
      <div className="bg-white py-40">
        <div className="max-w-7xl mx-auto px-4 text-center relative">

          {/* World Map Background */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 pointer-events-none select-none">
            <img
              src={googleMap}
              alt="World map background"
              className="w-full max-w-3xl mx-auto opacity-60"
              style={{ zIndex: 0 }}
              loading="lazy"
            />
          </div>
          
          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 px-4">
            <ServiceCardPremium
              title="Mobile App Development"
              text="We engineer high-performance, custom mobile apps that drive massive user acquisition and ensure long-term market leadership."
              link="/mobile"
              icon={appDevelopmentImg}
              backgroundImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
            />
            <ServiceCardPremium
              title="Web Development"
              text="We build intuitive, scalable web platforms designed to convert visitors into loyal customers and accelerate your business growth."
              link="/webdesign"
              icon={webDevelopmentImg}
              backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
            />
            <ServiceCardPremium
              title="Staff Augmentation"
              text="We provide elite, vetted developers on-demand, enabling you to rapidly scale teams, modernize systems, and accelerate transformation."
              link="/staff-augmentation"
              icon={staffManagementImg}
              backgroundImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </div>

      {/* About Content Section */}
      

      {/* Vision & Mission Section with Accordion Animation */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-slate-900 mb-12 text-center"
          >
            Our Vision & Mission
          </motion.h2>
          
          <div className="space-y-4">
            <AccordionItem 
              title="Vision Statement" 
              content="To become the most trusted global partner for transformative digital solutions - empowering businesses to innovate, scale, and lead in an ever-evolving technological world." 
              defaultOpen={true}
            />
            <AccordionItem 
              title="Mission Statement" 
              content="At APT IT, our mission is to deliver high-impact software solutions that solve real-world business challenges. We are committed to building scalable, secure, and human-centered digital products through collaboration, innovation, and a relentless focus on quality." 
            />
            <AccordionItem 
              title="We aim to:" 
              isList={true}
              content={[
                "Build technology that drives meaningful outcomes",
                "Offer flexible engagement models tailored to your goals",
                "Continuously evolve through agile, transparent, and client-first practices",
                "Foster a culture of excellence, learning, and ethical innovation"
              ]}
            />
          </div>

          <div className="mt-20">
            <TestimonialSection />
          </div>
        </div>
      </div>
    </div>
  );
};

const AccordionItem = ({ title, content, isList = false, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-orange-600' : 'text-slate-800 group-hover:text-orange-500'}`}>
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`p-1 rounded-full ${isOpen ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-500'}`}
        >
          <ChevronRight className="w-5 h-5 transform rotate-90" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="px-8 pb-8 text-gray-600 leading-relaxed text-lg border-t border-gray-50 pt-6">
              {isList ? (
                <ul className="space-y-4">
                  {content.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{content}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default AboutUsPage;
