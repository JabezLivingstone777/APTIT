import React from "react";
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import facebookIcon from "../assets/Footer Icons/icons8-facebook-48.png";
import xIcon from "../assets/Footer Icons/icons8-circled-x-48.png";
import instagramIcon from "../assets/Footer Icons/icons8-instagram-48.png";
import linkedinIcon from "../assets/Footer Icons/icons8-linkedin-circled-48.png";

const Footer = () => {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Popular Links */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-6">POPULAR LINKS</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/mobile" className="text-gray-600 hover:text-orange-500 transition-colors">
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link to="/webdesign" className="text-gray-600 hover:text-orange-500 transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/staff-augmentation" className="text-gray-600 hover:text-orange-500 transition-colors">
                    Staff Augmentation
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-orange-500 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="text-gray-600 hover:text-orange-500 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-6">ADDRESS</h3>
              <div className="text-gray-600">
                <p className="font-medium mb-2">APT IT , INC</p>
                <p>800 Third Avenue</p>
                <p>FRNT A #1472</p>
                <p>New York, NY 10022</p>
                <p>United States</p>
              </div>
            </div>

            {/* Get in Touch */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-6">GET IN TOUCH</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-3" />
                  <a href="tel:+17183604995" className="hover:text-orange-500 transition-colors">
                    +1 (718) 360-4995
                  </a>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="h-4 w-4 mr-3" />
                  <a href="mailto:info@aptips.com" className="hover:text-orange-500 transition-colors">
                    info@aptips.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-6">Find Us And Say HAI</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <img src={facebookIcon} alt="Facebook" className="h-6 w-6 mr-3" loading="lazy" />
                  <a href="https://www.facebook.com/people/APTIT-Professional-Service/100066877321032/#" className="hover:text-orange-500 transition-colors">Facebook</a>
                </div>
                <div className="flex items-center text-gray-600">
                  <img src={xIcon} alt="X" className="h-6 w-6 mr-3" loading="lazy" />
                  <a href="https://x.com/APTITServices" className="hover:text-orange-500 transition-colors">X</a>
                </div>
                <div className="flex items-center text-gray-600">
                  <img src={instagramIcon} alt="Instagram" className="h-6 w-6 mr-3" loading="lazy" />
                  <a href="https://www.instagram.com/aptitps/" className="hover:text-orange-500 transition-colors">Instagram</a>
                </div>
                <div className="flex items-center text-gray-600">
                  <img src={linkedinIcon} alt="LinkedIn" className="h-6 w-6 mr-3" loading="lazy" />
                  <a href="https://www.linkedin.com/company/aptit-professional-services-usa/" className="hover:text-orange-500 transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-500">
              ©Copyright 2026 <span className="text-orange-500 font-medium">APT IT</span> All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Full Width Footer Strip */}
      <div className="bg-slate-900 text-white py-6 w-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="hover:text-orange-400 transition-colors">Terms & Conditions</Link>
              <Link to="/about" className="hover:text-orange-400 transition-colors">About Us</Link>
              <Link to="/contact-us" className="hover:text-orange-400 transition-colors">Contact Us</Link>
            </div>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
