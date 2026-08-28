/* ============ ICONS & LOGOS (24x24) ============ */
const ICONS = {
    // Subject icons (line style)
    tree: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l4 6h-2.5l3.5 5.5H14l3 5.5H7l3-5.5H8.5L12 9H9.5L12 3z"/><path d="M12 20v-2.5"/></svg>`,
    flow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="6" r="2.3"/><circle cx="18" cy="6" r="2.3"/><circle cx="12" cy="18" r="2.3"/><path d="M8 7.3L11 16M16 7.3L13 16"/></svg>`,
    db: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="5.5" rx="7" ry="2.5"/><path d="M5 5.5v13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-13"/><path d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5"/></svg>`,
    network: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="4" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 6v6M12 12l-6 6M12 12l6 6"/></svg>`,
    gear: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="3"/><path d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6M18.4 18.4l-1.6-1.6M7.2 7.2L5.6 5.6"/></svg>`,
    sigma: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M17 5H7l6 7-6 7h10"/></svg>`,
    atom: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/></svg>`,
    play: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M10 8.5l6 3.5-6 3.5v-7z"/></svg>`,
    notes: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 12h6M9 16h6"/></svg>`,
    
    
    question: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M9.3 9.3a2.7 2.7 0 115 1.6c-.6.9-1.8 1.2-1.8 2.4"/><circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none"/></svg>`,
    pencil: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,

    checklist: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4h16v16H4z" rx="2"/><path d="M8 9l2 2 4-4M8 15h8"/></svg>`,
    code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 6l-5 6 5 6M16 6l5 6-5 6M14 4l-4 16"/></svg>`,
    globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3.5 9h17M3.5 15h17"/></svg>`,

    // Company Official Brand Logos
    google: `<svg viewBox="0 0 24 24" width="24" height="24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
    </svg>`,

    microsoft: `<svg viewBox="0 0 24 24" width="24" height="24">
        <rect x="2.5" y="2.5" width="9" height="9" fill="#F25022" rx="1"/>
        <rect x="12.5" y="2.5" width="9" height="9" fill="#7FBA00" rx="1"/>
        <rect x="2.5" y="12.5" width="9" height="9" fill="#00A4EF" rx="1"/>
        <rect x="12.5" y="12.5" width="9" height="9" fill="#FFB900" rx="1"/>
    </svg>`,

    amazon: `<svg viewBox="0 0 24 24" width="24" height="24">
        <path fill="#FF9900" d="M14.2 13.8c-.3.4-.8.6-1.3.6-.8 0-1.3-.5-1.3-1.3 0-.9.6-1.4 1.7-1.5l1-.1v1.2c-.1.4-.2.8-.4 1.1zm2.3-4.6c-.2-.2-.5-.3-.9-.3h-.8c-.1-.7-.6-1.2-1.5-1.2-1.1 0-1.8.6-2 1.6h1.3c.1-.4.3-.6.7-.6.4 0 .6.2.6.6v.5l-1.6.2c-1.3.2-2 1.2-2 2.6 0 1.3.8 2.2 2.1 2.2.9 0 1.6-.4 2-1.1v1h1.4v-4.5c0-.8-.4-1.2-1-1.2zm-12.8 9c4.2 2.8 10 3.2 15.4-1.3.3-.3.1-.7-.3-.6-4.8 2.4-10.4 1.4-14.7-.8-.4-.2-.7.3-.4.7z"/>
        <path fill="#FF9900" d="M19.7 17.6c-.2-.3-1.5-.2-2.1-.1-.2 0-.2.2 0 .4.9.5 2 1.1 2.4 1.3.3.1.5-.1.4-.4-.2-.5-.5-1.1-.7-1.2z"/>
    </svg>`,

    tcs: `<svg viewBox="0 0 24 24" width="24" height="24">
        <rect width="24" height="24" rx="6" fill="#0072C6" fill-opacity="0.18"/>
        <text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="8.5" fill="#29A9FF" letter-spacing="0.8">TCS</text>
    </svg>`,

    infosys: `<svg viewBox="0 0 24 24" width="24" height="24">
        <rect width="24" height="24" rx="6" fill="#007CC3" fill-opacity="0.18"/>
        <text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="7.5" fill="#00B4FF" letter-spacing="0.2">infy</text>
    </svg>`,

    flipkart: `<svg viewBox="0 0 24 24" width="24" height="24">
        <rect width="24" height="24" rx="6" fill="#2874F0" fill-opacity="0.2"/>
        <path d="M6.5 8h11l-1.2 11.5H7.7L6.5 8z" fill="#2874F0"/>
        <path d="M9.5 8V5.5a2.5 2.5 0 0 1 5 0V8" stroke="#FFE11B" stroke-width="1.8" fill="none" stroke-linecap="round"/>
        <path d="M12 11.5v4.5M10.2 13.5h3.6" stroke="#FFE11B" stroke-width="1.6" stroke-linecap="round"/>
    </svg>`
};

