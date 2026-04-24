import React, { useState } from "react";
import aptitpsLogo from "../assets/aptitps-logo.png";
import { Phone, Mail, ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  const isLightPage = ["/privacy-policy", "/terms-and-conditions"].includes(location.pathname);

  return (
    <>
      {/* Fixed Header */}
      <header
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-white shadow-xl py-2"
            : (isLightPage ? "bg-white shadow-sm" : "bg-transparent")
          } py-4 lg:py-6 ${scrolled || isLightPage ? "text-black" : "text-white"}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-0.5 cursor-pointer">
              <img
                src={aptitpsLogo}
                alt="APTITPS Logo"
                className="h-12 w-10000 object-contain"
                style={{ maxWidth: "160px" }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className="font-bold text-lg hover:text-orange-400 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="font-bold text-lg hover:text-orange-400 transition-colors"
              >
                About Us
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  type="button"
                  className="font-bold text-lg hover:text-orange-400 transition-colors flex items-center space-x-1 focus:outline-none"
                  onClick={() => {
                    navigate("/services");
                    setIsServicesOpen(!isServicesOpen);
                  }}
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg py-2 z-50"
                    >
                      <Link
                        to="/mobile"
                        className="block px-4 py-2 font-bold text-black hover:bg-gray-100 hover:text-orange-500 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Mobile App Development
                      </Link>
                      <Link
                        to="/webdesign"
                        className="block px-4 py-2 font-bold text-black hover:bg-gray-100 hover:text-orange-500 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Web Design & Development
                      </Link>
                      <Link
                        to="/staff-augmentation"
                        className="block px-4 py-2 font-bold text-black hover:bg-gray-100 hover:text-orange-500 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Staff Augmentation
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/careers"
                className="font-bold text-lg hover:text-orange-400 transition-colors"
              >
                Careers
              </Link>

              <Link
                to="/portfolio"
                className="font-bold text-lg hover:text-orange-400 transition-colors"
              >
                Portfolio
              </Link>

              <Link
                to="/contact-us"
                className="font-bold text-lg hover:text-orange-400 transition-colors"
              >
                Contact Us
              </Link>
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-orange-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-bold">+1 (718) 360-4995</span>
              </div>
              <button className="ml-6 bg-red-500 hover:bg-orange-600 px-4 py-2 rounded-md text-sm flex items-center space-x-2 transition-colors font-bold">
                <Mail className="w-4 h-4" />
                <span>
                  <a href="mailto:info@aptitps.com">Mail Us</a>
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden bg-slate-900/90 backdrop-blur-xl py-6 shadow-2xl border-t border-white/10"
              >
                <nav className="flex flex-col space-y-4">
                  <Link
                    to="/"
                    className="font-bold text-white text-lg hover:text-orange-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="font-bold text-white text-lg hover:text-orange-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>

                  {/* Mobile Services Section */}
                  <Link
                    to="/services"
                    className="font-bold text-white text-lg hover:text-orange-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Services
                  </Link>

                  <div className="pl-4 flex flex-col space-y-1">
                    <Link
                      to="/mobile"
                      className="font-bold text-white text-lg hover:text-orange-400 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Mobile App Development
                    </Link>
                    <Link
                      to="/webdesign"
                      className="font-bold text-white text-lg hover:text-orange-400 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Web Design & Development
                    </Link>
                    <Link
                      to="/staff-augmentation"
                      className="font-bold text-white text-lg hover:text-orange-400 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Staff Augmentation
                    </Link>
                  </div>

                  <Link
                    to="/careers"
                    className="font-bold text-white text-lg hover:text-orange-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Careers
                  </Link>
                  <Link
                    to="/contact-us"
                    className="font-bold text-white text-lg hover:text-orange-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>

                  <div className="flex items-center space-x-2 text-orange-400 pt-2">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-bold">+1 (718) 360-4995</span>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Header;
