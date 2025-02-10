import React, { useState } from 'react';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Footer from "@/components/Footer"; 
import { motion } from 'framer-motion';

const Index: React.FC = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);

  const handleHeroLoadComplete = () => {
    setHeroLoaded(true);
  };

  return (
    <div className="text-white min-h-screen">
      <Navigation />
      <Hero onLoadComplete={handleHeroLoadComplete} />
      {heroLoaded && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Works />
        </motion.div>
      )}
      <Footer />
    </div>
  );
};

export default Index;