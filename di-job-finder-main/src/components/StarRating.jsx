import React from "react";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";

const StarRating = ({ rating, totalStars = 5 }) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: totalStars }, (_, index) =>
        index < rating ? (
          <StarIconSolid key={index} className="h-3 w-3 text-yellow-500" />
        ) : (
          <StarIconOutline key={index} className="h-3 w-3 text-yellow-500" />
        )
      )}
    </div>
  );
};

export default StarRating;
