import React from 'react';
import { motion } from 'framer-motion';
import StoryTab from './StoryTab'; 
import SkillTab from './SkillTab'; 
import ExperienceTab from './ExperienceTab';

interface TabContentProps {
  activeTab: 'story' | 'skills' | 'experience';
}

const tabVariants = {
  enter: {
    opacity: 0,
    y: 50,
  },
  center: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -50,
  },
};

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'story':
        return <StoryTab />;
      case 'skills':
        return <SkillTab />;
      case 'experience':
        return <ExperienceTab />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      variants={tabVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {renderContent()}
    </motion.div>
  );
};

export default TabContent;