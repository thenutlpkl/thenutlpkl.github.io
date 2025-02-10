import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -50px 0px"
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeInOut",
        staggerChildren: 0.2
      }}
      className="space-y-6"
    >
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-[#FEC6A1] text-xl font-light"
      >
        {title}
      </motion.h3>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const SkillTab = () => {
  return (
    <div className="space-y-24 max-w-[500px] mx-auto">
      {/* Main Skills Grid */}
      <div className="space-y-16">
        {/* Product & Brand Section */}
        <div className="grid grid-cols-2 gap-16">
          <ContentSection title="Product">
            <ul className="space-y-4 text-gray-400 font-light">
              <li>UI/UX Architecture & Strategy</li>
              <li>Human-Centered Design Solutions</li>
              <li>Interactive Prototyping</li>
              <li>Design Systems Engineering</li>
            </ul>
          </ContentSection>

          <ContentSection title="Brand">
            <ul className="space-y-4 text-gray-400 font-light">
              <li>Logo Design</li>
              <li>Icon Design</li>
              <li>Brand</li>
              <li>Presentation</li>
            </ul>
          </ContentSection>
        </div>

        {/* Web Development & Motion Section */}
        <div className="grid grid-cols-2 gap-16">
          <ContentSection title="Web Development">
            <ul className="space-y-4 text-gray-400 font-light">
              <li>Webflow</li>
              <li>Framer</li>
              <li>Builder.io</li>
            </ul>
          </ContentSection>

          <ContentSection title="Motion">
            <ul className="space-y-4 text-gray-400 font-light">
              <li>Motion Design & UI Animation</li>
              <li>Dynamic Presentation Design</li>
            </ul>
          </ContentSection>
        </div>
      </div>

      {/* Tools Section */}
      <ContentSection title="Tools">
        <div className="flex flex-wrap gap-2">
          {['Figma', 'Adobe Creative tools', 'Next.js', 'Chat GPT', 'Claude', 
            'After Effects', 'Webflow', 'Wordpress', 'Supernova'].map((tool) => (
            <span 
              key={tool} 
              className="px-3 py-1 rounded-full bg-[#FEC6A1]/10 text-[#FEC6A1] text-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </ContentSection>

      {/* When I'm not design Section */}
      <ContentSection title="When I'm not design">
        <div className="space-y-8">
          {/* I Read */}
          <div className="space-y-4">
            <h4 className="text-gray-400 font-light">I Read</h4>
            <div className="flex flex-wrap gap-2">
              {['Hackernoon', 'Medium', 'Nielsen Norman Group Article'].map((item) => (
                <span key={item} className="px-3 py-1 rounded-full bg-gray-800/50 text-gray-400 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* I Watch */}
          <div className="space-y-4">
            <h4 className="text-gray-400 font-light">I Watch</h4>
            <div className="flex flex-wrap gap-2">
              {['Y Combinator', 'Gamenivore', 'TED'].map((item) => (
                <span key={item} className="px-3 py-1 rounded-full bg-gray-800/50 text-gray-400 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* I Play */}
          <div className="space-y-4">
            <h4 className="text-gray-400 font-light">I Play</h4>
            <div className="flex flex-wrap gap-2">
              {['Marvel SNAP', 'Board game', 'RDR2'].map((item) => (
                <span key={item} className="px-3 py-1 rounded-full bg-gray-800/50 text-gray-400 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Interesting In Section */}
      <ContentSection title="Interesting In">
        <div className="flex flex-wrap gap-2">
          {['Technologies', 'AI', 'AR/VR', 'Wearable Tech', 'Conflict', 'Crafting',
            'Sustainability', 'Games', 'Culture', 'History', 'Healthcare', 'Investment'].map((interest) => (
            <span 
              key={interest} 
              className="px-3 py-1 rounded-full bg-[#FEC6A1]/10 text-[#FEC6A1] text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </ContentSection>
    </div>
  );
};

export default SkillTab;