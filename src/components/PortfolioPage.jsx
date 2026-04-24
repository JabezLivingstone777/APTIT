import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import aboutImg1 from '../assets/about-img21.png';

// Expertise images
import appDevelopmentImg from "../assets/Techeminence/app-development.png";
import webDevelopmentImg from "../assets/Techeminence/development.svg";
import staffManagementImg from "../assets/Techeminence/staff-management.svg";

// Client logos
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

const PortfolioPage = () => {
    const allLogos = [
        logo1, logo2, logo3, logo4, logo5, logo6,
        logo7, logo8, logo9, logo10, logo11, logo12, logo13,
    ];

    const [currentSet, setCurrentSet] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSet((prev) => (prev + 1) % Math.ceil(allLogos.length / 6));
        }, 4000);
        return () => clearInterval(interval);
    }, [allLogos.length]);

    const startIndex = currentSet * 6;
    const visibleLogos = allLogos.slice(startIndex, startIndex + 6);

    return (
        <div className="min-h-screen bg-white">
            {/* Banner with image */}
            <div
                className="relative bg-cover bg-center py-20"
                style={{ backgroundImage: `url(${aboutImg1})` }}
            >
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
                        Portfolio
                    </h1>
                    <div className="flex items-center justify-center text-white">
                        <span className="hover:text-orange-400 transition-colors cursor-pointer">
                            Home
                        </span>
                        <ChevronRight className="h-4 w-4 mx-2 text-orange-400" />
                        <span className="text-orange-300 font-semibold">Portfolio</span>
                    </div>
                </div>
            </div>

            {/* OUR EXPERTISE Section */}
            <section className="pt-24 pb-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-8 tracking-wider text-slate-800">
                        OUR EXPERTISE
                    </h1>
                    <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto text-lg">
                        APT IT  is a trusted partner for businesses
                        seeking digital transformation. We specialize in cutting-edge
                        mobile app development, custom web solutions, cloud infrastructure,
                        and IT consulting services designed to optimize operations and
                        accelerate growth.
                    </p>
                    <div className="mt-8 w-32 h-1 bg-orange-500 mx-auto"></div>
                </div>

                {/* Expertise Cards */}
                <div className="max-w-6xl mx-auto mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {/* Mobile App Development */}
                        <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow group hover:bg-orange-500 hover:text-white">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-white">
                                    <img
                                        src={appDevelopmentImg}
                                        alt="Mobile App Development"
                                        className="w-8 h-8"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-white">
                                Mobile App Development
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white">
                                We engineer high-performance, custom mobile apps that drive
                                massive user acquisition and ensure long-term market
                                leadership.
                            </p>
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors">
                                <Link to="/mobile">Read More</Link>
                            </button>
                        </div>

                        {/* Web Development */}
                        <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow group hover:bg-orange-500 hover:text-white">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-white">
                                    <img
                                        src={webDevelopmentImg}
                                        alt="Web Development"
                                        className="w-8 h-8"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-white">
                                Web Development
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white">
                                We build intuitive, scalable web platforms designed to convert
                                visitors into loyal customers and accelerate your business
                                growth.
                            </p>
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors">
                                <Link to="/webdesign">Read More</Link>
                            </button>
                        </div>

                        {/* Staff Augmentation */}
                        <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow group hover:bg-orange-500 hover:text-white">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-white">
                                    <img
                                        src={staffManagementImg}
                                        alt="Staff Augmentation"
                                        className="w-8 h-8"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-white">
                                Staff Augmentation
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white">
                                We provide elite, vetted developers on-demand, enabling you to
                                rapidly scale teams, modernize systems, and accelerate
                                transformation.
                            </p>
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors">
                                <Link to="/staff-augmentation">Read More</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Authorised Partners */}
            <h2 className="text-5xl font-bold text-center mb-8 tracking-wider text-gray-800">
                AUTHORISED PARTNERS
            </h2>
            <p className="text-gray-600 text-center leading-relaxed max-w-4xl mx-auto mb-16 text-lg">
                APT IT  harnesses cutting-edge technologies and advanced platforms
                to deliver impactful solutions in web and mobile app development, cloud infrastructure,
                DevOps automation, and IT staffing. We collaborate with trusted technology partners to
                ensure innovation, quality, and scalability for our clients.
            </p>

            {/* About Us */}
            <div className="mt-16 text-center max-w-4xl mx-auto">
                <h2 className="text-5xl font-bold mb-16 tracking-wider text-slate-800">
                    ABOUT US
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                    Established in 2016, APT IT  has grown from a tech recruitment
                    agency into a dynamic, forward-thinking IT enterprise that specializes in delivering
                    custom software development, enterprise-grade solutions, and strategic IT consulting
                    services. Headquartered in New York, we bridge global expertise in an agile environment
                    to help our clients accelerate innovation and drive business growth.
                </p>
            </div>
            {/* Consultation Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 tracking-wide">
                        Let’s Transform Your Ideas Into Reality
                    </h2>
                    <p className="text-gray-600 mb-8 text-lg max-w-3xl mx-auto leading-relaxed">
                        At APT IT , we’re here to help you navigate your digital transformation journey.
                        Feel free to contact us for expert consultation and guidance tailored to your business needs.
                    </p>
                    <Link
                        to="/contact-us"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-colors"
                    >
                        Free Consultation Now
                    </Link>
                </div>
            </section>

            {/* Clients Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-16 tracking-wider text-slate-800">
                        OUR CLIENTS
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 items-center justify-center transition-all duration-500">
                        {visibleLogos.map((logo, index) => (
                            <div key={index} className="flex justify-center">
                                <img
                                    src={logo}
                                    alt={`Client ${index + 1}`}
                                    className="h-20 w-auto object-contain transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-gray-500 text-sm italic">
                        Showing {startIndex + 1}–
                        {Math.min(startIndex + 6, allLogos.length)} of {allLogos.length} clients
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PortfolioPage;