/* ============ DATA — EXAM PREP ============ */
let SUBJECTS = [];

async function fetchSubjects() {
  try {
    const res = await fetch('http://127.0.0.1:8000/api/subjects/');
    const data = await res.json();

    SUBJECTS = data.map(subj => {
      const lectures = [];
      const notes = [];
      const questions = [];
      const handwritten = [];

      subj.modules.forEach(mod => {
        mod.lectures.forEach(l => lectures.push({ module: mod.title, title: l.title, url: l.url }));
        mod.notes.forEach(n => notes.push({
          module: mod.title,
          title: n.title,
          url: n.url || n.file,
        }));
        mod.questions.forEach(q => questions.push({ module: mod.title, title: q.title, url: q.url }));
        mod.handwritten_notes.forEach(h => handwritten.push({ module: mod.title, title: h.title, url: h.url || h.file }));
      });

      return {
        id: String(subj.id),
        name: subj.name,
        icon: subj.icon,
        color: subj.color,
        done: subj.done,
        lectures, notes, questions,handwritten
      };
    });

    layoutStations();
  } catch (err) {
    console.error('Failed to load subjects from API:', err);
  }
}

/* ============ DATA — PLACEMENT PORTAL WITH LOGOS ============ */
let COMPANIES = [];

async function fetchCompanies() {
  try {
    const res = await fetch('http://127.0.0.1:8000/api/companies/');
    const data = await res.json();

    COMPANIES = data.map(c => ({
      id: String(c.id),
      name: c.name,
      icon: c.icon,
      color: c.color,
      eligibility: c.eligibility || { cgpa: '-', branches: '-', backlogs: '-', batch: '-', details: 'Not added yet.' },
      dsa: c.dsa_questions.map(q => ({ title: q.title, difficulty: q.difficulty, url: q.url, topic: q.topic })),
      webdev: c.webdev_items.map(w => ({ title: w.title, type: w.type, url: w.url }))
    }));

    layoutPlacementStations();
  } catch (err) {
    console.error('Failed to load companies from API:', err);
  }
}

/* ============ PORTAL SWITCHING ============ */
let activePortal = 'exam'; // 'exam' or 'placement'

function switchPortal(portal) {
    if (activePortal === portal) return;
    activePortal = portal;

    const examContainer = document.getElementById('route-container');
    const placementContainer = document.getElementById('placement-container');
    const examHeader = document.getElementById('exam-header');
    const placementHeader = document.getElementById('placement-header');
    const navBtns = document.querySelectorAll('.portal-btn');

    navBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.portal === portal);
    });

    if (portal === 'exam') {
        placementContainer.style.display = 'none';
        placementHeader.style.display = 'none';
        
        examContainer.style.display = 'block';
        examHeader.style.display = 'block';
        
        examContainer.classList.remove('portal-view-enter');
        void examContainer.offsetWidth; // trigger reflow for animation restart
        examContainer.classList.add('portal-view-enter');

        drawPath();
    } else {
        examContainer.style.display = 'none';
        examHeader.style.display = 'none';

        placementContainer.style.display = 'block';
        placementHeader.style.display = 'block';

        placementContainer.classList.remove('portal-view-enter');
        void placementContainer.offsetWidth; // trigger reflow for animation restart
        placementContainer.classList.add('portal-view-enter');

        drawPlacementPath();
    }
}

