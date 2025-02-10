import React, { useEffect, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Lazy load components
const ParticleEffect = React.lazy(() => import("./components/ParticleEffect"));
const CustomCursor = React.lazy(() => import("./components/CustomCursor"));
const Navigation = React.lazy(() => import("./components/Navigation"));
const Footer = React.lazy(() => import("./components/Footer"));
const Index = React.lazy(() => import("./pages/Index"));
const Myself = React.lazy(() => import("./pages/Myself"));
const Works = React.lazy(() => import("./pages/Works"));

// Create QueryClient with better config
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

// Route logger with memo
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
  // Add HMR logging
  if (import.meta.hot) {
    import.meta.hot.accept(() => {
      console.log('HMR update accepted');
    });
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="flex flex-col min-h-screen">
            <ParticleEffect />
            <CustomCursor />
            <Toaster />
            <Sonner />
            <Router>
              <RouteLogger />
              <Navigation />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/myself" element={<Myself />} />
                  <Route path="/works" element={<Works />} />
                </Routes>
              </main>
              <Footer />
            </Router>
          </div>
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;