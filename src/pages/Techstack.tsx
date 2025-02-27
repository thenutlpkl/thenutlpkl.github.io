import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Navigation from "@/components/Navigation";

const techStackCategories = {
  development: [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Vite', icon: 'https://vitejs.dev/logo.svg' },
    { name: 'React Router', icon: 'https://reactrouter.com/favicon.ico' },
    { name: 'VS Code', icon: 'https://code.visualstudio.com/assets/images/code-stable.png' },
    { name: 'Next.js', icon: 'https://assets.vercel.com/image/upload/v1662710695/nextjs/Icon_dark_background.png' },
    { name: 'Cursor', icon: 'https://images.seeklogo.com/logo-png/61/1/cursor-logo-png_seeklogo-611587.png' },
    { name: 'GitHub', icon: 'https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  ],
  design: [
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Tailwind', icon: 'https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png' },
    { name: 'Webflow', icon: 'https://wpforms.com/wp-content/uploads/cache/integrations/68578d6f15fc60a9e75d6f38eceabb7c.png' },
    { name: 'Framer', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ83FETer3YN-yY76XgPoEaaf2PARxIClBfRw&s' },
    { name: 'Photoshop', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png?20200616073617' },
    { name: 'Illustrator', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png' },
    { name: 'Frame0', icon: 'https://docs.frame0.app/_astro/logo.Bd4pnkmE_15yKPx.webp' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'ZBrush', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fhRUrHcQSzsxbY1kVJMafmkjlhy5nhaksQ&s' },
  ],
  'design-system': [
    { name: 'Supernova', icon: 'https://images.saasworthy.com/tr:w-160,h-0,c-at_max,e-sharpen-1/supernovastudio_1368_logo_1608192082_8yrvo.jpg' },
    { name: 'Storybook', icon: 'https://static-00.iconduck.com/assets.00/storybook-icon-icon-1645x2048-ir1mrc43.png' },
  ],
  utilities: [
    { name: '1Password', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/1Password_icon.png/800px-1Password_icon.png' },
    { name: 'Slack', icon: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg' },
    { name: 'Trello', icon: 'https://trello.com/favicon.ico' },
    { name: 'Asana', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7HHYVFazDv-yEO-p9JV8GFOk_gHBlqilIEA&s' },
    { name: 'Miro', icon: 'https://cdn.brandfetch.io/miro.com/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed' },
    { name: 'Notion', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/2048px-Notion-logo.svg.png' },
    { name: 'Gather', icon: 'https://media.licdn.com/dms/image/v2/C560BAQHGULe0A_1mHg/company-logo_200_200/company-logo_200_200/0/1630662342584/gathertown_logo?e=2147483647&v=beta&t=V7RJJtGmLhHZFQtIR-jErAuhFJJPHD9B6mENuP74liU' },
  ],
  games: [
    { name: 'Ghost of Tsushima', icon: "https://image.api.playstation.com/vulcan/ap/rnd/202010/0222/niMUubpU9y1PxNvYmDfb8QFD.png" },
    { name: 'Red Dead Redemption 2', icon: "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png" },
    { name: 'The Witcher 3', icon: "https://image.api.playstation.com/vulcan/ap/rnd/202211/0714/S1jCzktWD7XJSRkz4kNYNVM0.png" },
    { name: 'Bloodborne', icon: "https://image.api.playstation.com/vulcan/img/rnd/202011/1317/CbTo1n9MSApzloY9NmXlHOWp.png" },
    { name: 'Monster Hunter', icon: "https://media.gq.com/photos/5a6f97c2cbcadf1e4e15c497/4:3/w_1536,h_1152,c_limit/monster-hunter-gq.jpg" },
    { name: 'Sekiro', icon: "https://image.api.playstation.com/cdn/HP0506/CUSA13910_00/QKJRzanGk86ezpx2pk5QqQaduoXGJV3u8vHIejSav4MYiHA3F7zNgxSOF9bJmt2T.png" },
    { name: 'Dead Cells', icon: "https://play-lh.googleusercontent.com/Mn9NateYFRZQbWnlZvszDPoKZbeuZM2O-Kyn7EKRCZI3D8joecHqytfOx73IyuAwHw" },
    { name: 'Zelda: Breath of the Wild', icon: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg" },
    { name: 'Stardew Valley', icon: "https://khsmustangmonthly.com/wp-content/uploads/2020/03/stardew-valley-logo.png" },
    { name: 'Minecraft', icon: "https://blizzstoreperu.com/cdn/shop/products/comprarminecraftjavaybedrock_png.jpg?v=1659543980" },
    { name: 'SNAP', icon: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1997040/capsule_616x353.jpg?t=1738974397" },
    { name: 'Darkest Dungeon', icon: "https://image.api.playstation.com/cdn/EP2483/CUSA05967_00/syETq48BA6vCOjX8tUoxNeu1K9h2Tive.png?w=440" },
    { name: 'Kingdom', icon: "https://image.api.playstation.com/vulcan/ap/rnd/202410/0712/b604f4d63cf66e9d50ab03d6602e4ddba873fe179913706d.jpg" },
    { name: 'Dave the Diver', icon: "https://image.api.playstation.com/vulcan/ap/rnd/202401/2508/f194dc023adef481689d90db93f343b73f5b4c5741925556.png" },
    { name: 'Tiny Glade', icon: "https://preview.redd.it/anyone-excited-for-tiny-glade-and-mirthwood-v0-slmurj92gwld1.jpg?width=600&format=pjpg&auto=webp&s=87efd4c4dfe2f3489c239f068891c626d44d52c2" },
  ],
};

const TechStackItem = ({ tech }: { tech: { name: string; icon: string } }) => {
  return (
    <div className="flex flex-col items-center group">
      <div className="w-20 h-20 overflow-hidden rounded-xl flex items-center justify-center">
        <img 
          src={tech.icon} 
          alt={`${tech.name} icon`} 
          className="object-cover w-full h-full rounded-xl transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <p className="text-xs text-center mt-2 text-gray-400 group-hover:text-gray-500 transition-colors duration-300">
        {tech.name}
      </p>
    </div>
  );
};

const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.includes('#techstack')) {
      containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const renderTechCategory = (title: string, items: Array<{name: string, icon: string}>) => (
    <div key={title} className="mb-8">
      <h3 className="text-center text-base font-medium text-[#FEC6A1] mb-4 capitalize">{title}</h3>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
        {items.map((item) => (
          <TechStackItem key={item.name} tech={item} />
        ))}
      </div>
    </div>
  );

  return (
    <motion.div 
      ref={containerRef}
      id="techstack"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen"
    >
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-bold text-[#FEC6A1] mb-2">Tech Stack</h2>
              <motion.div 
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { 
                    y: 0, 
                    opacity: 1,
                    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
                  }
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="text-xl text-muted-foreground mb-8"
              >
                The technologies and tools that fuel my creative process
              </motion.div>
            </div>
          </motion.div>

          {/* Tech Stack Categories */}
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {renderTechCategory('Design', techStackCategories.design)}
              {renderTechCategory('Design System', techStackCategories['design-system'])}
              {renderTechCategory('Development', techStackCategories.development)}
              {renderTechCategory('Utilities', techStackCategories.utilities)}
              {renderTechCategory('Games', techStackCategories.games)}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TechStack;