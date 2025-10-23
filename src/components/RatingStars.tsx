import React from 'react';
import { FiStar } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { RatingSize } from '../types/umkm';

interface RatingStarsProps {
  rating: number;
  size?: RatingSize;
  showRating?: boolean;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, size = "sm", showRating = true }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6"
  };
  
  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FaStar key={i} className={`${sizeClasses[size]} text-amber-400`} />
    );
  }

  // Add half star if needed
  if (hasHalfStar) {
    stars.push(
      <div key="half" className="relative">
        <FiStar className={`${sizeClasses[size]} text-amber-400`} />
        <div className="absolute inset-0 overflow-hidden w-1/2">
          <FaStar className={`${sizeClasses[size]} text-amber-400`} />
        </div>
      </div>
    );
  }

  // Add empty stars to make 5 total
  const remainingStars = 5 - Math.ceil(rating);
  for (let i = 0; i < remainingStars; i++) {
    stars.push(
      <FiStar key={`empty-${i}`} className={`${sizeClasses[size]} text-slate-300`} />
    );
  }

  return (
    <div className="flex items-center space-x-1">
      <div className="flex items-center space-x-0.5">
        {stars}
      </div>
      {showRating && (
        <span className={`${textSizeClasses[size]} font-medium text-slate-700 ml-2`}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default RatingStars;