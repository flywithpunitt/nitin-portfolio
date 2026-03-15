
import React from 'react';

const StickyCallButton: React.FC = () => {
  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
      {/* Mail Icon */}
      <a
        href="mailto:heynitin01@gmail.com"
        className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 p-3 rounded-2xl shadow-xl transition-all duration-300 group hover:scale-110 active:scale-95"
        aria-label="Email Nitin"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      </a>

      {/* Instagram Icon */}
      <a
        href="https://www.instagram.com/meenitin_?igsh=MWNpbXoxMTRkcG43dw=="
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 p-3 rounded-2xl shadow-xl transition-all duration-300 group hover:scale-110 active:scale-95"
        aria-label="Instagram"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-white group-hover:text-pink-400 transition-colors"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>

      {/* Phone Icon */}
      <a
        href="tel:+918287484910"
        className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 p-3 rounded-2xl shadow-xl transition-all duration-300 group hover:scale-110 active:scale-95"
        aria-label="Call Nitin"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-white group-hover:text-green-400 transition-colors"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
      </a>
    </div>
  );
};

export default StickyCallButton;
