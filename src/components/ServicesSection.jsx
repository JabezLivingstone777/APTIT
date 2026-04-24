import React from 'react';
import { Link } from "react-router-dom";
import TiltedCard from './ui/TiltedCard';
import './ui/AnimatedButton.css';
import mobileAppImg from '../assets/mobileapp.webp';
import webDevImg from '../assets/webdev.webp';
import staffAugImg from '../assets/staffaug.webp';

const ServicesSection = () => {
  const services = [
    {
      title: "Mobile App Development",
      description: "We specialize in creating high-quality mobile applications that enhance user experience and drive business growth.",
      image: mobileAppImg,
      alt: "Mobile app development",
      link: "/mobile",
      caption: "Next-Gen Mobile Apps"
    },
    {
      title: "Web Design & Development",
      description: "We craft visually stunning and highly functional websites that deliver seamless user experiences and empower businesses to thrive online.",
      image: webDevImg,
      alt: "Web development",
      link: "/webdesign",
      caption: "Interactive Web Solutions"
    },
    {
      title: "Staff Augmentation",
      description: "Our recruitment arm keeps evolving. At APT IT , we don't just fill roles. We align with your vision of business transformation.",
      image: staffAugImg,
      alt: "Staff augmentation",
      link: "/staff-augmentation",
      caption: "Expert Tech Talent"
    }
  ];

  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="container mx-auto px-6 sm:px-10 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 font-montserrat">
            Our <span className="text-[#FF8904]">Expertise</span>
          </h2>
          <div className="h-1.5 w-24 bg-[#FF8904] mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-6 max-w-2xl mx-auto text-lg">
            Empowering businesses with cutting-edge technology and innovative digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col h-full group">
              <div className="mb-8 w-full h-[320px] relative">
                <TiltedCard
                  imageSrc={service.image}
                  altText={service.alt}
                  captionText={service.caption}
                  containerHeight="320px"
                  containerWidth="100%"
                  imageHeight="300px"
                  imageWidth="100%"
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  showTooltip={true}
                  displayOverlayContent={false}
                />
              </div>

              <div className="flex flex-col flex-grow items-center text-center px-4">
                <h3 className="text-2xl font-black text-slate-900 mb-4 font-montserrat group-hover:text-[#FF8904] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed flex-grow text-lg">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="uiverse-button"
                >
                  More Info
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
