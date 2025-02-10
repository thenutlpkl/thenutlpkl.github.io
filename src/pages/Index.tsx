import React, { useState, useEffect } from 'react';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Footer from "@/components/Footer"; // Add this import
import { motion } from 'framer-motion';

const Index = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [worksLoaded, setWorksLoaded] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero onLoadComplete={() => setHeroLoaded(true)} />
        {heroLoaded && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Works onLoadComplete={() => setWorksLoaded(true)} />
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default Index;