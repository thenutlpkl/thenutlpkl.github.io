import React from 'react';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import { motion } from 'framer-motion';

const Index: React.FC = () => {
  return (
    <div className="text-white min-h-screen">
      <Navigation />
      <Hero />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Works />
      </motion.div>
    </div>
  );
};

export default Index;