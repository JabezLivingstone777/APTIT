import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import Preloader from "./components/Preloader";

// Lazy load Pages & Sections
const HeroSection = lazy(() => import("./components/HeroSection"));
const ServicesSection = lazy(() => import("./components/ServicesSection"));
const AboutSection = lazy(() => import("./components/AboutSection"));
const JobSection = lazy(() => import("./components/JobSection"));
const TestimonialSection = lazy(() => import("./components/TestimonialSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));
const ClientLogos = lazy(() => import("./components/ClientLogos"));
const AboutUsPage = lazy(() => import("./components/AboutUsPage"));
const ContactUsPage = lazy(() => import("./components/ContactUsPage"));
const Services = lazy(() => import("./components/Services"));
const CareersPage = lazy(() => import("./components/CareersPage"));
const ServicePage = lazy(() => import("./components/ServicePage"));
const PortfolioPage = lazy(() => import("./components/PortfolioPage"));

const PrivacyPolicyPage = lazy(() => import("./components/PrivacyPolicyPage"));
import logo from "./assets/aptitps-logo.png";

// Loading fallback component
const PageLoader = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 relative overflow-hidden">
    {/* Subtle background glow */}
    <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] animate-pulse"></div>
    
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
      className="relative z-10"
    >
      <img src={logo} alt="Loading..." className="h-20 w-auto object-contain" />
    </motion.div>
    
    <div className="mt-8 flex space-x-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.2
          }}
          className="w-2 h-2 bg-orange-500 rounded-full"
        />
      ))}
    </div>
  </div>
);

const TermsAndConditionsPage = lazy(() => import("./components/TermsAndConditionsPage"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <HeroSection />
                <ServicesSection />
                <AboutSection />
                <JobSection />
                <TestimonialSection />
                <ClientLogos />
                <ContactSection />
              </PageWrapper>
            }
          />
          <Route path="/about" element={<PageWrapper><AboutUsPage /></PageWrapper>} />
          <Route path="/contact-us" element={<PageWrapper><ContactUsPage /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/careers" element={<PageWrapper><CareersPage /></PageWrapper>} />
          <Route path="/mobile" element={<PageWrapper><ServicePage /></PageWrapper>} />
          <Route path="/webdesign" element={<PageWrapper><ServicePage /></PageWrapper>} />
          <Route path="/staff-augmentation" element={<PageWrapper><ServicePage /></PageWrapper>} />
          <Route path="/service/:id" element={<PageWrapper><ServicePage /></PageWrapper>} />
          <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicyPage /></PageWrapper>} />
          <Route path="/terms-and-conditions" element={<PageWrapper><TermsAndConditionsPage /></PageWrapper>} />
          <Route path="/portfolio" element={<PageWrapper><PortfolioPage /></PageWrapper>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Preloader />
        <Header />
        <ScrollToTop />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

