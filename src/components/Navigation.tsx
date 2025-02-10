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
            <div>
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