/* ============ RENDER EXAM TRAIL ============ */
const container = document.getElementById('route-container');
const svg = document.getElementById('route-svg');
const X_PATTERN = [22, 68, 16, 72, 24, 62];
const V_GAP = 190;

function layoutStations() {
    container.innerHTML = '';
    container.appendChild(svg);
    container.style.height = (V_GAP * SUBJECTS.length + 60) + 'px';

    SUBJECTS.forEach((subj, i) => {
        const el = document.createElement('div');
        el.className = 'station' + (subj.done ? ' done' : '') + (isCurrent(subj, i) ? ' current' : '');
        el.style.setProperty('--station-index', i);
        const xPct = X_PATTERN[i % X_PATTERN.length];
        const yPx = 50 + i * V_GAP;
        el.style.left = xPct + '%';
        el.style.top = yPx + 'px';

        el.innerHTML = `
      ${isCurrent(subj, i) ? '<div class="pin-label">you are here</div>' : ''}
      <button class="station-btn" data-id="${subj.id}" aria-haspopup="dialog">
        <div class="station-marker" style="color:${subj.color}">${ICONS[subj.icon]}</div>
        <div>
          <div class="station-name">${subj.name}</div>
          <div class="station-meta">${totalItems(subj)} resources · ${subj.done ? 'done' : 'in progress'}</div>
        </div>
      </button>
    `;
        container.appendChild(el);
    });

    drawPath();
    updateProgress();
}

function isCurrent(subj, i) {
    const firstNotDone = SUBJECTS.findIndex(s => !s.done);
    return i === firstNotDone;
}

function totalItems(s) {
    return s.lectures.length + s.notes.length + s.questions.length+ s.handwritten.length;
}

function drawPath() {
    const points = [];
    SUBJECTS.forEach((subj, i) => {
        const xPct = X_PATTERN[i % X_PATTERN.length];
        const x = container.clientWidth * (xPct / 100);
        const y = 50 + i * V_GAP;
        points.push([x, y]);
    });

    if (points.length === 0) return;

    let d = `M ${points[0][0]} ${points[0][1]}`;
    for (let i = 1; i < points.length; i++) {
        const [x0, y0] = points[i - 1];
        const [x1, y1] = points[i];
        const midY = (y0 + y1) / 2;
        d += ` C ${x0} ${midY}, ${x1} ${midY}, ${x1} ${y1}`;
    }

    svg.setAttribute('width', container.clientWidth);
    svg.setAttribute('height', container.clientHeight);
    svg.innerHTML = `<path class="route-path" d="${d}"/>`;

    let lastDoneIdx = -1;
    SUBJECTS.forEach((s, i) => { if (s.done) lastDoneIdx = i; });
    if (lastDoneIdx > -1) {
        const progPoints = points.slice(0, lastDoneIdx + 1);
        let pd = `M ${progPoints[0][0]} ${progPoints[0][1]}`;
        for (let i = 1; i < progPoints.length; i++) {
            const [x0, y0] = progPoints[i - 1];
            const [x1, y1] = progPoints[i];
            const midY = (y0 + y1) / 2;
            pd += ` C ${x0} ${midY}, ${x1} ${midY}, ${x1} ${y1}`;
        }
        svg.innerHTML += `<path class="route-path-progress" d="${pd}"/>`;
    }
}

function updateProgress() {
    const done = SUBJECTS.filter(s => s.done).length;
    document.getElementById('progressFill').style.width = (done / SUBJECTS.length * 100) + '%';
    document.getElementById('progressLabel').textContent = `${done} / ${SUBJECTS.length} subjects marked done`;
}

/* ============ RENDER PLACEMENT TRAIL WITH LOGOS ============ */
const placementContainer = document.getElementById('placement-container');
const placementSvg = document.getElementById('placement-svg');

