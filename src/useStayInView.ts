import { useEffect, useRef } from 'react';
import { ElementPlacement, UseStayInViewProps } from './types';
import { getPosition, setElementPosition } from './utils';

const useStatyInView = ({
  anchorEl,
  placement = ElementPlacement.RIGHT_START,
  avoidAnchorOverlap = true,
}: UseStayInViewProps) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    if (!ref.current || !anchorEl) return;
    const element = ref.current as HTMLElement;

    const onChange = () => {
      const newPosition = getPosition(ref.current, anchorEl, placement, avoidAnchorOverlap);

      setElementPosition(element, newPosition);
    };

    onChange();

    window.addEventListener('resize', onChange);
    window.addEventListener('scroll', onChange);

    return () => {
      window.removeEventListener('resize', onChange);
      window.removeEventListener('scroll', onChange);
    };
  }, [anchorEl, ref, placement, avoidAnchorOverlap]);

  return {
    ref,
  };
};

export default useStatyInView;
