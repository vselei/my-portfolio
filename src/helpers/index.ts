export const elementIsVisible = (el: string): Element | null => {
  const container = document.querySelector(el) as HTMLElement;
  container.style.overflowX = 'hidden';
  const containerRect = container.getBoundingClientRect();
  const containerTop = containerRect.top;

  return containerTop + 5 <= window.innerHeight
    ? container
    : null;
};
