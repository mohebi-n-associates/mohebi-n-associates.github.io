/**
 * Mohebi Lab Website - Main JavaScript
 * Handles data loading, rendering, and interactions
 */

// ===== Utility Functions =====

/**
 * Load JSON data from file
 */
async function loadData(filename) {
  const basePath = window.location.pathname.includes('/pages/') ? '../data/' : 'data/';
  try {
    const response = await fetch(basePath + filename);
    if (!response.ok) throw new Error(`Failed to load ${filename}`);
    return await response.json();
  } catch (error) {
    console.error(`Error loading ${filename}:`, error);
    return null;
  }
}

/**
 * Get the correct path prefix based on current page location
 */
function getBasePath() {
  return window.location.pathname.includes('/pages/') ? '../' : '';
}

/**
 * Format date string
 */
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

/**
 * Render SVG icon
 */
function getIcon(name, size = 24) {
  const icons = {
    email: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>`,
    twitter: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    instagram: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
    website: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    link: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
    electrode: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M8 6h8"/><path d="M6 10h12"/><path d="M8 14h8"/><path d="M10 18h4"/></svg>`,
    fiber: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 2v10l7-7"/><circle cx="12" cy="12" r="3"/></svg>`,
    microscope: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></svg>`,
    light: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`,
    heart: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    users: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    star: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    book: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>`,
    play: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`
  };
  return icons[name] || '';
}

// ===== Navigation =====

function initNavigation() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');

  // Toggle mobile menu
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }

  // Add scrolled class on scroll
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      if (links) links.classList.remove('open');
    });
  });
}

// ===== Render Navigation =====

async function renderNavigation() {
  const config = await loadData('config.json');
  if (!config) return;

  const basePath = getBasePath();
  const navContainer = document.getElementById('nav-links');
  
  if (navContainer && config.navigation) {
    navContainer.innerHTML = config.navigation.map(item => {
      const href = basePath + item.href;
      const isActive = window.location.pathname.endsWith(item.href) || 
                       (item.href === 'index.html' && window.location.pathname.endsWith('/'));
      return `<li><a href="${href}" class="nav__link ${isActive ? 'active' : ''}">${item.name}</a></li>`;
    }).join('');
  }
}

// ===== Render Footer =====

async function renderFooter() {
  const config = await loadData('config.json');
  if (!config) return;

  const basePath = getBasePath();
  const footerContainer = document.getElementById('footer-content');
  
  if (footerContainer) {
    const year = new Date().getFullYear();
    footerContainer.innerHTML = `
      <div class="footer__inner">
        <div class="footer__brand">
          <div class="footer__logo">${config.labName}</div>
          <p class="footer__description">${config.description}</p>
        </div>
        <div class="footer__section">
          <h4>Quick Links</h4>
          <ul class="footer__links">
            ${config.navigation.map(item => `<li><a href="${basePath}${item.href}">${item.name}</a></li>`).join('')}
          </ul>
        </div>
        <div class="footer__section">
          <h4>Contact</h4>
          <ul class="footer__links">
            <li><a href="mailto:${config.email}">${config.email}</a></li>
            <li><a href="${config.university.url}" target="_blank">${config.university.department}</a></li>
            <li><a href="${config.university.url}" target="_blank">${config.university.name}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <p class="footer__copyright">© ${year} The Board of Regents of the University of Wisconsin System</p>
        <div class="footer__legal">
          <a href="https://www.wisc.edu/privacy-notice/" target="_blank">Privacy Notice</a>
        </div>
      </div>
    `;
  }
}

// ===== Home Page Renders =====

async function renderHero() {
  const config = await loadData('config.json');
  if (!config) return;

  const heroContainer = document.getElementById('hero-content');
  if (heroContainer) {
    const neuromodulators = config.neuromodulators.join(', ');
    heroContainer.innerHTML = `
      <p class="hero__tagline">${config.tagline}</p>
      <h1 class="hero__title">${config.labName}</h1>
      <p class="hero__description">${config.description}</p>
      <p class="hero__description" style="font-size: 0.95rem; opacity: 0.8;">
        Key neuromodulators: ${neuromodulators}
      </p>
      <div class="hero__cta">
        <a href="pages/research.html" class="btn btn--primary">Our Research</a>
        <a href="pages/people.html" class="btn btn--outline">Meet the Team</a>
      </div>
    `;
  }
}

