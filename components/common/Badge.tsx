"use client";

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  type: 'success' | 'warning' | 'danger' | 'neutral' | 'ai' | 'primary';
}

const Badge: React.FC<BadgeProps> = ({ children, type }) => {
  const styles = {
    success: `bg-green-100 text-green-800 border-green-200`,
    warning: `bg-yellow-100 text-yellow-800 border-yellow-200`,
    danger: `bg-red-100 text-red-800 border-red-200`,
    neutral: `bg-gray-100 text-gray-800 border-gray-200`,
    ai: `bg-blue-100 text-blue-800 border-blue-200`,
    primary: `bg-blue-100 text-blue-800 border-blue-200`
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[type]}`}>
      {children}
    </span>
  );
};

export default Badge;