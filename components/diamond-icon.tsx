import React from "react";

interface DiamondIconProps {
  className?: string;
  size?: number;
}

const DiamondIcon: React.FC<DiamondIconProps> = ({ className = "", size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Diamond shape with facets */}
      <path
        d="M12 2L3 7L12 22L21 7L12 2Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Top facet */}
      <path
        d="M12 2L8 7L12 12L16 7L12 2Z"
        fill="currentColor"
        fillOpacity="0.6"
      />
      {/* Left facet */}
      <path
        d="M12 2L3 7L8 7L12 12L12 2Z"
        fill="currentColor"
        fillOpacity="0.4"
      />
      {/* Right facet */}
      <path
        d="M12 2L21 7L16 7L12 12L12 2Z"
        fill="currentColor"
        fillOpacity="0.4"
      />
      {/* Center highlight */}
      <circle cx="12" cy="9" r="2" fill="white" fillOpacity="0.8" />
    </svg>
  );
};

export default DiamondIcon;

