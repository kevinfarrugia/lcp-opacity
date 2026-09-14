// Reveal the hero image once it has loaded: opacity 0 -> 1.
const hero = document.querySelector('.hero__img');

const reveal = () => {
  // Force a style/layout flush so the browser commits opacity:0 first;
  // otherwise (e.g. cached image) the class lands before the initial
  // style is computed and the transition is skipped entirely.
  hero.getBoundingClientRect();
  requestAnimationFrame(() => hero.classList.add('is-visible'));
};

if (hero.complete && hero.naturalWidth > 0) {
  reveal();
} else {
  hero.addEventListener('load', reveal, { once: true });
}

hero.addEventListener('transitionend', (e) => {
  if (e.propertyName === 'opacity') hero.classList.add('completed');
});
