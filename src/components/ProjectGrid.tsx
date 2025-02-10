import { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";

// Types
type Project = {
  name: string;
  year: string;
  badge?: string;
  description: string;
  project_url: string;
  technologies?: string[];
};

// Projects Data
const projects: Project[] = [
  {
    name: "AI Assistant you recipe",
    year: "2024",
    description: "From scratch to MVP",
    project_url: "https://www.behance.net/gallery/200280785/AI-powered-Recipe-Creation-Mobile-App",
    technologies: ["Cooking", "AI", "Mobile App"]
  },
  {
    name: "Subscription Management App",
    year: "2024",
    description: "simplifying online payments",
    project_url: "https://www.behance.net/gallery/172183057/Subscription-Management-App",
    technologies: ["Idea", "Fintech"]
  },
  {
    name: "ProfitA",
    year: "2024",
    description: "Interactive Investment App",
    project_url: "https://www.behance.net/gallery/184983087/Mutual-fund-app",
    technologies: ["Mutual Fund", "Finance", "Investment"]
  },
  {
    name: "RoomVu Redesign",
    year: "2023",
    description: "Personal portfolio showcasing projects",
    project_url: "https://www.behance.net/gallery/180111717/Website-redesign",
    technologies: ["UI/UX", "Redesign"]
  },
  {
    name: "InstaCart Shopper",
    year: "2024",
    description: "Redesign with idea of reduce batch cancel",
    project_url: "https://medium.com/@thenutlpkl/instacart-shopper-app-revamp-b61c4c8ca1e9",
    technologies: ["UX Research", "Idea", "Redesign"]
  }
];

// ProjectCard Component with memo
const ProjectCard = memo(({ project }: { project: Project }) => {
  return (
    <motion.div 
      className="group relative"
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      {/* Gradient Border Container */}
      <div className="absolute inset-0 rounded-[32px]
        bg-gradient-to-br from-[#2A2D37]/80 via-[#373B47]/50 to-[#2A2D37]/80
        group-hover:bg-gradient-to-tl
        transition-all duration-700 ease-in-out">
      </div>

      {/* Main Content */}
      <div className="relative h-full rounded-[32px] 
        bg-[#1E2028]/95 backdrop-blur-xl p-6
        overflow-hidden">
        
        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 opacity-0 
          bg-gradient-to-tl from-[#FEC6A1]/5 via-transparent to-[#FEC6A1]/5
          group-hover:opacity-100 transition-opacity duration-700"></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            {project.badge && (
              <span className="px-3 py-1 text-sm font-medium 
                bg-gradient-to-r from-[#FEC6A1] to-[#FFD7BC]
                group-hover:bg-gradient-to-l
                transition-all duration-700 
                text-black rounded-full">
                {project.badge}
              </span>
            )}
            <span className="text-sm text-gray-400">{project.year}</span>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-3 
            group-hover:text-[#FEC6A1] 
            transition-colors duration-500">
            {project.name}
          </h3>
          
          <p className="text-base text-gray-300 mb-4 flex-grow">{project.description}</p>
          
          {project.technologies && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span 
                  key={`${tech}-${index}`}
                  className="px-2 py-1 bg-[#2C2F3A]/50 text-xs text-gray-300 
                    rounded-full border border-[#3A3F4C]/50
                    group-hover:border-[#FEC6A1]/20 
                    group-hover:bg-[#2C2F3A]/70
                    transition-all duration-500">
                  {tech}
                </span>
              ))}
            </div>
          )}
          
          <a 
            href={project.project_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-auto inline-block text-[#FEC6A1] 
              hover:text-[#FFD7BC] transition-all duration-500 
              text-base font-medium 
              group-hover:translate-x-1 transform">
            View Project →
          </a>
        </div>
      </div>
    </motion.div>
  );
});

// ProjectGrid Component
const ProjectGrid = () => {
  const [projectsList, setProjectsList] = useState(projects);

  useEffect(() => {
    console.log('ProjectGrid mounted, projects:', projectsList);
    return () => console.log('ProjectGrid unmounted');
  }, []);

  useEffect(() => {
    console.log('Projects updated:', projectsList);
    setProjectsList([...projects]);
  }, [projects]);

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsList.map((project, index) => (
          <ProjectCard 
            key={`${project.name}-${index}-${Date.now()}`}
            project={project} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;