import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Navigation from "@/components/Navigation";
import ProjectGrid from "@/components/ProjectGrid";

const Works = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.includes('#works')) {
      containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <motion.div 
      ref={containerRef}
      id="works"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen"
    >
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-8"
          >
            <h1 className="text-2xl font-light text-[#FEC6A1]">
              Works
            </h1>
            <p className="text-base text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
              It has been an absolute pleasure to put my heart and soul into these projects. 
              While you're here, browse these projects.
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px bg-[#FEC6A1]/20 flex-1 max-w-[200px]" />
              <span className="text-[#FEC6A1]/40">◆</span>
              <div className="h-px bg-[#FEC6A1]/20 flex-1 max-w-[200px]" />
            </div>
          </motion.div>

          {/* Filter Bar */}
          {/* Temporarily hidden as per user request
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center gap-2"
          >
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full bg-[#FEC6A1]/10 text-[#FEC6A1]"
            >
              All
            </motion.button>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-[#FEC6A1] hover:bg-[#FEC6A1]/5 transition-colors"
            >
              Work
            </motion.button>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-[#FEC6A1] hover:bg-[#FEC6A1]/5 transition-colors"
            >
              Projects
            </motion.button>
          </motion.div>
          */}

          {/* Project Grid */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <ProjectGrid />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Works;