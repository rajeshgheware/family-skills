---
layout: default
title: Learner's Licence — Mock Test
description: A timed mock test for the Karnataka (Jayanagar RTO) Learner's Licence — fifteen randomly chosen questions on signs and rules, ten minutes, nine correct to pass.
permalink: /ll-mock-test/
body_class: ll-test-page
---

<article class="ll-page">

  <!-- ===================== INTRO ===================== -->
  <section class="ll-intro" id="ll-intro">
    <p class="eyebrow">Practice · Karnataka RTO</p>
    <h1>Learner's Licence — mock test</h1>
    <p class="ll-lede">
      Fifteen questions in the style of the online test conducted at <em>Jayanagar RTO, Bengaluru</em>
      for non-transport (LMV &amp; two-wheeler). Ten minutes on the clock,
      one question at a time, nine correct answers to pass. Each attempt draws
      fifteen at random from a wider pool, so two runs are never the same.
    </p>

    <div class="ll-rules">
      <div class="ll-rule-card">
        <span class="ll-rule-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5"/><path d="M9 2h6M12 5V2"/>
          </svg>
        </span>
        <div>
          <p class="ll-rule-head">10 minutes</p>
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
          <p class="ll-rule-head">15 questions</p>
          <p class="ll-rule-sub">Drawn at random from a pool covering signs, signals, hand gestures, road rules, penalties, and safety.</p>
        </div>
      </div>

      <div class="ll-rule-card">
        <span class="ll-rule-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 12l5 5L20 6"/>
          </svg>
        </span>
        <div>
          <p class="ll-rule-head">Pass: 9 / 15</p>
          <p class="ll-rule-sub">Sixty percent. Below that you can retake — a fresh fifteen is drawn each attempt.</p>
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
  const mandatoryRed = (inner) => `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mandatory sign">
      <circle cx="60" cy="60" r="54" fill="#fdfaf3" stroke="#c9533a" stroke-width="9"/>
      ${inner}
    </svg>`;

  const mandatoryRedSlash = (inner) => `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mandatory prohibition sign">
      <circle cx="60" cy="60" r="54" fill="#fdfaf3" stroke="#c9533a" stroke-width="9"/>
      ${inner}
      <line x1="22" y1="22" x2="98" y2="98" stroke="#c9533a" stroke-width="9" stroke-linecap="round"/>
    </svg>`;

  const mandatoryBlue = (inner) => `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mandatory blue sign">
      <circle cx="60" cy="60" r="54" fill="#1c5a99" stroke="#0d3a66" stroke-width="3"/>
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

    noEntry: mandatoryRed(`
      <rect x="26" y="52" width="68" height="16" fill="#fdfaf3"/>
    `),

    noParking: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="No parking">
        <circle cx="60" cy="60" r="54" fill="#1c5a99" stroke="#0d3a66" stroke-width="3"/>
        <text x="60" y="78" text-anchor="middle" font-family="Manrope, sans-serif"
              font-size="58" font-weight="700" fill="#fdfaf3">P</text>
        <line x1="22" y1="22" x2="98" y2="98" stroke="#c9533a" stroke-width="10" stroke-linecap="round"/>
      </svg>`,

    speed50: mandatoryRed(`
      <text x="60" y="76" text-anchor="middle" font-family="Manrope, sans-serif"
            font-size="44" font-weight="700" fill="#1a1614">50</text>
    `),

    noOvertake: mandatoryRedSlash(`
      <rect x="30" y="48" width="22" height="34" rx="3" fill="#1a1614"/>
      <rect x="60" y="48" width="22" height="34" rx="3" fill="#c9533a" stroke="#1a1614" stroke-width="2"/>
    `),

    noLeftTurn: mandatoryRedSlash(`
      <path d="M82 60 H 50 M58 50 L 48 60 L 58 70"
            stroke="#1a1614" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    `),

    pedProhibited: mandatoryRedSlash(`
      <circle cx="60" cy="38" r="6" fill="#1a1614"/>
      <path d="M60 44 L60 76 M60 54 L48 62 M60 54 L72 58 M60 76 L52 96 M60 76 L68 96"
            stroke="#1a1614" stroke-width="3.5" stroke-linecap="round" fill="none"/>
    `),

    cyclesProhibited: mandatoryRedSlash(`
      <circle cx="40" cy="76" r="14" fill="none" stroke="#1a1614" stroke-width="4"/>
      <circle cx="80" cy="76" r="14" fill="none" stroke="#1a1614" stroke-width="4"/>
      <path d="M40 76 L56 50 L74 50 L80 76 M56 50 L62 76" stroke="#1a1614" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="60" y1="46" x2="68" y2="46" stroke="#1a1614" stroke-width="3"/>
    `),

    compulsoryAhead: mandatoryBlue(`
      <path d="M60 90 V 38 M46 50 L 60 36 L 74 50"
            stroke="#fdfaf3" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    `),

    compulsoryKeepLeft: mandatoryBlue(`
      <path d="M82 38 L 38 82 M38 60 L 38 82 L 60 82"
            stroke="#fdfaf3" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
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

    leftCurve: cautionary(`
      <path d="M76 92 C 76 60, 44 60, 44 40 L 50 48 M44 40 L38 50"
            stroke="#1a1614" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    `),

    narrowBridge: cautionary(`
      <path d="M40 50 L40 95 M46 60 L46 95 M74 60 L74 95 M80 50 L80 95"
            stroke="#1a1614" stroke-width="3" fill="none"/>
      <line x1="40" y1="50" x2="46" y2="60" stroke="#1a1614" stroke-width="3"/>
      <line x1="80" y1="50" x2="74" y2="60" stroke="#1a1614" stroke-width="3"/>
      <line x1="46" y1="78" x2="74" y2="78" stroke="#1a1614" stroke-width="2" stroke-dasharray="3 3"/>
    `),

    crossRoad: cautionary(`
      <rect x="56" y="44" width="8" height="56" fill="#1a1614"/>
      <rect x="32" y="68" width="56" height="8" fill="#1a1614"/>
    `),

    tIntersection: cautionary(`
      <rect x="32" y="58" width="56" height="8" fill="#1a1614"/>
      <rect x="56" y="66" width="8" height="34" fill="#1a1614"/>
    `),

    steepAscent: cautionary(`
      <line x1="28" y1="92" x2="92" y2="50" stroke="#1a1614" stroke-width="6" stroke-linecap="round"/>
      <text x="60" y="98" text-anchor="middle" font-family="Manrope, sans-serif"
            font-size="13" font-weight="700" fill="#1a1614">10%</text>
    `),

    slipperyRoad: cautionary(`
      <rect x="48" y="58" width="28" height="16" rx="3" fill="#1a1614"/>
      <rect x="52" y="50" width="20" height="10" rx="2" fill="#1a1614"/>
      <path d="M34 92 Q 46 82 58 92 Q 70 100 84 88"
            stroke="#1a1614" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M38 100 Q 50 90 62 100 Q 74 106 84 96"
            stroke="#1a1614" stroke-width="3" fill="none" stroke-linecap="round"/>
    `),

    fallingRocks: cautionary(`
      <polygon points="22,100 22,60 64,100" fill="#1a1614"/>
      <circle cx="50" cy="74" r="4" fill="#1a1614"/>
      <circle cx="64" cy="84" r="3" fill="#1a1614"/>
      <circle cx="78" cy="96" r="4" fill="#1a1614"/>
    `),

    guardedCrossing: cautionary(`
      <rect x="36" y="62" width="6" height="28" fill="#1a1614"/>
      <rect x="78" y="62" width="6" height="28" fill="#1a1614"/>
      <rect x="42" y="78" width="36" height="6" fill="#1a1614"/>
      <rect x="34" y="92" width="52" height="6" fill="#1a1614"/>
      <line x1="46" y1="78" x2="52" y2="84" stroke="#fdfaf3" stroke-width="1.5"/>
      <line x1="58" y1="78" x2="64" y2="84" stroke="#fdfaf3" stroke-width="1.5"/>
      <line x1="70" y1="78" x2="76" y2="84" stroke="#fdfaf3" stroke-width="1.5"/>
    `),

    unguardedCrossing: cautionary(`
      <rect x="40" y="64" width="40" height="22" fill="#1a1614"/>
      <rect x="44" y="54" width="10" height="14" fill="#1a1614"/>
      <rect x="48" y="48" width="6" height="8" fill="#1a1614"/>
      <circle cx="50" cy="92" r="6" fill="#1a1614"/>
      <circle cx="72" cy="92" r="6" fill="#1a1614"/>
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

    firstAid: informatory(`
      <rect x="38" y="34" width="44" height="52" rx="2" fill="#fdfaf3"/>
      <rect x="56" y="42" width="8" height="36" fill="#c9533a"/>
      <rect x="44" y="56" width="32" height="8" fill="#c9533a"/>
    `),

    petrolPump: informatory(`
      <rect x="42" y="36" width="24" height="56" rx="2" fill="#fdfaf3"/>
      <rect x="46" y="40" width="16" height="14" fill="#1c5a99"/>
      <path d="M66 50 Q 76 50 76 60 V 78 Q 76 84 82 84 Q 88 84 88 78 V 64"
            stroke="#fdfaf3" stroke-width="4" fill="none" stroke-linecap="round"/>
      <circle cx="88" cy="62" r="3" fill="#fdfaf3"/>
    `),
  };


  // ---------- Question bank ----------
  // Each: prompt, options[3-4], correct (index), explanation, sign (svg key, optional)
  // Pool intentionally larger than DRAW_COUNT so each attempt is different.
  const QUESTIONS = [
    // ----- Mandatory signs -----
    {
      prompt: "What does this sign mean?",
      sign: "stop",
      options: ["Slow down and proceed", "Stop completely", "Give way to traffic on the right"],
      correct: 1,
      explain: "The octagonal red <strong>STOP</strong> sign requires you to come to a <strong>full stop</strong>, check that it is safe, then proceed."
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
      explain: "A number inside a red-bordered circle is a <strong>mandatory upper speed limit</strong> — do not exceed 50 km/h on this stretch."
    },
    {
      prompt: "What does this sign mean?",
      sign: "noHorn",
      options: ["Horn permitted", "Use of horn prohibited", "Silence zone ends here"],
      correct: 1,
      explain: "<strong>Horn prohibited</strong> — typically near hospitals, schools, courts, and silence zones. Honking here attracts a fine."
    },
    {
      prompt: "What does this sign indicate?",
      sign: "noUTurn",
      options: ["U-turn permitted", "U-turn prohibited", "One-way traffic"],
      correct: 1,
      explain: "Red-bordered circle with a U-turn arrow and a diagonal stroke — <strong>U-turn is not allowed</strong> at this location."
    },
    {
      prompt: "This sign means —",
      sign: "noOvertake",
      options: ["Two-lane road ahead", "Overtaking prohibited", "Slow vehicles keep left"],
      correct: 1,
      explain: "Two cars side by side inside a red-bordered circle with a diagonal stroke — <strong>overtaking is prohibited</strong> on this stretch."
    },
    {
      prompt: "This sign indicates —",
      sign: "noLeftTurn",
      options: ["Compulsory left turn", "Left turn prohibited", "Sharp left curve ahead"],
      correct: 1,
      explain: "A red-bordered circle with a left arrow struck through means <strong>left turn is prohibited</strong> at this junction."
    },
    {
      prompt: "What does this sign tell you?",
      sign: "pedProhibited",
      options: ["Pedestrian crossing ahead", "Pedestrians not allowed on this road", "School zone"],
      correct: 1,
      explain: "Red-bordered circle with a pedestrian struck through — <strong>pedestrians prohibited</strong>, typically seen at the entry to expressways."
    },
    {
      prompt: "This sign indicates —",
      sign: "cyclesProhibited",
      options: ["Cycle parking", "Cycles prohibited", "Cycle track ahead"],
      correct: 1,
      explain: "Bicycle inside a red-bordered circle with a diagonal stroke — <strong>cycles are prohibited</strong> on this road, usually on highways and flyovers."
    },
    {
      prompt: "A blue circle with a white arrow pointing straight up means —",
      sign: "compulsoryAhead",
      options: ["Two-way traffic", "Compulsory direction — straight ahead only", "Steep climb ahead"],
      correct: 1,
      explain: "Blue mandatory signs <strong>tell you what you must do</strong>. A straight arrow means you must go straight ahead — turning is not allowed here."
    },
    {
      prompt: "This sign means —",
      sign: "compulsoryKeepLeft",
      options: ["Keep left of the divider", "Left turn permitted", "One-way to the left"],
      correct: 0,
      explain: "Blue circle with a left-bending arrow — you must <strong>keep to the left</strong> of the median or obstruction marked by this sign."
    },

    // ----- Cautionary signs -----
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
      prompt: "This sign warns you of —",
      sign: "leftCurve",
      options: ["Left turn permitted", "Sharp curve to the left", "Road bends both ways"],
      correct: 1,
      explain: "Cautionary sign — <strong>left hand curve</strong>. Slow down and do not overtake until the road straightens."
    },
    {
      prompt: "This sign warns you of —",
      sign: "speedBreaker",
      options: ["Speed breaker / hump ahead", "Tunnel ahead", "Loose gravel"],
      correct: 0,
      explain: "Cautionary sign — <strong>speed breaker or hump ahead</strong>. Slow down well before reaching it."
    },
    {
      prompt: "This sign warns you of —",
      sign: "narrowBridge",
      options: ["Narrow bridge ahead", "Bridge under repair", "Two-way bridge"],
      correct: 0,
      explain: "<strong>Narrow bridge ahead</strong> — only one vehicle can comfortably cross at a time. Give way to oncoming traffic if needed."
    },
    {
      prompt: "What does this cautionary sign indicate?",
      sign: "crossRoad",
      options: ["Pedestrian crossing", "Cross-road intersection ahead", "Hospital"],
      correct: 1,
      explain: "A '+' inside a cautionary triangle warns of a <strong>cross-road intersection</strong> ahead. Slow down and check both side roads."
    },
    {
      prompt: "This sign means —",
      sign: "tIntersection",
      options: ["T-intersection ahead", "Road ends ahead", "Right turn only"],
      correct: 0,
      explain: "<strong>T-intersection</strong> — the road ahead ends at a perpendicular road. Reduce speed and prepare to turn."
    },
    {
      prompt: "This sign warns of —",
      sign: "steepAscent",
      options: ["Steep climb (ascent) ahead", "Bridge with gradient", "Speed limit 10%"],
      correct: 0,
      explain: "<strong>Steep ascent ahead</strong> — shift to a lower gear and maintain power. The number indicates the gradient."
    },
    {
      prompt: "This sign warns of —",
      sign: "slipperyRoad",
      options: ["Slippery road", "Loose gravel", "Skid pad"],
      correct: 0,
      explain: "<strong>Slippery road</strong> ahead. Reduce speed, avoid sudden braking or sharp turns, and increase following distance."
    },
    {
      prompt: "This sign warns of —",
      sign: "fallingRocks",
      options: ["Steep descent", "Falling rocks", "Loose gravel on the road"],
      correct: 1,
      explain: "<strong>Falling rocks</strong> — common on hill roads. Stay alert for debris on the carriageway and do not stop directly under the slope."
    },
    {
      prompt: "This sign indicates —",
      sign: "guardedCrossing",
      options: ["Railway crossing with gate ahead", "Unguarded level crossing", "Industrial gate"],
      correct: 0,
      explain: "<strong>Guarded (manned) level crossing ahead</strong> — gates will close before a train passes. Slow down and obey the gateman."
    },
    {
      prompt: "This sign indicates —",
      sign: "unguardedCrossing",
      options: ["Train station ahead", "Unguarded level crossing", "Steam plant"],
      correct: 1,
      explain: "<strong>Unguarded level crossing</strong> — no gate or attendant. Stop, look both ways for trains, and cross only when clear."
    },

    // ----- Informatory signs -----
    {
      prompt: "What does this informatory sign tell you?",
      sign: "hospital",
      options: ["Hospital ahead", "Helipad", "Hotel"],
      correct: 0,
      explain: "Blue rectangle with a white <strong>'H'</strong> is the standard informatory sign for a <strong>hospital</strong>. Silence zone usually applies — do not honk."
    },
    {
      prompt: "What does this sign indicate?",
      sign: "parkingInfo",
      options: ["Police station", "Parking permitted", "Public toilet"],
      correct: 1,
      explain: "Blue rectangle with a white <strong>'P'</strong> — <strong>parking permitted</strong> in this area, subject to local rules and timings."
    },
    {
      prompt: "This blue rectangular sign with a red cross indicates —",
      sign: "firstAid",
      options: ["Hospital", "First-aid post", "Pharmacy"],
      correct: 1,
      explain: "<strong>First-aid post</strong> — a smaller facility than a hospital. Useful to remember for highway emergencies."
    },
    {
      prompt: "This informatory sign means —",
      sign: "petrolPump",
      options: ["Air pressure check", "Petrol pump / fuel station ahead", "Garage / repair shop"],
      correct: 1,
      explain: "Blue rectangle with a fuel-pump symbol — a <strong>petrol pump / fuel station</strong> is ahead."
    },

    // ----- Hand signals -----
    {
      prompt: "Which hand signal indicates that you intend to slow down or stop?",
      options: [
        "Right arm extended, palm down, moved up and down",
        "Right arm extended horizontally, palm forward",
        "Right arm rotated in a circular motion"
      ],
      correct: 0,
      explain: "To <strong>slow down</strong>, extend your right arm with palm facing down and move it up and down. Drivers behind you see your intent before they see your brake lights."
    },
    {
      prompt: "Which hand signal indicates that you are turning right?",
      options: [
        "Right arm extended horizontally, palm facing forward",
        "Right arm waved up and down",
        "Right arm pointing downward"
      ],
      correct: 0,
      explain: "For a <strong>right turn</strong>, extend your right arm straight out, palm facing forward, fingers pointing right. Use this if your indicators are not working."
    },
    {
      prompt: "On a two-wheeler, how does the rider signal a left turn?",
      options: [
        "Extend the right arm and rotate it counter-clockwise",
        "Extend the left arm horizontally to the left",
        "Honk twice"
      ],
      correct: 1,
      explain: "For a <strong>left turn</strong> on a two-wheeler, the rider extends the <strong>left arm</strong> straight out (since the right hand is on the throttle). For cars, the right arm is rotated counter-clockwise."
    },
    {
      prompt: "How do you signal that you want the vehicle behind you to overtake?",
      options: [
        "Wave the right arm backward and forward",
        "Slow down without signalling",
        "Switch the headlight on"
      ],
      correct: 0,
      explain: "To <strong>allow overtaking</strong>, extend the right arm and swing it forward and back, palm facing the driver behind. This tells them it is safe to pass."
    },

    // ----- Traffic signals -----
    {
      prompt: "What should you do at a steady red traffic signal?",
      options: [
        "Stop behind the stop line and wait for green",
        "Proceed if no traffic is visible",
        "Slow down and continue"
      ],
      correct: 0,
      explain: "A steady red light means <strong>stop</strong>. Wait behind the stop line until the signal turns green — even if the junction looks empty."
    },
    {
      prompt: "At a green traffic signal, you should —",
      options: [
        "Race through quickly before it turns yellow",
        "Proceed only if the way ahead is clear and safe",
        "Stop and look both ways"
      ],
      correct: 1,
      explain: "Green means <strong>go if safe</strong> — not 'go regardless'. Check the junction is clear of pedestrians and cross traffic before proceeding."
    },
    {
      prompt: "You are approaching a traffic signal showing a steady yellow (amber) light. What should you do?",
      options: [
        "Speed up to cross before it turns red",
        "Stop if you can do so safely; otherwise clear the junction with care",
        "Treat it the same as green and continue"
      ],
      correct: 1,
      explain: "Yellow warns that the signal is about to turn red. <strong>Stop if you can safely</strong>; if you are already too close to stop, clear the junction. Never accelerate to beat the light."
    },
    {
      prompt: "What does a flashing yellow traffic signal mean?",
      options: [
        "Signal is out of order — stop completely",
        "Slow down and proceed with caution",
        "Pedestrians have right of way only"
      ],
      correct: 1,
      explain: "A <strong>flashing yellow</strong> light means <strong>slow down and proceed with caution</strong>. Often used at night or at minor junctions."
    },
    {
      prompt: "A flashing red traffic signal means —",
      options: [
        "Same as a STOP sign — stop, then proceed when safe",
        "Slow down and continue",
        "Wait for it to turn green"
      ],
      correct: 0,
      explain: "A <strong>flashing red</strong> behaves like a <strong>STOP sign</strong>: come to a full stop, check it is safe, then proceed. It does not stay red — it is a permanent advisory."
    },

    // ----- Documents, age, validity -----
    {
      prompt: "For how long is a Learner's Licence valid in Karnataka?",
      options: ["1 month", "6 months", "1 year"],
      correct: 1,
      explain: "A Learner's Licence is valid for <strong>6 months</strong> from the date of issue. The driving test must be cleared within this window."
    },
    {
      prompt: "What is the minimum age to obtain a Learner's Licence for a motorcycle with gear or a four-wheeler (LMV, non-transport)?",
      options: ["16 years", "18 years", "21 years"],
      correct: 1,
      explain: "Minimum age is <strong>18 years</strong> for a geared two-wheeler or LMV. For a transport vehicle, it is 20."
    },
    {
      prompt: "What is the minimum age to ride a gearless two-wheeler under 50 cc?",
      options: ["14 years", "16 years (with parental consent)", "18 years"],
      correct: 1,
      explain: "A <strong>gearless two-wheeler up to 50 cc</strong> can be ridden from age <strong>16</strong>, with the parent or guardian's consent. Anything bigger or geared needs 18."
    },
    {
      prompt: "While driving, which of these documents must you carry at all times?",
      options: [
        "Only the driving licence",
        "Driving Licence, Registration Certificate, insurance, and PUC certificate",
        "Only Aadhaar and the licence"
      ],
      correct: 1,
      explain: "Carry <strong>DL/LL, RC, valid insurance, and PUC (Pollution Under Control) certificate</strong>. Digital copies via DigiLocker or mParivahan are accepted."
    },
    {
      prompt: "Within how many days must you inform the licensing authority if you change your address?",
      options: ["7 days", "30 days", "90 days"],
      correct: 1,
      explain: "You must report a change of address to the licensing authority within <strong>30 days</strong>."
    },
    {
      prompt: "The Pollution Under Control (PUC) certificate for a private vehicle is normally valid for —",
      options: ["1 month", "6 months", "1 year"],
      correct: 2,
      explain: "After the first PUC, certificates for private vehicles are typically valid for <strong>1 year</strong>. Driving without a valid PUC is an offence."
    },

    // ----- Rules of the road -----
    {
      prompt: "At an uncontrolled intersection (no signal, no sign, no traffic police), who has right of way?",
      options: [
        "The vehicle that arrives first, regardless of direction",
        "The vehicle approaching from your right",
        "The larger of the two vehicles"
      ],
      correct: 1,
      explain: "Give way to the <strong>vehicle approaching from your right</strong> — the standard 'right-hand rule' under the MV Act."
    },
    {
      prompt: "In India, you should normally drive on which side of the road?",
      options: ["Left side", "Right side", "Either, as convenient"],
      correct: 0,
      explain: "India follows <strong>left-hand traffic</strong> — keep to the left, except when overtaking."
    },
    {
      prompt: "On a one-way road, driving in reverse gear is —",
      options: [
        "Permitted in low traffic",
        "Not permitted",
        "Permitted only at night"
      ],
      correct: 1,
      explain: "Driving in reverse on a one-way road is <strong>prohibited</strong> at all times — it endangers oncoming traffic that does not expect it."
    },
    {
      prompt: "When overtaking another vehicle, you should pass —",
      options: [
        "From the left side",
        "From the right side",
        "From whichever side is free"
      ],
      correct: 1,
      explain: "Overtake <strong>from the right side</strong> of the vehicle ahead. Passing on the left is dangerous and prohibited except in specific lane-traffic situations."
    },
    {
      prompt: "Overtaking is NOT allowed —",
      options: [
        "Whenever the road is wide enough",
        "When the road ahead is not clearly visible",
        "Only on highways"
      ],
      correct: 1,
      explain: "Never overtake <strong>when visibility is poor</strong> — on bends, hill crests, narrow bridges, level crossings, or in fog. You cannot see oncoming traffic in time."
    },
    {
      prompt: "Driving too close behind the vehicle in front is called —",
      options: ["Drafting", "Tail-gating", "Trailing"],
      correct: 1,
      explain: "<strong>Tail-gating</strong> — dangerous because you cannot stop in time if the vehicle ahead brakes. Maintain a safe distance (a 2–3 second gap minimum)."
    },
    {
      prompt: "When approaching an unguarded railway level crossing, you should —",
      options: [
        "Slow down and cross without stopping if no train is visible",
        "Stop the vehicle, check both sides for trains, then cross when clear",
        "Honk loudly and proceed"
      ],
      correct: 1,
      explain: "At an <strong>unguarded crossing</strong>, stop the vehicle, get out if necessary, check both directions for trains or trolleys, and only then cross."
    },
    {
      prompt: "A zebra crossing on the road is meant for —",
      options: [
        "Slowing down traffic",
        "Pedestrians to cross the road",
        "Marking the centre of the road"
      ],
      correct: 1,
      explain: "A <strong>zebra crossing</strong> marks where pedestrians have the right of way. Always stop and let people cross before proceeding."
    },
    {
      prompt: "Near a school zone in a residential area, the speed limit is typically —",
      options: ["25 km/h", "50 km/h", "60 km/h"],
      correct: 0,
      explain: "Near a school zone, slow down to about <strong>25 km/h</strong> and watch for children. Local signage may set a specific limit."
    },
    {
      prompt: "When an ambulance with a flashing light approaches you, you should —",
      options: [
        "Continue at the same speed",
        "Move to the left and allow free passage",
        "Stop in the middle of the road"
      ],
      correct: 1,
      explain: "Emergency vehicles — ambulances, fire engines, police — have <strong>priority</strong>. Move to the left, slow down, and let them pass safely."
    },

    // ----- Safety, equipment, behaviour -----
    {
      prompt: "Wearing a helmet on a two-wheeler is mandatory for —",
      options: ["Only the rider", "Both rider and pillion passenger", "Only riders above 18"],
      correct: 1,
      explain: "Under section 129 of the Motor Vehicles Act, helmets are mandatory for <strong>both rider and pillion</strong>. Non-compliance attracts a fine and possible licence suspension."
    },
    {
      prompt: "Using a mobile phone while driving is —",
      options: [
        "Allowed for short calls",
        "Prohibited under all circumstances except hands-free",
        "Allowed at red signals only"
      ],
      correct: 1,
      explain: "Holding a phone while driving is <strong>prohibited</strong> and attracts a heavy fine. Hands-free is allowed but distracted driving in any form is risky."
    },
    {
      prompt: "Under the Motor Vehicles Act, the legal blood-alcohol limit while driving is —",
      options: ["30 mg per 100 ml of blood", "100 mg per 100 ml of blood", "Zero — no alcohol permitted"],
      correct: 0,
      explain: "The legal limit is <strong>30 mg of alcohol per 100 ml of blood</strong>. Exceeding it is a punishable offence under section 185 of the MV Act."
    },
    {
      prompt: "The primary purpose of a vehicle's horn is to —",
      options: [
        "Express frustration at slow traffic",
        "Warn other road users of your presence",
        "Greet someone you know"
      ],
      correct: 1,
      explain: "The horn is a <strong>warning device</strong>. Use it sparingly — never near hospitals, schools or in silence zones."
    },
    {
      prompt: "Displaying an 'L' board on a vehicle being driven by a learner is —",
      options: ["Optional", "Compulsory", "Only on highways"],
      correct: 1,
      explain: "The <strong>'L' board</strong> (red 'L' on white) must be displayed on both the front and rear of the vehicle while a learner is driving."
    },
    {
      prompt: "On a city road at night, the high beam of your headlight should —",
      options: [
        "Always be used for better visibility",
        "Be dipped (low beam) when there is oncoming traffic",
        "Be switched off entirely"
      ],
      correct: 1,
      explain: "Use <strong>low beam</strong> when there is oncoming traffic, on lit roads, or when following another vehicle — high beam can blind other drivers."
    },
    {
      prompt: "The hand brake (parking brake) is primarily used to —",
      options: [
        "Stop the vehicle quickly in an emergency",
        "Hold the vehicle stationary when parked",
        "Slow down on highways"
      ],
      correct: 1,
      explain: "The <strong>hand brake</strong> holds a parked vehicle in place — essential on a slope. It is not designed to stop a moving vehicle."
    },
    {
      prompt: "On a steep downhill stretch, you should —",
      options: [
        "Coast in neutral to save fuel",
        "Shift to a lower gear to use engine braking",
        "Use only the foot brake continuously"
      ],
      correct: 1,
      explain: "Use <strong>engine braking</strong> — a lower gear lets the engine slow the vehicle, preventing brake overheating. Never coast in neutral down a slope."
    },
    {
      prompt: "Boarding or alighting from a moving vehicle is —",
      options: [
        "Allowed if the vehicle is going slowly",
        "Prohibited in all vehicles",
        "Allowed only from public buses"
      ],
      correct: 1,
      explain: "Boarding or getting off a <strong>moving vehicle</strong> is prohibited — even at slow speed. Always wait for a full stop."
    },
    {
      prompt: "The third-party insurance requirement under the Motor Vehicles Act is —",
      options: [
        "Optional, recommended only",
        "Mandatory for every vehicle on the road",
        "Required only for commercial vehicles"
      ],
      correct: 1,
      explain: "<strong>Third-party insurance is mandatory</strong> for every motor vehicle on public roads. It covers liability for injury or damage caused to others."
    },
    {
      prompt: "If you are involved in an accident with injuries, you must —",
      options: [
        "Leave the scene to avoid harassment",
        "Take steps to get medical aid for the injured and report it to the nearest police station within 24 hours",
        "Wait for someone else to report it"
      ],
      correct: 1,
      explain: "Under the MV Act, the driver must <strong>secure medical attention for the injured and report the accident to police within 24 hours</strong>. Leaving the scene is a serious offence."
    }
  ];

  // ---------- State ----------
  const TOTAL_TIME_SECONDS = 10 * 60;   // 10 minutes — Karnataka format
  const PASS_MARK = 9;                  // 9 of 15 correct
  const DRAW_COUNT = 15;                // questions per attempt, drawn from the pool

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

  // Draw DRAW_COUNT questions at random from the pool; reshuffle option order
  // within each so the position of the correct answer also varies.
  function prepareQuestions() {
    const drawn = shuffle(QUESTIONS).slice(0, Math.min(DRAW_COUNT, QUESTIONS.length));
    return drawn.map(q => {
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
      summary.innerHTML = `You scored <strong>${correctCount}/${total}</strong> — at or above the ${PASS_MARK}-mark cut-off. On the actual test day, stay calm and read each option fully before you click. Now would be a good time to review the few you got wrong.`;
    } else {
      title.textContent = 'Not quite — try again';
      title.classList.add('fail');
      summary.innerHTML = `You scored <strong>${correctCount}/${total}</strong>. The pass mark is <strong>${PASS_MARK}/${total}</strong>. Review the explanations below for the ones you missed, then retake — a fresh set of ${total} is drawn each attempt.`;
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