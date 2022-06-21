import { ElementPlacement, ElementPosition } from '../types';

export const getPosition = (
  element: HTMLElement,
  anchor: HTMLElement,
  placement: ElementPlacement
): ElementPosition => {
  const elementRect = element.getBoundingClientRect();
  const anchorRect = anchor.getBoundingClientRect();

  const position = {
    x: 0,
    y: 0,
  };

  switch (placement) {
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
