// SectionCard.jsx – reusable card wrapper for consistent styling
import React from 'react';

export default function SectionCard({ children, className = '' }) {
  return (
    <div className={`bg-[#182235]/65 border border-[#384F6E]/15 rounded-[20px] p-6 ${className}`}> 
      {children}
    </div>
  );
}
