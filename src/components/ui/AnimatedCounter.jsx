import React from 'react';
import { useAnimatedCounter, useScrollReveal } from '../../hooks/useScrollEffects';

const AnimatedCounter = ({ value, suffix = '', prefix = '' }) => {
  const { ref, isVisible } = useScrollReveal();
  const isNumeric = !isNaN(parseInt(value));
  const count = useAnimatedCounter(isNumeric ? parseInt(value) : value, 1500, isVisible);

  return (
    <span ref={ref}>
      {prefix}{isNumeric ? count : value}{suffix}
    </span>
  );
};

export default AnimatedCounter;
