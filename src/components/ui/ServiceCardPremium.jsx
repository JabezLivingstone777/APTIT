import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './ServiceCardPremium.css';

const ServiceCardPremium = ({ title, text, link, backgroundImage, icon: Icon }) => {
  return (
    <motion.div 
      className="premium-card-container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div 
        className="premium-card-bg" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="premium-card-overlay"></div>
      </div>
      
      <div className="premium-card-shine"></div>
      
      <div className="premium-card-content">
        <div className="premium-card-header">
          {Icon && (
            <div className="premium-card-icon-wrapper">
              <img src={Icon} alt={title} className="premium-card-icon" />
            </div>
          )}
          <h3 className="premium-card-title font-orbitron">{title}</h3>
        </div>
        
        <div className="premium-card-details">
          <p className="premium-card-text">{text}</p>
          <Link to={link} className="premium-card-link group">
            <span>Explore More</span>
            <div className="premium-card-arrow">
              <ArrowUpRight size={18} />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCardPremium;