async function renderFunders() {
  const config = await loadData('config.json');
  if (!config || !config.funders) return;

  const fundersContainer = document.getElementById('funders-list');
  if (fundersContainer) {
    fundersContainer.innerHTML = config.funders.map(funder => `
      <a href="${funder.url}" target="_blank" rel="noopener noreferrer" title="${funder.name}">
        <div class="funder-logo placeholder-image" style="width: 120px; height: 60px; font-size: 0.8rem; border-radius: 4px;">
          ${funder.name.split(' ').map(w => w[0]).join('')}
        </div>
      </a>
    `).join('');
  }
}

// ===== People Page Renders =====

async function renderCoreValues() {
  const people = await loadData('people.json');
  if (!people || !people.coreValues) return;

  const container = document.getElementById('core-values');
  if (container) {
    container.innerHTML = people.coreValues.map(value => `
      <div class="value-card">
        <h4 class="value-card__title">${value.title}</h4>
        <p class="value-card__text">${value.description}</p>
      </div>
    `).join('');
  }
}

async function renderTeamMembers() {
  const people = await loadData('people.json');
  if (!people || !people.members) return;

  const container = document.getElementById('team-members');
  if (container) {
    container.innerHTML = people.members.map(member => {
      const links = [];
      if (member.links.twitter) links.push(`<a href="${member.links.twitter}" class="team-card__link" target="_blank" title="Twitter">${getIcon('twitter', 20)}</a>`);
      if (member.links.instagram) links.push(`<a href="${member.links.instagram}" class="team-card__link" target="_blank" title="Instagram">${getIcon('instagram', 20)}</a>`);
      if (member.links.email) links.push(`<a href="mailto:${member.links.email}" class="team-card__link" title="Email">${getIcon('email', 20)}</a>`);
      if (member.links.website) links.push(`<a href="${member.links.website}" class="team-card__link" target="_blank" title="Website">${getIcon('website', 20)}</a>`);

      return `
        <div class="team-card">
          <div class="team-card__image placeholder-image" style="width: 180px; height: 180px; border-radius: 50%;">
            ${member.name.split(' ').map(n => n[0]).join('')}
          </div>
          <h3 class="team-card__name">${member.name}</h3>
          <p class="team-card__role">${member.role}</p>
          ${member.bio ? `<p class="team-card__bio">${member.bio}</p>` : ''}
          ${links.length > 0 ? `<div class="team-card__links">${links.join('')}</div>` : ''}
        </div>
      `;
    }).join('');
  }
}

async function renderCollaborators() {
  const people = await loadData('people.json');
  if (!people || !people.collaborators) return;

  const container = document.getElementById('collaborators');
  if (container) {
    container.innerHTML = people.collaborators.map(collab => `
      <div class="team-card">
        <div class="team-card__image placeholder-image" style="width: 140px; height: 140px; border-radius: 50%;">
          ${collab.name.split(' ').map(n => n[0]).join('')}
        </div>
        <h3 class="team-card__name">${collab.name}</h3>
        <p class="team-card__role">${collab.institution}</p>
      </div>
    `).join('');
  }
}

// ===== Research Page Renders =====

async function renderResearchOverview() {
  const research = await loadData('research.json');
  if (!research) return;

  const container = document.getElementById('research-overview');
  if (container) {
    container.innerHTML = `<p>${research.overview}</p>`;
  }
}

async function renderResearchProjects() {
  const research = await loadData('research.json');
  if (!research || !research.projects) return;

  const container = document.getElementById('research-projects');
  if (container) {
    container.innerHTML = research.projects.map((project, index) => `
      <div class="research-item">
        <div class="research-item__content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <p>${project.approach}</p>
          <p><strong>${project.goal}</strong></p>
        </div>
        <div class="research-item__image placeholder-image" style="height: 300px; border-radius: 8px;">
          ${getIcon('microscope', 64)}
        </div>
      </div>
    `).join('');
  }
}

async function renderTechniques() {
  const research = await loadData('research.json');
  if (!research || !research.techniques) return;

  const container = document.getElementById('techniques');
  if (container) {
    container.innerHTML = research.techniques.map(tech => `
      <div class="technique-card">
        <div class="technique-card__icon">${getIcon(tech.icon, 48)}</div>
        <h4 class="technique-card__title">${tech.name}</h4>
        <p class="technique-card__text">${tech.description}</p>
      </div>
    `).join('');
  }
}

// ===== Publications Page Renders =====

