import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const HighlightText = ({ children }) => (
  <span className="text-white font-normal">
    {children}
  </span>
);

const ContentSection = ({ title, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px"
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-6"
    >
      <h2 className="text-gray-500 uppercase tracking-wider text-sm font-light">{title}</h2>
      <div className="space-y-4">
        {children}
      </div>
    </motion.div>
  );
};

const StoryTab = () => {
  return (
    <div className="space-y-16 max-w-[500px] mx-auto">
      {/* Journey Beginning */}
      <ContentSection title="How I Became a Product Designer">
        <p className="text-base text-gray-400 font-light leading-relaxed">
          My journey started when I was <HighlightText>15</HighlightText>, with my first book on Photoshop 
          7.0. I had a <HighlightText>passion for design</HighlightText>, which led me to pursue a career as a 
          graphic designer. Along the way, I explored photography and videography, and at some point, 
          I became interested in <HighlightText>visual effects (VFX)</HighlightText>.
        </p>
        <p className="text-base text-gray-400 font-light leading-relaxed">
          Then came a <HighlightText>turning point</HighlightText>. While working as a rotoscope artist, 
          I aimed to achieve the highest productivity every week. One day, I heard that the company was 
          developing internal tools for rotoscoping. That's when I thought, I can do this—but I quickly 
          realized I was wrong. Still, I stood up and tried to <HighlightText>help design the UI tools</HighlightText> because 
          I understood the user perspective. That experience <HighlightText>sparked something in me</HighlightText>, 
          and <HighlightText>that decision changed my life</HighlightText>.
        </p>
      </ContentSection>

      {/* Career Evolution */}
      <ContentSection title="A Long Journey: From Graphic Design to Product Design">
        <p className="text-base text-gray-400 font-light leading-relaxed">
          As time passed, I grew with experience across different fields in the design industry. 
          <HighlightText> Every failure made me stronger</HighlightText>, shaping me into a better designer and professional. 
          This journey fueled my ambition to expand beyond design.
        </p>
        <p className="text-base text-gray-400 font-light leading-relaxed">
          I made a <HighlightText>big decision—to move to Canada</HighlightText> and study web development. 
          I saw this as an opportunity to become a <HighlightText>full-stack designer</HighlightText>—someone who 
          understands both the aesthetics of design and the technical aspects of building digital products.
        </p>
      </ContentSection>

      {/* Motivation */}
      <ContentSection title="What Sparked Me">
        <p className="text-base text-gray-400 font-light leading-relaxed">
          Beyond design, I've always had a <HighlightText>deep passion for healthcare and education</HighlightText>. 
          These industries have a direct impact on people's lives, and I believe they are 
          some of the most valuable spaces where design can make a real difference.
        </p>
        <p className="text-base text-gray-400 font-light leading-relaxed">
          <HighlightText>Healthcare</HighlightText>, in particular, has the power to improve lives at scale. 
          I see design as a <HighlightText>bridge between technology and patient care</HighlightText>—helping doctors, 
          nurses, and patients interact with systems in a way that feels natural and empowering.
        </p>
        <p className="text-base text-gray-400 font-light leading-relaxed">
          <HighlightText>Education</HighlightText> shapes the future. Designing tools and platforms that help people 
          learn, grow, and access knowledge is something I find incredibly fulfilling. I believe 
          <HighlightText> design can drive meaningful change</HighlightText>.
        </p>
      </ContentSection>

      {/* Current */}
      <ContentSection title="Currently">
        <p className="text-base text-gray-400 font-light leading-relaxed">
          I recently returned from Canada after a challenging period of job hunting. 
          I previously worked as a <HighlightText>Lead Product Designer at Invitrace Health</HighlightText>, 
          where we shared a vision of <HighlightText>improving the healthcare system in Thailand</HighlightText>. 
          I had the opportunity to manage a team of six talented designers across ten different projects.
        </p>
      </ContentSection>

      {/* Contact */}
      <ContentSection title="Contact & Social Media">
        <p className="text-base text-gray-400 font-light leading-relaxed">
          For partnerships, collaborations, sponsorships, commissions, or events, 
          feel free to reach out to me on{' '}
          <a href="#" className="text-[#FEC6A1] hover:underline">LinkedIn</a>. 
          I'm always open to <HighlightText>connecting with like-minded professionals</HighlightText> and exploring 
          new opportunities to create impactful products together.
        </p>
      </ContentSection>
    </div>
  );
};

export default StoryTab;