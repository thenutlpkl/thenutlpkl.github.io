// components/Article.tsx
import { motion } from 'framer-motion';
import { Article as ArticleType } from '@/types/article.types';

interface ArticleProps {
  article: ArticleType;
}

// components/Article.tsx
const Article: React.FC<ArticleProps> = ({ article }) => {
    return (
      <div className="container mx-auto px-4 pt-[20vh] pb-16">
        <div className="max-w-[500px] mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Quote Section */}
            <div className="relative mb-32">
              <div className="px-12 py-8">
                <p className="text-3xl font-light leading-normal text-center text-white/90 font-serif">
                  When consistency, scalability, and efficiency matter, a design system isn’t optional—it’s essential. The moment a product grows beyond one designer, one platform, or one release cycle, it’s time to think system-first.
                </p>
              </div>
            </div>
    
            {/* Text Content Section */}
            <div className="space-y-16">
              <div className="space-y-6">
                <h2 className="text-gray-500 uppercase tracking-wider text-sm font-light">
                  Why a Design System Is Essential, Not Optional
                </h2>
                <div className="space-y-4">
                  <p className="text-base text-gray-400 font-light leading-relaxed">
                    "When consistency, scalability, and efficiency matter, a design system isn’t optional—it’s essential. The moment a product grows beyond one designer, one platform, or one release cycle, it’s time to think system-first."
                  </p>
                  <p className="text-base text-gray-400 font-light leading-relaxed">
                    In today’s fast-moving digital landscape, products evolve across multiple teams, platforms, and iterations. Without a design system, inconsistency creeps in, design debt piles up, and scaling becomes a bottleneck. A well-structured design system isn’t just about reusable components—it’s about creating a shared language between designers and developers, reducing friction, and ensuring a seamless user experience.
                  </p>
                  <h2 className="text-gray-500 uppercase tracking-wider text-sm font-light">
                    When Do You Need a Design System?
                  </h2>
                  <p className="text-base text-gray-400 font-light leading-relaxed">
                    <span className="font-bold text-white">Growing Teams</span> → When multiple designers and developers collaborate, a design system aligns everyone under a single vision.
                  </p>
                  <p className="text-base text-gray-400 font-light leading-relaxed">
                    <span className="font-bold text-white">Multi-Platform Products</span> → Web, mobile, and other platforms require consistent UI patterns to maintain brand integrity.
                  </p>
                  <p className="text-base text-gray-400 font-light leading-relaxed">
                    <span className="font-bold text-white">Rapid Scaling</span> → As a product expands, manual design updates become unsustainable—systems streamline workflows.
                  </p>
                  <p className="text-base text-gray-400 font-light leading-relaxed">
                    <span className="font-bold text-white">Frequent Iterations</span> → Agile teams need efficiency; a design system enables faster experimentation and deployment.
                  </p>
                  <p className="text-base text-gray-400 font-light leading-relaxed">
                    A design system is more than a collection of components—it’s a product of its own, requiring continuous evolution, governance, and adoption. It’s not just about efficiency but also about unlocking creativity by eliminating repetitive decisions, allowing designers to focus on solving real problems.
                  </p>
                  <p className="text-base text-gray-400 font-light leading-relaxed">
                    In my experience leading design teams across healthcare, fintech, and AI, I’ve seen firsthand how a well-implemented system transforms workflows, improves collaboration, and elevates product quality. A strong design system isn’t a luxury—it’s a necessity for any product that aims to scale with speed and precision.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };

export default Article;