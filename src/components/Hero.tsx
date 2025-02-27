import { Linkedin } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

interface HeroProps {
  onLoadComplete?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onLoadComplete }) => {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (onLoadComplete) {
      onLoadComplete();
    }
  }, [onLoadComplete]);

  useEffect(() => {
    if (isInView && onLoadComplete) {
      const timer = setTimeout(() => {
        onLoadComplete();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isInView, onLoadComplete]);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={containerRef}
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { duration: 0.8 }
        }
      }}
      initial="hidden"
      animate={controls}
      className="container mx-auto px-4 pt-[20vh] pb-16"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div 
          ref={textRef}
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { 
              y: 0, 
              opacity: 1,
              transition: { duration: 0.6 }
            }
          }}
          initial="hidden"
          animate={controls}
          className="flex items-center justify-start space-x-4 mb-2"
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
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { 
              y: 0, 
              opacity: 1,
              transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
            }
          }}
          initial="hidden"
          animate={controls}
          className="text-xl text-muted-foreground mb-8"
        >
          Lead Product Designer at{' '}
          <motion.a 
            href="https://bit.ly/4jAmBQB" 
            target="_blank" 
            rel="noopener noreferrer"
            ref={textRef}
            className="relative inline-block group"
          >
            <span className="relative z-10 transition-all duration-300 
              group-hover:text-[#FEC6A1] 
              group-hover:drop-shadow-[0_0_4px_rgba(254,198,161,0.3)]"
            >
              Invitrace Health
            </span>
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FEC6A1] to-transparent"
              initial={{ scaleX: 0 }}
              whileHover={{ 
                scaleX: 1,
                transition: { 
                  duration: 0.4, 
                  ease: [0.645, 0.045, 0.355, 1] 
                }
              }}
              style={{
                transformOrigin: 'center',
                opacity: 0.7
              }}
            />
            <motion.div 
              className="glitter absolute inset-0 bg-[#FEC6A1]/10 opacity-0 blur-lg rounded-lg group-hover:opacity-20"
              animate={{ 
                opacity: [0, 0.2, 0],
                transition: { 
                  duration: 0.4, 
                  repeat: 1, 
                  ease: "easeInOut" 
                } 
              }}
            />
          </motion.a>
        </motion.h2>

        <motion.div 
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { 
              y: 0, 
              opacity: 1,
              transition: { duration: 0.8, ease: "easeOut", delay: 0.4 }
            }
          }}
          initial="hidden"
          animate={controls}
          className="flex items-center justify-start space-x-6 mb-12 mt-8"
        >
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

        <motion.div 
          variants={{
            hidden: { y: 30, opacity: 0 },
            visible: { 
              y: 0, 
              opacity: 1,
              transition: { duration: 0.8, ease: "easeOut", delay: 0.6 }
            }
          }}
          initial="hidden"
          animate={controls}
          className="text-lg text-muted-foreground leading-relaxed space-y-6"
        >
          <p>
          As Lead Designer at Invitrace, I drive the design strategy and innovation for our healthcare technology products, ensuring high-quality solutions that deliver value to our customers.
          </p>
          <p>
            I'm dedicated to mentoring colleagues, conducting thoughtful design reviews, and fostering knowledge-sharing to continuously elevate our collective expertise and deliver exceptional healthcare experiences.
          </p>
          {/* Development Message Chip */}
          <div className="inline-flex items-center gap-2 
            px-4 py-2.5
            bg-[#2C2F3A]/30 
            backdrop-blur-md 
            rounded-full 
            border border-[#3A3F4C]/30
            shadow-sm
            shadow-black/10
            group
            hover:border-[#FEC6A1]/20
            transition-all duration-300"
          >
            <svg 
              className="w-4 h-4 text-[#FEC6A1] animate-pulse" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
              />
            </svg>
            <span className="text-sm font-medium text-gray-300">
              This portfolio is actively being developed. New projects will be added regularly.
            </span>
            <span className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <span 
                  key={i}
                  className="w-1 h-1 rounded-full bg-[#FEC6A1]/80"
                  style={{
                    animation: `bounce 1.4s infinite ${i * 0.2}s`
                  }}
                />
              ))}
            </span>
          </div>

          {/* Canadian Visa Chip */}
          <div className="inline-flex items-center gap-2.5
            px-4 py-2.5
            bg-[#2C2F3A]/30 
            backdrop-blur-md 
            rounded-full 
            border border-[#3A3F4C]/30
            shadow-sm
            shadow-black/10
            group
            hover:border-[#FEC6A1]/20
            hover:bg-[#2C2F3A]/50
            transition-all duration-300"
          >

            <span className="text-sm font-medium text-gray-300">
              Valid Canadian visa until end of 2026
            </span>

            {/* Optional: Small Sparkle Effect */}
            <svg 
              className="w-3 h-3 text-[#FEC6A1] opacity-75"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L9.75 8.25L3.5 10.5L9.75 12.75L12 19L14.25 12.75L20.5 10.5L14.25 8.25L12 2Z" />
            </svg>
          </div>
        </motion.div>

{/* Projects Introduction */}
<motion.div 
  variants={{
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 1.0 }
    }
  }}
  initial="hidden"
  animate={controls}
  className="mt-32"
>
  {/* Wide Image with Interactive Animation */}
  <div className="w-full h-[320px] mb-12 rounded-2xl overflow-hidden bg-[#2C2F3A]/30 backdrop-blur-md">
    <motion.img 
      src="https://images.unsplash.com/photo-1620207418302-439b387441b0?q=80&w=2167&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      alt="Projects Overview" 
      className="w-full h-full object-cover"
      initial={{ scale: 1.2 }}
      animate={{ 
        scale: [1.2, 1.25, 1.2],
        x: [0, 5, -5, 0],
        y: [0, -5, 5, 0]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }}
    />
  </div>

  {/* Two Column Layout */}
  <div className="grid grid-cols-2 gap-16 max-w-3xl mx-auto">
    {/* Left Column */}
    <div className="flex items-start">
      <h2 className="text-4xl font-serif font-light text-[#FEC6A1] italic">
        Things I've worked on
      </h2>
    </div>

    {/* Right Column */}
    <div className="flex flex-col items-start">
      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        With the opportunities to work on multiple design systems in the past, there's quite a bit to share, so grab a cup of ☕️ or 🍵 and let me tell you how I think of it.
      </p>
      <RouterLink 
        to="/design-system" 
        className="inline-flex items-center gap-2 text-[#FEC6A1] hover:text-[#FEC6A1]/80 transition-colors group"
      >
        Come on in 
        <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
      </RouterLink>
    </div>
  </div>
</motion.div>
        {/* Global Styles for Animations */}
        <style>{`
          @keyframes bounce {
            0%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-4px); }
          }

          @keyframes wave {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(15deg); }
            75% { transform: rotate(-15deg); }
          }
        `}</style>
      </div>
    </motion.div>
  );
};

export default Hero;