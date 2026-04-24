import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const TermsAndConditionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Agreement to Terms",
      content: "By accessing and using the services provided by APT IT Professional Services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services."
    },
    {
      title: "2. Intellectual Property Rights",
      content: "Unless otherwise stated, APT IT and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this from APT IT for your own personal use subjected to restrictions set in these terms and conditions."
    },
    {
      title: "3. Restrictions",
      content: "You are specifically restricted from all of the following: publishing any website material in any other media; selling, sublicensing and/or otherwise commercializing any website material; publicly performing and/or showing any website material; using this website in any way that is or may be damaging to this website."
    },
    {
      title: "4. Professional Services",
      content: "Our services including Mobile App Development, Web Development, and Staff Augmentation are provided under specific project agreements. While we strive for excellence, project timelines and deliverables are subject to the specific terms outlined in individual service contracts."
    },
    {
      title: "5. Limitation of Liability",
      content: "In no event shall APT IT, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. APT IT, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this website."
    },
    {
      title: "6. Variation of Terms",
      content: "APT IT is permitted to revise these terms at any time as it sees fit, and by using this website you are expected to review these terms on a regular basis."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-32 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 border-b border-gray-100 pb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-black mb-6"
          >
            Terms and Conditions
          </motion.h1>
          <div className="flex items-center space-x-4 text-gray-500">
            <span className="w-12 h-0.5 bg-orange-500"></span>
            <p className="font-medium">Last Updated: April 2026</p>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-8">
            Please read these terms and conditions carefully before using our website or engaging with our professional services.
          </p>

          <div className="space-y-16">
            {sections.map((section, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <span className="text-orange-500 mr-4">0{index + 1}.</span>
                  {section.title.split('. ')[1]}
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-500 text-sm">
              If you have any questions about these Terms, please contact us at <span className="text-orange-500 font-medium">info@aptitps.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