function layoutPlacementStations() {
    placementContainer.innerHTML = '';
    placementContainer.appendChild(placementSvg);
    placementContainer.style.height = (V_GAP * COMPANIES.length + 60) + 'px';

    COMPANIES.forEach((comp, i) => {
        const el = document.createElement('div');
        el.className = 'station placement-station';
        el.style.setProperty('--station-index', i);
        const xPct = X_PATTERN[i % X_PATTERN.length];
        const yPx = 50 + i * V_GAP;
        el.style.left = xPct + '%';
        el.style.top = yPx + 'px';

        const totalRes = comp.dsa.length + comp.webdev.length;
        el.innerHTML = `
      <button class="station-btn placement-btn" data-company="${comp.id}" aria-haspopup="dialog">
        <div class="station-marker company-logo-marker" style="--company-color:${comp.color}">
            ${ICONS[comp.icon]}
        </div>
        <div>
          <div class="station-name">${comp.name}</div>
          <div class="station-meta">${totalRes} questions · eligibility info</div>
        </div>
      </button>
    `;
        placementContainer.appendChild(el);
    });

    drawPlacementPath();
}

function drawPlacementPath() {
    const points = [];
    COMPANIES.forEach((comp, i) => {
        const xPct = X_PATTERN[i % X_PATTERN.length];
        const x = placementContainer.clientWidth * (xPct / 100);
        const y = 50 + i * V_GAP;
        points.push([x, y]);
    });

    if (points.length === 0) return;

    let d = `M ${points[0][0]} ${points[0][1]}`;
    for (let i = 1; i < points.length; i++) {
        const [x0, y0] = points[i - 1];
        const [x1, y1] = points[i];
        const midY = (y0 + y1) / 2;
        d += ` C ${x0} ${midY}, ${x1} ${midY}, ${x1} ${y1}`;
    }

    placementSvg.setAttribute('width', placementContainer.clientWidth);
    placementSvg.setAttribute('height', placementContainer.clientHeight);
    placementSvg.innerHTML = `<path class="route-path placement-route" d="${d}"/>`;
}

/* ============ PANEL ============ */
const overlay = document.getElementById('overlay');
const panel = document.getElementById('panel');
const panelTitle = document.getElementById('panelTitle');
const panelSub = document.getElementById('panelSub');
const panelIcon = document.getElementById('panelIcon');
const tabsEl = document.getElementById('tabs');
const panelBody = document.getElementById('panelBody');

const TAB_DEFS = [
    { key: 'lectures', label: 'Lectures', icon: 'play' },
    { key: 'notes', label: 'Notes', icon: 'notes' },
    { key: 'handwritten', label: 'Handwritten Notes', icon: 'pencil' },
    { key: 'questions', label: 'Questions', icon: 'question' }
];

const PLACEMENT_TAB_DEFS = [
    { key: 'eligibility', label: 'Eligibility', icon: 'checklist' },
    { key: 'dsa', label: 'DSA Questions', icon: 'code' },
    { key: 'webdev', label: 'Web Dev & Projects', icon: 'globe' }
];

let activeSubject = null;
let activeTab = 'lectures';
let activeCompany = null;
let activePlacementTab = 'eligibility';
let panelMode = 'exam'; // 'exam' or 'placement'
let currentPage = 1;
const ITEMS_PER_PAGE = 50;

function renderPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    if (totalPages <= 1) return '';
    
    return `
      <div class="pagination-controls" style="display:flex; justify-content:center; gap:12px; margin-top:24px; padding-top:16px; border-top:1px solid var(--border);">
        <button class="page-btn" data-page="${currentPage - 1}" ${currentPage === 1 ? 'disabled' : ''} style="padding:6px 14px; background:var(--bg-soft); color:${currentPage === 1 ? 'var(--text-faint)' : 'var(--text)'}; border:1px solid var(--border); border-radius:8px; cursor:${currentPage === 1 ? 'not-allowed' : 'pointer'}; font-family:inherit; font-size:13px; font-weight:500; transition:background 0.2s;">Previous</button>
        
        <span style="color:var(--text-dim); align-self:center; font-size:13px; font-family:'JetBrains Mono', monospace;">Page ${currentPage} of ${totalPages}</span>
        
        <button class="page-btn" data-page="${currentPage + 1}" ${currentPage === totalPages ? 'disabled' : ''} style="padding:6px 14px; background:var(--bg-soft); color:${currentPage === totalPages ? 'var(--text-faint)' : 'var(--text)'}; border:1px solid var(--border); border-radius:8px; cursor:${currentPage === totalPages ? 'not-allowed' : 'pointer'}; font-family:inherit; font-size:13px; font-weight:500; transition:background 0.2s;">Next</button>
      </div>
    `;
}

