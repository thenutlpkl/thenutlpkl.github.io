// src/utils/imageImports.ts
const base = import.meta.env.BASE_URL;

export interface ImageSet {
  mobile: string;
  left?: string;
  right?: string;
}

export const images: Record<string, ImageSet> = {
  project1: {
    mobile: `${base}assets/projects/project-1/mobile.png`
  },
  project2: {
    mobile: `${base}assets/projects/project-2/mobile-mockup.png`
  },
  project3: {
    mobile: `${base}assets/projects/project-3/mobileRoomVu.png`
  },
  project4: {
    mobile: `${base}assets/projects/project-4/bigcover.png`
  },
  project5: {
    mobile: `${base}assets/projects/project-5/mobile.png`,
    left: `${base}assets/projects/project-5/left.png`,
    right: `${base}assets/projects/project-5/right.png`
  }
};