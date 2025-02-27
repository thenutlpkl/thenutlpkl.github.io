import { useToast } from "@/hooks/use-toast";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useState } from 'react';
import { Check, Copy, Menu, X } from 'react-feather';
import Chips from './Chips';

const Navigation = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [isCopied, setIsCopied] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    // Exact matching for root
    if (path === '/') return location.pathname === '/';
    
    // For other routes, ensure exact or immediate child route match
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const checkSegments = path.split('/').filter(Boolean);
    
    return pathSegments.length === checkSegments.length && 
           checkSegments.every((seg, index) => seg === pathSegments[index]);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center p-4 z-50">
      <nav className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto relative">
          {/* Desktop Navigation */}
          <div className="hidden md:block bg-background/20 backdrop-blur-xl border border-white/5 rounded-full px-6 shadow-lg">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(76,0,115,0.1)] via-[rgba(25,140,150,0.1)] to-[rgba(254,198,161,0.1)]" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-transparent" />
            </div>
            
            <div className="relative h-14 flex items-center justify-between">
              <div className="px-4">
                <div className="relative">
                  <RouterLink 
                    to="/" 
                    className={`text-sm font-serif italic font-bold tracking-wider transition-all duration-300 
                    hover:text-[#FEC6A1] hover:drop-shadow-[0_0_8px_rgba(254,198,161,0.3)] 
                    ${isActive('/') ? 'text-[#FEC6A1] drop-shadow-[0_0_8px_rgba(254,198,161,0.3)]' : 'text-gray-300'}`}
                  >
                    Tanawitch
                    <Chips 
                      label="New" 
                      variant="gradient" 
                      color="pink-purple" 
                      size="tiny" 
                      className="ml-1"
                    />
                  </RouterLink>
                </div>
              </div>
              
              <div className="flex items-center whitespace-nowrap overflow-x-auto">
                <div className="px-4">
                  <RouterLink 
                    to="/works" 
                    className={`text-xs font-medium transition-all duration-300 hover:text-[#FEC6A1] hover:drop-shadow-[0_0_8px_rgba(254,198,161,0.3)] 
                    ${isActive('/works') ? 'text-[#FEC6A1] drop-shadow-[0_0_8px_rgba(254,198,161,0.3)]' : 'text-gray-300'}`}
                  >
                    Works
                  </RouterLink>
                </div>
                <div className="px-4">
                  <RouterLink 
                    to="/myself" 
                    className={`text-xs font-medium transition-all duration-300 hover:text-[#FEC6A1] hover:drop-shadow-[0_0_8px_rgba(254,198,161,0.3)] 
                    ${isActive('/myself') ? 'text-[#FEC6A1] drop-shadow-[0_0_8px_rgba(254,198,161,0.3)]' : 'text-gray-300'}`}
                  >
                    Myself
                  </RouterLink>
                </div>
                <div className="px-4">
                  <RouterLink 
                    to="/design-system" 
                    className={`text-xs font-medium transition-all duration-300 hover:text-[#FEC6A1] hover:drop-shadow-[0_0_8px_rgba(254,198,161,0.3)] 
                    ${isActive('/design-system') ? 'text-[#FEC6A1] drop-shadow-[0_0_8px_rgba(254,198,161,0.3)]' : 'text-gray-300'}`}
                  >
                    Design System Manifesto
                  </RouterLink>
                </div>
                <div className="px-4">
                  <RouterLink 
                    to="/techstack" 
                    className={`text-xs font-medium transition-all duration-300 hover:text-[#FEC6A1] hover:drop-shadow-[0_0_8px_rgba(254,198,161,0.3)] 
                    ${isActive('/techstack') ? 'text-[#FEC6A1] drop-shadow-[0_0_8px_rgba(254,198,161,0.3)]' : 'text-gray-300'}`}
                  >
                    Tech Stack
                  </RouterLink>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button 
                  onClick={handleResumeClick}
                  className="relative px-6 py-1.5 text-xs font-medium text-white rounded-full 
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
                  className="text-xs transition-all duration-300 hover:text-[#FEC6A1] hover:drop-shadow-[0_0_8px_rgba(254,198,161,0.3)]"
                >
                  {isCopied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation remains unchanged */}
          <div className="md:hidden relative bg-background/20 backdrop-blur-xl border border-white/5 rounded-full px-6 shadow-lg">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(76,0,115,0.1)] via-[rgba(25,140,150,0.1)] to-[rgba(254,198,161,0.1)]" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-transparent" />
            </div>
            
            <div className="relative h-14 flex items-center justify-between">
              <div className="flex items-center relative">
                <RouterLink 
                  to="/" 
                  className={`text-xs font-medium transition-all duration-300 hover:text-[#FEC6A1] hover:drop-shadow-[0_0_8px_rgba(254,198,161,0.3)] 
                  ${isActive('/') ? 'text-[#FEC6A1] drop-shadow-[0_0_8px_rgba(254,198,161,0.3)]' : 'text-gray-300'}`}
                >
                  Tanawitch
                </RouterLink>
              </div>
              
              <div className="flex items-center gap-4">
                <button 
                  onClick={handleCopy} 
                  className="text-xs transition-all duration-300 hover:text-[#FEC6A1] hover:drop-shadow-[0_0_8px_rgba(254,198,161,0.3)]"
                >
                  {isCopied ? <Check size={16} /> : <Copy size={16} />}
                </button>
                <button 
                  onClick={toggleMobileMenu}
                  className="text-xs transition-all duration-300 hover:text-[#FEC6A1] hover:drop-shadow-[0_0_8px_rgba(254,198,161,0.3)]"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Overlay remains unchanged */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-background/95 backdrop-blur-xl z-50 md:hidden">
              <div className="container mx-auto px-4 pt-24">
                <div className="max-w-3xl mx-auto space-y-6">
                  <RouterLink 
                    to="/" 
                    onClick={closeMobileMenu}
                    className={`block text-2xl font-medium transition-all duration-300 hover:text-[#FEC6A1] hover:drop-shadow-[0_0_8px_rgba(254,198,161,0.3)] 
                    ${isActive('/') ? 'text-[#FEC6A1] drop-shadow-[0_0_8px_rgba(254,198,161,0.3)]' : 'text-gray-300'}`}
                  >
                    Tanawitch
                  </RouterLink>
                  <RouterLink 
                    to="/works" 
                    onClick={closeMobileMenu}
                    className={`block text-2xl font-medium transition-all duration-300 hover:text-[#FEC6A1] hover:drop-shadow-[0_0_8px_rgba(254,198,161,0.3)] 
                    ${isActive('/works') ? 'text-[#FEC6A1] drop-shadow-[0_0_8px_rgba(254,198,161,0.3)]' : 'text-gray-300'}`}
                  >
                    Works
                  </RouterLink>
                  <RouterLink 
                    to="/myself" 
                    onClick={closeMobileMenu}
                    className={`block text-2xl font-medium transition-all duration-300 hover:text-[#FEC6A1] hover:drop-shadow-[0_0_8px_rgba(254,198,161,0.3)] 
                    ${isActive('/myself') ? 'text-[#FEC6A1] drop-shadow-[0_0_8px_rgba(254,198,161,0.3)]' : 'text-gray-300'}`}
                  >
                    Myself
                  </RouterLink>
                  <RouterLink 
                    to="/design-system" 
                    onClick={closeMobileMenu}
                    className={`block text-2xl font-medium transition-all duration-300 hover:text-[#FEC6A1] hover:drop-shadow-[0_0_8px_rgba(254,198,161,0.3)] 
                    ${isActive('/design-system') ? 'text-[#FEC6A1] drop-shadow-[0_0_8px_rgba(254,198,161,0.3)]' : 'text-gray-300'}`}
                  >
                    Design System Declaration
                  </RouterLink>
                  <RouterLink 
                    to="/techstack" 
                    onClick={closeMobileMenu}
                    className={`block text-2xl font-medium transition-all duration-300 hover:text-[#FEC6A1] hover:drop-shadow-[0_0_8px_rgba(254,198,161,0.3)] 
                    ${isActive('/techstack') ? 'text-[#FEC6A1] drop-shadow-[0_0_8px_rgba(254,198,161,0.3)]' : 'text-gray-300'}`}
                  >
                    Tech Stack
                  </RouterLink>
                  <button 
                    onClick={() => {
                      handleResumeClick();
                      closeMobileMenu();
                    }}
                    className="w-full relative px-8 py-2.5 text-lg font-medium text-white rounded-full 
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
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;