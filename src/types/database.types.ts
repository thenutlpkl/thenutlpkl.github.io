// src/types/database.types.ts
export interface Project {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    thumbnail_url: string;
    logo_url: string;
    project_url: string;
    category: string;
    is_featured: boolean;
    display_order: number;
    created_at: string;
    updated_at: string;
    technologies?: string[];
    tags?: string[];
    status?: string;
    github_url?: string;
    year?: number;
    mockups?: ProjectMockup;
  }

  interface ProjectMockup {
    desktop?: string;
    mobile?: string;
    floatingElements?: {
      image: string;
      position: { x: number; y: number };
    }[];
  }