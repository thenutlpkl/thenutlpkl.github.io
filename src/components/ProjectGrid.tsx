import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import mockupImage from "@/assets/projects/project-1/mobile.png";
import MobileMockup from "@/assets/projects/project-2/mobile-mockup.png";
import mobileRoomVu from "@/assets/projects/project-3/mobileRoomVu.png"
import mobileProjectFour from "@/assets/projects/project-4/bigcover.png";
import mobileProjectFive from "@/assets/projects/project-5/mobile.png";
import leftProjectFive from "@/assets/projects/project-5/left.png";
import rightProjectFive from "@/assets/projects/project-5/right.png";

const projects = [
  {
    name: "AI Assistant for you recipe",
    year: "2024",
    badge: "NEW",
    screen: mockupImage,
    description: "From scratch to MVP",
    project_url: "https://www.behance.net/gallery/200280785/AI-powered-Recipe-Creation-Mobile-App"
  },
  {
    name: "Subscription Management App",
    year: "2024",
    screen: MobileMockup,
    description: "simplifying online payments",
    project_url: "https://www.behance.net/gallery/172183057/Subscription-Management-App"
  },
  {
    name: "ProfitA",
    year: "2024",
    badge: "WIP",
    screen: mobileRoomVu,
    description: "Interactive Investment App.",
    project_url: "https://www.behance.net/gallery/184983087/Mutual-fund-app"
  },
  {
    name: "RoomVu Redesign",
    year: "2023",
    screen: mobileProjectFour,
    description: "Personal portfolio showcasing projects",
    project_url: "https://www.behance.net/gallery/180111717/Website-redesign"
  },
  {
    name: "InstaCart Shopper",
    year: "2024",
    screen: mobileProjectFive,
    leftScreen: leftProjectFive,
    rightScreen: rightProjectFive,
    description: "Redesign with idea of reduce batch cancel",
    project_url: "https://medium.com/@thenutlpkl/instacart-shopper-app-revamp-b61c4c8ca1e9"
  }
];

interface ProjectType {
  name: string;
  year: string;
  badge?: string;
  screen?: string;
  leftScreen?: string;
  rightScreen?: string;
  description: string;
  project_url?: string;
}

interface ProjectCardProps {
  project: ProjectType;
  className: string;
}

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  const imageControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const isLargeCard = className.includes('md:col-span-7');
  const isSubscriptionApp = project.name.includes('Subscription');
  const isRoomVu = project.name.includes('Croods');
  const isPortfolioWebsite = project.name.includes('Portfolio');
  const isSayIt = project.name.includes('SayIt');

  return (
    <motion.a 
      href={project.project_url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} rounded-[32px] relative overflow-hidden block no-underline`}
      initial={{ backgroundColor: "#1E2028" }}
      whileHover={{ backgroundColor: "#23242C" }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => {
        setIsHovered(true);
        imageControls.start({ 
          scale: 1.05,
          transition: { duration: 0.3, ease: "easeInOut" }
        });
      }}
      onHoverEnd={() => {
        setIsHovered(false);
        imageControls.start({ 
          scale: 1,
          transition: { duration: 0.3, ease: "easeInOut" }
        });
      }}
    >
      {/* Screen Content Container */}
      {project.screen && (
        <motion.div 
          className={`absolute right-0 transform ${
            project.name.includes('Subscription') || project.name.includes('ProfitA')
              ? "bottom-[-20%] w-[121%] h-[72%] translate-x-[20%]" 
              : project.name.includes('RoomVu')
                ? "bottom-0 w-[126%] h-[75.6%] translate-x-[20%]" 
              : isLargeCard 
                ? "bottom-0 w-[90%] h-[130%] translate-x-[15%] translate-y-[10%]"
                : project.name.includes('InstaCart')
                  ? "bottom-0 w-[100%] h-[100%] translate-x-[0%] translate-y-[0%]"
                  : "bottom-0 w-[100%] h-[100%] translate-x-[5%] translate-y-[5%]"
          }`}
        >
          {project.name === 'InstaCart Shopper' && (
            <div className="flex justify-between w-full h-full">
              <motion.img 
                src={project.leftScreen}
                alt={project.name}
                className={`w-full h-full object-contain object-left`}
                animate={imageControls}
                initial={{ scale: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                loading="eager"
              />
              <motion.img 
                src={project.screen}
                alt={project.name}
                className={`w-full h-full object-contain object-center`}
                animate={imageControls}
                initial={{ scale: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                loading="eager"
              />
              <motion.img 
                src={project.rightScreen}
                alt={project.name}
                className={`w-full h-full object-contain object-right`}
                animate={imageControls}
                initial={{ scale: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                loading="eager"
              />
            </div>
          )}
          {project.name !== 'InstaCart Shopper' && (
            <motion.img 
              src={project.screen}
              alt={project.name}
              className={`w-full h-full object-contain ${
                project.name.includes('Subscription') || project.name.includes('ProfitA') ? "object-bottom" 
                : project.name.includes('RoomVu') ? "object-center"
                : isLargeCard ? "object-bottom" 
                : "object-center"
              }`}
              animate={imageControls}
              initial={{ scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              loading="eager"
            />
          )}
        </motion.div>
      )}

      {/* Content Wrapper */}
      <div className="relative z-10 p-8 max-w-[60%]">
        <div>
          <p className="text-sm text-gray-400 mb-1">{project.year}</p>
          <h3 className="text-xl font-medium text-white">{project.name}</h3>
          <p className="text-base text-gray-400 mt-2">{project.description}</p>
        </div>
      </div>

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 opacity-[0.03] z-20"
        initial={{
          background: "linear-gradient(120deg, #FEC6A1 0%, transparent 70%)",
        }}
        whileHover={{
          background: "linear-gradient(45deg, #FEC6A1 0%, transparent 70%)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 z-30"
        initial={{ x: "-100%" }}
        whileHover={{
          x: "100%",
          opacity: 0.1,
          transition: { duration: 0.8, ease: "easeInOut" }
        }}
        style={{
          background: "linear-gradient(90deg, transparent 0%, #FEC6A1 50%, transparent 100%)",
        }}
      />
    </motion.a>
  );
};

const ProjectGrid = () => {
  return (
    <div className="max-w-[900px] mx-auto px-4">
      <div className="grid grid-cols-10 gap-6">
        {/* First Row */}
        <ProjectCard 
          project={projects[0]} 
          className="col-span-10 md:col-span-7 h-[400px]" 
        />
        <ProjectCard 
          project={projects[1]} 
          className="col-span-10 md:col-span-3 h-[400px]" 
        />

        {/* Second Row */}
        <ProjectCard 
          project={projects[2]} 
          className="col-span-10 md:col-span-3 h-[400px]" 
        />
        <ProjectCard 
          project={projects[3]} 
          className="col-span-10 md:col-span-7 h-[400px]" 
        />

        {/* Third Row */}
        <ProjectCard 
          project={projects[4]} 
          className="col-span-10 h-[400px]" 
        />
      </div>
    </div>
  );
};

export default ProjectGrid;