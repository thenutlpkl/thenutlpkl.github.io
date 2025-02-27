// types/article.types.ts
export interface ArticleSection {
    id: string;
    title: string;
    content: ArticleContent[];
  }
  
  export type ArticleContent = 
    | { type: 'paragraph'; text: string }
    | { type: 'list'; items: { title: string; description: string }[] }
    | { type: 'code'; language: string; code: string }
    | { type: 'image'; src: string; alt: string }
    | { type: 'quote'; text: string }; // Add this type
  
  export interface Article {
    id: string;
    slug: string;
    title: string;
    description: string;
    lastUpdated: string;
    sections: ArticleSection[];
  }