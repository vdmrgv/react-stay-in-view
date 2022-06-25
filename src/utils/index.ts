import { ElementPlacement, ElementPosition } from '../types';

export const getAvoidOverlapPlacement = (elementRect: DOMRect, anchorRect: DOMRect, placement: ElementPlacement) => {
  const shouldReverseTopPlacement = anchorRect.top - elementRect.height - anchorRect.height < 0;
  const shouldReverseRightPlacement = anchorRect.left + anchorRect.width + elementRect.width > window.innerWidth;
  const shouldReverseBottomPlacement = anchorRect.top + anchorRect.height + elementRect.height > window.innerHeight;
  const shouldReverseLeftPlacement = anchorRect.left - elementRect.width < 0;

  switch (placement) {
  case ElementPlacement.TOP_START:
    return shouldReverseTopPlacement ? ElementPlacement.BOTTOM_START : ElementPlacement.TOP_START;
  case ElementPlacement.TOP:
    return shouldReverseTopPlacement ? ElementPlacement.BOTTOM : ElementPlacement.TOP;
  case ElementPlacement.TOP_END:
    return shouldReverseTopPlacement ? ElementPlacement.BOTTOM_END : ElementPlacement.TOP_END;
  case ElementPlacement.RIGHT_START:
    return shouldReverseRightPlacement ? ElementPlacement.LEFT_START : ElementPlacement.RIGHT_START;
  case ElementPlacement.RIGHT:
    return shouldReverseRightPlacement ? ElementPlacement.LEFT : ElementPlacement.RIGHT;
  case ElementPlacement.RIGHT_END:
    return shouldReverseRightPlacement ? ElementPlacement.LEFT_END : ElementPlacement.RIGHT_END;
  case ElementPlacement.BOTTOM_START:
    return shouldReverseBottomPlacement ? ElementPlacement.TOP_START : ElementPlacement.BOTTOM_START;
  case ElementPlacement.BOTTOM:
    return shouldReverseBottomPlacement ? ElementPlacement.TOP : ElementPlacement.BOTTOM;
  case ElementPlacement.BOTTOM_END:
    return shouldReverseBottomPlacement ? ElementPlacement.TOP_END : ElementPlacement.BOTTOM_END;
  case ElementPlacement.LEFT_START:
    return shouldReverseLeftPlacement ? ElementPlacement.RIGHT_START : ElementPlacement.LEFT_START;
  case ElementPlacement.LEFT:
    return shouldReverseLeftPlacement ? ElementPlacement.RIGHT : ElementPlacement.LEFT;
  case ElementPlacement.LEFT_END:
    return shouldReverseLeftPlacement ? ElementPlacement.RIGHT_END : ElementPlacement.LEFT_END;
  default:
    return placement;
  }
};

export const getPosition = (
  element: HTMLElement,
  anchor: HTMLElement,
  placement: ElementPlacement,
  avoidAnchorOverlap?: boolean
): ElementPosition => {
  const elementRect = element.getBoundingClientRect();
  const anchorRect = anchor.getBoundingClientRect();

  const position = {
    x: 0,
    y: 0,
  };

  const avoidPlacement = avoidAnchorOverlap ? getAvoidOverlapPlacement(elementRect, anchorRect, placement) : placement;

  switch (avoidPlacement) {
  case ElementPlacement.TOP_START:
    position.x = anchorRect.left;
    position.y = anchorRect.top - elementRect.height;
    break;
  case ElementPlacement.TOP:
    position.x = anchorRect.left - elementRect.width / 2 + anchorRect.width / 2;
    position.y = anchorRect.top - elementRect.height;
    break;
  case ElementPlacement.TOP_END:
    position.x = anchorRect.left + anchorRect.width - elementRect.width;
    position.y = anchorRect.top - elementRect.height;
    break;
  case ElementPlacement.RIGHT_START:
    position.x = anchorRect.left + anchorRect.width;
    position.y = anchorRect.top;
    break;
  case ElementPlacement.RIGHT:
    position.x = anchorRect.left + anchorRect.width;
    position.y = anchorRect.top - elementRect.height / 2 + anchorRect.height / 2;
    break;
  case ElementPlacement.RIGHT_END:
    position.x = anchorRect.left + anchorRect.width;
    position.y = anchorRect.top - elementRect.height + anchorRect.height;
    break;
  case ElementPlacement.BOTTOM_START:
    position.x = anchorRect.left;
    position.y = anchorRect.top + anchorRect.height;
    break;
  case ElementPlacement.BOTTOM:
    position.x = anchorRect.left + anchorRect.width / 2 - elementRect.width / 2;
    position.y = anchorRect.top + anchorRect.height;
    break;
  case ElementPlacement.BOTTOM_END:
    position.x = anchorRect.left + anchorRect.width - elementRect.width;
    position.y = anchorRect.top + anchorRect.height;
    break;
  case ElementPlacement.LEFT_START:
    position.x = anchorRect.left - elementRect.width;
    position.y = anchorRect.top;
    break;
  case ElementPlacement.LEFT:
    position.x = anchorRect.left - elementRect.width;
    position.y = anchorRect.top - elementRect.height / 2 + anchorRect.height / 2;
    break;
  case ElementPlacement.LEFT_END:
    position.x = anchorRect.left - elementRect.width;
    position.y = anchorRect.top - elementRect.height + anchorRect.height;
    break;
  }

  const height = window.innerHeight;
  const width = window.innerWidth;

  return {
    top: position.y < 0 ? 0 : position.y > height - elementRect.height ? height - elementRect.height : position.y,
    left: position.x < 0 ? 0 : position.x > width - elementRect.width ? width - elementRect.width : position.x,
  };
};

export const setElementPosition = (element: HTMLElement, newPosition: ElementPosition) => {
  element.style.position = 'fixed';
  element.style.top = `${newPosition.top}px`;
  element.style.left = `${newPosition.left}px`;
};