/* ---- Open panels ---- */
function openPanel(id) {
    panelMode = 'exam';
    activeSubject = SUBJECTS.find(s => s.id === id);
    activeTab = 'lectures';
    currentPage = 1;
    panelTitle.textContent = activeSubject.name;
    panelSub.textContent = `${totalItems(activeSubject)} resources across ${TAB_DEFS.length} sections`;
    panelIcon.innerHTML = ICONS[activeSubject.icon];
    panelIcon.style.color = activeSubject.color;
    renderTabs();
    renderTabContent();
    overlay.classList.add('open');
    panel.classList.add('open');
}

function openPlacementPanel(id) {
    panelMode = 'placement';
    activeCompany = COMPANIES.find(c => c.id === id);
    activePlacementTab = 'eligibility';
    currentPage = 1;
    panelTitle.textContent = activeCompany.name;
    const totalRes = activeCompany.dsa.length + activeCompany.webdev.length;
    panelSub.textContent = `${totalRes} interview questions · eligibility details`;
    panelIcon.innerHTML = ICONS[activeCompany.icon];
    panelIcon.style.color = activeCompany.color;
    renderPlacementTabs();
    renderPlacementTabContent();
    overlay.classList.add('open');
    panel.classList.add('open');
}

function closePanel() {
    overlay.classList.remove('open');
    panel.classList.remove('open');
}

/* ---- Exam tabs ---- */
function renderTabs() {
    tabsEl.innerHTML = TAB_DEFS.map(t => `
    <button class="tab ${t.key === activeTab ? 'active' : ''}" data-tab="${t.key}">
      ${t.label} <span class="count">${activeSubject[t.key].length}</span>
    </button>
  `).join('');
}

function renderTabContent() {
    const items = activeSubject[activeTab];
    if (items.length === 0) {
        panelBody.innerHTML = `<div class="empty-note">Nothing added to ${activeTab} yet — add links in the SUBJECTS data.</div>`;
        return;
    }
    panelBody.innerHTML = `<ul class="item-list">
    ${items.map((it, i) => `
      <li style="--item-i: ${i};">
        <a class="item" href="${it.url}" target="_blank" rel="noopener">
          <span class="item-dot"></span>
          <span class="item-text">
            <div class="item-title">${it.title}</div>
            <div class="item-module">${it.module}</div>
          </span>
          <span class="item-go">\u2192</span>
        </a>
      </li>
    `).join('')}
  </ul>`;
}

/* ---- Placement tabs ---- */
function renderPlacementTabs() {
    tabsEl.innerHTML = PLACEMENT_TAB_DEFS.map(t => {
        let count = '';
        if (t.key === 'eligibility') count = '\u2014';
        else if (t.key === 'dsa') count = activeCompany.dsa.length;
        else count = activeCompany.webdev.length;
        return `
    <button class="tab ${t.key === activePlacementTab ? 'active' : ''}" data-ptab="${t.key}">
      ${t.label} <span class="count">${count}</span>
    </button>
  `;
    }).join('');
}

