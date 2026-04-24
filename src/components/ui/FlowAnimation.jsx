import React from 'react';
import { motion } from 'framer-motion';

const FlowAnimation = () => {
  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 260, damping: 20 }
    }
  };

  const textVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto aspect-square bg-[#FF8904] rounded-3xl p-8 flex items-center justify-center shadow-2xl">
      <svg viewBox="0 0 400 500" className="w-full h-full">
        {/* Animated Path */}
        <motion.path
          d="M 100 400 C 100 300 300 400 300 250 C 300 100 100 200 100 50"
          fill="transparent"
          stroke="white"
          strokeWidth="12"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Node 1: Long-term ROI */}
        <motion.g
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.circle variants={iconVariants} cx="100" cy="400" r="45" fill="white" />
          <foreignObject x="75" y="375" width="50" height="50">
            <div className="w-full h-full flex items-center justify-center text-[#FF8904] text-2xl">📈</div>
          </foreignObject>
          <motion.g variants={textVariants}>
            <text x="160" y="395" className="fill-white font-bold text-xl">Long-term</text>
            <text x="160" y="425" className="fill-white font-bold text-xl">ROI</text>
          </motion.g>
        </motion.g>

        {/* Node 2: Full-time commitment */}
        <motion.g
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          <motion.circle variants={iconVariants} cx="300" cy="250" r="45" fill="white" />
          <foreignObject x="275" y="225" width="50" height="50">
            <div className="w-full h-full flex items-center justify-center text-[#FF8904] text-2xl">🕒</div>
          </foreignObject>
          <motion.g variants={textVariants}>
            <text x="360" y="245" className="fill-white font-bold text-xl" textAnchor="start">Full-time</text>
            <text x="360" y="275" className="fill-white font-bold text-xl" textAnchor="start">commitment</text>
          </motion.g>
        </motion.g>

        {/* Node 3: Deep engineering knowledge */}
        <motion.g
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 1.8 }}
        >
          <motion.circle variants={iconVariants} cx="100" cy="50" r="45" fill="white" />
          <foreignObject x="75" y="25" width="50" height="50">
            <div className="w-full h-full flex items-center justify-center text-[#FF8904] text-2xl">🧠</div>
          </foreignObject>
          <motion.g variants={textVariants}>
            <text x="160" y="45" className="fill-white font-bold text-xl">Deep engineering</text>
            <text x="160" y="75" className="fill-white font-bold text-xl">knowledge</text>
          </motion.g>
        </motion.g>
      </svg>
    </div>
  );
};

export default FlowAnimation;
