import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Information Collection",
      content: "We collect information that you provide directly to us when you fill out contact forms, apply for jobs, or communicate with us through our website. This may include your name, email address, phone number, and any other information you choose to provide."
    },
    {
      title: "2. How We Use Information",
      content: "We use the information we collect to provide, maintain, and improve our services, including Mobile App Development and Staff Augmentation. We may also use this information to communicate with you about projects, job applications, or to send you technical notices and updates."
    },
    {
      title: "3. Data Security",
      content: "We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no internet transmission is ever fully secure or error-free."
    },
    {
      title: "4. Information Sharing",
      content: "We do not share your personal information with third parties except as described in this policy or as required by law. We may share information with vendors and service providers who need access to such information to carry out work on our behalf."
    },
    {
      title: "5. Your Choices",
      content: "You may opt out of receiving promotional communications from us by following the instructions in those communications. If you opt out, we may still send you non-promotional communications, such as those about your project status or our ongoing business relations."
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
            Privacy Policy
          </motion.h1>
          <div className="flex items-center space-x-4 text-gray-500">
            <span className="w-12 h-0.5 bg-orange-500"></span>
            <p className="font-medium">Last Updated: April 2026</p>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-8">
            Your privacy is important to us. This Privacy Policy explains how APT IT collects, uses, and protects your information when you visit our website.
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
              For any privacy-related inquiries, please contact our data protection officer at <span className="text-orange-500 font-medium">privacy@aptit.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
