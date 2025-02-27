// @ts-ignore
import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/supabaseClients';
import { Project } from '../types/database.types';
import { motion, AnimatePresence } from 'framer-motion';

// Skeleton Loading Component
const SkeletonCard = () => (
  <div className="aspect-square bg-card/30 rounded-3xl p-8 animate-pulse">
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[100px] h-[100px] bg-primary/10 rounded-[6px]" />
    </div>
  </div>
);

// Function to fetch projects from Supabase
const fetchProjects = async () => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('display_order', { ascending: true });

  if (error) throw error;
  return data || [];
};

interface WorksProps {
  onLoadComplete?: () => void;
}

// Works component
const Works: React.FC<WorksProps> = ({ onLoadComplete }) => {
  const { 
    data: projects, 
    isLoading, 
    error,
    isError,
    refetch 
  } = useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    retry: 3,
  });

  useEffect(() => {
    // Call onLoadComplete when the component is fully loaded
    if (onLoadComplete && !isLoading) {
      onLoadComplete();
    }
  }, [onLoadComplete, isLoading]);

  if (isError) {
    console.error('Failed to fetch projects:', error);
    return (
      <div className="text-center py-10">
        <p>Failed to load projects</p>
        <button 
          onClick={() => refetch()} 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {[1, 2, 3, 4].map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-[20vh] pb-16">
      <div className="max-w-3xl mx-auto">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-xl mb-8 font-light text-center"
        >
          <span className="text-primary">Part of the journey</span>
        </motion.h3>

        <div className="grid grid-cols-3 gap-4">
          <AnimatePresence>
            {projects?.map((project, index) => (
              <motion.a
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.21, 0.5, 0.51, 1],
                  }
                }}
                exit={{ opacity: 0 }}
                href={project.project_url}
                className="group relative aspect-square bg-card/50 rounded-2xl p-4
                  flex flex-col items-center justify-center gap-3
                  backdrop-blur-sm border border-primary/10 
                  overflow-hidden hover:border-primary/20
                  transition-all duration-300 ease-out"
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="relative">
                  <div className="absolute inset-0 blur-md bg-gray-800/40 scale-105" />
                  <img
                    src={project.logo_url}
                    alt={project.title}
                    className="relative w-[120px] h-[120px] rounded-[6px] object-cover
                      opacity-90 group-hover:opacity-30 
                      transition-all duration-300 ease-out
                      shadow-lg shadow-gray-800/40"
                  />
                </div>
                
                <h4 className="text-sm font-medium text-white/80 text-center
                  group-hover:opacity-0 transition-opacity duration-300">
                  {project.title}
                </h4>

                <div className="absolute inset-0 flex flex-col items-center justify-center 
                  opacity-0 group-hover:opacity-100 
                  transition-all duration-300 ease-out">
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
                  <h4 className="relative z-10 text-base font-medium text-white mb-1">
                    {project.title}
                  </h4>
                  <p className="relative z-10 text-xs text-white/80 px-3 text-center">
                    {project.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );

};

export default Works;