import React, { useState } from "react";
import Star from "./Star";
const StarRating = () => {
  // Initialize a 'courseRating' state
  const [courseRating, setCourseRating] = useState(0);

  // Write a function that returns 5 Star components
  const renderStars = () => {
    const stars = [];
    const maxStars = 5;
    for (let i = 0; i < maxStars; i++) {
      stars.push(
        <Star
          isSelected={courseRating > i}
          setRating={() => handleStarRating(i + 1)}
          key={i}
        />
      );
    }
    return stars;
  };

  // Write an event handler that updates the courseRating state.
  // Pass the function to a Star component via props
  const handleStarRating = (rating) => {
    if (courseRating === rating) {
      setCourseRating(0);
    } else {
      setCourseRating(rating);
    }
  };

  return (
    <ul className="course--stars">
      {/* Render the Star components */}
      {renderStars()}
    </ul>
  );
};

export default StarRating;
