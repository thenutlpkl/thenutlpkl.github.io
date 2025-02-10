import { useToast } from "@/hooks/use-toast";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from 'react';
import { Check, Copy } from 'react-feather';

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
      <nav className="bg-background/40 backdrop-blur-lg border border-primary/10 rounded-full px-6">
        <div className="h-14 flex items-center gap-16">
          <div className="flex items-center gap-2">
            {isActive('/') && <span className="text-[#FEC6A1]">•</span>}
            <RouterLink to="/" className="text-sm font-medium hover:text-[#FEC6A1] transition-colors">
              Tanawitch
            </RouterLink>
          </div>
          
          <div className="flex items-center gap-16">
            <div className="flex items-center gap-2">
              {isActive('/works') && <span className="text-[#FEC6A1]">•</span>}
              <HashLink 
                to="/works#works" 
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                className="nav-link"
              >
                Works
              </HashLink>
            </div>
            <div className="flex items-center gap-2">
              {isActive('/myself') && <span className="text-[#FEC6A1]">•</span>}
              <HashLink 
                to="/myself#myself" 
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                className="nav-link"
              >
                Myself
              </HashLink>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={handleResumeClick}
                className="relative px-6 py-1.5 text-sm font-medium text-white rounded-full 
                overflow-hidden transition-all duration-300 hover:scale-105 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FEC6A1] via-[#FF8C37] to-[#FEC6A1] 
                opacity-80 group-hover:opacity-100 bg-[length:200%_100%] animate-gradientShift"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-[#FEC6A1] via-[#FF8C37] to-[#FEC6A1] 
                opacity-0 group-hover:opacity-80 bg-[length:200%_100%] animate-gradientShiftReverse"></div>
                <span className="relative">Resume</span>
              </button>
              <button 
                onClick={handleCopy} 
                className="text-sm hover:text-[#FEC6A1] transition-colors"
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