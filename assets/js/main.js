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

// Quiz interactivity — click to reveal correct/wrong + explanation
(function () {
  const quizzes = document.querySelectorAll('[data-quiz]');
  if (!quizzes.length) return;

  quizzes.forEach((quiz) => {
    const questions = quiz.querySelectorAll('.quiz-q');
    let correct = 0;
    let answered = 0;
    const total = questions.length;

    questions.forEach((q) => {
      const options = q.querySelectorAll('.quiz-opt');
      options.forEach((opt) => {
        opt.addEventListener('click', () => {
          if (q.classList.contains('is-answered')) return;

          const isCorrect = opt.hasAttribute('data-correct');
          opt.classList.add(isCorrect ? 'is-correct' : 'is-wrong');

          if (!isCorrect) {
            options.forEach((o) => {
              if (o.hasAttribute('data-correct')) o.classList.add('is-correct');
            });
          } else {
            correct++;
          }

          options.forEach((o) => o.setAttribute('disabled', 'true'));
          q.classList.add('is-answered');
          answered++;

          if (answered === total) {
            const result = quiz.querySelector('.quiz-result');
            const countEl = quiz.querySelector('[data-correct-count]');
            const totalEl = quiz.querySelector('[data-total-count]');
            if (result) result.classList.add('is-shown');
            if (countEl) countEl.textContent = correct;
            if (totalEl) totalEl.textContent = total;
            result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        });
      });
    });
  });
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
