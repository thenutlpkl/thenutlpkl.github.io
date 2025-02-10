import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useInView } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import TabContent from '../components/tabs/TabContent';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/supabaseClients';
import { Profile } from '../types/database.types';

const buttonStyles = (isActive: boolean): string => `
  text-sm font-medium transition-all duration-500 px-4 py-2 rounded-full 
  ${isActive ? 'text-[#FEC6A1] bg-[#FEC6A1]/10' : 'text-muted-foreground hover:text-[#FEC6A1] hover:bg-[#FEC6A1]/5'}
`;

const fetchProfile = async () => {
  const { data, error } = await supabase
    .from('profiles')
    .select('avatar_url')
    .single();

  if (error) {
    throw error;
  }

  return data;
};

const Circle = () => {
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);
  const ref = useRef(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const isInView = useInView(ref, { once: true });

  const { data: profile, isLoading } = useQuery<Profile>({
    queryKey: ['profile'],
    queryFn: fetchProfile,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });

  const imageUrl = profile?.avatar_url || "https://shorturl.at/6Tkkw";
  const fallbackImage = "https://shorturl.at/6Tkkw";

  useEffect(() => {
    console.log('Profile data:', profile);
    console.log('Image URL:', imageUrl);
  }, [profile, imageUrl]);

  useEffect(() => {
    if (imageRef.current) {
      const img = imageRef.current;
      
      const handleLoad = () => {
        console.log('Image load event triggered');
        console.log('Image complete:', img.complete);
        console.log('Image natural width:', img.naturalWidth);
        
        if (img.complete && img.naturalWidth > 0) {
          setIsFullyLoaded(true);
          console.log('Image fully loaded');
        }
      };

      const handleError = () => {
        console.error('Image load error');
        img.src = fallbackImage;
      };

      img.addEventListener('load', handleLoad);
      img.addEventListener('error', handleError);
      
      // Force load check
      if (img.complete && img.naturalWidth > 0) {
        setIsFullyLoaded(true);
      }
      
      return () => {
        img.removeEventListener('load', handleLoad);
        img.removeEventListener('error', handleError);
      };
    }
  }, [imageUrl, fallbackImage]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: isFullyLoaded ? 1 : 0, 
        scale: isFullyLoaded ? 1 : 0.9 
      }}
      transition={{ 
        duration: 0.4, 
        type: "spring", 
        stiffness: 120, 
        damping: 10 
      }}
      className="w-[220px] h-[220px] rounded-full overflow-hidden relative"
    >
      {/* Animated background with gradient */}
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ 
          opacity: isFullyLoaded ? 0 : 0.3,
          background: 'linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%)' 
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 z-10"
      />

      {/* Image container with fade and scale */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: isFullyLoaded ? 1 : 0, 
          scale: isFullyLoaded ? 1 : 0.9 
        }}
        transition={{ 
          duration: 0.5, 
          type: "spring", 
          stiffness: 100, 
          damping: 9 
        }}
        className="w-full h-full"
      >
        <img
          ref={imageRef}
          src={imageUrl}
          alt="Profile"
          onError={(e) => {
            console.error('Image error in onError');
            (e.target as HTMLImageElement).src = fallbackImage;
          }}
          className="w-full h-full object-cover"
          style={{ 
            opacity: isFullyLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
      </motion.div>
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