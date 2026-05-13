---
layout: default
title: Learner's Licence — Mock Test
description: A timed mock test for the Karnataka (Jayanagar RTO) Learner's Licence — twenty questions on signs and rules, fifteen minutes, sixty percent to pass.
permalink: /ll-mock-test/
body_class: ll-test-page
---

<article class="ll-page">

  <!-- ===================== INTRO ===================== -->
  <section class="ll-intro" id="ll-intro">
    <p class="eyebrow">Practice · Karnataka RTO</p>
    <h1>Learner's Licence — mock test</h1>
    <p class="ll-lede">
      Twenty questions in the style of the online test conducted at <em>Jayanagar RTO, Bengaluru</em>
      for non-transport (LMV &amp; two-wheeler). Fifteen minutes on the clock,
      one question at a time, twelve correct answers to pass.
    </p>

    <div class="ll-rules">
      <div class="ll-rule-card">
        <span class="ll-rule-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5"/><path d="M9 2h6M12 5V2"/>
          </svg>
        </span>
        <div>
          <p class="ll-rule-head">15 minutes</p>
          <p class="ll-rule-sub">Timer starts the moment you press <em>Begin</em>. Auto-submits at zero.</p>
        </div>
      </div>

      <div class="ll-rule-card">
        <span class="ll-rule-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9h10M7 13h10M7 17h6"/>
          </svg>
        </span>
        <div>
          <p class="ll-rule-head">20 questions</p>
          <p class="ll-rule-sub">Traffic signs, signals, hand gestures, road rules — single-correct, no negative marking.</p>
        </div>
      </div>

      <div class="ll-rule-card">
        <span class="ll-rule-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 12l5 5L20 6"/>
          </svg>
        </span>
        <div>
          <p class="ll-rule-head">Pass: 12 / 20</p>
          <p class="ll-rule-sub">Sixty percent. Below that, you can retake — questions are reshuffled each attempt.</p>
        </div>
      </div>
    </div>

    <p class="ll-disclaimer">
      <strong>Note.</strong> This is unofficial practice material. The real test is conducted on the RTO's
      computer terminal under their supervision. Format, count, and pass mark here approximate the Karnataka
      pattern but are not guaranteed to match the live exam on any given day.
    </p>

    <button class="ll-btn ll-btn-primary" id="ll-start-btn" type="button">Begin the test</button>
  </section>


  <!-- ===================== TEST ===================== -->
  <section class="ll-test" id="ll-test" hidden>

    <header class="ll-test-bar">
      <div class="ll-progress">
        <span class="ll-progress-label">Question <strong id="ll-q-current">1</strong> of <strong id="ll-q-total">20</strong></span>
        <div class="ll-progress-track" aria-hidden="true">
          <div class="ll-progress-fill" id="ll-progress-fill"></div>
        </div>
      </div>

      <div class="ll-timer" id="ll-timer" role="timer" aria-live="polite">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5"/><path d="M9 2h6M12 5V2"/>
        </svg>
        <span id="ll-time-display">15:00</span>
      </div>
    </header>

    <div class="ll-test-grid">
      <main class="ll-question-panel">
        <div class="ll-question-card" id="ll-question-card">
          <!-- injected -->
        </div>

        <nav class="ll-nav-buttons">
          <button class="ll-btn ll-btn-ghost" id="ll-prev-btn" type="button">← Previous</button>
          <button class="ll-btn ll-btn-ghost" id="ll-clear-btn" type="button">Clear answer</button>
          <button class="ll-btn ll-btn-primary" id="ll-next-btn" type="button">Next →</button>
          <button class="ll-btn ll-btn-submit" id="ll-submit-btn" type="button">Submit test</button>
        </nav>
      </main>

      <aside class="ll-side-panel" aria-label="Question palette">
        <p class="ll-palette-title">Palette</p>
        <div class="ll-palette" id="ll-palette" role="list"></div>
        <ul class="ll-palette-legend">
          <li><span class="dot dot-cur"></span> current</li>
          <li><span class="dot dot-ans"></span> answered</li>
          <li><span class="dot dot-skip"></span> not answered</li>
        </ul>
      </aside>
    </div>
  </section>


  <!-- ===================== RESULTS ===================== -->
  <section class="ll-results" id="ll-results" hidden>
    <header class="ll-results-head">
      <p class="eyebrow" id="ll-result-eyebrow">Result</p>
      <h2 id="ll-result-title">—</h2>
      <p class="ll-result-summary" id="ll-result-summary">—</p>

      <div class="ll-result-stats">
        <div class="ll-stat">
          <p class="ll-stat-num" id="ll-stat-score">0/20</p>
          <p class="ll-stat-label">Score</p>
        </div>
        <div class="ll-stat">
          <p class="ll-stat-num" id="ll-stat-pct">0%</p>
          <p class="ll-stat-label">Accuracy</p>
        </div>
        <div class="ll-stat">
          <p class="ll-stat-num" id="ll-stat-time">—</p>
          <p class="ll-stat-label">Time taken</p>
        </div>
      </div>

      <div class="ll-result-actions">
        <button class="ll-btn ll-btn-primary" id="ll-retake-btn" type="button">Take it again</button>
        <button class="ll-btn ll-btn-ghost" id="ll-review-all-btn" type="button">Show all questions</button>
      </div>
    </header>

    <section class="ll-review" id="ll-review">
      <h3 class="ll-review-heading">Questions you got wrong</h3>
      <p class="ll-review-empty" id="ll-review-empty" hidden>
        Nothing to review — you answered every question correctly. Well done.
      </p>
      <div class="ll-review-list" id="ll-review-list"></div>
    </section>
  </section>

