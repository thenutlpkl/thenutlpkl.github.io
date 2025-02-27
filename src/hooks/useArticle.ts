// hooks/useArticle.ts
import { useQuery } from '@tanstack/react-query';
import { ArticleService } from '@/services/article.service';

export const useArticle = (slug: string) => {
  return useQuery({
    queryKey: ['article', slug],
    queryFn: () => ArticleService.getArticle(slug),
  });
};