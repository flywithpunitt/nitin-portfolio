
import React, { useEffect } from 'react';
import { PortfolioCategory, CategoryType } from '../types';

interface DetailModalProps {
  category: PortfolioCategory | null;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ category, onClose }) => {
  useEffect(() => {
    if (category) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [category]);

  if (!category) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-300" 
        onClick={onClose} 
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#121212] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className={`p-6 md:p-10 bg-gradient-to-r ${category.color} flex justify-between items-start`}>
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2">{category.type}</h2>
            <p className="text-white/80 max-w-2xl text-base md:text-lg">{category.description}</p>
          </div>
          <button 
            onClick={onClose}
            className="bg-black/20 hover:bg-black/40 p-2 rounded-full transition-colors text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          {category.type === CategoryType.TESTIMONIALS ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.testimonials?.map((t) => (
                <div key={t.id} className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all">
                  <div className="flex items-center mb-4">
                    <img src={t.avatar} alt={t.clientName} className="w-12 h-12 rounded-full mr-4 object-cover" />
                    <div>
                      <h4 className="font-bold text-lg">{t.clientName}</h4>
                      <p className="text-sm text-gray-400">{t.role}</p>
                    </div>
                  </div>
                  <p className="italic text-gray-300 leading-relaxed">"{t.content}"</p>
                  <div className="mt-4 flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.projects.map((p) => (
                <div key={p.id} className="group relative rounded-2xl overflow-hidden aspect-video bg-white/5 border border-white/10">
                  <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <h4 className="font-bold text-white text-lg">{p.title}</h4>
                      <a href={p.link} className="text-sm text-blue-400 hover:underline inline-flex items-center">
                        Watch Now
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 md:px-10 border-t border-white/5 bg-[#0a0a0a] flex justify-between items-center">
          <p className="text-gray-500 text-sm">© 2024 Nitin • Meenitin Portfolio</p>
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-white/10 hover:bg-white text-white hover:text-black transition-all rounded-full font-semibold text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
