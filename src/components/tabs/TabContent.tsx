import { motion, AnimatePresence } from 'framer-motion';
import StoryTab from './StoryTab';
import SkillTab from './SkillTab'; 
import ExperienceTab from './ExperienceTab';

const tabVariants = {
  enter: {
    opacity: 0,
    y: 20,
  },
  center: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

const TabContent = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'story':
        return <StoryTab />;
      case 'skill':
        return <SkillTab />;
      case 'experiences':
        return <ExperienceTab />;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        variants={tabVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          duration: 0.5,
          ease: "easeInOut"
        }}
        className="w-full mt-12"
      >
        {renderContent()}
      </motion.div>
    </AnimatePresence>
  );
};

export default TabContent;