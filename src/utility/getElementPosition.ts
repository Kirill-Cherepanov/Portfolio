export function getElementPosition(element: HTMLElement | null) {
  const pos = { x: 0, y: 0 };

  while (element) {
    pos.x += element.offsetLeft - element.scrollLeft + element.clientLeft;
    pos.y += element.offsetTop - element.scrollTop + element.clientTop;
    element = element.offsetParent as HTMLElement | null;
  }

  return pos;
}
