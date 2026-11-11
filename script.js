// ==========================================================================
// Siva Prasanna - Portfolio JavaScript Engine
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMobileNav();
  initActiveNavLink();
  initCurrentYear();
  initProjectFilters();
  initContactForm();
});

// --------------------------------------------------------------------------
// 1. Theme Management (Dark / Light Mode)
// --------------------------------------------------------------------------
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  // Determine theme: saved preference -> system dark mode -> default dark
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const savedTheme = localStorage.getItem("theme") || "dark";

  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";

      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("theme", nextTheme);
      updateThemeIcon(nextTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;

    // Support both FontAwesome (<i> tag) and SVG icons
    if (themeIcon.tagName.toLowerCase() === "i") {
      themeIcon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    } else {
      // SVG markup
      if (theme === "dark") {
        // Sun Icon
        themeIcon.innerHTML =
          '<path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18.75a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75ZM6.166 18.894a.75.75 0 0 1-1.06-1.06l1.59-1.591a.75.75 0 1 1 1.061 1.06l-1.59 1.591ZM2.25 12a.75.75 0 0 1 .75-.75H5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75ZM6.166 6.166a.75.75 0 0 1 1.06-1.06l1.59 1.591a.75.75 0 1 1-1.061 1.06l-1.59-1.591Z" />';
      } else {
        // Moon Icon
        themeIcon.innerHTML =
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" />';
      }
    }
  }
}

// --------------------------------------------------------------------------
// 2. Mobile Navigation Drawer Toggle
// --------------------------------------------------------------------------
function initMobileNav() {
  const mobileToggleBtn = document.getElementById("mobile-toggle");
  const navLinks = document.getElementById("nav-links");

  if (!mobileToggleBtn || !navLinks) return;

  mobileToggleBtn.addEventListener("click", () => {
    const isActive = navLinks.classList.toggle("active");
    document.body.style.overflow = isActive ? "hidden" : "";

    // Toggle icon between hamburger and close (X)
    const icon = mobileToggleBtn.querySelector("i");
    if (icon) {
      icon.className = isActive ? "fas fa-xmark" : "fas fa-bars";
    } else {
      mobileToggleBtn.innerHTML = isActive
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" /></svg>`;
    }
  });

  // Close mobile menu when a navigation link is clicked
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      document.body.style.overflow = "";

      const icon = mobileToggleBtn.querySelector("i");
      if (icon) {
        icon.className = "fas fa-bars";
      } else {
        mobileToggleBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" /></svg>`;
      }
    });
  });
}

// --------------------------------------------------------------------------
// 3. Active Nav Link Detection
// --------------------------------------------------------------------------
function initActiveNavLink() {
  const currentPage = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    const linkPage = href.split("/").pop();
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}

// --------------------------------------------------------------------------
// 4. Update Current Year in Footer
// --------------------------------------------------------------------------
function initCurrentYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// --------------------------------------------------------------------------
// 5. Projects Category Live Filtering (projects.html)
// --------------------------------------------------------------------------
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const selectedCategory = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");

        if (selectedCategory === "all" || cardCategory === selectedCategory) {
          card.style.display = "flex";
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// --------------------------------------------------------------------------
// 6. Contact Form Submission (contact.html)
// --------------------------------------------------------------------------
function initContactForm() {
  const contactForm = document.getElementById("contactForm") || document.getElementById("contact-form");
  const formStatus = document.getElementById("formStatus") || document.getElementById("form-alert");

  if (!contactForm) return;

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const nameInput = document.getElementById("name") || contactForm.querySelector('input[type="text"]');
    const emailInput = document.getElementById("email") || contactForm.querySelector('input[type="email"]');
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message") || contactForm.querySelector("textarea");
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    const name = nameInput ? nameInput.value.trim() : "Recruiter";
    const email = emailInput ? emailInput.value.trim() : "";
    const subject = subjectInput ? subjectInput.value.trim() : "Job Opportunity for Siva Prasanna";
    const message = messageInput ? messageInput.value.trim() : "";

    const originalBtnHtml = submitBtn ? submitBtn.innerHTML : "";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending...</span> <i class="fa-solid fa-spinner fa-spin"></i>';
    }

    if (formStatus) {
      formStatus.style.display = "block";
      formStatus.textContent = "Thank you! Opening your email client to send message...";
      formStatus.className = "form-status success";
    }

    // Launch direct mailto with populated fields
    const mailtoUri = `mailto:sivaprasanna28@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;

    setTimeout(() => {
      window.location.href = mailtoUri;
      contactForm.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
      }
    }, 800);
  });
}
