import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowUp } from 'lucide-react';
import servicesData from '../data/servicesData.json';
import { assetMap } from '../lib/assetMap';
import FeatureCard from './ui/FeatureCard';
import FlowAnimation from './ui/FlowAnimation';
import Iphone from './ui/Iphone';
import PremiumCard from './ui/PremiumCard';
import iphoneVideo from '../assets/Techeminence/iphone.webm';
import './ServicePage.css';

// Memoize tech logos outside the component
const TECH_LOGOS_ARRAY = [...assetMap.techLogos, ...assetMap.techLogos, ...assetMap.techLogos];

const ServicePage = () => {
  const { id: paramId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  const id = useMemo(() => {
    if (paramId) return paramId;
    const path = location.pathname.split('/').filter(Boolean).pop();
    if (path === 'mobile') return 'mobile-app-development';
    if (path === 'webdesign') return 'web-design';
    if (path === 'staff-augmentation') return 'staff-augmentation';
    return path || 'mobile-app-development';
  }, [paramId, location.pathname]);

  const data = servicesData[id];
  const [selectedSuite, setSelectedSuite] = useState(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    if (!data) return;

    // Reset suite selection when data changes
    if (data.suite) {
      setSelectedSuite(data.suite.items[0]);
    }
    
    let isMounted = true;
    const loadAnim = async () => {
      if (!data.intro || !data.intro.animationKey) return;
      try {
        const key = data.intro.animationKey;
        let anim;
        if (key === 'mobile') {
          anim = await import('../assets/Mobile app development & concept user interface design uiux.json');
        } else if (key === 'web') {
          anim = await import('../assets/webdev.json');
        } else if (key === 'staffAugmentation') {
          anim = await import('../assets/Recruitment Hiring.json');
        }
        if (anim && isMounted) setAnimationData(anim.default);
      } catch (error) {
        // Silent fail for production
      }
    };
    
    loadAnim();
    
    return () => { 
      isMounted = false;
    };
  }, [id]); // Only re-run when ID changes

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-center p-10">
        <div>
          <h1 className="text-4xl font-bold text-orange-500 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/" className="bg-orange-500 text-white px-6 py-3 rounded-md font-bold">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative py-20 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${data.heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 mb-4">
            {data.title}
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-white text-sm sm:text-base">
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 hidden sm:block text-orange-400" />
            <span className="sm:hidden text-orange-400">›</span>
            <span className="text-orange-500 font-semibold">{data.breadcrumb}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 w-full lg:w-10/12">
        {/* Intro Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12 bg-white mb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-4">
                {data.intro.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {data.intro.text}
              </p>
            </div>
            <div className="flex justify-center md:justify-end mt-4 md:mt-0">
              <div className="w-full sm:w-[450px] h-auto">
                {animationData ? (
                  <Lottie 
                    key={id} // Force new instance on route change
                    animationData={animationData} 
                    loop 
                    autoplay 
                    rendererSettings={{
                      renderer: 'svg',
                      preserveAspectRatio: 'xMidYMid slice',
                      progressiveLoad: true,
                      hidePlaceholderOnOpen: true
                    }}
                  />
                ) : (
                  <div className="w-full h-[300px] bg-gray-50 animate-pulse rounded-2xl flex items-center justify-center text-gray-300">
                    Loading Animation...
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Suite Section */}
        {data.suite && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="py-12 mb-20"
          >
            <div className="max-w-screen-xl mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-orange-500 mb-10">
                {data.suite.title}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl rounded-3xl overflow-hidden bg-white min-h-[384px] lg:h-[384px]">
                {/* Sidebar with custom scrollbar - Fixed height for 6 items (6 * 64px) */}
                <div className="bg-orange-500 text-white flex flex-col overflow-y-auto h-[384px] lg:h-full custom-scrollbar">
                  {data.suite.items.map((item) => (
                    <div
                      key={item.id}
                      className={`cursor-pointer px-5 flex items-center justify-center text-center text-sm font-medium transition-all border-b border-orange-400/20 h-[64px] min-h-[64px] ${
                        selectedSuite?.id === item.id ? "bg-orange-600 font-bold shadow-lg" : "hover:bg-orange-600"
                      }`}
                      onClick={() => setSelectedSuite(item)}
                    >
                      {item.title}
                    </div>
                  ))}
                </div>
                
                {/* Content Area */}
                <div className="p-6 sm:p-10 flex flex-col justify-center items-center text-center bg-white overflow-y-auto lg:h-full">
                  <motion.div
                    key={selectedSuite?.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center"
                  >
                    <div className="text-4xl mb-3 transform hover:scale-110 transition-transform">{selectedSuite?.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-slate-800">{selectedSuite?.title}</h3>
                    <div className="w-12 h-0.5 bg-orange-500 mb-4 rounded-full"></div>
                    <p className="text-gray-600 leading-relaxed text-sm max-w-md">
                      {selectedSuite?.content}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Platforms Section */}
        {data.platforms && (
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="py-20 bg-white mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-16">
              {data.platforms.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.platforms.items.map((item, idx) => (
                id === 'staff-augmentation' ? (
                  <PremiumCard key={idx} title={item.title} text={item.description} image={assetMap[item.imageKey]} icon={item.icon || "🏢"} />
                ) : (
                  <FeatureCard
                    key={idx}
                    title={item.title}
                    image={assetMap[item.imageKey]}
                    description={item.description}
                  />
                )
              ))}
            </div>
          </motion.section>
        )}

        {/* Engagement Models */}
        {data.engagement && (
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="py-20 bg-white mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 text-center mb-12">
              {data.engagement.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {data.engagement.items.map((item, idx) => (
                id === 'staff-augmentation' ? (
                  <PremiumCard key={idx} title={item.title} text={item.description} image={assetMap[item.imageKey]} icon={item.icon || "🤝"} />
                ) : (
                  <div key={idx} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl border border-gray-200 hover:bg-orange-500 hover:text-white group transition-all duration-300">
                    <div className="flex justify-center mb-6">
                      <img src={assetMap[item.imageKey]} alt={item.title} className="w-20 h-20 object-contain" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="leading-relaxed">{item.description}</p>
                  </div>
                )
              ))}
            </div>
          </motion.section>
        )}

        {/* Process Section */}
        {data.process && data.integrations && (
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="py-20 bg-white mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-16">
              Our Process & Integrations
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-4 text-slate-800">{data.process.title}</h3>
                <div className="space-y-4 text-gray-700">
                  {data.process.items?.map((step, idx) => (
                    <p key={idx}>
                      <span className="font-semibold text-orange-500">{step.label}</span> - {step.text}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                {id === 'mobile-app-development' ? (
                  <div className="w-[300px]">
                    <Iphone videoSrc={iphoneVideo} />
                  </div>
                ) : (
                  <img src={assetMap[data.process.centerImageKey]} alt="Preview" className="w-full max-w-sm" />
                )}
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-4 text-slate-800">{data.integrations.title}</h3>
                <div className="space-y-4 text-gray-700">
                  {data.integrations.items?.map((item, idx) => (
                    <p key={idx}>
                      <span className="font-semibold text-orange-500">{item.label}</span> - {item.text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Why Choose Section */}
        {data.whyChoose && (
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="py-20 bg-white mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-16">
              {data.whyChoose.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              <div className="space-y-12">
                {data.whyChoose.items?.slice(0, 2).map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className={`${item.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <img src={assetMap.bulbIcon} alt="Icon" className="w-8 h-8 object-contain" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gray-100 rounded-full flex items-center justify-center shadow-xl">
                  <img src={assetMap.aptitlogo} alt="Logo" className="w-40" />
                </div>
              </div>
              <div className="space-y-12">
                {data.whyChoose.items?.slice(2).map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className={`${item.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <img src={assetMap.bulbIcon} alt="Icon" className="w-8 h-8 object-contain" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Model Section */}
        {data.model && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-20 bg-white mb-20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6">{data.model.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{data.model.text}</p>
                <ul className="space-y-3 list-disc pl-5 text-gray-600">
                  {data.model.points?.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                {id === 'staff-augmentation' ? (
                  <FlowAnimation />
                ) : (
                  <img src={assetMap[data.model.imageKey]} alt="Model" className="rounded-lg shadow-xl" />
                )}
              </div>
            </div>
          </motion.section>
        )}

        {/* Tech Stack Marquee */}
        <section className="py-16 bg-white marquee-container">
          <h2 className="text-3xl font-bold text-orange-500 text-center mb-12">Our Tech Eminence</h2>
          <div className="relative">
            <div className="flex animate-scroll whitespace-nowrap w-fit">
              {TECH_LOGOS_ARRAY.map((logo, idx) => (
                <img 
                  key={idx} 
                  src={logo} 
                  alt="Tech Logo" 
                  className="inline-block mx-8 h-12 sm:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                />
              ))}
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default ServicePage;
