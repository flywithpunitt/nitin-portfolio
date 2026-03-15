
import { CategoryType, PortfolioCategory } from './types';

export const PORTFOLIO_DATA: PortfolioCategory[] = [
  {
    type: CategoryType.MINI_SHORTS,
    description: "High-energy, fast-paced short-form content for social media.",
    externalLink: "https://minishorts.my.canva.site/",
    color: "from-yellow-400 to-orange-500",
    projects: []
  },
  {
    type: CategoryType.REELS,
    description: "Viral-style vertical videos optimized for Instagram and TikTok.",
    externalLink: "https://minishorts.my.canva.site/reelsvideo",
    color: "from-pink-500 to-rose-600",
    projects: []
  },
  {
    type: CategoryType.LONG_VIDEO,
    description: "Professional YouTube edits and long-form cinematic projects.",
    externalLink: "https://minishorts.my.canva.site/business-website",
    color: "from-red-500 to-red-700",
    projects: []
  },
  {
    type: CategoryType.GRAPHIC_DESIGN,
    description: "Creative posters, YouTube thumbnails, and social media assets.",
    externalLink: "https://minishorts.my.canva.site/graphic-design",
    color: "from-blue-400 to-indigo-600",
    projects: []
  },
  {
    type: CategoryType.TESTIMONIALS,
    description: "What my clients say about our collaboration.",
    externalLink: "https://minishorts.my.canva.site/testimonial",
    color: "from-emerald-400 to-teal-600",
    projects: []
  }
];