function renderPlacementTabContent() {
    if (activePlacementTab === 'eligibility') {
        const e = activeCompany.eligibility;
        panelBody.innerHTML = `
      <div class="eligibility-card">
        <div class="elig-row"><span class="elig-label">CGPA Requirement</span><span class="elig-value">${e.cgpa}</span></div>
        <div class="elig-row"><span class="elig-label">Eligible Branches</span><span class="elig-value">${e.branches}</span></div>
        <div class="elig-row"><span class="elig-label">Backlogs</span><span class="elig-value">${e.backlogs}</span></div>
        <div class="elig-row"><span class="elig-label">Batch</span><span class="elig-value">${e.batch}</span></div>
        <div class="elig-detail">
          <span class="elig-label">Selection Process</span>
          <p>${e.details}</p>
        </div>
      </div>
    `;
        return;
    }

        if (activePlacementTab === 'dsa') {
        const items = activeCompany.dsa;
        if (items.length === 0) {
            panelBody.innerHTML = `<div class="empty-note">No DSA questions added yet — update the COMPANIES data.</div>`;
            return;
        }

        const groups = {};
        items.forEach(it => {
            const primaryTopic = (it.topic || 'Other').split(',')[0].trim() || 'Other';
            if (!groups[primaryTopic]) groups[primaryTopic] = [];
            groups[primaryTopic].push(it);
        });

        const sortedTopics = Object.keys(groups).sort((a, b) => groups[b].length - groups[a].length);

        panelBody.innerHTML = sortedTopics.map(topic => `
          <div class="topic-group">
            <div class="topic-heading">${topic} <span class="count">${groups[topic].length}</span></div>
            <ul class="item-list">
              ${groups[topic].map((it, i) => `
                <li style="--item-i: ${i};">
                  <a class="item" href="${it.url}" target="_blank" rel="noopener">
                    <span class="item-dot"></span>
                    <span class="item-text">
                      <div class="item-title">${it.title}</div>
                      <div class="item-module"><span class="difficulty-badge ${it.difficulty.toLowerCase()}">${it.difficulty}</span></div>
                    </span>
                    <span class="item-go">\u2192</span>
                  </a>
                </li>
              `).join('')}
            </ul>
          </div>
        `).join('');
        return;
    }

    if (activePlacementTab === 'webdev') {
        const items = activeCompany.webdev;
        if (items.length === 0) {
            panelBody.innerHTML = `<div class="empty-note">No Web Dev / Project questions added yet — update the COMPANIES data.</div>`;
            return;
        }
        panelBody.innerHTML = `<ul class="item-list">
      ${items.map((it, i) => `
        <li style="--item-i: ${i};">
          <a class="item" href="${it.url}" target="_blank" rel="noopener">
            <span class="item-dot"></span>
            <span class="item-text">
              <div class="item-title">${it.title}</div>
              <div class="item-module"><span class="type-badge">${it.type}</span></div>
            </span>
            <span class="item-go">\u2192</span>
          </a>
        </li>
      `).join('')}
    </ul>`;
        return;
    }
}

/* ============ EVENT LISTENERS ============ */
// Exam trail clicks
container.addEventListener('click', (e) => {
    const btn = e.target.closest('.station-btn');
    if (btn && btn.dataset.id) openPanel(btn.dataset.id);
});

// Placement trail clicks
placementContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.placement-btn');
    if (btn && btn.dataset.company) openPlacementPanel(btn.dataset.company);
});

// Tab clicks
tabsEl.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab');
    if (!tab) return;

    if (panelMode === 'exam' && tab.dataset.tab) {
        activeTab = tab.dataset.tab;
        currentPage = 1;
        renderTabs();
        renderTabContent();
    } else if (panelMode === 'placement' && tab.dataset.ptab) {
        activePlacementTab = tab.dataset.ptab;
        currentPage = 1;
        renderPlacementTabs();
        renderPlacementTabContent();
    }
});

// Pagination button clicks
panelBody.addEventListener('click', (e) => {
    const btn = e.target.closest('.page-btn');
    if (btn && !btn.hasAttribute('disabled')) {
        currentPage = parseInt(btn.dataset.page);
        if (panelMode === 'exam') renderTabContent();
        else renderPlacementTabContent();
        panelBody.scrollTop = 0; // scroll back to top of panel
    }
});

// Portal nav clicks
document.querySelector('.portal-nav').addEventListener('click', (e) => {
    const btn = e.target.closest('.portal-btn');
    if (btn) switchPortal(btn.dataset.portal);
});

// Panel close
overlay.addEventListener('click', closePanel);
document.getElementById('panelClose').addEventListener('click', closePanel);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePanel(); });

// Resize
window.addEventListener('resize', () => {
    if (activePortal === 'exam') drawPath();
    else drawPlacementPath();
});

/* ============ INIT ============ */

fetchSubjects();
fetchCompanies();
document.getElementById('placement-container').style.display = 'none';
document.getElementById('placement-header').style.display = 'none';


