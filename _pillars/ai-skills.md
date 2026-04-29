---
slug: ai-skills
title: AI Skills
description: Working fluently with the most powerful general-purpose tools your generation will ever touch — prompt engineering, context engineering, and agentic workflows.
---

In 1995, knowing how to use a search engine was a curiosity. By 2005, it was a basic literacy. The people who learned early did not get a small advantage; they got a compounding one, because every time they wanted to know something, they got the answer ten minutes faster than the people who didn't. Multiply that across a decade and a career, and the gap becomes enormous.

You are now sitting on the same kind of inflection point, except the tool is more powerful. AI models can read, write, summarize, analyze, code, design, translate, and reason at a level that would have looked like science fiction five years before you read this. The cost of using them well is dropping by the month. The skill of using them well — the part that determines whether you get a brilliant collaborator or a confidently wrong machine — is mostly invisible to people who haven't practiced it.

The good news: the skill is learnable. Faster than you expect. Most adults around you will never quite catch up. That window is your opportunity.

## The core principles

**The model is not magic. It is a pattern engine that needs context.** If you ask a vague question, you will get a vague answer. If you provide rich context — who you are, what you're trying to do, what you've already tried, what good and bad outputs look like — you get something closer to working with a thoughtful collaborator. *The quality of your output is mostly the quality of your input.*

**Prompt engineering is the entry skill. Context engineering is the next one.** A prompt is one well-crafted message. Context engineering is curating the entire information environment the model is reasoning in: which documents it has access to, what role you've assigned it, what the prior turns look like, what tools it can use. The shift from one to the other is the same shift as from "I asked a friend a question" to "I gave a colleague a project brief, the relevant files, and a deadline."

**Verify, always.** Models can be confidently wrong. They will produce plausible citations to papers that do not exist, write code that compiles but does the wrong thing, and summarize documents in ways that subtly misrepresent them. The skill of verification — checking the output against the source, running the code, asking *does this match reality?* — is not optional. It is the difference between a competent AI user and a dangerous one.

**Agentic AI is the next frontier.** A model that answers one question is useful. A model that can plan a task, break it into steps, use tools, observe results, and adapt — that is a different kind of system. Learning how these agents are built (LangChain, LangGraph, MCP, frameworks that connect models to real tools) is the equivalent in 2026 of learning HTML in 1996. Even if you never build one yourself, understanding what they can and cannot do will shape every job you ever have.

> The model is not your replacement. It is your amplifier. The amplifier is only useful if the signal you put in is good.

## What changes when you have these skills

Tasks that used to take a day take an hour. Tasks that used to be too expensive to bother with become trivial. The bottleneck shifts from *can I produce the output?* to *can I evaluate the output, choose the right one, and apply judgment?* — which is exactly where humans still hold the advantage. Every domain you care about — writing, coding, design, research, analysis — gets re-shaped by this. The people who treat AI as a calculator that does specific tricks will fall behind. The people who treat it as an apprentice they are training will pull ahead.

<div class="practices">
<ol>
<li><strong>Use AI every day, on real tasks.</strong> Not toy questions — actual work: an essay you have to write, a piece of code that has to run, a study guide for a topic you're learning. Daily use is non-negotiable. You do not learn this skill from articles about it.</li>
<li><strong>Treat each prompt as a brief.</strong> Include: who you are, what you want, the audience, the format, examples of good and bad output, and what to avoid. Save your best prompts. Reuse them. Refine them.</li>
<li><strong>Always ask a follow-up.</strong> First answers are usually generic. Push: <em>"What's the strongest counter-argument to this?" "What did you leave out?" "Rewrite this assuming the reader is hostile."</em> The interesting work happens in the second and third turn.</li>
<li><strong>Build one small agent.</strong> Pick a task you do regularly — summarizing an article, organizing notes, drafting an email — and build a small agentic workflow that does it end-to-end. The first one will be clumsy. You will learn more from building it than from reading ten articles.</li>
<li><strong>Verify every load-bearing claim.</strong> If the AI tells you a fact you'd cite, look it up. If it writes you code, run it. Every verification you do trains your sense of where these models are reliable and where they bluff.</li>
</ol>
</div>

## Recommended resources

