import React from 'react';
import { StayInViewProps } from './types';
import useStayInView from './useStayInView';

const StayInView = ({ className, children, anchorEl, placement, avoidAnchorOverlap }: StayInViewProps) => {
  const { ref } = useStayInView({ anchorEl, placement, avoidAnchorOverlap });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default StayInView;
