// services/article.service.ts
import { articles } from '../components/data/articles';
import { Article } from '@/types/article.types';

export const ArticleService = {
  getArticle: async (slug: string): Promise<Article | undefined> => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const article = articles.find(a => a.slug === slug);
        resolve(article);
      }, 100);
    });
  },

  getAllArticles: async (): Promise<Article[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(articles);
      }, 100);
    });
  }
};