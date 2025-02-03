import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, useInView } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import TabContent from '../components/tabs/TabContent';

const buttonStyles = (isActive: boolean): string => `
  text-sm font-medium transition-all duration-500 px-4 py-2 rounded-full 
  ${isActive ? 'text-[#FEC6A1] bg-[#FEC6A1]/10' : 'text-muted-foreground hover:text-[#FEC6A1] hover:bg-[#FEC6A1]/5'}
`;

const Circle = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-[220px] h-[220px] rounded-full overflow-hidden group cursor-pointer"
    >
      <motion.div 
        className="absolute inset-0 bg-[#2A2E37] blur-md transform scale-105"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#FEC6A1]/20">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-full h-full"
        >
          <LazyLoadImage
            src="https://shorturl.at/6Tkkw" // Replace with your image URL
            alt="Profile"
            effect="blur"
            className="w-full h-full object-cover"
            wrapperClassName="w-full h-full"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-300" />
        
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
          style={{
            transform: 'translateX(-100%)',
            animation: 'shine 1.5s infinite'
          }}
        />
      </div>
    </motion.div>
  );
};

const Content = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="space-y-6 max-w-[500px]"
    >
      <h1 className="text-2xl font-light text-[#FEC6A1]">Embracing Complexity</h1>
      <div className="space-y-6 text-gray-400 text-base font-light leading-relaxed">
        <p>
          I craft stories through design, always considering <span className="text-white">business, users, developers, and designers</span>—with the goal of enabling all teams to work together seamlessly. I'm eager to learn, never afraid to help whenever I can.
        </p>
        <p>
          I like to challenge myself with all sorts of problems, from <span className="text-white">design complexities to business strategies</span>, always pushing for innovative solutions.
        </p>
      </div>
    </motion.div>
  );
};

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const tabs = [
    { id: 'story', label: 'Story' },
    { id: 'skill', label: 'Skill' },
    { id: 'experiences', label: 'Experiences' },
  ];

  return (
    <motion.nav
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      className="bg-background/40 backdrop-blur-lg border border-primary/10 rounded-full px-6"
    >
      <div className="h-14 flex items-center gap-8">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={buttonStyles(activeTab === tab.id)}
            aria-current={activeTab === tab.id ? 'page' : undefined}
            whileTap={{ scale: 0.95 }}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

const Myself = () => {
  const [activeTab, setActiveTab] = useState('story');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen"
    >
      <div className="container mx-auto px-4 pt-32">
        <div className="max-w-[900px] mx-auto">
          <div className="flex flex-col items-center space-y-16">
            <div className="flex flex-col items-center space-y-12">
              <Circle />
              <Content />
            </div>
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabContent activeTab={activeTab} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Myself;