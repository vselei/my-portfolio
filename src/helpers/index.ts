export const elementIsVisible = (el: string): Element | null => {
  const container = document.querySelector(el) as HTMLElement;
  container.style.overflowX = 'hidden';
  const containerRect = container.getBoundingClientRect();
  const containerTop = containerRect.top;

  return containerTop + 5 <= window.innerHeight ? container : null;
};

export const showAlert =
  (contactForm: HTMLFormElement): Function =>
  (msg: string): HTMLParagraphElement => {
    if (contactForm?.firstElementChild?.tagName === 'P') {
      contactForm.removeChild(contactForm.firstElementChild);
    }
    const p = document.createElement('p');
    p.textContent = msg;
    p.style.backgroundColor = 'var(--gray-900)';
    p.style.padding = '2rem';
    p.style.width = '100%';
    p.style.maxWidth = '40rem';
    p.style.margin = '0 auto 3rem auto';
    p.style.color = 'var(--white)';
    p.style.textAlign = 'center';
    p.style.textTransform = 'uppercase';
    p.style.borderRadius = '1rem';
    p.style.fontSize = '1.3rem';
    contactForm.insertAdjacentElement('afterbegin', p);
    setTimeout(() => {
      if (contactForm?.firstElementChild?.tagName === 'P') {
        contactForm.removeChild(contactForm.firstElementChild);
      }
    }, 3000);
    return p;
  };
