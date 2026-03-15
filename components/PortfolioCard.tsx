
import React from 'react';
import { PortfolioCategory, CategoryType } from '../types';

interface PortfolioCardProps {
  category: PortfolioCategory;
}

const CategoryIcon: React.FC<{ type: CategoryType; colorClass: string }> = ({ type, colorClass }) => {
  const baseClasses = "w-12 h-12 md:w-16 md:h-16 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2";
  
  switch (type) {
    case CategoryType.MINI_SHORTS:
      return (
        <svg className={`${baseClasses} text-yellow-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>
      );
    case CategoryType.REELS:
      return (
        <svg className={`${baseClasses} text-pink-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      );
    case CategoryType.LONG_VIDEO:
      return (
        <svg className={`${baseClasses} text-red-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
      );
    case CategoryType.GRAPHIC_DESIGN:
      return (
        <svg className={`${baseClasses} text-blue-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.127Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
        </svg>
      );
    case CategoryType.TESTIMONIALS:
      return (
        <svg className={`${baseClasses} text-emerald-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      );
    default:
      return null;
  }
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({ category }) => {
  return (
    <a
      href={category.externalLink}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-full group overflow-hidden rounded-[2.5rem] aspect-square flex flex-col items-center justify-center text-center p-8 bg-[#121212] border border-white/5 transition-all duration-500 hover:border-white/20 hover:bg-[#181818] active:scale-95 focus:outline-none ring-offset-[#0a0a0a] focus:ring-2 focus:ring-white/20"
    >
      {/* Glow Effect */}
      <div className={`absolute -inset-24 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`} />
      
      {/* Icon Section */}
      <div className="relative mb-8">
        <CategoryIcon type={category.type} colorClass={category.color} />
      </div>

      {/* Text Section */}
      <div className="relative z-10 space-y-3">
        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
          {category.type}
        </h3>
        <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-[200px] mx-auto group-hover:text-gray-300 transition-colors duration-300">
          {category.description}
        </p>
      </div>

      {/* Button Indicator */}
      <div className="absolute bottom-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
         <span className={`text-xs font-bold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r ${category.color}`}>
           Visit Portfolio
         </span>
      </div>
    </a>
  );
};

export default PortfolioCard;
