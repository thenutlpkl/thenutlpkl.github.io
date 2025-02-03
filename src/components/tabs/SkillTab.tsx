import { motion } from 'framer-motion';

const SkillTab = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-[500px] mx-auto space-y-24" // Increased spacing between sections
    >
      {/* Main Skills Grid */}
      <div className="space-y-16">
        {/* Product & Brand Section */}
        <div className="grid grid-cols-2 gap-16"> {/* Adjusted grid and gap */}
          {/* Product */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-[#FEC6A1] text-xl font-light">Product</h3>
            <ul className="space-y-4 text-gray-400 font-light">
              <li>UI/UX Architecture & Strategy</li>
              <li>Human-Centered Design Solutions</li>
              <li>Interactive Prototyping</li>
              <li>Design Systems Engineering</li>
            </ul>
          </motion.div>

          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-[#FEC6A1] text-xl font-light">Brand</h3>
            <ul className="space-y-4 text-gray-400 font-light">
              <li>Logo Design</li>
              <li>Icon Design</li>
              <li>Brand</li>
              <li>Presentation</li>
            </ul>
          </motion.div>
        </div>

        {/* Web Development & Motion Section */}
        <div className="grid grid-cols-2 gap-16"> {/* Consistent with above grid */}
          {/* Web Development */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-[#FEC6A1] text-xl font-light">Web Development</h3>
            <ul className="space-y-4 text-gray-400 font-light">
              <li>Webflow</li>
              <li>Framer</li>
              <li>Builder.io</li>
            </ul>
          </motion.div>

          {/* Motion */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-[#FEC6A1] text-xl font-light">Motion</h3>
            <ul className="space-y-4 text-gray-400 font-light">
              <li>Motion Design & UI Animation</li>
              <li>Dynamic Presentation Design</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Tools Section */}
      <motion.div variants={itemVariants} className="space-y-6">
        <h3 className="text-[#FEC6A1] text-xl font-light">Tools</h3>
        <div className="flex flex-wrap gap-2">
          {['Figma', 'Adobe Creative tools', 'Next.js', 'Chat GPT', 'Claude', 
            'After Effects', 'Webflow', 'Wordpress', 'Supernova'].map((tool) => (
            <span 
              key={tool} 
              className="px-3 py-1 rounded-full bg-[#FEC6A1]/10 text-[#FEC6A1] text-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>

      {/* When I'm not design Section */}
      <motion.div variants={itemVariants} className="space-y-6">
        <h3 className="text-[#FEC6A1] text-xl font-light">When I'm not design</h3>
        <div className="space-y-8">
          {/* I Read */}
          <div className="space-y-4">
            <h4 className="text-gray-400 font-light">I Read</h4>
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
            <h4 className="text-gray-400 font-light">I Watch</h4>
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
            <h4 className="text-gray-400 font-light">I Play</h4>
            <div className="flex flex-wrap gap-2">
              {['Marvel SNAP', 'Board game', 'RDR2'].map((item) => (
                <span key={item} className="px-3 py-1 rounded-full bg-gray-800/50 text-gray-400 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Interesting In Section */}
      <motion.div variants={itemVariants} className="space-y-6">
        <h3 className="text-[#FEC6A1] text-xl font-light">Interesting In</h3>
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
      </motion.div>
    </motion.div>
  );
};

export default SkillTab;