<div class="resources">
<ul>
<li><span class="res-type">Course</span> Andrej Karpathy's free YouTube series on LLMs — from how they're built to how they're used.</li>
<li><span class="res-type">Site</span> Anthropic's prompt engineering guide and Claude Cookbook on GitHub — practical, current.</li>
<li><span class="res-type">Tool</span> Use ChatGPT, Claude, and Gemini in parallel for a month. Their differences will teach you more than any single guide.</li>
<li><span class="res-type">Repo</span> LangChain and LangGraph documentation — start with the simplest agent tutorial and build up.</li>
<li><span class="res-type">Book</span> <em>Co-Intelligence</em> by Ethan Mollick — short, current, and full of examples of working with AI as a collaborator.</li>
</ul>
</div>

## Try it now: a 10th-grader's playground

The fastest way to learn this is to use it on something you actually care about. Pick a subject. Paste the prompt into [Claude](https://claude.ai), [ChatGPT](https://chatgpt.com), or [Gemini](https://gemini.google.com). Read the answer. Push back. Notice what happens.

### Chemistry — Make the periodic table click

<div class="prompt-box">
I'm a 10th grader. Explain why elements in the same group of the periodic
table have similar chemical properties, using one concrete example
(Group 1 — alkali metals). Use simple language, give the electron
configuration, and end with one experiment I could imagine doing to
see this similarity in action.
</div>

**Why this works:** It tells the AI who you are, what format you want (explanation + example + electron config + thought experiment), and bounds the scope. Compare the answer to your textbook's section. Notice what each does better.

### Mathematics — Stop memorizing, start understanding

<div class="prompt-box">
Teach me the quadratic formula like you're a tutor who genuinely cares
that I understand it. First, *derive* it from completing the square,
showing every step. Then give me a real-world problem (a thrown ball,
a profit equation) where it actually matters. End with one common
mistake students make, and how to avoid it.
</div>

**Why this works:** Asking for derivation forces the AI to show the *why*, not just the formula. The real-world tie cements the use. The "common mistake" prompt gets you the kind of insight a senior tutor would notice but a textbook usually skips.

### Physics — Build intuition, not just answers

<div class="prompt-box">
A ball is thrown straight up at 20 m/s. I want to *understand*, not just
calculate, what happens. Walk me through:
1. What forces act on it at different points.
2. What its velocity and position graphs look like over time.
3. What changes if we threw it on the moon.
Use plain English first, then add the math.
</div>

**Why this works:** You're asking for understanding framed as a story. The "moon" twist tests whether the AI is reasoning with you or just retrieving a memorized answer. If it stumbles, that itself is information.

### Social Science — Compare two events, build judgment

<div class="prompt-box">
Compare the French Revolution (1789) and the Indian independence
movement (1947) on three dimensions: causes, methods, and outcomes.
What do they have in common? What's most different? Where did each
fall short of its own ideals? Be honest, not flattering.
</div>

**Why this works:** Comparison forces structured thinking. "Where did each fall short" pushes past the textbook narrative into something more grown-up. The phrase *"be honest, not flattering"* genuinely changes how AIs answer — try it with and without and watch the difference.

### English & Poetry — Reading like a writer

<div class="prompt-box">
Here is a poem: [paste a poem you're studying — Frost, Tagore,
Wordsworth, anything]. Help me read it the way a poet would: walk me
through the imagery, the sound (rhythm, repetition), what's actually
happening in the speaker's mind, and the one line that does the most
work in the poem. Don't just summarize the plot.
</div>

**Why this works:** The instruction *"don't just summarize"* is doing real work — without it, AIs default to plot summary. With it, you get analysis. Once you see this pattern, you'll see it everywhere.

### Then push back

After any answer, follow up with one of these:

- *"What did you leave out?"*
- *"Rewrite this assuming I'm a skeptical reader."*
- *"What's the strongest counter-argument to your explanation?"*
- *"Where is this answer most likely to be wrong?"*

The first answer is a starting point. The third or fourth answer is where the real learning happens.

## Watch &amp; learn

A small shelf of the clearest free explanations on the internet. Watch them in roughly this order — each one builds on the last.

<div class="videos">
<ul>
  <li>
    <a href="https://www.youtube.com/watch?v=aircAruvnKk" target="_blank" rel="noopener" class="video-link">
      <span class="video-play" aria-hidden="true">▶</span>
      <span class="video-meta">
        <span class="video-title">But what is a Neural Network?</span>
        <span class="video-byline">3Blue1Brown · ~19 min</span>
        <span class="video-why">The clearest visual explanation of the basic building block. Watch this first.</span>
      </span>
    </a>
  </li>
  <li>
    <a href="https://www.youtube.com/watch?v=zjkBMFhNj_g" target="_blank" rel="noopener" class="video-link">
      <span class="video-play" aria-hidden="true">▶</span>
      <span class="video-meta">
        <span class="video-title">Intro to Large Language Models</span>
        <span class="video-byline">Andrej Karpathy · ~1 hr</span>
        <span class="video-why">A general-audience walkthrough of how systems like ChatGPT and Claude actually work. The single most useful hour you can spend on this topic.</span>
      </span>
    </a>
  </li>
  <li>
    <a href="https://www.youtube.com/watch?v=eMlx5fFNoYc" target="_blank" rel="noopener" class="video-link">
      <span class="video-play" aria-hidden="true">▶</span>
      <span class="video-meta">
        <span class="video-title">Attention in Transformers, Visually Explained</span>
        <span class="video-byline">3Blue1Brown · ~26 min</span>
        <span class="video-why">The "attention" mechanism is the engine of every modern AI model. This is the most beautiful explanation of it anywhere.</span>
      </span>
    </a>
  </li>
  <li>
    <a href="https://www.3blue1brown.com/lessons/gpt/" target="_blank" rel="noopener" class="video-link">
      <span class="video-play" aria-hidden="true">▶</span>
      <span class="video-meta">
        <span class="video-title">But what is a GPT? — Visual intro to Transformers</span>
        <span class="video-byline">3Blue1Brown · web lesson</span>
        <span class="video-why">If "Generative Pre-trained Transformer" still sounds like jargon, this video makes it concrete.</span>
      </span>
    </a>
  </li>
  <li>
    <a href="https://www.youtube.com/andrejkarpathy" target="_blank" rel="noopener" class="video-link">
      <span class="video-play" aria-hidden="true">▶</span>
      <span class="video-meta">
        <span class="video-title">Andrej Karpathy's full channel</span>
        <span class="video-byline">YouTube · multiple videos</span>
        <span class="video-why">When you're ready to go deeper — building a GPT from scratch in code, tokenizers, the math. The best teacher in the field, free.</span>
      </span>
    </a>
  </li>
</ul>
</div>

## Test yourself

Six short questions. Click an answer to see if you got it. The point is not the score — it is to make sure the ideas are sticking.

<div class="quiz" data-quiz>

<div class="quiz-q">
  <p class="quiz-prompt"><strong>1.</strong> You ask an AI a question and get a vague, generic answer. The most likely reason is:</p>
  <ul class="quiz-options">
    <li><button type="button" class="quiz-opt">The AI doesn't know the answer.</button></li>
    <li><button type="button" class="quiz-opt" data-correct>Your prompt didn't give it enough context.</button></li>
    <li><button type="button" class="quiz-opt">The model is having an off day.</button></li>
    <li><button type="button" class="quiz-opt">You should ask in a different language.</button></li>
  </ul>
  <p class="quiz-feedback">The quality of your output is mostly the quality of your input. Vague prompts produce vague answers — almost every time.</p>
</div>

<div class="quiz-q">
  <p class="quiz-prompt"><strong>2.</strong> An AI states a fact in its answer that you want to use in your essay. Before citing it, you should:</p>
  <ul class="quiz-options">
    <li><button type="button" class="quiz-opt">Trust it — modern AIs are accurate enough.</button></li>
    <li><button type="button" class="quiz-opt" data-correct>Verify it from a primary source.</button></li>
    <li><button type="button" class="quiz-opt">Ask the AI again to double-check.</button></li>
    <li><button type="button" class="quiz-opt">Re-prompt with different wording.</button></li>
  </ul>
  <p class="quiz-feedback">AIs can be confidently wrong — they will produce plausible-looking facts and even citations to papers that don't exist. Always verify anything you would put your name to.</p>
</div>

<div class="quiz-q">
  <p class="quiz-prompt"><strong>3.</strong> Which of these is the strongest prompt to use for a 10th-grade chemistry essay on photosynthesis?</p>
  <ul class="quiz-options">
    <li><button type="button" class="quiz-opt">"Tell me about photosynthesis."</button></li>
    <li><button type="button" class="quiz-opt">"Photosynthesis info please."</button></li>
    <li><button type="button" class="quiz-opt" data-correct>"I'm a 10th grader writing a 500-word essay on the chemistry of photosynthesis. Explain the light-dependent and light-independent reactions, give the chemical equation, use simple language, and end with one common misconception."</button></li>
    <li><button type="button" class="quiz-opt">"What is photosynthesis?"</button></li>
  </ul>
  <p class="quiz-feedback">A good prompt is a brief: who you are, what you want, what format, and what to avoid. The clearer the brief, the better the output.</p>
</div>

<div class="quiz-q">
  <p class="quiz-prompt"><strong>4.</strong> You ask an AI to write code for a math problem. The code looks correct. The right next step is:</p>
  <ul class="quiz-options">
    <li><button type="button" class="quiz-opt">Submit it as your homework.</button></li>
    <li><button type="button" class="quiz-opt" data-correct>Run it and check whether the output is right.</button></li>
    <li><button type="button" class="quiz-opt">Trust that it works — it looks fine.</button></li>
    <li><button type="button" class="quiz-opt">Ask a different AI to confirm.</button></li>
  </ul>
  <p class="quiz-feedback">Verification is the difference between a competent AI user and a dangerous one. "Looks correct" is not the same as "works." Always run it.</p>
</div>

<div class="quiz-q">
  <p class="quiz-prompt"><strong>5.</strong> "Context engineering" — beyond just prompt engineering — refers to:</p>
  <ul class="quiz-options">
    <li><button type="button" class="quiz-opt">Writing very long prompts.</button></li>
    <li><button type="button" class="quiz-opt" data-correct>Curating the entire information environment the AI reasons in: documents, role, prior conversation, available tools.</button></li>
    <li><button type="button" class="quiz-opt">Translating prompts to other languages.</button></li>
    <li><button type="button" class="quiz-opt">Adjusting the AI's settings.</button></li>
  </ul>
  <p class="quiz-feedback">Prompt engineering is one well-crafted message. Context engineering is the entire briefing — like the difference between asking a friend a question and giving a colleague a project brief plus the relevant files.</p>
</div>

<div class="quiz-q">
  <p class="quiz-prompt"><strong>6.</strong> Two students use AI on the same physics problem. Student A copies the answer. Student B asks the AI to <em>explain the concept</em>, then solves it themselves. Five years from now:</p>
  <ul class="quiz-options">
    <li><button type="button" class="quiz-opt">Both have learned roughly the same.</button></li>
    <li><button type="button" class="quiz-opt">Student A is more efficient and ahead.</button></li>
    <li><button type="button" class="quiz-opt" data-correct>Student B has built understanding; Student A has built dependency.</button></li>
    <li><button type="button" class="quiz-opt">Doesn't matter — AI is everywhere now.</button></li>
  </ul>
  <p class="quiz-feedback">AI is most powerful when it amplifies a mind that is already learning, not when it replaces the learning. The kids who use it as a tutor pull ahead. The kids who use it as a substitute fall behind.</p>
</div>

<div class="quiz-result">
  <p class="quiz-result-text">Score: <span data-correct-count>0</span> / <span data-total-count>6</span></p>
</div>

</div>

## Going deeper

When the basics start feeling comfortable, here are the next rungs of the ladder.

<div class="resources">
<ul>
<li><span class="res-type">Course</span> <a href="https://github.com/anthropics/prompt-eng-interactive-tutorial" target="_blank" rel="noopener">Anthropic's Interactive Prompt Engineering Tutorial</a> — a free, hands-on, 9-chapter course. The single best thing on this list.</li>
<li><span class="res-type">Docs</span> <a href="https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview" target="_blank" rel="noopener">Anthropic's prompt engineering docs</a> — the official, kept-current reference for working with Claude.</li>
<li><span class="res-type">Repo</span> <a href="https://github.com/anthropics/courses" target="_blank" rel="noopener">anthropics/courses on GitHub</a> — the full set of free Anthropic courses, including agent building.</li>
<li><span class="res-type">Tool</span> <a href="https://www.langchain.com/" target="_blank" rel="noopener">LangChain</a> and <a href="https://langchain-ai.github.io/langgraph/" target="_blank" rel="noopener">LangGraph</a> documentation — the most-used frameworks for building agentic AI. Start with the simplest tutorial.</li>
<li><span class="res-type">Spec</span> <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener">Model Context Protocol</a> — the new standard for letting AIs talk to your tools and data. Read the intro; build a tiny server.</li>
<li><span class="res-type">Build</span> Pick one task you do every week. Build a small AI workflow that does it. The first one will be ugly. The fifth will feel natural.</li>
</ul>
</div>

<div class="first-step">
<p class="label">Start here</p>
<p>For the next assignment, project, or piece of writing you have to produce, work with an AI as your collaborator from start to finish. Not to copy from — to think with. Notice where it speeds you up, where it leads you astray, and what kinds of prompts produce its best work.</p>
</div>
