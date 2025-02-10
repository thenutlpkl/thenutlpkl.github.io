import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ContentSectionProps {
  title: string;
  period: string;
  descriptions: string[];
  isCurrent?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, period, descriptions, isCurrent }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -50px 0px"
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeInOut",
        staggerChildren: 0.2
      }}
      className="space-y-6"
    >
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`font-light text-lg ${isCurrent ? "text-[#FEC6A1]" : "text-white"}`}
      >
        {title}
      </motion.h3>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="space-y-4"
      >
        <p className="text-gray-400 font-light text-sm flex items-center gap-2">
          {period}
          {isCurrent && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#FEC6A1] bg-opacity-10 text-[#FEC6A1]">
              Current
            </span>
          )}
        </p>
        <div className="space-y-3">
          {descriptions.map((desc, index) => (
            <p key={index} className="text-gray-400 font-light text-base leading-relaxed">
              {desc}
            </p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ExperiencesTab = () => {
  const experiences = [
    {
      title: "Invitrace Company Limited, Lead Product Designer",
      period: "November 2024 - Present",
      descriptions: [
        "As Lead Product Designer at Invitrace Health, I believe our solutions that bring real value to healthcare.",
        "I manage team of designer, build scalable design systems, explore new technologies, and shape user flows to create seamless experiences.",
        "I'm passionate about mentoring my team and driving meaningful impact through thoughtful design."
      ]
    },
    {
      title: "Stellar eat by Eatvermont(US), Product Designer",
      period: "January 2024 - June 2024",
      descriptions: [
        "Designed and launched the Stellareating as MVP, integrating ChatGPT to enhance chat functionality and recipe generation.",
        "Prioritized feature to releases, speeding up development and improving user retention.",
        "Developed a design system in Figma using untitledUI as starter, ensuring consistent app design.",
        "Improved the chat interface through A/B testing, increasing task completion rates and extending user sessions."
      ]
    },
    {
      title: "Rental Platform by CP Origin(Thailand), Senior UX/UI Designer",
      period: "October 2021 - December 2022",
      descriptions: [
        "Conducted user research and created personas to identify pain points in the payment and booking processes, improving the overall user flow.",
        "Designed wireframes and high-fidelity mockups in Figma, ensuring alignment with user needs and collaborating with developers to implement a seamless UI using Material UI.",
        "Facilitated usability testing post-launch, which reduced payment issues and improved the booking experience, leading to higher user satisfaction and increased positive feedback.",
        "Iterated on designs based on user feedback, enhancing the platform's usability and accessibility."
      ]
    },
    {
      title: "Doctor Anywhere, Senior UX/UI Designer",
      period: "January 2021 - September 2021",
      descriptions: [
        "Researched appointment scheduling and lab result integration using user interviews, surveys, and usability testing.",
        "Created personas and journey maps to identify pain points.",
        "Redesigned lab results dashboard and streamlined doctor profile setup.",
        "Delivered a high-uptime iPad app, enhancing user activity, reducing no-shows, and boosting patient satisfaction.",
        "Ongoing refinement of integration and scheduling issues."
      ]
    },
    {
      title: "Robowealth, Senior UX/UI Designer",
      period: "August 2020 - December 2020",
      descriptions: [
        "Collaborated with the Product team to enhance LH Bank's mutual fund app in Thailand, with the goal of streamlining the end-to-end process of buying funds and simulating portfolios.",
        "Conducted a user survey to gather insights on mutual fund and investment experiences, leading to a clearer understanding of user needs and preferences.",
        "Created wireframes and screen flows using XD and Overflow, helping the client better visualize the design and speeding up approval.",
        "Led the development of UI guidelines and visual design, collaborating with the design team to ensure consistency and usability, which received positive feedback from LH Bank."
      ]
    },
    {
      title: "PEAK account, UX/UI Designer",
      period: "November 2018 - July 2020",
      descriptions: [
        "Redesigned the platform to user-friendly interface, establishing new design guidelines that improved usability, reduced errors, and enhanced overall productivity.",
        "Focused on reducing time-consuming tasks for accountants by introducing features such as automated report generation, bulk data entry, and real-time collaboration tools, streamlining their workflow and decreasing manual input errors.",
        "Addressed key business needs by improving efficiency, leading to increased productivity and faster client service, resulting in higher client satisfaction and reduced operational costs.",
        "Enhanced task management and document organization features, enabling accountants to handle multiple client accounts more effectively. The redesign also ensured the platform remained competitive in the market by offering modern, scalable, and secure solutions that aligned with business growth."
      ]
    },
    {
      title: "Happenn, UX/UI Designer",
      period: "July 2018 - October 2018",
      descriptions: [
        "Collaborated with leading companies to design event activity applications for major events.",
        "Designed user interfaces for agendas, speakers, and content to enhance attendee experience.",
        "Prepared wireframes for adjustments following client guidelines and style.",
        "Created interactive prototypes based on adjusted wireframes.",
        "Conducted usability testing with participants to gather feedback and insights."
      ]
    }
  ];

  return (
    <div className="space-y-16 max-w-[500px] mx-auto">
      {experiences.map((exp) => (
        <ContentSection
          key={exp.title}
          title={exp.title}
          period={exp.period}
          descriptions={exp.descriptions}
          isCurrent={exp.period.includes("Present")}
        />
      ))}
    </div>
  );
};

export default ExperiencesTab;