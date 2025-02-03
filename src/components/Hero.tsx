import { Instagram, Linkedin } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React, { useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Hero = () => {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: true });

  const handleEnter = () => {
    controls.start({
      color: '#FEC6A1',
      scale: 1.02,
      textShadow: '0 0 8px #FEC6A1, 0 0 15px #FEC6A1',
      transition: { duration: 0.5, ease: "easeInOut" }
    });
  };

  const handleLeave = () => {
    controls.start({
      color: '#FFFFFF',
      scale: 1,
      textShadow: 'none',
      transition: { duration: 0.4, ease: "easeInOut" }
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const headerVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
    }
  };

  const socialVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 }
    }
  };

  const descriptionVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.6 }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="container mx-auto px-4 pt-32 pb-16"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div 
          variants={headerVariants}
          className="flex items-center justify-center space-x-4 mb-2"
        >
          <h1 className="text-4xl font-light">Hey,</h1>
          <div className="overflow-hidden rounded-full w-[56px] h-[56px] bg-primary/10 flex items-center justify-center">
            <DotLottieReact
              src="https://lottie.host/3754ff67-e6cd-4885-b631-5c01fccfa822/yWOdGnDPXz.lottie"
              loop
              autoplay
              style={{ 
                width: '100%', 
                height: '100%',
                objectFit: 'cover',
                transform: 'scale(1.5)'
              }}
            />
          </div>
          <h1 className="text-4xl font-light">I'm Tanawitch Saentree,</h1>
        </motion.div>

        <motion.h2 
          variants={headerVariants}
          className="text-xl text-muted-foreground mb-8"
        >
          Lead Product Designer at{' '}
          <motion.a 
            href="https://bit.ly/4jAmBQB" 
            target="_blank" 
            rel="noopener noreferrer"
            ref={textRef}
            className="relative inline-block transition-all"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            animate={controls}
          >
            <span className="relative z-10">Invitrace Health</span>
            <motion.div 
              className="glitter absolute inset-0 bg-[#FEC6A1]/10 opacity-0 blur-lg rounded-lg"
              animate={{ opacity: [0, 1, 0], transition: { duration: 0.4, repeat: Infinity, ease: "easeInOut" } }}
            />
          </motion.a>
        </motion.h2>

        <motion.div 
          variants={socialVariants}
          className="flex items-center justify-center space-x-6 mb-12 mt-8"
        >
          <a 
            href="https://www.instagram.com/nate_sume/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram size={18} />
            <span>Instagram</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/tanawitch-saentree/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://medium.com/@thenutlpkl" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="w-[18px] h-[18px] flex items-center justify-center">M</span>
            <span>Medium</span>
          </a>
        </motion.div>

        <motion.p 
          variants={descriptionVariants}
          className="text-lg text-muted-foreground leading-relaxed"
        >
          A lifelong learner and designer who grows my stories through designs and illustrations. 
          With over 15 years of experience in the design industry, I strive to prove that design 
          can solve anything while working towards creating something of my own.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Hero;