async function renderPublications() {
  const pubs = await loadData('publications.json');
  if (!pubs) return;

  const container = document.getElementById('publications-list');
  if (container) {
    const allPubs = [...pubs.featured, ...pubs.publications];
    container.innerHTML = allPubs.map(pub => `
      <div class="publication-item ${pub.featured ? 'featured' : ''}">
        <p class="publication-item__journal">${pub.journal} · <span class="publication-item__year">${pub.year}</span></p>
        <h4 class="publication-item__title">${pub.title}</h4>
        <p class="publication-item__authors">${pub.authors}</p>
      </div>
    `).join('');
  }

  const scholarLink = document.getElementById('scholar-link');
  if (scholarLink && pubs.googleScholarUrl) {
    scholarLink.href = pubs.googleScholarUrl;
  }
}

// ===== Brain Talks Page Renders =====

async function renderBrainTalks() {
  const talks = await loadData('brain-talks.json');
  if (!talks || !talks.talks) return;

  const container = document.getElementById('talks-table-body');
  if (container) {
    container.innerHTML = talks.talks.map(talk => `
      <tr>
        <td class="talks-table__date">${formatDate(talk.date)}</td>
        <td>
          <span class="talks-table__speaker">${talk.speaker}</span><br>
          <span class="talks-table__institution">${talk.institution}</span>
        </td>
        <td>${talk.title}</td>
        <td>
          <a href="${talk.livestream}" target="_blank" class="talks-table__link">
            ${getIcon('play', 14)} Watch
          </a>
        </td>
      </tr>
    `).join('');
  }
}

// ===== Join Page Renders =====

async function renderWhyJoin() {
  const join = await loadData('join.json');
  if (!join || !join.whyJoin) return;

  const container = document.getElementById('why-join');
  if (container) {
    const icons = ['heart', 'users', 'star', 'users', 'book', 'star', 'users', 'book'];
    container.innerHTML = join.whyJoin.map((item, i) => `
      <div class="why-card">
        <div class="why-card__icon">${getIcon(icons[i % icons.length], 24)}</div>
        <div class="why-card__content">
          <h4>${item.title}</h4>
          <p>${item.description}</p>
        </div>
      </div>
    `).join('');
  }
}

async function renderPositions() {
  const join = await loadData('join.json');
  if (!join || !join.positions) return;

  const container = document.getElementById('positions');
  if (container) {
    container.innerHTML = join.positions.map(pos => `
      <div class="position-card">
        <div class="position-card__header">
          <h3 class="position-card__title">${pos.title}</h3>
          <span class="position-card__status position-card__status--${pos.statusType}">${pos.status}</span>
        </div>
        <div class="position-card__body">
          <div class="position-card__section">
            <p><strong>${pos.summary}</strong></p>
            <p>${pos.description}</p>
          </div>
          <div class="position-card__section">
            <h4>Qualifications</h4>
            <p>${pos.qualifications}</p>
          </div>
          <div class="position-card__section">
            <h4>Desired Skills</h4>
            <ul>
              ${pos.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
          </div>
          ${pos.programs ? `
            <div class="position-card__section">
              <h4>Apply Through</h4>
              <ul>
                ${pos.programs.map(prog => `<li><a href="${prog.url}" target="_blank">${prog.name}</a></li>`).join('')}
              </ul>
              ${pos.applicationNote ? `<p style="margin-top: 0.5rem; font-style: italic;">${pos.applicationNote}</p>` : ''}
            </div>
          ` : ''}
          ${pos.commitment ? `<p style="margin-top: 1rem;"><strong>Commitment:</strong> ${pos.commitment}</p>` : ''}
        </div>
      </div>
    `).join('');
  }
}

// ===== Scroll Reveal Animation =====

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  const revealOnScroll = () => {
    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 150;
      
      if (elementTop < windowHeight - revealPoint) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Initial check
}

// ===== Initialize =====

document.addEventListener('DOMContentLoaded', async () => {
  // Common initializations
  await renderNavigation();
  await renderFooter();
  initNavigation();
  initScrollReveal();

  // Page-specific initializations
  const page = document.body.dataset.page;
  
  switch(page) {
    case 'home':
      await renderHero();
      await renderFunders();
      break;
    case 'people':
      await renderCoreValues();
      await renderTeamMembers();
      await renderCollaborators();
      break;
    case 'research':
      await renderResearchOverview();
      await renderResearchProjects();
      await renderTechniques();
      break;
    case 'publications':
      await renderPublications();
      break;
    case 'brain-talks':
      await renderBrainTalks();
      break;
    case 'join':
      await renderWhyJoin();
      await renderPositions();
      break;
  }
});
