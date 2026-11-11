/**
 * THE LAST SIGNAL — Interactive Timeline
 * Team ASTRAVYN | NASA Space Apps Challenge 2026
 *
 * Renders an alternating left/right vertical timeline into #timeline-container.
 * Features: Intersection Observer scroll animations, click-to-expand panels,
 * animated cyan connector line, and mobile-responsive single-column layout.
 */

(function () {
  'use strict';

  /* ─── DATA ───────────────────────────────────────────────────────────────── */

  const TIMELINE_EVENTS = [
    {
      year: '1966',
      title: 'Surveyor 1 Lands',
      description:
        "NASA's Surveyor 1 became the first American spacecraft to soft-land on the Moon on June 2, 1966. It sent back over 11,000 photographs and remains on the lunar surface.",
      icon: '🌕',
      category: 'moon',
    },
    {
      year: '1969',
      title: 'Apollo 11: Eagle Has Landed',
      description:
        "On July 20, 1969, the Apollo 11 Lunar Module Eagle landed at Tranquility Base. Neil Armstrong and Buzz Aldrin walked on the Moon. The Eagle's descent stage remains at Tranquility Base to this day, bearing a plaque: 'Here men from the planet Earth first set foot upon the Moon.'",
      icon: '🚀',
      category: 'moon',
    },
    {
      year: '1969',
      title: 'First Retroreflector Deployed',
      description:
        'Apollo 11 placed the first Lunar Laser Ranging retroreflector array on the Moon. Scientists on Earth began bouncing laser beams off it to measure the Earth-Moon distance. This experiment continues today, 55+ years later.',
      icon: '🔭',
      category: 'moon',
    },
    {
      year: '1971',
      title: 'Lunar Roving Vehicle Debuts',
      description:
        'Apollo 15 (July 26 – Aug 7, 1971) debuted the Lunar Roving Vehicle (LRV). Astronauts Dave Scott and Jim Irwin drove it 27.9 km across the lunar surface, vastly expanding the range of exploration.',
      icon: '🛸',
      category: 'moon',
    },
    {
      year: '1971',
      title: 'Apollo 15 ALSEP',
      description:
        'Apollo 15 deployed one of the most sophisticated ALSEP packages, including a heat flow experiment, seismometers, and a lunar surface magnetometer. All transmitted scientific data until NASA shut off receivers on September 30, 1977.',
      icon: '📡',
      category: 'moon',
    },
    {
      year: '1972',
      title: 'Apollo 17: The Last Moonwalkers',
      description:
        'Apollo 17 (Dec 7-19, 1972) was the last crewed lunar mission. Astronauts Gene Cernan and Jack Schmitt deployed the final LRV and ALSEP. When Gene Cernan stepped into the LM for the last time, it marked the end of an era. The LRV sits at Taurus-Littrow to this day.',
      icon: '🌙',
      category: 'moon',
    },
    {
      year: '1997',
      title: 'Sojourner Rolls onto Mars',
      description:
        'On July 4, 1997, the Mars Pathfinder lander delivered Sojourner — the first Mars rover — to the Martian surface at Ares Vallis. The tiny 10.6 kg rover explored for 83 sols. Contact was lost September 27, 1997.',
      icon: '🤖',
      category: 'mars',
    },
    {
      year: '2004',
      title: 'Twin Rovers Land on Mars',
      description:
        'Spirit landed January 4, 2004 at Gusev Crater. Opportunity landed January 25, 2004 at Meridiani Planum. Both were designed for 90-day missions. Both far exceeded expectations.',
      icon: '🔴',
      category: 'mars',
    },
    {
      year: '2008',
      title: 'Phoenix Confirms Ice on Mars',
      description:
        'The Phoenix lander touched down May 25, 2008 in the Martian Arctic. It directly confirmed water ice in the Martian soil — a landmark discovery. Phoenix last communicated November 2, 2008 as Martian winter set in.',
      icon: '🧊',
      category: 'mars',
    },
    {
      year: '2010',
      title: "Spirit's Final Transmission",
      description:
        "On March 22, 2010, Spirit sent its last communication from Mars. The rover had become stuck in soft soil in May 2009. NASA maintained contact attempts until May 25, 2011. Spirit remains at the site named 'Troy' in Gusev Crater.",
      icon: '📻',
      category: 'mars',
    },
    {
      year: '2018',
      title: 'InSight Lands: Listening to Mars',
      description:
        "NASA's InSight lander touched down on November 26, 2018 on Elysium Planitia. Its seismometer detected over 1,300 marsquakes, providing humanity's first detailed look inside another planet.",
      icon: '📊',
      category: 'mars',
    },
    {
      year: '2018',
      title: "Opportunity's Last Words",
      description:
        "On June 10, 2018, a massive global dust storm reduced sunlight to 1% of normal, starving Opportunity's solar panels. Its last transmission was received that day. After 1,000+ recovery attempts, NASA declared the mission over on February 13, 2019. Opportunity had traveled 45.16 km.",
      icon: '🌪️',
      category: 'mars',
    },
    {
      year: '2022',
      title: 'InSight Goes Silent',
      description:
        'On December 15, 2022, InSight sent its final transmission from Mars. Dust accumulation on solar panels gradually reduced power. The last image showed a dusty solar panel. InSight remains at Elysium Planitia, its seismometer having revolutionized planetary science.',
      icon: '🔇',
      category: 'mars',
    },
  ];

  /* ─── STYLES ─────────────────────────────────────────────────────────────── */

  const TIMELINE_CSS = `
    /* ── Timeline wrapper ── */
    #timeline-container {
      position: relative;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 20px 80px;
    }

    /* Animated vertical spine */
    #timeline-container::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(to bottom,
        transparent 0%,
        #00e5ff 10%,
        #00e5ff 90%,
        transparent 100%);
      transform: translateX(-50%);
      box-shadow: 0 0 12px #00e5ff88, 0 0 30px #00e5ff44;
      animation: timelineGlow 3s ease-in-out infinite alternate;
    }

    @keyframes timelineGlow {
      from { box-shadow: 0 0 8px #00e5ff66, 0 0 20px #00e5ff33; }
      to   { box-shadow: 0 0 18px #00e5ffcc, 0 0 50px #00e5ff66; }
    }

    /* ── Individual event ── */
    .tl-event {
      display: flex;
      justify-content: flex-end;
      padding-right: calc(50% + 50px);
      margin-bottom: 10px;
      position: relative;
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.7s ease, transform 0.7s ease;
    }

    .tl-event.tl-right {
      justify-content: flex-start;
      padding-right: 0;
      padding-left: calc(50% + 50px);
    }

    .tl-event.tl-visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* ── Dot on the spine ── */
    .tl-event::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 28px;
      width: 14px;
      height: 14px;
      background: #00e5ff;
      border: 3px solid #000510;
      border-radius: 50%;
      transform: translateX(-50%);
      box-shadow: 0 0 10px #00e5ff, 0 0 25px #00e5ff88;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      z-index: 2;
    }

    .tl-event:hover::after,
    .tl-event.tl-active::after {
      transform: translateX(-50%) scale(1.5);
      box-shadow: 0 0 18px #00e5ff, 0 0 45px #00e5ffaa;
    }

    /* Connector arm */
    .tl-event::before {
      content: '';
      position: absolute;
      top: 34px;
      width: 40px;
      height: 2px;
      background: linear-gradient(to right, #00e5ff88, #00e5ff);
    }

    .tl-event:not(.tl-right)::before {
      right: calc(50% + 14px);
    }
    .tl-event.tl-right::before {
      left: calc(50% + 14px);
      background: linear-gradient(to left, #00e5ff88, #00e5ff);
    }

    /* ── Card ── */
    .tl-card {
      background: rgba(0, 229, 255, 0.04);
      border: 1px solid rgba(0, 229, 255, 0.2);
      border-radius: 12px;
      padding: 22px 26px;
      max-width: 420px;
      cursor: pointer;
      position: relative;
      backdrop-filter: blur(8px);
      transition: background 0.3s ease, border-color 0.3s ease,
                  box-shadow 0.3s ease, transform 0.3s ease;
    }

    .tl-card:hover {
      background: rgba(0, 229, 255, 0.09);
      border-color: rgba(0, 229, 255, 0.5);
      box-shadow: 0 0 20px rgba(0, 229, 255, 0.15),
                  0 8px 32px rgba(0, 0, 0, 0.5);
      transform: translateY(-3px);
    }

    .tl-event.tl-active .tl-card {
      background: rgba(0, 229, 255, 0.12);
      border-color: #00e5ff;
      box-shadow: 0 0 30px rgba(0, 229, 255, 0.25),
                  0 10px 40px rgba(0, 0, 0, 0.6);
    }

    /* Category badge */
    .tl-category {
      display: inline-block;
      font-size: 10px;
      font-family: 'Orbitron', monospace, sans-serif;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 2px 10px;
      border-radius: 20px;
      margin-bottom: 10px;
    }

    .tl-category.moon {
      background: rgba(255, 215, 0, 0.12);
      color: #ffd700;
      border: 1px solid rgba(255, 215, 0, 0.3);
    }

    .tl-category.mars {
      background: rgba(255, 87, 34, 0.12);
      color: #ff5722;
      border: 1px solid rgba(255, 87, 34, 0.3);
    }

    /* Header row: icon + year */
    .tl-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 8px;
    }

    .tl-icon {
      font-size: 24px;
      line-height: 1;
      flex-shrink: 0;
    }

    .tl-year {
      font-family: 'Orbitron', monospace, sans-serif;
      font-size: 2rem;
      font-weight: 900;
      color: #00e5ff;
      line-height: 1;
      text-shadow: 0 0 15px #00e5ffaa;
      letter-spacing: 2px;
    }

    .tl-title {
      font-family: 'Orbitron', monospace, sans-serif;
      font-size: 0.95rem;
      font-weight: 700;
      color: #e0f7fa;
      margin-bottom: 10px;
      letter-spacing: 0.5px;
      line-height: 1.4;
    }

    /* Short preview (first 100 chars) */
    .tl-preview {
      font-family: 'Exo 2', sans-serif;
      font-size: 0.82rem;
      color: rgba(224, 247, 250, 0.6);
      line-height: 1.6;
      margin: 0;
    }

    /* Expand toggle hint */
    .tl-expand-hint {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-top: 12px;
      font-family: 'Orbitron', monospace, sans-serif;
      font-size: 0.65rem;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: rgba(0, 229, 255, 0.5);
      transition: color 0.3s ease;
    }

    .tl-card:hover .tl-expand-hint,
    .tl-event.tl-active .tl-card .tl-expand-hint {
      color: #00e5ff;
    }

    .tl-expand-hint .tl-chevron {
      display: inline-block;
      transition: transform 0.35s ease;
      font-style: normal;
    }

    .tl-event.tl-active .tl-chevron {
      transform: rotate(180deg);
    }

    /* ── Expanded detail panel ── */
    .tl-detail {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                  opacity 0.4s ease,
                  padding 0.4s ease;
      opacity: 0;
      padding: 0 26px;
      background: rgba(0, 229, 255, 0.05);
      border: 1px solid rgba(0, 229, 255, 0.0);
      border-top: none;
      border-radius: 0 0 12px 12px;
      max-width: 420px;
      box-sizing: border-box;
    }

    .tl-event.tl-active .tl-detail {
      max-height: 300px;
      opacity: 1;
      padding: 16px 26px 20px;
      border-color: rgba(0, 229, 255, 0.2);
    }

    .tl-detail p {
      font-family: 'Exo 2', sans-serif;
      font-size: 0.88rem;
      color: rgba(224, 247, 250, 0.85);
      line-height: 1.75;
      margin: 0;
    }

    /* ── Filter buttons ── */
    #tl-filter-bar {
      display: flex;
      justify-content: center;
      gap: 14px;
      margin-bottom: 48px;
      flex-wrap: wrap;
    }

    .tl-filter-btn {
      font-family: 'Orbitron', monospace, sans-serif;
      font-size: 0.7rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 8px 22px;
      border-radius: 30px;
      border: 1px solid rgba(0, 229, 255, 0.35);
      background: transparent;
      color: rgba(224, 247, 250, 0.7);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .tl-filter-btn:hover {
      border-color: #00e5ff;
      color: #00e5ff;
      box-shadow: 0 0 12px rgba(0, 229, 255, 0.2);
    }

    .tl-filter-btn.active {
      background: rgba(0, 229, 255, 0.12);
      border-color: #00e5ff;
      color: #00e5ff;
      box-shadow: 0 0 18px rgba(0, 229, 255, 0.3);
    }

    .tl-filter-btn.moon-btn.active {
      background: rgba(255, 215, 0, 0.1);
      border-color: #ffd700;
      color: #ffd700;
      box-shadow: 0 0 18px rgba(255, 215, 0, 0.2);
    }

    .tl-filter-btn.mars-btn.active {
      background: rgba(255, 87, 34, 0.1);
      border-color: #ff5722;
      color: #ff5722;
      box-shadow: 0 0 18px rgba(255, 87, 34, 0.2);
    }

    /* ── Mobile: single column ── */
    @media (max-width: 768px) {
      #timeline-container::before {
        left: 24px;
      }

      .tl-event,
      .tl-event.tl-right {
        justify-content: flex-start;
        padding-left: 60px;
        padding-right: 0;
      }

      .tl-event::after {
        left: 24px;
      }

      .tl-event::before,
      .tl-event.tl-right::before {
        left: 38px;
        right: auto;
        width: 20px;
        background: linear-gradient(to right, #00e5ff, #00e5ff88);
      }

      .tl-card,
      .tl-detail {
        max-width: 100%;
      }

      .tl-year {
        font-size: 1.5rem;
      }
    }

    /* ── Hidden state for filtering ── */
    .tl-event.tl-hidden {
      display: none;
    }

    /* ── Event counter badge ── */
    #tl-count-label {
      text-align: center;
      font-family: 'Orbitron', monospace, sans-serif;
      font-size: 0.65rem;
      letter-spacing: 2px;
      color: rgba(0, 229, 255, 0.4);
      margin-bottom: 20px;
      text-transform: uppercase;
    }
  `;

  /* ─── HELPERS ─────────────────────────────────────────────────────────────── */

  function injectStyles(css) {
    const el = document.createElement('style');
    el.id = 'tl-injected-styles';
    el.textContent = css;
    document.head.appendChild(el);
  }

  function truncate(str, n) {
    return str.length > n ? str.slice(0, n).trimEnd() + '…' : str;
  }

  function buildCard(event, index, side) {
    const isRight = side === 'right';
    const categoryLabel = event.category === 'moon' ? '🌕 Lunar' : '🔴 Martian';

    const wrapper = document.createElement('div');
    wrapper.className = `tl-event${isRight ? ' tl-right' : ''}`;
    wrapper.dataset.index = index;
    wrapper.dataset.category = event.category;

    // Card
    const card = document.createElement('div');
    card.className = 'tl-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-expanded', 'false');
    card.setAttribute('aria-label', `${event.year}: ${event.title}`);

    // Category badge
    const catBadge = document.createElement('span');
    catBadge.className = `tl-category ${event.category}`;
    catBadge.textContent = categoryLabel;

    // Header: icon + year
    const header = document.createElement('div');
    header.className = 'tl-header';

    const iconEl = document.createElement('span');
    iconEl.className = 'tl-icon';
    iconEl.setAttribute('aria-hidden', 'true');
    iconEl.textContent = event.icon;

    const yearEl = document.createElement('span');
    yearEl.className = 'tl-year';
    yearEl.textContent = event.year;

    header.appendChild(iconEl);
    header.appendChild(yearEl);

    // Title
    const titleEl = document.createElement('h3');
    titleEl.className = 'tl-title';
    titleEl.textContent = event.title;

    // Preview snippet
    const previewEl = document.createElement('p');
    previewEl.className = 'tl-preview';
    previewEl.textContent = truncate(event.description, 100);

    // Expand hint
    const hint = document.createElement('div');
    hint.className = 'tl-expand-hint';
    hint.innerHTML = 'Read more <i class="tl-chevron" aria-hidden="true">▾</i>';

    card.appendChild(catBadge);
    card.appendChild(header);
    card.appendChild(titleEl);
    card.appendChild(previewEl);
    card.appendChild(hint);

    // Detail panel (expanded)
    const detail = document.createElement('div');
    detail.className = 'tl-detail';
    detail.setAttribute('aria-hidden', 'true');

    const detailP = document.createElement('p');
    detailP.textContent = event.description;
    detail.appendChild(detailP);

    wrapper.appendChild(card);
    wrapper.appendChild(detail);

    return wrapper;
  }

  /* ─── TOGGLE ACTIVE ──────────────────────────────────────────────────────── */

  function activateEvent(eventEl, allEvents) {
    const isAlreadyActive = eventEl.classList.contains('tl-active');

    // Close all
    allEvents.forEach((el) => {
      el.classList.remove('tl-active');
      const c = el.querySelector('.tl-card');
      const d = el.querySelector('.tl-detail');
      if (c) c.setAttribute('aria-expanded', 'false');
      if (d) d.setAttribute('aria-hidden', 'true');
    });

    // Open clicked (unless it was already open)
    if (!isAlreadyActive) {
      eventEl.classList.add('tl-active');
      const c = eventEl.querySelector('.tl-card');
      const d = eventEl.querySelector('.tl-detail');
      if (c) c.setAttribute('aria-expanded', 'true');
      if (d) d.setAttribute('aria-hidden', 'false');

      // Smooth scroll into view if partially off-screen
      setTimeout(() => {
        const rect = eventEl.getBoundingClientRect();
        if (rect.bottom > window.innerHeight) {
          eventEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 100);
    }
  }

  /* ─── SCROLL OBSERVER ────────────────────────────────────────────────────── */

  function setupScrollAnimations(eventEls) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger delay based on element's position in the list
            const idx = parseInt(entry.target.dataset.index, 10) || 0;
            const delay = Math.min(idx * 60, 300); // cap at 300ms
            setTimeout(() => {
              entry.target.classList.add('tl-visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    eventEls.forEach((el) => observer.observe(el));
  }

  /* ─── FILTER BAR ─────────────────────────────────────────────────────────── */

  function buildFilterBar(container, eventEls, countLabel) {
    const bar = document.createElement('div');
    bar.id = 'tl-filter-bar';
    bar.setAttribute('role', 'group');
    bar.setAttribute('aria-label', 'Filter timeline events');

    const filters = [
      { label: 'All Missions', value: 'all', cls: 'all-btn' },
      { label: '🌕 Moon', value: 'moon', cls: 'moon-btn' },
      { label: '🔴 Mars', value: 'mars', cls: 'mars-btn' },
    ];

    function applyFilter(value) {
      let visibleCount = 0;
      eventEls.forEach((el) => {
        const cat = el.dataset.category;
        const show = value === 'all' || cat === value;
        el.classList.toggle('tl-hidden', !show);
        if (show) visibleCount++;
      });
      countLabel.textContent = `Showing ${visibleCount} of ${eventEls.length} events`;
      bar.querySelectorAll('.tl-filter-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.filter === value);
      });
    }

    filters.forEach(({ label, value, cls }) => {
      const btn = document.createElement('button');
      btn.className = `tl-filter-btn ${cls}`;
      btn.dataset.filter = value;
      btn.textContent = label;
      btn.addEventListener('click', () => applyFilter(value));
      bar.appendChild(btn);
    });

    // Insert filter bar before the container's first child
    container.insertBefore(bar, container.firstChild);

    // Set "All" as default active
    applyFilter('all');
  }

  /* ─── MAIN RENDER ────────────────────────────────────────────────────────── */

  function renderTimeline() {
    const container = document.getElementById('timeline-container');
    if (!container) {
      console.warn('[THE LAST SIGNAL] #timeline-container not found.');
      return;
    }

    // Inject styles
    if (!document.getElementById('tl-injected-styles')) {
      injectStyles(TIMELINE_CSS);
    }

    // Clear any existing content
    container.innerHTML = '';

    // Count label (will be populated by filter bar)
    const countLabel = document.createElement('p');
    countLabel.id = 'tl-count-label';
    container.appendChild(countLabel);

    // Build event nodes
    const eventEls = TIMELINE_EVENTS.map((event, i) => {
      const side = i % 2 === 0 ? 'left' : 'right';
      return buildCard(event, i, side);
    });

    // Insert filter bar
    buildFilterBar(container, eventEls, countLabel);

    // Append events to DOM
    eventEls.forEach((el) => container.appendChild(el));

    // Click / keyboard handlers
    eventEls.forEach((el) => {
      const card = el.querySelector('.tl-card');
      if (!card) return;

      card.addEventListener('click', () => activateEvent(el, eventEls));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activateEvent(el, eventEls);
        }
      });
    });

    // Scroll-in animations
    setupScrollAnimations(eventEls);
  }

  /* ─── BOOT ───────────────────────────────────────────────────────────────── */

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderTimeline);
  } else {
    renderTimeline();
  }
})();
