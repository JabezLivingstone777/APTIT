import { motion } from 'framer-motion';
import { ArrowRight, Settings, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutExperienceSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Overlapping Images */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              {/* Main Large Image */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&h=550&q=80" 
                alt="Team working" 
                className="w-full max-w-md h-[450px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-8 rounded-2xl shadow-xl z-30">
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold">10+</span>
                  <span className="text-sm font-medium uppercase tracking-wider text-center mt-1">
                    Years Of<br />Experience
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Overlapping Secondary Image */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-12 -right-6 md:right-0 z-20 w-2/3 max-w-sm"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&h=350&q=80" 
                alt="Collaboration" 
                className="w-full rounded-2xl shadow-2xl border-8 border-white"
              />
            </motion.div>

            {/* Decorative Dot Pattern */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[radial-gradient(#f97316_2px,transparent_2px)] [background-size:20px_20px] opacity-20 -z-10"></div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:pl-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Label */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="w-10 h-[2px] bg-orange-500"></span>
                <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">About APTIT</span>
                <span className="w-10 h-[2px] bg-orange-500"></span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
                We Are Increasing Business Success With <span className="text-orange-600">Technology</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                At APT IT, we combine innovative engineering with strategic insight to help businesses navigate the digital landscape. Our mission is to deliver high-impact software solutions that solve real-world challenges.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Feature 1 */}
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Settings className="w-7 h-7 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Problem Solving</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Transforming complex challenges into streamlined digital solutions.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-7 h-7 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Mission & Vision</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Empowering innovation through quality engineering and design.
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default AboutExperienceSection;
