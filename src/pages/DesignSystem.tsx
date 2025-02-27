// pages/DesignSystem.tsx
import { useArticle } from '@/hooks/useArticle';
import Article from '@/components/Article';
import { motion } from 'framer-motion';

const DesignSystem = () => {
  const { data: article, isLoading, error } = useArticle('design-system');

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white/60">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white/60">Error loading article</div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white/60">Article not found</div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Article article={article} />
    </motion.div>
  );
};

export default DesignSystem;