</article>


<!-- =================== STYLES =================== -->
<style>
  .ll-page {
    max-width: 980px;
    margin: 0 auto;
  }
  .ll-page h1 {
    font-size: clamp(2rem, 4.5vw, 3.4rem);
    margin: .2rem 0 1.2rem;
  }
  .ll-lede {
    font-family: var(--serif);
    font-size: 1.25rem;
    line-height: 1.55;
    color: var(--ink-soft);
    max-width: 38em;
  }
  .ll-lede em { font-style: italic; }

  .ll-rules {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
    margin: 2.4rem 0 1.6rem;
  }
  .ll-rule-card {
    display: flex;
    align-items: flex-start;
    gap: .8rem;
    padding: 1rem 1.1rem;
    background: var(--paper-warm);
    border: 1px solid var(--rule);
    border-radius: 6px;
  }
  .ll-rule-ico {
    color: var(--accent);
    display: inline-flex;
    margin-top: 2px;
  }
  .ll-rule-head {
    font-family: var(--serif);
    font-weight: 500;
    font-size: 1.05rem;
    margin: 0 0 .15rem;
    color: var(--ink);
  }
  .ll-rule-sub {
    font-size: .88rem;
    color: var(--ink-mute);
    margin: 0;
    line-height: 1.45;
  }

  .ll-disclaimer {
    margin: 1.6rem 0 2rem;
    font-size: .92rem;
    color: var(--ink-mute);
    border-left: 2px solid var(--rule);
    padding: .3rem 0 .3rem 1rem;
    line-height: 1.55;
  }

  /* ---------- Buttons ---------- */
  .ll-btn {
    appearance: none;
    border: 1px solid transparent;
    font-family: var(--sans);
    font-size: .95rem;
    font-weight: 500;
    letter-spacing: .01em;
    padding: .7rem 1.3rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background .15s ease, color .15s ease, border-color .15s ease, transform .08s ease;
  }
  .ll-btn:active { transform: translateY(1px); }
  .ll-btn-primary {
    background: var(--accent);
    color: #fdf8ee;
  }
  .ll-btn-primary:hover { background: var(--accent-deep); }
  .ll-btn-ghost {
    background: transparent;
    color: var(--ink-soft);
    border-color: var(--rule);
  }
  .ll-btn-ghost:hover {
    border-color: var(--accent);
    color: var(--accent-deep);
  }
  .ll-btn-submit {
    background: #2d5a3d;
    color: #f5efe2;
  }
  .ll-btn-submit:hover { background: #1f3f2a; }
  .ll-btn:disabled {
    opacity: .4;
    cursor: not-allowed;
    transform: none;
  }

  /* ---------- Test header bar ---------- */
  .ll-test-bar {
    position: sticky;
    top: 76px;
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem 1.2rem;
    margin-bottom: 1.6rem;
    background: var(--paper-warm);
    border: 1px solid var(--rule);
    border-radius: 6px;
    box-shadow: 0 6px 20px -10px rgba(60, 40, 20, 0.18);
  }
  .ll-progress { flex: 1; }
  .ll-progress-label {
    font-size: .82rem;
    color: var(--ink-mute);
    letter-spacing: .04em;
  }
  .ll-progress-label strong { color: var(--ink); }
  .ll-progress-track {
    height: 4px;
    background: var(--paper-deep);
    border-radius: 2px;
    margin-top: .5rem;
    overflow: hidden;
  }
  .ll-progress-fill {
    height: 100%;
    width: 0%;
    background: var(--accent);
    transition: width .25s ease;
  }
  .ll-timer {
    display: inline-flex;
    align-items: center;
    gap: .45rem;
    font-family: var(--serif);
    font-feature-settings: "tnum";
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--ink);
    padding: .25rem .8rem;
    background: var(--paper);
    border: 1px solid var(--rule);
    border-radius: 4px;
  }
  .ll-timer.warn  { color: #a35c14; border-color: #d8a86b; }
  .ll-timer.crit  { color: #a73c25; border-color: var(--accent); animation: ll-pulse 1s ease-in-out infinite; }
  @keyframes ll-pulse {
    0%,100% { background: var(--paper); }
    50% { background: #fbe1d8; }
  }

  /* ---------- Layout grid ---------- */
  .ll-test-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 200px;
    gap: 2rem;
    align-items: start;
  }
  @media (max-width: 760px) {
    .ll-test-grid { grid-template-columns: minmax(0, 1fr); }
    .ll-side-panel { order: 2; }
  }

  /* ---------- Question card ---------- */
  .ll-question-card {
    background: var(--paper);
    border: 1px solid var(--rule);
    border-radius: 6px;
    padding: 1.8rem 1.6rem 1.6rem;
    box-shadow: 0 12px 30px -22px rgba(60, 40, 20, 0.4);
  }
  .ll-q-number {
    font-size: .78rem;
    font-weight: 600;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: var(--accent-deep);
    margin: 0 0 .6rem;
  }
  .ll-q-prompt {
    font-family: var(--serif);
    font-size: 1.35rem;
    line-height: 1.4;
    color: var(--ink);
    margin: 0 0 1.4rem;
  }
  .ll-q-sign {
    display: flex;
    justify-content: center;
    margin: 0 0 1.6rem;
  }
  .ll-q-sign svg {
    width: 150px;
    height: 150px;
    filter: drop-shadow(0 6px 16px rgba(60, 40, 20, 0.18));
  }
  .ll-options {
    display: flex;
    flex-direction: column;
    gap: .65rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .ll-option {
    display: flex;
    align-items: flex-start;
    gap: .8rem;
    padding: .9rem 1rem;
    border: 1px solid var(--rule);
    border-radius: 4px;
    cursor: pointer;
    background: var(--paper);
    transition: border-color .15s ease, background .15s ease;
  }
  .ll-option:hover {
    border-color: var(--accent);
    background: #fdf3e9;
  }
  .ll-option input { display: none; }
  .ll-option-letter {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: var(--paper-warm);
    border: 1px solid var(--rule);
    font-family: var(--serif);
    font-size: .85rem;
    font-weight: 500;
    color: var(--ink-soft);
    flex-shrink: 0;
    transition: background .15s ease, color .15s ease, border-color .15s ease;
  }
  .ll-option-text {
    flex: 1;
    line-height: 1.45;
    color: var(--ink);
  }
  .ll-option.selected {
    border-color: var(--accent);
    background: #fcead9;
  }
  .ll-option.selected .ll-option-letter {
    background: var(--accent);
    color: #fdf8ee;
    border-color: var(--accent);
  }

  /* ---------- Nav buttons ---------- */
  .ll-nav-buttons {
    display: flex;
    gap: .6rem;
    margin-top: 1.4rem;
    flex-wrap: wrap;
  }
  .ll-nav-buttons .ll-btn-submit { margin-left: auto; }
  @media (max-width: 520px) {
    .ll-nav-buttons .ll-btn-submit { margin-left: 0; }
  }

  /* ---------- Side palette ---------- */
  .ll-side-panel {
    background: var(--paper-warm);
    border: 1px solid var(--rule);
    border-radius: 6px;
    padding: 1rem;
    position: sticky;
    top: 200px;
  }
  .ll-palette-title {
    font-size: .78rem;
    font-weight: 600;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: var(--ink-mute);
    margin: 0 0 .8rem;
  }
  .ll-palette {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: .35rem;
  }
  .ll-palette-cell {
    appearance: none;
    background: var(--paper);
    border: 1px solid var(--rule);
    border-radius: 3px;
    font-family: var(--serif);
    font-size: .88rem;
    color: var(--ink-soft);
    padding: .4rem 0;
    cursor: pointer;
    transition: all .12s ease;
  }
  .ll-palette-cell:hover { border-color: var(--accent); }
  .ll-palette-cell.answered {
    background: #e1ead2;
    border-color: #8aa569;
    color: #3d5527;
  }
  .ll-palette-cell.current {
    background: var(--accent);
    border-color: var(--accent);
    color: #fdf8ee;
    font-weight: 600;
  }
  .ll-palette-legend {
    list-style: none;
    padding: 0;
    margin: 1rem 0 0;
    font-size: .8rem;
    color: var(--ink-mute);
  }
  .ll-palette-legend li {
    display: flex;
    align-items: center;
    gap: .4rem;
    margin: .25rem 0;
  }
  .ll-palette-legend .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    border: 1px solid var(--rule);
  }
  .ll-palette-legend .dot-cur { background: var(--accent); border-color: var(--accent); }
  .ll-palette-legend .dot-ans { background: #e1ead2; border-color: #8aa569; }
  .ll-palette-legend .dot-skip { background: var(--paper); }

  /* ---------- Results ---------- */
  .ll-results-head { text-align: center; margin-bottom: 3rem; }
  .ll-results-head h2 {
    font-size: clamp(2rem, 4.5vw, 3rem);
    margin: .3rem 0 .8rem;
  }
  .ll-results-head h2.pass { color: #2d5a3d; }
  .ll-results-head h2.fail { color: var(--accent-deep); }
  .ll-result-summary {
    font-family: var(--serif);
    font-size: 1.2rem;
    color: var(--ink-soft);
    max-width: 32em;
    margin: 0 auto 2rem;
    line-height: 1.55;
  }
  .ll-result-stats {
    display: flex;
    justify-content: center;
    gap: 2.5rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }
  .ll-stat-num {
    font-family: var(--serif);
    font-size: 2.4rem;
    font-weight: 500;
    color: var(--ink);
    margin: 0;
    line-height: 1;
  }
  .ll-stat-label {
    font-size: .78rem;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: var(--ink-mute);
    margin: .3rem 0 0;
  }
  .ll-result-actions {
    display: flex;
    justify-content: center;
    gap: .8rem;
    flex-wrap: wrap;
  }

  .ll-review-heading {
    font-family: var(--serif);
    font-size: 1.5rem;
    border-bottom: 1px solid var(--rule);
    padding-bottom: .6rem;
    margin: 0 0 1.6rem;
  }
  .ll-review-empty {
    font-family: var(--serif);
    font-style: italic;
    color: var(--ink-mute);
    text-align: center;
    padding: 2rem 0;
  }
  .ll-review-item {
    background: var(--paper);
    border: 1px solid var(--rule);
    border-left: 3px solid var(--accent);
    border-radius: 4px;
    padding: 1.3rem 1.2rem;
    margin-bottom: 1rem;
  }
  .ll-review-item.correct { border-left-color: #6d8c4d; }
  .ll-review-num {
    font-size: .76rem;
    font-weight: 600;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: var(--ink-mute);
    margin: 0 0 .4rem;
  }
  .ll-review-q {
    font-family: var(--serif);
    font-size: 1.1rem;
    margin: 0 0 .9rem;
    line-height: 1.4;
  }
  .ll-review-sign {
    float: right;
    margin: 0 0 .8rem 1rem;
  }
  .ll-review-sign svg { width: 80px; height: 80px; }
  .ll-review-answers { margin: 0 0 .9rem; font-size: .94rem; line-height: 1.55; }
  .ll-review-answers p { margin: .15rem 0; }
  .ll-review-answers .wrong { color: var(--accent-deep); }
  .ll-review-answers .right { color: #2d5a3d; }
  .ll-review-explain {
    background: var(--paper-warm);
    border-radius: 3px;
    padding: .8rem 1rem;
    font-size: .92rem;
    line-height: 1.55;
    color: var(--ink-soft);
    margin: 0;
  }
  .ll-review-explain strong { color: var(--ink); }
</style>


<!-- =================== SCRIPT =================== -->
<script>
(function () {
  'use strict';

  // ---------- SVG sign helpers ----------
  // All viewBox 0 0 120 120 for consistent sizing.
  const mandatory = (inner) => `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mandatory sign">
      <circle cx="60" cy="60" r="54" fill="#fdfaf3" stroke="#c9533a" stroke-width="9"/>
      ${inner}
    </svg>`;

  const cautionary = (inner) => `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cautionary sign">
      <polygon points="60,8 112,108 8,108" fill="#fdfaf3" stroke="#c9533a" stroke-width="8" stroke-linejoin="round"/>
      ${inner}
    </svg>`;

  const informatory = (inner, color) => `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Informatory sign">
      <rect x="8" y="14" width="104" height="92" rx="4" fill="${color || '#1c5a99'}" stroke="#0d3a66" stroke-width="2"/>
      ${inner}
    </svg>`;

  const SIGNS = {
    stop: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stop sign">
        <polygon points="36,8 84,8 112,36 112,84 84,112 36,112 8,84 8,36"
                 fill="#c9533a" stroke="#fdfaf3" stroke-width="5"/>
        <text x="60" y="72" text-anchor="middle" font-family="Manrope, sans-serif"
              font-size="26" font-weight="700" fill="#fdfaf3" letter-spacing="2">STOP</text>
      </svg>`,

    noEntry: mandatory(`
      <rect x="26" y="52" width="68" height="16" fill="#fdfaf3"/>
    `),

    noParking: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="No parking">
        <circle cx="60" cy="60" r="54" fill="#1c5a99" stroke="#0d3a66" stroke-width="3"/>
        <text x="60" y="78" text-anchor="middle" font-family="Manrope, sans-serif"
              font-size="58" font-weight="700" fill="#fdfaf3">P</text>
        <line x1="22" y1="22" x2="98" y2="98" stroke="#c9533a" stroke-width="10" stroke-linecap="round"/>
      </svg>`,

    speed50: mandatory(`
      <text x="60" y="76" text-anchor="middle" font-family="Manrope, sans-serif"
            font-size="44" font-weight="700" fill="#1a1614">50</text>
    `),

    pedCrossing: cautionary(`
      <!-- walking figure -->
      <circle cx="58" cy="50" r="5" fill="#1a1614"/>
      <path d="M58 56 L58 78 M58 64 L48 70 M58 64 L68 60 M58 78 L52 96 M58 78 L66 96"
            stroke="#1a1614" stroke-width="3.2" stroke-linecap="round" fill="none"/>
      <!-- zebra stripes -->
      <rect x="42" y="98" width="36" height="3" fill="#1a1614"/>
      <rect x="42" y="92" width="36" height="3" fill="#1a1614"/>
    `),

    schoolAhead: cautionary(`
      <!-- two children -->
      <circle cx="46" cy="50" r="5" fill="#1a1614"/>
      <path d="M46 56 L46 78 M46 64 L40 70 M46 64 L52 64 M46 78 L42 94 M46 78 L50 94"
            stroke="#1a1614" stroke-width="2.8" stroke-linecap="round" fill="none"/>
      <circle cx="72" cy="54" r="4" fill="#1a1614"/>
      <path d="M72 59 L72 78 M72 66 L66 72 M72 66 L78 70 M72 78 L68 94 M72 78 L76 94"
            stroke="#1a1614" stroke-width="2.6" stroke-linecap="round" fill="none"/>
      <!-- satchel -->
      <rect x="50" y="68" width="6" height="6" fill="#1a1614"/>
    `),

    rightCurve: cautionary(`
      <path d="M44 92 C 44 60, 76 60, 76 40 L 70 48 M76 40 L82 50"
            stroke="#1a1614" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    `),

    noHorn: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="No horn">
        <circle cx="60" cy="60" r="54" fill="#fdfaf3" stroke="#c9533a" stroke-width="9"/>
        <!-- horn shape -->
        <path d="M36 56 L52 56 L70 44 L70 76 L52 64 L36 64 Z"
              fill="#1a1614" stroke="#1a1614" stroke-width="2" stroke-linejoin="round"/>
        <path d="M76 50 Q84 60 76 70" stroke="#1a1614" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M82 44 Q94 60 82 76" stroke="#1a1614" stroke-width="3" fill="none" stroke-linecap="round"/>
        <line x1="22" y1="22" x2="98" y2="98" stroke="#c9533a" stroke-width="9" stroke-linecap="round"/>
      </svg>`,

    speedBreaker: cautionary(`
      <path d="M30 88 Q 60 56 90 88" stroke="#1a1614" stroke-width="6" fill="none" stroke-linecap="round"/>
      <line x1="22" y1="92" x2="98" y2="92" stroke="#1a1614" stroke-width="3"/>
    `),

    noUTurn: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="No U-turn">
        <circle cx="60" cy="60" r="54" fill="#fdfaf3" stroke="#c9533a" stroke-width="9"/>
        <path d="M44 86 L44 56 Q44 38 60 38 Q76 38 76 56 L76 78 L70 72 M76 78 L82 72"
              stroke="#1a1614" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <line x1="22" y1="22" x2="98" y2="98" stroke="#c9533a" stroke-width="9" stroke-linecap="round"/>
      </svg>`,

    hospital: informatory(`
      <text x="60" y="78" text-anchor="middle" font-family="Manrope, sans-serif"
            font-size="60" font-weight="700" fill="#fdfaf3">H</text>
    `),

    parkingInfo: informatory(`
      <text x="60" y="78" text-anchor="middle" font-family="Manrope, sans-serif"
            font-size="60" font-weight="700" fill="#fdfaf3">P</text>
    `),
  };


  // ---------- Question bank ----------
  // Each: prompt, options[3], correct (index), explanation, sign (svg key, optional)
  const QUESTIONS = [
    {
      prompt: "What does this sign mean?",
      sign: "stop",
      options: ["Slow down and proceed", "Stop completely", "Give way to traffic on the right"],
      correct: 1,
      explain: "The octagonal red <strong>STOP</strong> sign requires you to come to a <strong>full stop</strong>, check it is safe, then proceed."
    },
    {
      prompt: "What does this sign indicate?",
      sign: "noEntry",
      options: ["No entry from this side", "One-way street", "No overtaking"],
      correct: 0,
      explain: "A red circle with a horizontal white bar means <strong>entry is prohibited</strong> from this direction for all vehicles."
    },
    {
      prompt: "What does this sign mean?",
      sign: "noParking",
      options: ["Parking is permitted", "No parking on this side", "Hospital nearby"],
      correct: 1,
      explain: "Blue circle with red border and a diagonal stroke through 'P' — <strong>no parking</strong> on that side of the road."
    },
    {
      prompt: "You see this sign on a road. What does it mean?",
      sign: "speed50",
      options: ["Minimum speed is 50 km/h", "Maximum speed is 50 km/h", "Distance to next town is 50 km"],
      correct: 1,
      explain: "Number inside a red-bordered circle is a <strong>mandatory upper speed limit</strong> — do not exceed 50 km/h on this stretch."
    },
    {
      prompt: "What is this cautionary sign warning you about?",
      sign: "pedCrossing",
      options: ["Pedestrian crossing ahead", "School zone — children playing", "Pedestrians prohibited"],
      correct: 0,
      explain: "Triangular cautionary sign — <strong>pedestrian crossing ahead</strong>. Slow down and give way to people on the zebra."
    },
    {
      prompt: "What should you do when you see this sign?",
      sign: "schoolAhead",
      options: ["Honk to alert children", "Reduce speed and stay alert for children", "Stop completely"],
      correct: 1,
      explain: "<strong>School ahead</strong> — children may cross unexpectedly. Reduce speed, avoid honking, and watch carefully."
    },
    {
      prompt: "This sign warns you of —",
      sign: "rightCurve",
      options: ["Right turn permitted", "Sharp curve to the right", "U-turn allowed"],
      correct: 1,
      explain: "Cautionary sign — <strong>right hand curve</strong>. Reduce speed before entering the curve and stay in your lane."
    },
    {
      prompt: "What does this sign mean?",
      sign: "noHorn",
      options: ["Horn permitted", "Use of horn prohibited", "Silence zone ends here"],
      correct: 1,
      explain: "<strong>Horn prohibited</strong> — typically near hospitals, schools, and silence zones. Honking attracts a fine."
    },
    {
      prompt: "This sign warns you of —",
      sign: "speedBreaker",
      options: ["Speed breaker / hump ahead", "Tunnel ahead", "Loose gravel"],
      correct: 0,
      explain: "Cautionary sign — <strong>speed breaker or hump ahead</strong>. Slow down well before reaching it."
    },
    {
      prompt: "What does this sign indicate?",
      sign: "noUTurn",
      options: ["U-turn permitted", "U-turn prohibited", "One-way traffic"],
      correct: 1,
      explain: "Red-bordered circle showing a U-turn arrow with a diagonal stroke — <strong>U-turn is not allowed</strong> at this location."
    },
    {
      prompt: "What does this informatory sign tell you?",
      sign: "hospital",
      options: ["Hospital ahead", "Helipad", "Hotel"],
      correct: 0,
      explain: "Blue rectangle with white <strong>'H'</strong> is the standard informatory sign for a <strong>hospital</strong>. Drive quietly — silence zone usually applies."
    },
    {
      prompt: "What does this sign indicate?",
      sign: "parkingInfo",
      options: ["Police station", "Parking permitted", "Public toilet"],
      correct: 1,
      explain: "Blue rectangle with white <strong>'P'</strong> — <strong>parking permitted</strong> in this area, subject to local rules and timings."
    },
    {
      prompt: "For how long is a Learner's Licence valid in Karnataka?",
      options: ["1 month", "6 months", "1 year"],
      correct: 1,
      explain: "A Learner's Licence is valid for <strong>6 months</strong> from the date of issue. You must clear the driving test within this period."
    },
    {
      prompt: "What is the minimum age to obtain a Learner's Licence for a motorcycle with gear or a four-wheeler (LMV, non-transport)?",
      options: ["16 years", "18 years", "21 years"],
      correct: 1,
      explain: "Minimum age is <strong>18 years</strong> for a geared two-wheeler or LMV. For a gearless two-wheeler under 50cc, the minimum is 16 (with parental consent)."
    },
    {
      prompt: "Which hand signal indicates that you intend to slow down?",
      options: [
        "Right arm extended, palm down, moved up and down",
        "Right arm extended horizontally, palm forward",
        "Right arm rotated in a circular motion"
      ],
      correct: 0,
      explain: "To <strong>slow down</strong>, extend your right arm with palm facing down and move it up and down. Drivers behind you will see your intent before they see your brake lights."
    },
    {
      prompt: "Under the Motor Vehicles Act, what is the legal blood-alcohol limit while driving?",
      options: ["30 mg per 100 ml of blood", "100 mg per 100 ml of blood", "Zero — no alcohol permitted"],
      correct: 0,
      explain: "The legal limit is <strong>30 mg of alcohol per 100 ml of blood</strong>. Exceeding it is a punishable offence under section 185 of the MV Act."
    },
    {
      prompt: "You are approaching a traffic signal showing a steady yellow (amber) light. What should you do?",
      options: [
        "Speed up to cross before it turns red",
        "Stop if you can do so safely; otherwise clear the junction with care",
        "Treat it the same as green and continue"
      ],
      correct: 1,
      explain: "Yellow is a warning that the signal is about to turn red. <strong>Stop if it is safe to do so</strong>; never accelerate to beat the light."
    },
    {
      prompt: "Wearing a helmet on a two-wheeler is mandatory for —",
      options: ["Only the rider", "Both rider and pillion passenger", "Only riders above 18"],
      correct: 1,
      explain: "Under section 129 of the Motor Vehicles Act, helmets are mandatory for <strong>both rider and pillion</strong> (with limited exemptions). Non-compliance attracts a fine and possible LL suspension."
    },
    {
      prompt: "While driving, which of the following documents must you carry at all times?",
      options: [
        "Only driving licence",
        "Driving licence, Registration Certificate, insurance, and PUC certificate",
        "Only Aadhaar card and licence"
      ],
      correct: 1,
      explain: "You must carry your <strong>DL/LL, RC, valid insurance, and PUC (Pollution Under Control) certificate</strong>. Digital copies on DigiLocker or mParivahan are also accepted."
    },
    {
      prompt: "At an uncontrolled intersection (no signal, no sign, no traffic police), who has the right of way?",
      options: [
        "The vehicle that arrives first, regardless of direction",
        "The vehicle approaching from your right",
        "The larger of the two vehicles"
      ],
      correct: 1,
      explain: "At an uncontrolled junction, give way to the <strong>vehicle approaching from your right</strong>. This is the standard 'right-hand rule' under the MV Act."
    }
  ];

  // ---------- State ----------
  const TOTAL_TIME_SECONDS = 15 * 60;
  const PASS_MARK = 12;

  const state = {
    questions: [],        // shuffled
    answers: [],          // user choice index per question, or null
    current: 0,
    startTime: null,
    timerId: null,
    timeLeft: TOTAL_TIME_SECONDS,
    submitted: false,
    showAllReview: false,
  };

  // ---------- DOM ----------
  const $ = (id) => document.getElementById(id);

  // ---------- Utilities ----------
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Shuffle question order AND option order, remembering the new correct index.
  function prepareQuestions() {
    const shuffledQs = shuffle(QUESTIONS);
    return shuffledQs.map(q => {
      const indexed = q.options.map((text, idx) => ({ text, isCorrect: idx === q.correct }));
      const reord = shuffle(indexed);
      return {
        prompt: q.prompt,
        sign: q.sign || null,
        options: reord.map(o => o.text),
        correct: reord.findIndex(o => o.isCorrect),
        explain: q.explain,
      };
    });
  }

  function formatMMSS(s) {
    const m = Math.floor(s / 60);
    const r = s % 60;
    return String(m).padStart(2, '0') + ':' + String(r).padStart(2, '0');
  }

  // ---------- Rendering ----------
  function renderQuestion() {
    const q = state.questions[state.current];
    const card = $('ll-question-card');
    const userAns = state.answers[state.current];

    const letters = ['A', 'B', 'C', 'D'];

    const signHTML = q.sign && SIGNS[q.sign]
      ? `<div class="ll-q-sign">${SIGNS[q.sign]}</div>`
      : '';

    const optionsHTML = q.options.map((opt, i) => `
      <li>
        <label class="ll-option ${userAns === i ? 'selected' : ''}" data-idx="${i}">
          <input type="radio" name="ll-q${state.current}" value="${i}" ${userAns === i ? 'checked' : ''}>
          <span class="ll-option-letter">${letters[i]}</span>
          <span class="ll-option-text">${opt}</span>
        </label>
      </li>
    `).join('');

    card.innerHTML = `
      <p class="ll-q-number">Question ${state.current + 1}</p>
      <p class="ll-q-prompt">${q.prompt}</p>
      ${signHTML}
      <ul class="ll-options">${optionsHTML}</ul>
    `;

    card.querySelectorAll('.ll-option').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const idx = parseInt(el.getAttribute('data-idx'), 10);
        state.answers[state.current] = idx;
        renderQuestion();
        renderPalette();
        renderProgress();
      });
    });

    $('ll-q-current').textContent = state.current + 1;
    $('ll-q-total').textContent = state.questions.length;
    $('ll-prev-btn').disabled = state.current === 0;
    $('ll-next-btn').disabled = state.current === state.questions.length - 1;
  }

  function renderPalette() {
    const palette = $('ll-palette');
    palette.innerHTML = '';
    state.questions.forEach((_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'll-palette-cell';
      b.textContent = i + 1;
      if (state.answers[i] !== null && state.answers[i] !== undefined) b.classList.add('answered');
      if (i === state.current) b.classList.add('current');
      b.addEventListener('click', () => {
        state.current = i;
        renderQuestion();
        renderPalette();
        renderProgress();
      });
      palette.appendChild(b);
    });
  }

  function renderProgress() {
    const answered = state.answers.filter(a => a !== null && a !== undefined).length;
    const pct = (answered / state.questions.length) * 100;
    $('ll-progress-fill').style.width = pct + '%';
  }

  function updateTimerDisplay() {
    const el = $('ll-timer');
    $('ll-time-display').textContent = formatMMSS(state.timeLeft);
    el.classList.remove('warn', 'crit');
    if (state.timeLeft <= 60) el.classList.add('crit');
    else if (state.timeLeft <= 180) el.classList.add('warn');
  }

  // ---------- Flow ----------
  function startTest() {
    state.questions = prepareQuestions();
    state.answers = new Array(state.questions.length).fill(null);
    state.current = 0;
    state.startTime = Date.now();
    state.timeLeft = TOTAL_TIME_SECONDS;
    state.submitted = false;
    state.showAllReview = false;

    $('ll-intro').hidden = true;
    $('ll-results').hidden = true;
    $('ll-test').hidden = false;

    renderQuestion();
    renderPalette();
    renderProgress();
    updateTimerDisplay();

    if (state.timerId) clearInterval(state.timerId);
    state.timerId = setInterval(tick, 1000);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function tick() {
    if (state.submitted) return;
    state.timeLeft--;
    updateTimerDisplay();
    if (state.timeLeft <= 0) {
      submitTest(true);
    }
  }

  function submitTest(timedOut) {
    if (state.submitted) return;
    if (!timedOut) {
      const unanswered = state.answers.filter(a => a === null || a === undefined).length;
      if (unanswered > 0) {
        const ok = confirm(`You have ${unanswered} unanswered question${unanswered === 1 ? '' : 's'}. Submit anyway?`);
        if (!ok) return;
      }
    }

    state.submitted = true;
    if (state.timerId) clearInterval(state.timerId);

    showResults(timedOut);
  }

  function showResults(timedOut) {
    let correctCount = 0;
    state.questions.forEach((q, i) => {
      if (state.answers[i] === q.correct) correctCount++;
    });

    const total = state.questions.length;
    const pct = Math.round((correctCount / total) * 100);
    const passed = correctCount >= PASS_MARK;
    const elapsed = Math.min(TOTAL_TIME_SECONDS - state.timeLeft, TOTAL_TIME_SECONDS);

    $('ll-test').hidden = true;
    $('ll-results').hidden = false;

    const eyebrow = $('ll-result-eyebrow');
    const title = $('ll-result-title');
    const summary = $('ll-result-summary');

    eyebrow.textContent = timedOut ? "Time's up · Auto-submitted" : "Result";
    title.classList.remove('pass', 'fail');
    if (passed) {
      title.textContent = 'You passed';
      title.classList.add('pass');
      summary.innerHTML = `You scored <strong>${correctCount}/${total}</strong> — well above the 12-mark cut-off. On the actual test day, stay calm and read each option fully before you click. Now would be a good time to review the few you got wrong.`;
    } else {
      title.textContent = 'Not quite — try again';
      title.classList.add('fail');
      summary.innerHTML = `You scored <strong>${correctCount}/${total}</strong>. The pass mark is <strong>12/20</strong>. Review the explanations below for the ones you missed, then retake — order is reshuffled each time so you'll get a fresh challenge.`;
    }

    $('ll-stat-score').textContent = `${correctCount}/${total}`;
    $('ll-stat-pct').textContent = `${pct}%`;
    $('ll-stat-time').textContent = formatMMSS(elapsed);

    renderReview(false);

    document.getElementById('ll-results').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderReview(showAll) {
    const list = $('ll-review-list');
    const heading = document.querySelector('.ll-review-heading');
    const empty = $('ll-review-empty');
    const btn = $('ll-review-all-btn');

    list.innerHTML = '';

    const items = state.questions
      .map((q, i) => ({ q, i, ans: state.answers[i], isWrong: state.answers[i] !== q.correct }))
      .filter(item => showAll || item.isWrong);

    if (items.length === 0) {
      heading.textContent = 'Review';
      empty.hidden = false;
    } else {
      heading.textContent = showAll ? 'All questions' : 'Questions you got wrong';
      empty.hidden = true;
    }

    btn.textContent = showAll ? 'Show only mistakes' : 'Show all questions';
    state.showAllReview = showAll;

    const letters = ['A', 'B', 'C', 'D'];

    items.forEach(({ q, i, ans, isWrong }) => {
      const div = document.createElement('div');
      div.className = 'll-review-item' + (isWrong ? '' : ' correct');
      const yourAnswerText = (ans === null || ans === undefined)
        ? '<em>not answered</em>'
        : `<strong>${letters[ans]}.</strong> ${q.options[ans]}`;
      const correctAnswerText = `<strong>${letters[q.correct]}.</strong> ${q.options[q.correct]}`;
      const signHTML = q.sign && SIGNS[q.sign]
        ? `<div class="ll-review-sign">${SIGNS[q.sign]}</div>`
        : '';

      div.innerHTML = `
        <p class="ll-review-num">Question ${i + 1}</p>
        ${signHTML}
        <p class="ll-review-q">${q.prompt}</p>
        <div class="ll-review-answers">
          <p class="${isWrong ? 'wrong' : 'right'}"><strong>Your answer:</strong> ${yourAnswerText}</p>
          ${isWrong ? `<p class="right"><strong>Correct answer:</strong> ${correctAnswerText}</p>` : ''}
        </div>
        <p class="ll-review-explain"><strong>Why:</strong> ${q.explain}</p>
        <div style="clear: both"></div>
      `;
      list.appendChild(div);
    });
  }

  // ---------- Wire up ----------
  document.addEventListener('DOMContentLoaded', () => {
    $('ll-start-btn').addEventListener('click', startTest);
    $('ll-retake-btn').addEventListener('click', startTest);

    $('ll-prev-btn').addEventListener('click', () => {
      if (state.current > 0) { state.current--; renderQuestion(); renderPalette(); }
    });
    $('ll-next-btn').addEventListener('click', () => {
      if (state.current < state.questions.length - 1) { state.current++; renderQuestion(); renderPalette(); }
    });
    $('ll-clear-btn').addEventListener('click', () => {
      state.answers[state.current] = null;
      renderQuestion(); renderPalette(); renderProgress();
    });
    $('ll-submit-btn').addEventListener('click', () => submitTest(false));
    $('ll-review-all-btn').addEventListener('click', () => renderReview(!state.showAllReview));

    // Keyboard: arrows for navigation, 1-3 to select options
    document.addEventListener('keydown', (e) => {
      if ($('ll-test').hidden) return;
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;

      if (e.key === 'ArrowRight' && state.current < state.questions.length - 1) {
        state.current++; renderQuestion(); renderPalette();
      } else if (e.key === 'ArrowLeft' && state.current > 0) {
        state.current--; renderQuestion(); renderPalette();
      } else if (['1','2','3','4'].includes(e.key)) {
        const idx = parseInt(e.key, 10) - 1;
        const q = state.questions[state.current];
        if (idx < q.options.length) {
          state.answers[state.current] = idx;
          renderQuestion(); renderPalette(); renderProgress();
        }
      }
    });
  });
})();
</script>
</content>
</invoke>