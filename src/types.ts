export enum ElementPlacement {
  TOP = 'top',
  TOP_START = 'top-start',
  TOP_END = 'top-end',
  RIGHT_START = 'right',
  RIGHT = 'right-start',
  RIGHT_END = 'right-end',
  BOTTOM = 'bottom',
  BOTTOM_START = 'bottom-start',
  BOTTOM_END = 'bottom-end',
  LEFT = 'left',
  LEFT_START = 'left-start',
  LEFT_END = 'left-end',
}

export interface UseStayInViewProps {
  anchorEl?: HTMLElement | null;
  placement?: ElementPlacement;
  avoidAnchorOverlap?: boolean;
}

export interface StayInViewProps extends UseStayInViewProps {
  className?: string;
  children: React.ReactElement;
}

export interface ElementPosition {
  top: number;
  left: number;
}
