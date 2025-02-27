// App.tsx
import React, { useEffect, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

// Lazy load components
const ParticleEffect = React.lazy(() => import("./components/ParticleEffect"));
const CustomCursor = React.lazy(() => import("./components/CustomCursor"));
const Navigation = React.lazy(() => import("./components/Navigation"));
const Footer = React.lazy(() => import("./components/Footer"));
const Index = React.lazy(() => import("./pages/Index"));
const Myself = React.lazy(() => import("./pages/Myself"));
const Works = React.lazy(() => import("./pages/Works"));
const DesignSystem = React.lazy(() => import("./pages/DesignSystem"));
const Techstack = React.lazy(() => import("./pages/Techstack"));

// Custom Loading Component
const PageLoader = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-background"
  >
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="w-12 h-12 rounded-full bg-[#FEC6A1]/50"
    />
  </motion.div>
);

// Create QueryClient with better config
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const RouteLogger = React.memo(() => {
  const location = useLocation();
  
  useEffect(() => {
    console.log('Route changed:', {
      pathname: location.pathname,
      search: location.search,
      hash: location.hash
    });
  }, [location]);

  return null;
});

const App: React.FC = () => {
  if (import.meta.hot) {
    import.meta.hot.accept(() => {
      console.log('HMR update accepted');
    });
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Suspense fallback={<PageLoader />}>
          <div className="flex flex-col min-h-screen">
            <ParticleEffect />
            <CustomCursor />
            <Toaster />
            <Sonner />
            <Router>
              <RouteLogger />
              <Navigation />
              <AnimatePresence mode="wait">
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Index />
                      </motion.div>
                    } />
                    <Route path="/myself" element={
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Myself />
                      </motion.div>
                    } />
                    <Route path="/works" element={
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Works />
                      </motion.div>
                    } />
                    <Route path="/design-system" element={
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <DesignSystem />
                      </motion.div>
                    } />
                    <Route path="/techstack" element={
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Techstack />
                      </motion.div>
                    } />
                  </Routes>
                </main>
              </AnimatePresence>
              <Footer />
            </Router>
          </div>
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
