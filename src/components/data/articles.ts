// data/articles.ts
import { Article } from '@/types/article.types';

export const articles: Article[] = [
  {
    id: 'design-system',
    slug: 'design-system',
    title: 'Design System',
    description: 'My thoughts on creating meaningful digital experiences',
    lastUpdated: '2024-01-20',
    sections: [
      {
        id: 'intro',
        title: 'The Essence of Design',
        content: [
          {
            type: 'quote',
            text: 'Design system is a product, not a side project.\nIt is a team effort, not a one-person job.\nIt is a marathon, not a sprint.\nIt is made for everyone.'
          },
          {
            type: 'paragraph',
            text: 'Design is more than just making things look beautiful. It\'s about solving problems, creating experiences, and building connections between people and technology.'
          },
          {
            type: 'paragraph',
            text: 'My approach focuses on three core principles: simplicity, purpose, and emotion.'
          }
        ]
      },
    
    ]
  }
];