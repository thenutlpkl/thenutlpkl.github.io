import React, { useState, useEffect } from 'react';

// Define Project type
export interface Project {
  name: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubLink?: string;
  liveLink?: string;
  year?: string;
  project_url?: string;
}

// Placeholder projects data (you can replace this with your actual projects)
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

// ProjectCard component
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-background/50 border border-white/10 rounded-xl p-6 space-y-4 hover:border-primary/30 transition-all duration-300">
      {project.imageUrl && (
        <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
          <img 
            src={project.imageUrl} 
            alt={project.name} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold text-[#FEC6A1]">{project.name}</h3>
      <p className="text-muted-foreground">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span 
            key={tech} 
            className="px-3 py-1 rounded-full bg-background/30 text-xs text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

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
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto"> {/* This matches Hero's container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsList.map((project, index) => (
            <ProjectCard 
              key={`${project.name}-${index}-${Date.now()}`}
              project={project} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 

export default ProjectGrid;

