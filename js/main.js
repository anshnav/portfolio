// =============================================
// NAV — scroll effect
// =============================================
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });


// =============================================
// MOBILE NAV OVERLAY
// =============================================
const navToggle  = document.getElementById('navToggle');
const navOverlay = document.getElementById('navOverlay');
const navClose   = document.getElementById('navClose');

function openMobileNav() {
  navOverlay.classList.add('open');
  navOverlay.setAttribute('aria-hidden', 'false');
  navToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  navOverlay.classList.remove('open');
  navOverlay.setAttribute('aria-hidden', 'true');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

navToggle.addEventListener('click', openMobileNav);
navClose.addEventListener('click', closeMobileNav);

navOverlay.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMobileNav);
});


// =============================================
// REVEAL ON SCROLL (IntersectionObserver)
// =============================================
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings inside the same parent
      const siblings = entry.target.parentElement.querySelectorAll('.reveal:not(.visible)');
      siblings.forEach((el, idx) => {
        setTimeout(() => el.classList.add('visible'), idx * 80);
      });
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

revealEls.forEach(el => observer.observe(el));


// =============================================
// PROJECT GRID — VIDEO HOVER PLAY
// =============================================
document.querySelectorAll('.project__video').forEach(video => {
  const card = video.closest('.project__link');
  if (!card) return;
  card.addEventListener('mouseenter', () => video.play());
  card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
});


// =============================================
// SMOOTH ACTIVE NAV LINK
// =============================================
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav__links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });

  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--text)' : '';
  });
}, { passive: true });
