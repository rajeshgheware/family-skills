// Stagger reveal of pillar cards on scroll
(function () {
  if (!('IntersectionObserver' in window)) return;

  const cards = document.querySelectorAll('.pillar-card');
  if (!cards.length) return;

  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(16px)';
    card.style.transition = `opacity .6s ease ${i * 60}ms, transform .6s cubic-bezier(.2,.7,.2,1) ${i * 60}ms`;
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  cards.forEach((card) => io.observe(card));
})();

// Scroll-progress accent on pillar pages
(function () {
  const article = document.querySelector('.pillar-article');
  if (!article) return;

  const bar = document.createElement('div');
  bar.style.cssText = 'position:fixed;top:0;left:0;height:2px;width:0;background:var(--pillar-accent);z-index:100;transition:width .1s linear;';
  document.body.appendChild(bar);

  function update() {
    const rect = article.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    const progress = Math.min(Math.max(-rect.top / total, 0), 1);
    bar.style.width = (progress * 100) + '%';
  }

  document.addEventListener('scroll', update, { passive: true });
  update();
})();
