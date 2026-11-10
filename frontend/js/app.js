/**
 * ============================================================================
 * SIVA PRASANNA - MAIN PORTFOLIO CONTROLLER
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderSkills();
  initProjects();
  initContactForm();
  initMobileMenu();
  initScrollSpy();
  initBackToTop();
  checkBackendHealth();
});

/* ==========================================================================
   THEME TOGGLE
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('siva_portfolio_theme') || 'dark';

  document.documentElement.setAttribute('data-theme', storedTheme);
  updateThemeIcon(storedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('siva_portfolio_theme', newTheme);
      updateThemeIcon(newTheme);
      showToast(`Switched to ${newTheme} theme`, 'info');
    });
  }
}

function updateThemeIcon(theme) {
  const iconSpan = document.getElementById('theme-icon');
  if (iconSpan) {
    iconSpan.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

/* ==========================================================================
   SKILLS RENDERING
   ========================================================================== */
function renderSkills() {
  const skillsContainer = document.getElementById('skills-container');
  if (!skillsContainer || typeof skillsData === 'undefined') return;

  skillsContainer.innerHTML = skillsData.map(group => `
    <div class="skill-category-card">
      <div class="skill-category-header">
        <div class="skill-icon-wrapper">${group.icon}</div>
        <h3 class="skill-category-title">${escapeHtml(group.category)}</h3>
      </div>
      <div class="skill-tags-list">
        ${group.skills.map(skill => `
          <span class="skill-tag">
            <span style="color: var(--accent-cyan);">•</span>
            ${escapeHtml(skill)}
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   PROJECTS RENDERING & FILTERING
   ========================================================================== */
let allProjects = [];

async function initProjects() {
  allProjects = await ApiService.getProjects();
  renderProjects(allProjects);
  initProjectFilters();
  initProjectModal();
}

function renderProjects(projects) {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;

  if (projects.length === 0) {
    projectsGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <p>No projects found in this category.</p>
      </div>
    `;
    return;
  }

  projectsGrid.innerHTML = projects.map(project => `
    <article class="project-card" data-id="${project.id}">
      <div class="project-header-banner"></div>
      <div class="project-card-body">
        <span class="project-category-badge">${escapeHtml(project.categoryLabel || project.category)}</span>
        <h3 class="project-title">${escapeHtml(project.title)}</h3>
        <p class="project-desc">${escapeHtml(project.summary)}</p>
        
        <div class="project-tech-chips">
          ${(project.techStack || []).slice(0, 5).map(tech => `
            <span class="tech-chip">${escapeHtml(tech)}</span>
          `).join('')}
          ${project.techStack && project.techStack.length > 5 ? `
            <span class="tech-chip">+${project.techStack.length - 5} more</span>
          ` : ''}
        </div>
      </div>

      <div class="project-card-footer">
        <button class="project-btn-details" onclick="openProjectModal('${project.id}')">
          <span>🔍 View Architecture & Details</span>
        </button>
        <div class="project-links">
          ${project.githubUrl ? `
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="View GitHub Repository">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          ` : ''}
          ${project.liveDemoUrl && project.liveDemoUrl !== '#' ? `
            <a href="${project.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="Live Preview">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          ` : ''}
        </div>
      </div>
    </article>
  `).join('');
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-filter');
      if (filterCategory === 'all') {
        renderProjects(allProjects);
      } else {
        const filtered = allProjects.filter(p => p.category === filterCategory);
        renderProjects(filtered);
      }
    });
  });
}

/* ==========================================================================
   PROJECT DETAILS & ARCHITECTURE MODAL
   ========================================================================== */
function initProjectModal() {
  const modalOverlay = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && modalOverlay) {
    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openProjectModal(projectId) {
  const project = allProjects.find(p => p.id === projectId);
  if (!project) return;

  const modalOverlay = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalBody = document.getElementById('modal-body');

  modalTitle.textContent = project.title;
  modalCategory.textContent = project.categoryLabel || project.category.toUpperCase();

  modalBody.innerHTML = `
    <div>
      <h4 class="modal-section-title">Overview</h4>
      <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary);">${escapeHtml(project.summary)}</p>
    </div>

    <div>
      <h4 class="modal-section-title">Key Engineering Highlights</h4>
      <ul style="padding-left: 1.25rem; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.92rem; color: var(--text-secondary);">
        ${(project.highlights || []).map(item => `<li>${escapeHtml(item)}</li>`).join('')}
      </ul>
    </div>

    ${project.architecture ? `
      <div>
        <h4 class="modal-section-title">System Architecture & Data Flow</h4>
        <div class="modal-arch-box">
          <pre style="margin: 0; white-space: pre-wrap; color: var(--accent-cyan); font-size: 0.82rem;">${escapeHtml(project.architecture.flowDiagram || '')}</pre>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem; margin-top: 0.85rem; font-size: 0.82rem;">
          <div style="background: var(--bg-card); padding: 0.6rem 0.8rem; border-radius: 6px; border: 1px solid var(--border-color);">
            <strong>Frontend:</strong> ${escapeHtml(project.architecture.client || 'HTML/CSS/JS')}
          </div>
          <div style="background: var(--bg-card); padding: 0.6rem 0.8rem; border-radius: 6px; border: 1px solid var(--border-color);">
            <strong>API Layer:</strong> ${escapeHtml(project.architecture.apiLayer || 'Spring Boot')}
          </div>
          <div style="background: var(--bg-card); padding: 0.6rem 0.8rem; border-radius: 6px; border: 1px solid var(--border-color);">
            <strong>Database:</strong> ${escapeHtml(project.architecture.database || 'MySQL')}
          </div>
        </div>
      </div>
    ` : ''}

    ${project.sampleEndpoints && project.sampleEndpoints.length > 0 ? `
      <div>
        <h4 class="modal-section-title">Sample REST Endpoints</h4>
        <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; padding: 0.75rem 1rem;">
          ${project.sampleEndpoints.map(ep => `
            <div style="font-family: var(--font-mono); font-size: 0.82rem; padding: 0.35rem 0; color: var(--text-secondary); border-bottom: 1px solid rgba(255,255,255,0.04);">
              ${escapeHtml(ep)}
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <div>
      <h4 class="modal-section-title">Technologies Used</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        ${(project.techStack || []).map(tech => `
          <span class="skill-tag" style="font-size: 0.8rem;">${escapeHtml(tech)}</span>
        `).join('')}
      </div>
    </div>

    <div style="display: flex; gap: 1rem; margin-top: 1rem; border-top: 1px solid var(--border-color); padding-top: 1.25rem;">
      ${project.githubUrl ? `
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          View on GitHub
        </a>
      ` : ''}
      <button class="btn btn-secondary btn-sm" onclick="closeModal()">Close</button>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modalOverlay = document.getElementById('project-modal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Make accessible to global window
window.openProjectModal = openProjectModal;
window.closeModal = closeModal;

/* ==========================================================================
   CONTACT FORM & VALIDATION
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const feedbackBox = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('contact-submit-btn');

  if (!contactForm) return;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    // Client-side Validation
    if (name.length < 2) {
      showFormFeedback('Please enter your name (at least 2 characters).', 'error');
      return;
    }
    if (!validateEmail(email)) {
      showFormFeedback('Please provide a valid email address.', 'error');
      return;
    }
    if (message.length < 10) {
      showFormFeedback('Message must contain at least 10 characters.', 'error');
      return;
    }

    // Set Loading State
    submitBtn.disabled = true;
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Sending... ⏳</span>';
    feedbackBox.style.display = 'none';

    try {
      const result = await ApiService.sendContactMessage({ name, email, subject, message });

      if (result.success) {
        if (result.mode === 'backend') {
          showFormFeedback('Thank you! Your message was sent and saved to the Spring Boot backend.', 'success');
          showToast('Message sent to backend!', 'success');
          contactForm.reset();
        } else {
          // Static fallback: Open mailto link
          showFormFeedback('Message ready! Opening your email client to complete sending...', 'success');
          showToast('Launching email client...', 'info');
          
          const mailtoUri = `mailto:sivaprasanna28@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry from ' + name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
          setTimeout(() => {
            window.location.href = mailtoUri;
          }, 800);
        }
      } else {
        showFormFeedback(result.message || 'Could not send message. Please reach out directly to sivaprasanna28@gmail.com', 'error');
      }
    } catch (err) {
      showFormFeedback('An unexpected error occurred. Please contact sivaprasanna28@gmail.com directly.', 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
}

function showFormFeedback(text, type) {
  const feedbackBox = document.getElementById('form-feedback');
  if (!feedbackBox) return;
  feedbackBox.textContent = text;
  feedbackBox.className = `form-feedback ${type}`;
  feedbackBox.style.display = 'block';
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ==========================================================================
   BACKEND HEALTH CHECK & STATUS PILL
   ========================================================================== */
async function checkBackendHealth() {
  const statusPill = document.getElementById('backend-status-pill');
  if (!statusPill) return;

  const isOnline = await ApiService.checkBackendStatus();
  if (isOnline) {
    statusPill.innerHTML = '<span class="pulse-dot"></span> Spring Boot Backend: Online';
    statusPill.style.color = 'var(--accent-emerald)';
  } else {
    statusPill.innerHTML = '<span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#94a3b8;"></span> Standalone Mode';
    statusPill.style.color = 'var(--text-muted)';
  }
}

/* ==========================================================================
   NAVIGATION & MOBILE MENU
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 100;

    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   UTILITIES & TOASTS
   ========================================================================== */
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  const icon = type === 'success' ? '✅' : type === 'error' ? '⚠️' : 'ℹ️';
  toast.innerHTML = `<span>${icon}</span> <span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function copyEmail() {
  const email = 'sivaprasanna28@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    showToast('Email address copied to clipboard!', 'success');
  }).catch(() => {
    showToast('Failed to copy email', 'error');
  });
}
window.copyEmail = copyEmail;

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
