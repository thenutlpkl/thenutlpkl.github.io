// SkillTab.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Book, Youtube, Gamepad2 } from 'lucide-react';
import AnimatedTooltip from '../AnimatedTooltip';

const toolsData = {
  'Figma': "I practically live in Figma these days! It's my go-to for everything from quick wireframes to polished designs. Love how I can collaborate with teams in real-time - it's like we're all sketching on the same canvas.",
  'Adobe Creative Suite': "Ah, my trusty old friend! Been using Photoshop and Illustrator for years. When I need to craft that perfect icon or touch up some visuals, these tools never let me down. After Effects is my secret weapon for making things come alive.",
  'Next.js': "My favorite way to bring designs to life on the web. It makes building fast, SEO-friendly sites feel like a breeze. Once you get used to its file-based routing, you'll never want to go back!",
  'AI Assistants': "ChatGPT and Claude are like having clever colleagues available 24/7. They help me brainstorm ideas, refine copy, and sometimes even debug code. It's amazing how they've transformed my daily workflow.",
  'Webflow': "Perfect for those times when I need to ship a beautiful, responsive website quickly. It's like having superpowers - you can create professional sites without diving deep into code. Really handy for quick prototypes too!",
  'Framer': "This is where the magic happens for interactive prototypes. When I need to show exactly how something should feel and move, Framer is my go-to. It's like sketching with motion!",
  'Motion Design': "This is where I get to be really creative! Adding just the right amount of movement to make interfaces feel alive and guide users naturally. It's like choreographing a dance between users and the interface.",
  'Tailwind CSS': "Such a game-changer for styling! Instead of switching between files, I can style right in my components. It's made my development process so much smoother and faster.",
  'React.js': "The backbone of most of my projects. It just makes sense to me - breaking everything down into components feels like putting together Lego blocks. Plus, the community is amazing!",
  'Google MediaPipe': "My latest obsession for working with motion tracking. Been using it to analyze athletic movements and provide real-time feedback. It's fascinating how we can turn video input into actionable insights!",
  'Dynamic Presentations': "I love turning complex ideas into visual stories. It's not just about slides - it's about creating an experience that keeps people engaged and makes information stick. Each presentation is like directing a mini-show!"
};

interface ContentSectionProps {
  title: string;
  icon?: React.ElementType;
  children: React.ReactNode;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, icon: Icon, children }) => {
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
        className="text-[#FEC6A1] text-xl font-light flex items-center gap-2"
      >
        {Icon && <Icon size={20} className="text-[#FEC6A1]" />}
        {title}
      </motion.h3>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const SkillTab = () => {
  return (
    <div className="space-y-24 max-w-[500px] mx-auto">
      {/* Main Skills Grid */}
      <div className="space-y-16">
        {/* Product & Brand Section */}
        <div className="grid grid-cols-2 gap-16">
          <ContentSection title="Product Development">
            <ul className="space-y-4 text-gray-400 font-light">
              <li>UI/UX Architecture & Strategy</li>
              <li>Human-Centered Design Solutions</li>
              <li>Interactive Prototyping</li>
              <li>Design Systems Engineering</li>
            </ul>
          </ContentSection>

          <ContentSection title="Brand">
            <ul className="space-y-4 text-gray-400 font-light">
              <li>Logo Design</li>
              <li>Icon Design</li>
              <li>Brand</li>
              <li>Presentation</li>
            </ul>
          </ContentSection>
        </div>

        {/* Web Development & Motion Section */}
        <div className="grid grid-cols-2 gap-16">
          <ContentSection title="Web Development">
            <ul className="space-y-4 text-gray-400 font-light">
              <li>Webflow</li>
              <li>Framer</li>
              <li>Builder.io</li>
            </ul>
          </ContentSection>

          <ContentSection title="Motion">
            <ul className="space-y-4 text-gray-400 font-light">
              <li>Motion Design & UI Animation</li>
            </ul>
          </ContentSection>
        </div>
      </div>

      {/* Tools Section */}
      <ContentSection title="Tools">
        <div className="flex flex-wrap gap-2">
          {Object.entries(toolsData).map(([tool, description]) => (
            <AnimatedTooltip 
              key={tool} 
              text={tool} 
              description={description}
            >
              <span className="
                px-3 py-1 rounded-full 
                bg-[#FEC6A1]/10 text-[#FEC6A1] text-sm 
                hover:bg-[#FEC6A1]/20
                transition-all duration-200
              ">
                {tool}
              </span>
            </AnimatedTooltip>
          ))}
        </div>
      </ContentSection>

      {/* When I'm not design Section */}
      <ContentSection title="When I'm not design">
        <div className="space-y-8">
          {/* I Read */}
          <div className="space-y-4">
            <h4 className="text-gray-400 font-light flex items-center gap-2">
              <Book size={18} className="text-gray-400" /> I Read
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Hackernoon', 'Medium', 'Nielsen Norman Group Article'].map((item) => (
                <span key={item} className="px-3 py-1 rounded-full bg-gray-800/50 text-gray-400 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* I Watch */}
          <div className="space-y-4">
            <h4 className="text-gray-400 font-light flex items-center gap-2">
              <Youtube size={18} className="text-gray-400" /> I Watch
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Y Combinator', 'Gamenivore', 'TED'].map((item) => (
                <span key={item} className="px-3 py-1 rounded-full bg-gray-800/50 text-gray-400 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* I Play */}
          <div className="space-y-4">
            <h4 className="text-gray-400 font-light flex items-center gap-2">
              <Gamepad2 size={18} className="text-gray-400" /> I Play
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Marvel SNAP', 'Board game', 'RDR2'].map((item) => (
                <span key={item} className="px-3 py-1 rounded-full bg-gray-800/50 text-gray-400 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Interesting In Section */}
      <ContentSection title="Interesting In">
        <div className="flex flex-wrap gap-2">
          {['Technologies', 'AI', 'AR/VR', 'Wearable Tech', 'Conflict', 'Crafting',
            'Sustainability', 'Games', 'Culture', 'History', 'Healthcare', 'Investment'].map((interest) => (
            <span 
              key={interest} 
              className="px-3 py-1 rounded-full bg-[#FEC6A1]/10 text-[#FEC6A1] text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </ContentSection>
    </div>
  );
};

export default SkillTab;