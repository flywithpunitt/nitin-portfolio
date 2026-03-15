
export enum CategoryType {
  MINI_SHORTS = 'Mini Shorts',
  REELS = 'Reels Video',
  LONG_VIDEO = 'Long Video',
  GRAPHIC_DESIGN = 'Graphic Design',
  TESTIMONIALS = 'Testimonial'
}

export interface Project {
  id: string;
  title: string;
  thumbnail: string;
  link?: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface PortfolioCategory {
  type: CategoryType;
  description: string;
  externalLink: string;
  projects: Project[];
  testimonials?: Testimonial[];
  color: string;
}
