/**
 * THE LAST SIGNAL — NASA Space Apps Challenge 2026
 * Team ASTRAVYN
 * Space History Quiz Module
 */

(function () {
  "use strict";

  // ─── Quiz Data ─────────────────────────────────────────────────────────────

  const QUIZ_DATA = [
    {
      question:
        "Which Apollo mission first deployed the Lunar Laser Retroreflector?",
      options: ["Apollo 11", "Apollo 12", "Apollo 14", "Apollo 15"],
      answer: 0, // A
      explanation:
        "Apollo 11 placed the first Lunar Laser Ranging retroreflector at Tranquility Base in July 1969. These are still used today to measure the Earth-Moon distance.",
    },
    {
      question:
        "How far did the Opportunity rover travel before its final transmission?",
      options: ["7.73 km", "28.06 km", "45.16 km", "100 km"],
      answer: 2, // C
      explanation:
        "Opportunity traveled 45.16 km (28.06 miles) on Mars — far exceeding its 90-day planned mission. It operated for nearly 15 years.",
    },
    {
      question: "What caused the Spirit rover's mission to end?",
      options: [
        "It fell into a crater",
        "It became stuck in soft soil and lost power",
        "A sandstorm",
        "Software failure",
      ],
      answer: 1, // B
      explanation:
        "Spirit became stuck in soft soil (dubbed 'Troy') in May 2009. Unable to maneuver to get optimal solar panel angle for winter, it lost power. Last contact was March 22, 2010.",
    },
    {
      question: "What significant discovery did the Phoenix lander make?",
      options: [
        "Evidence of life",
        "Liquid water on the surface",
        "Water ice in the Martian soil",
        "Methane gas",
      ],
      answer: 2, // C
      explanation:
        "Phoenix directly confirmed the presence of water ice in Martian soil by heating soil samples and observing water vapor. This was a major discovery in astrobiology.",
    },
    {
      question:
        "Why are the Apollo Lunar Module descent stages historically significant?",
      options: [
        "They contained gold",
        "They are the first human-made objects to land softly on the Moon",
        "They are still transmitting signals",
        "They contain life support systems",
      ],
      answer: 1, // B
      explanation:
        "The Apollo LM descent stages were the first crewed spacecraft to perform a soft landing on the Moon. 6 descent stages remain on the lunar surface at the Apollo landing sites.",
    },
    {
      question:
        "What were the 'Martian blueberries' discovered by Opportunity?",
      options: [
        "Blue-colored rocks",
        "Hematite concretions formed in water",
        "Frozen water bubbles",
        "Microorganism colonies",
      ],
      answer: 1, // B
      explanation:
        "Opportunity discovered hematite-rich spherules (nicknamed 'blueberries') at Meridiani Planum. These formed in water, providing strong evidence of past liquid water on Mars.",
    },
    {
      question:
        "Until when did the Apollo ALSEP instruments transmit data back to Earth?",
      options: [
        "When the astronauts left",
        "Until 1977",
        "Until 1990",
        "They are still transmitting",
      ],
      answer: 1, // B
      explanation:
        "The Apollo Lunar Surface Experiments Packages (ALSEP) operated until September 30, 1977, when NASA shut off the receivers due to budget cuts. They were still functioning at that time.",
    },
    {
      question: "Which rover was the FIRST to operate on Mars?",
      options: ["Spirit", "Opportunity", "Sojourner", "Curiosity"],
      answer: 2, // C
      explanation:
        "Sojourner was the first rover to operate on Mars, landing with the Mars Pathfinder spacecraft on July 4, 1997. It explored for 83 sols before contact was lost.",
    },
    {
      question: "What was InSight's primary scientific mission?",
      options: [
        "Search for life",
        "Study Mars' internal structure using seismology",
        "Collect rock samples",
        "Map the surface",
      ],
      answer: 1, // B
      explanation:
        "InSight (Interior Exploration using Seismic Investigations, Geodesy and Heat Transport) used a seismometer to detect marsquakes and study Mars' internal structure — the first such study of another planet.",
    },
    {
      question: "The Lunar Laser Retroreflectors are historically unique because:",
      options: [
        "They are made of moon rock",
        "They are still actively used by scientists on Earth today",
        "They power lunar satellites",
        "They were accidentally left behind",
      ],
      answer: 1, // B
      explanation:
        "The retroreflectors placed by Apollo 11, 14, and 15 are still used today by observatories worldwide to bounce laser beams off the Moon and measure the Earth-Moon distance to millimeter precision. They are among the most long-lived scientific instruments in history.",
    },
  ];

  // ─── State ──────────────────────────────────────────────────────────────────

  let shuffledQuestions = [];
  let currentIndex = 0;
  let score = 0;
  let answered = false;

  // ─── Helpers ────────────────────────────────────────────────────────────────

  function shuffle(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function getScoreMessage(s, total) {
    if (s === total) return "Perfect Score! You are a true Space Explorer!";
    if (s >= 7) return "Excellent! You know your space history well.";
    if (s >= 4) return "Good effort! Keep exploring the cosmos.";
    return "Keep learning! The universe awaits your curiosity.";
  }

  // ─── Render ─────────────────────────────────────────────────────────────────

  function getContainer() {
    // Locate existing #quiz section in index.html
    let quizSection = document.getElementById("quiz");
    if (!quizSection) {
      // Fallback: create one
      quizSection = document.createElement("section");
      quizSection.id = "quiz";
      document.body.appendChild(quizSection);
    }

    let container = document.getElementById("quiz-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "quiz-container";
      quizSection.appendChild(container);
    }
    return container;
  }

  function renderQuestion() {
    const container = getContainer();
    const q = shuffledQuestions[currentIndex];
    const total = shuffledQuestions.length;
    const progressPct = Math.round((currentIndex / total) * 100);

    container.innerHTML = `
      <div class="quiz-header">
        <div class="quiz-progress-label">Question ${currentIndex + 1} of ${total}</div>
        <div class="quiz-progress-bar-wrap">
          <div class="quiz-progress-bar" style="width: ${progressPct}%"></div>
        </div>
      </div>

      <div class="quiz-question" id="quiz-question-text">${q.question}</div>

      <div class="quiz-options" id="quiz-options">
        ${q.options
          .map(
            (opt, i) => `
          <button class="quiz-option-btn" data-index="${i}" aria-label="Option ${String.fromCharCode(65 + i)}: ${opt}">
            <span class="quiz-option-letter">${String.fromCharCode(65 + i)}</span>
            <span class="quiz-option-text">${opt}</span>
          </button>`
          )
          .join("")}
      </div>

      <div class="quiz-explanation hidden" id="quiz-explanation"></div>

      <button class="quiz-next-btn hidden" id="quiz-next-btn">
        ${currentIndex + 1 < total ? "Next Question &#8594;" : "See Results &#10003;"}
      </button>
    `;

    // Bind option clicks
    container.querySelectorAll(".quiz-option-btn").forEach((btn) => {
      btn.addEventListener("click", () => handleAnswer(parseInt(btn.dataset.index, 10)));
    });

    // Bind next button
    document.getElementById("quiz-next-btn").addEventListener("click", () => {
      currentIndex++;
      answered = false;
      if (currentIndex < shuffledQuestions.length) {
        renderQuestion();
      } else {
        renderResults();
      }
    });
  }

  function handleAnswer(selectedIndex) {
    if (answered) return;
    answered = true;

    const q = shuffledQuestions[currentIndex];
    const correctIndex = q.answer;
    const buttons = document.querySelectorAll(".quiz-option-btn");
    const explanationEl = document.getElementById("quiz-explanation");
    const nextBtn = document.getElementById("quiz-next-btn");

    buttons.forEach((btn, i) => {
      btn.disabled = true;
      if (i === correctIndex) {
        btn.classList.add("quiz-option-correct");
      } else if (i === selectedIndex) {
        btn.classList.add("quiz-option-wrong");
      } else {
        btn.classList.add("quiz-option-dimmed");
      }
    });

    if (selectedIndex === correctIndex) {
      score++;
      explanationEl.innerHTML = `<span class="quiz-result-icon">&#10003;</span> <strong>Correct!</strong> ${q.explanation}`;
      explanationEl.classList.add("quiz-explanation-correct");
    } else {
      explanationEl.innerHTML = `<span class="quiz-result-icon">&#10007;</span> <strong>Incorrect.</strong> The correct answer was <strong>${q.options[correctIndex]}</strong>. ${q.explanation}`;
      explanationEl.classList.add("quiz-explanation-wrong");
    }

    explanationEl.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
  }

  function renderResults() {
    const container = getContainer();
    const total = shuffledQuestions.length;
    const pct = Math.round((score / total) * 100);
    const msg = getScoreMessage(score, total);

    // Determine grade class
    let gradeClass = "quiz-grade-low";
    if (score === total) gradeClass = "quiz-grade-perfect";
    else if (score >= 7) gradeClass = "quiz-grade-high";
    else if (score >= 4) gradeClass = "quiz-grade-mid";

    container.innerHTML = `
      <div class="quiz-results ${gradeClass}">
        <div class="quiz-results-icon">&#127775;</div>
        <h2 class="quiz-results-title">Mission Complete</h2>
        <div class="quiz-score-display">
          <span class="quiz-score-num">${score}</span>
          <span class="quiz-score-sep">/</span>
          <span class="quiz-score-total">${total}</span>
        </div>
        <div class="quiz-score-pct">${pct}%</div>
        <p class="quiz-score-msg">${msg}</p>
        <button class="quiz-restart-btn" id="quiz-restart-btn">&#8635; Restart Quiz</button>
      </div>
    `;

    document.getElementById("quiz-restart-btn").addEventListener("click", initQuiz);
  }

  // ─── Init ────────────────────────────────────────────────────────────────────

  function initQuiz() {
    shuffledQuestions = shuffle(QUIZ_DATA);
    currentIndex = 0;
    score = 0;
    answered = false;
    renderQuestion();
  }

  // ─── Inject Styles ───────────────────────────────────────────────────────────

  function injectStyles() {
    if (document.getElementById("quiz-styles")) return;
    const style = document.createElement("style");
    style.id = "quiz-styles";
    style.textContent = `
      /* ── Quiz Container ── */
      #quiz-container {
        max-width: 760px;
        margin: 0 auto;
        padding: 2rem 1.5rem;
        font-family: 'Orbitron', 'Segoe UI', sans-serif;
        color: #e0e8ff;
      }

      /* ── Header / Progress ── */
      .quiz-header {
        margin-bottom: 1.6rem;
      }
      .quiz-progress-label {
        font-size: 0.75rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: #7ec8e3;
        margin-bottom: 0.5rem;
      }
      .quiz-progress-bar-wrap {
        width: 100%;
        height: 6px;
        background: rgba(255,255,255,0.1);
        border-radius: 3px;
        overflow: hidden;
      }
      .quiz-progress-bar {
        height: 100%;
        background: linear-gradient(90deg, #00c9ff, #92fe9d);
        border-radius: 3px;
        transition: width 0.4s ease;
      }

      /* ── Question ── */
      .quiz-question {
        font-size: 1.15rem;
        line-height: 1.65;
        font-weight: 600;
        margin-bottom: 1.8rem;
        color: #ffffff;
        text-shadow: 0 0 12px rgba(0, 201, 255, 0.3);
      }

      /* ── Options ── */
      .quiz-options {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-bottom: 1.4rem;
      }
      .quiz-option-btn {
        display: flex;
        align-items: center;
        gap: 1rem;
        width: 100%;
        padding: 0.85rem 1.2rem;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(126, 200, 227, 0.25);
        border-radius: 8px;
        color: #d0e8ff;
        font-family: inherit;
        font-size: 0.95rem;
        cursor: pointer;
        text-align: left;
        transition: background 0.2s, border-color 0.2s, transform 0.1s;
      }
      .quiz-option-btn:hover:not(:disabled) {
        background: rgba(0, 201, 255, 0.12);
        border-color: rgba(0, 201, 255, 0.5);
        transform: translateX(4px);
      }
      .quiz-option-letter {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background: rgba(126, 200, 227, 0.15);
        border: 1px solid rgba(126, 200, 227, 0.4);
        font-size: 0.8rem;
        font-weight: 700;
        letter-spacing: 0;
        color: #7ec8e3;
        flex-shrink: 0;
      }
      .quiz-option-text {
        flex: 1;
      }

      /* Correct answer */
      .quiz-option-correct {
        background: rgba(0, 255, 136, 0.12) !important;
        border-color: #00ff88 !important;
        box-shadow: 0 0 14px rgba(0, 255, 136, 0.35);
        color: #ccffe8 !important;
      }
      .quiz-option-correct .quiz-option-letter {
        background: rgba(0, 255, 136, 0.25);
        border-color: #00ff88;
        color: #00ff88;
      }

      /* Wrong answer */
      .quiz-option-wrong {
        background: rgba(255, 60, 60, 0.12) !important;
        border-color: #ff4444 !important;
        box-shadow: 0 0 14px rgba(255, 60, 60, 0.3);
        color: #ffd0d0 !important;
      }
      .quiz-option-wrong .quiz-option-letter {
        background: rgba(255, 60, 60, 0.2);
        border-color: #ff4444;
        color: #ff7070;
      }

      /* Dimmed / not selected */
      .quiz-option-dimmed {
        opacity: 0.4;
      }

      /* ── Explanation ── */
      .quiz-explanation {
        padding: 1rem 1.2rem;
        border-radius: 8px;
        font-size: 0.88rem;
        line-height: 1.6;
        margin-bottom: 1.2rem;
        border-left: 3px solid;
      }
      .quiz-explanation.hidden { display: none; }
      .quiz-explanation-correct {
        background: rgba(0, 255, 136, 0.07);
        border-color: #00ff88;
        color: #ccffe8;
      }
      .quiz-explanation-wrong {
        background: rgba(255, 60, 60, 0.07);
        border-color: #ff4444;
        color: #ffdada;
      }
      .quiz-result-icon {
        margin-right: 0.4rem;
        font-style: normal;
      }

      /* ── Next Button ── */
      .quiz-next-btn {
        display: block;
        margin-left: auto;
        padding: 0.75rem 2rem;
        background: linear-gradient(135deg, #00c9ff 0%, #0072ff 100%);
        border: none;
        border-radius: 8px;
        color: #ffffff;
        font-family: inherit;
        font-size: 0.9rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        cursor: pointer;
        transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
        box-shadow: 0 0 18px rgba(0, 201, 255, 0.35);
      }
      .quiz-next-btn:hover {
        opacity: 0.9;
        transform: translateY(-2px);
        box-shadow: 0 0 26px rgba(0, 201, 255, 0.55);
      }
      .quiz-next-btn.hidden { display: none; }

      /* ── Results Screen ── */
      .quiz-results {
        text-align: center;
        padding: 2.5rem 1.5rem;
        border-radius: 14px;
        background: rgba(255,255,255,0.03);
        border: 1px solid rgba(126, 200, 227, 0.2);
      }
      .quiz-results-icon {
        font-size: 3.5rem;
        margin-bottom: 0.5rem;
        animation: pulse-star 2s infinite;
      }
      @keyframes pulse-star {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.15); }
      }
      .quiz-results-title {
        font-size: 1.5rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: #7ec8e3;
        margin: 0 0 1.4rem;
      }
      .quiz-score-display {
        font-size: 4rem;
        font-weight: 900;
        line-height: 1;
        margin-bottom: 0.3rem;
      }
      .quiz-score-num  { color: #00ff88; }
      .quiz-score-sep  { color: rgba(255,255,255,0.3); margin: 0 0.2rem; }
      .quiz-score-total { color: #7ec8e3; }
      .quiz-score-pct {
        font-size: 1.1rem;
        color: rgba(255,255,255,0.5);
        margin-bottom: 1rem;
      }
      .quiz-score-msg {
        font-size: 1rem;
        line-height: 1.6;
        color: #d0e8ff;
        margin-bottom: 2rem;
        max-width: 460px;
        margin-left: auto;
        margin-right: auto;
      }

      /* Grade-based accent */
      .quiz-grade-perfect .quiz-score-num  { color: #ffd700; text-shadow: 0 0 20px rgba(255,215,0,0.6); }
      .quiz-grade-high    .quiz-score-num  { color: #00ff88; text-shadow: 0 0 16px rgba(0,255,136,0.5); }
      .quiz-grade-mid     .quiz-score-num  { color: #00c9ff; }
      .quiz-grade-low     .quiz-score-num  { color: #ff7070; }

      /* ── Restart Button ── */
      .quiz-restart-btn {
        padding: 0.8rem 2.4rem;
        background: transparent;
        border: 2px solid #00c9ff;
        border-radius: 8px;
        color: #00c9ff;
        font-family: inherit;
        font-size: 0.9rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        cursor: pointer;
        transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.15s;
        box-shadow: 0 0 14px rgba(0, 201, 255, 0.2);
      }
      .quiz-restart-btn:hover {
        background: rgba(0, 201, 255, 0.12);
        box-shadow: 0 0 24px rgba(0, 201, 255, 0.45);
        transform: translateY(-2px);
      }

      /* ── Responsive ── */
      @media (max-width: 520px) {
        .quiz-question { font-size: 1rem; }
        .quiz-score-display { font-size: 3rem; }
        .quiz-next-btn, .quiz-restart-btn { width: 100%; }
      }
    `;
    document.head.appendChild(style);
  }

  // ─── Bootstrap ───────────────────────────────────────────────────────────────

  function bootstrap() {
    injectStyles();
    initQuiz();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }
})();
