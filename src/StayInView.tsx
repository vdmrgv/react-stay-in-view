import React from 'react';
import { StayInViewProps } from './types';
import useStayInView from './useStayInView';

const StayInView = ({ className, children, anchorEl, placement }: StayInViewProps) => {
  const { ref } = useStayInView({ anchorEl, placement });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default StayInView;
