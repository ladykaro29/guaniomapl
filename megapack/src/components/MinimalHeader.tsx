import React from "react";

export const MinimalHeader: React.FC = () => {
  return (
    <header className="site-header" role="banner">
      <div className="lp-container">
        <div className="header-brand-wrap">
          {/* Elegant Lotus Outline SVG */}
          <svg
            className="brand-lotus-icon"
            viewBox="0 0 100 80"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {/* Center petal */}
            <path d="M50 8 C40 30, 40 55, 50 68 C60 55, 60 30, 50 8 Z" />
            {/* Inner left petal */}
            <path d="M50 68 C35 60, 24 38, 30 20 C40 35, 45 52, 50 68 Z" />
            {/* Inner right petal */}
            <path d="M50 68 C65 60, 76 38, 70 20 C60 35, 55 52, 50 68 Z" />
            {/* Outer left petal */}
            <path d="M48 68 C22 66, 8 46, 12 34 C25 45, 36 58, 48 68 Z" />
            {/* Outer right petal */}
            <path d="M52 68 C78 66, 92 46, 88 34 C75 45, 64 58, 52 68 Z" />
            {/* Base water line */}
            <path d="M26 73 C38 77, 62 77, 74 73" />
          </svg>

          <div className="brand-title-wrap">
            <span className="brand-name-h">Guanioma Pereira</span>
            <span className="brand-tagline-h">MASAJE · BIENESTAR · FORMACIÓN</span>
          </div>
        </div>
      </div>
    </header>
  );
};
