import { useToast } from "@/hooks/use-toast";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useState } from 'react';
import { Check, Copy } from 'react-feather';
import { motion } from 'framer-motion';

const Navigation = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const urlToCopy = "https://thenutlpkl.github.io/";
    navigator.clipboard.writeText(urlToCopy);
    toast({
      description: "URL copied to clipboard!",
    });
    
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1q8HJltl1wuugv__eucGxr5X4A0cVQh8E/view?usp=sharing', '_blank');
    toast({
      description: "Opening resume in new tab",
    });
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center p-4 z-50">
      <nav className="relative bg-background/20 backdrop-blur-xl border border-white/5 rounded-full px-6 shadow-lg">
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(76,0,115,0.1)] via-[rgba(25,140,150,0.1)] to-[rgba(254,198,161,0.1)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-transparent" />
        </div>

        <div className="relative h-14 flex items-center gap-16">
          <div className="flex items-center relative">
            <motion.div
              initial={false}
              animate={{ x: isActive('/') ? 0 : -20, opacity: isActive('/') ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute -left-4"
            >
              <span className="text-[#FEC6A1] drop-shadow-[0_0_8px_rgba(254,198,161,0.3)]">•</span>
            </motion.div>
            <RouterLink 
              to="/" 
              className="text-sm font-medium transition-all duration-300 hover:text-[#FEC6A1] hover:drop-shadow-[0_0_8px_rgba(254,198,161,0.3)]"
            >
              Tanawitch
            </RouterLink>
          </div>
          
          <div className="flex items-center gap-16">
            <div className="flex items-center relative">
              <motion.div
                initial={false}
                animate={{ x: isActive('/works') ? 0 : -20, opacity: isActive('/works') ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute -left-4"
              >
                <span className="text-[#FEC6A1] drop-shadow-[0_0_8px_rgba(254,198,161,0.3)]">•</span>
              </motion.div>
              <RouterLink 
                to="/works" 
                className="text-sm font-medium transition-all duration-300 hover:text-[#FEC6A1] hover:drop-shadow-[0_0_8px_rgba(254,198,161,0.3)]"
              >
                Works
              </RouterLink>
            </div>
            <div className="flex items-center relative">
              <motion.div
                initial={false}
                animate={{ x: isActive('/myself') ? 0 : -20, opacity: isActive('/myself') ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute -left-4"
              >
                <span className="text-[#FEC6A1] drop-shadow-[0_0_8px_rgba(254,198,161,0.3)]">•</span>
              </motion.div>
              <RouterLink 
                to="/myself" 
                className="text-sm font-medium transition-all duration-300 hover:text-[#FEC6A1] hover:drop-shadow-[0_0_8px_rgba(254,198,161,0.3)]"
              >
                Myself
              </RouterLink>
            </div>
            <div className="flex items-center relative">
              <motion.div
                initial={false}
                animate={{ x: isActive('/design-system') ? 0 : -20, opacity: isActive('/design-system') ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute -left-4"
              >
                <span className="text-[#FEC6A1] drop-shadow-[0_0_8px_rgba(254,198,161,0.3)]">•</span>
              </motion.div>
              <RouterLink 
                to="/design-system" 
                className="text-sm font-medium transition-all duration-300 hover:text-[#FEC6A1] hover:drop-shadow-[0_0_8px_rgba(254,198,161,0.3)]"
              >
                Design System Declaration
              </RouterLink>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={handleResumeClick}
                className="relative px-6 py-1.5 text-sm font-medium text-white rounded-full 
                overflow-hidden transition-all duration-300 hover:scale-105 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FEC6A1] via-[#FF8C37] to-[#FEC6A1] 
                opacity-80 group-hover:opacity-100 bg-[length:200%_100%] animate-gradientShift" />
                <div className="absolute inset-0 bg-gradient-to-l from-[#FEC6A1] via-[#FF8C37] to-[#FEC6A1] 
                opacity-0 group-hover:opacity-80 bg-[length:200%_100%] animate-gradientShiftReverse" />
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300
                  bg-[#FEC6A1] blur-xl" />
                <span className="relative">Resume</span>
              </button>
              <button 
                onClick={handleCopy} 
                className="text-sm transition-all duration-300 hover:text-[#FEC6A1] hover:drop-shadow-[0_0_8px_rgba(254,198,161,0.3)]"
              >
                {isCopied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;