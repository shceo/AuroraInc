import React from 'react';

interface ProgressBarProps {
  value: number; // значение от 0 до 100
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, className = '' }) => {
  return (
    <div className={`relative w-full bg-gray-200 rounded-full h-4 overflow-hidden ${className}`}>
      <div
        className="bg-blue-600 h-4 transition-all duration-300"
        style={{ width: `${value}%` }}
      />
      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-blue-600">
        {value}%
      </span>
    </div>
  );
};

export default ProgressBar;
