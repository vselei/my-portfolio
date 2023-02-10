export const elementIsVisible = (el: string): Element | null => {
  const container = document.querySelector(el) as HTMLElement;
  container.style.overflowX = 'hidden';
  const containerRect = container.getBoundingClientRect();
  const containerTop = containerRect.top;
  const containerBottom = containerRect.bottom;

  return containerTop >= 0 && containerBottom <= window.innerHeight
    ? container
    : null;
};
