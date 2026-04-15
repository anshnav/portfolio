function loadProject() {
  const params  = new URLSearchParams(window.location.search);
  const id      = params.get('id') || window.location.hash.replace('#', '');
  const project = projects.find(p => p.id === id);

  if (!project) {
    document.getElementById('projectPage').innerHTML =
      '<div style="padding:8rem 2rem;text-align:center"><p>Project not found. <a href="index.html">Go back</a></p></div>';
    return;
  }

  // Page title
  document.title = `${project.title} — Ankush Katoch`;

  // Reset reveal states for re-population
  document.querySelectorAll('.reveal').forEach(el => el.classList.remove('visible'));

  // Media — video takes priority on project page, then image, then gradient
  const media = document.getElementById('pjMedia');
  if (project.video) {
    media.innerHTML = `<video id="pjVideo" src="${project.video}" muted loop playsinline></video>`;
    const vid = document.getElementById('pjVideo');
    if (vid) vid.play();
  } else if (project.image) {
    media.innerHTML = `<img src="${project.image}" alt="${project.title}" />`;
  } else {
    media.innerHTML = `
      <div class="pj__placeholder" style="background:${project.gradient}">
        <span>${project.title}</span>
      </div>`;
  }

  // Meta
  document.getElementById('pjMeta').innerHTML = `
    <span class="section-label">${project.category}</span>`;

  // Title
  document.getElementById('pjTitle').textContent = project.title;

  // Award
  const awardEl = document.getElementById('pjAward');
  awardEl.innerHTML = project.award
    ? `<span class="pj__award-badge">&#9670; ${project.award}</span>`
    : '';

  // Description + overview
  document.getElementById('pjDescription').textContent = project.description;
  document.getElementById('pjOverview').textContent    = project.overview;

  // Highlights — clear then repopulate
  const list = document.getElementById('pjHighlightsList');
  list.innerHTML = '';
  project.highlights.forEach(h => {
    const li = document.createElement('li');
    li.textContent = h;
    list.appendChild(li);
  });

  // CTA
  document.getElementById('pjCta').innerHTML = `
    ${project.url ? `
      <a href="${project.url}" target="_blank" rel="noopener" class="btn btn--primary">
        Visit Live Project &#8599;
      </a>` : ''}
    <a href="index.html#work" class="btn btn--ghost">&#8592; All Projects</a>`;

  // Sidebar
  document.getElementById('pjClient').innerHTML = `<h4>Client</h4><p>${project.client}</p>`;
  document.getElementById('pjRole').innerHTML   = `<h4>Role</h4><p>${project.role}</p>`;
  document.getElementById('pjYear').innerHTML   = `<h4>Year</h4><p>${project.year}</p>`;
  document.getElementById('pjTools').innerHTML  = `
    <h4>Tools & Tech</h4>
    <ul>${project.tools.map(t => `<li>${t}</li>`).join('')}</ul>`;

  renderCaseStudy(project);

  // Next project
  const currentIndex = projects.findIndex(p => p.id === id);
  const next = projects[(currentIndex + 1) % projects.length];
  document.getElementById('pjNext').innerHTML = `
    <a href="project.html#${next.id}" class="pj__next-link">
      <span class="section-label">Next Project</span>
      <span class="pj__next-title">${next.title} &#8594;</span>
    </a>`;

  // Scroll to top then animate reveals
  window.scrollTo(0, 0);
  requestAnimationFrame(() => {
    document.querySelectorAll('.reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 60);
    });
  });
}

function renderCaseStudy(project) {
  const target = document.getElementById('pjCaseStudy');
  if (!target) return;

  if (!project.caseStudy) {
    target.innerHTML = '';
    target.hidden = true;
    return;
  }

  target.hidden = false;
  const { deck, images = [], sections = [] } = project.caseStudy;

  const galleryMarkup = images.length ? `
    <div class="case-gallery ${project.caseStudy.galleryStyle ? `case-gallery--${project.caseStudy.galleryStyle}` : ''}" aria-label="Case study supporting images">
      ${images.map((image, index) => `
        <figure class="case-gallery__item ${image.layout ? `case-gallery__item--${image.layout}` : ''}">
          <button class="case-gallery__button" type="button" data-gallery-index="${index}" aria-label="Open image in gallery: ${image.alt}">
            <img src="${image.src}" alt="${image.alt}">
            <span class="case-gallery__open">Open gallery</span>
          </button>
          ${image.caption ? `<figcaption>${image.caption}</figcaption>` : ''}
        </figure>
      `).join('')}
    </div>` : '';

  const sectionsMarkup = sections.map(section => `
    <article class="case-section">
      <div class="case-section__heading">
        ${section.eyebrow ? `<span class="section-label">${section.eyebrow}</span>` : ''}
        <h2>${section.title}</h2>
      </div>
      <div class="case-section__content">
        ${section.body ? section.body.map(paragraph => `<p>${paragraph}</p>`).join('') : ''}
        ${section.bullets ? `
          <ul class="case-list">
            ${section.bullets.map(item => `<li>${item}</li>`).join('')}
          </ul>` : ''}
        ${section.decisions ? `
          <div class="case-decisions">
            ${section.decisions.map(decision => `
              <div class="case-decision">
                <h3>${decision.title}</h3>
                <p>${decision.text}</p>
              </div>
            `).join('')}
          </div>` : ''}
      </div>
    </article>
  `).join('');

  target.innerHTML = `
    <div class="case-intro">
      <span class="section-label">Expanded Case Study</span>
      ${deck ? `<p>${deck}</p>` : ''}
    </div>
    ${galleryMarkup}
    ${sectionsMarkup}`;

  initCaseGalleryLightbox(target, images);
}

function initCaseGalleryLightbox(scope, images) {
  const buttons = scope.querySelectorAll('.case-gallery__button');
  if (!buttons.length) return;

  const lightbox = getCaseLightbox();
  let currentIndex = 0;
  let zoom = 1;

  const renderImage = () => {
    const image = images[currentIndex];
    lightbox.image.src = image.src;
    lightbox.image.alt = image.alt;
    lightbox.caption.textContent = image.caption || image.alt;
    zoom = 1;
    lightbox.image.style.width = '';
    lightbox.image.style.maxWidth = '100%';
    lightbox.image.style.maxHeight = '82vh';
    lightbox.counter.textContent = `${currentIndex + 1} / ${images.length}`;
  };

  const open = index => {
    currentIndex = index;
    renderImage();
    lightbox.root.hidden = false;
    document.body.classList.add('lightbox-open');
    lightbox.close.focus();
  };

  const close = () => {
    lightbox.root.hidden = true;
    document.body.classList.remove('lightbox-open');
  };

  const showPrevious = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    renderImage();
  };

  const showNext = () => {
    currentIndex = (currentIndex + 1) % images.length;
    renderImage();
  };

  const setZoom = nextZoom => {
    zoom = Math.min(Math.max(nextZoom, 0.5), 3);
    lightbox.image.style.maxWidth = zoom === 1 ? '100%' : 'none';
    lightbox.image.style.maxHeight = zoom === 1 ? '82vh' : 'none';
    lightbox.image.style.width = zoom === 1 ? '' : `${zoom * 100}%`;
  };

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      open(Number(button.dataset.galleryIndex));
    });
  });

  lightbox.close.onclick = close;
  lightbox.backdrop.onclick = close;
  lightbox.previous.onclick = showPrevious;
  lightbox.next.onclick = showNext;
  lightbox.zoomIn.onclick = () => setZoom(zoom + 0.25);
  lightbox.zoomOut.onclick = () => setZoom(zoom - 0.25);
  lightbox.zoomReset.onclick = () => setZoom(1);

  lightbox.root.onkeydown = event => {
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowLeft') showPrevious();
    if (event.key === 'ArrowRight') showNext();
    if (event.key === '+' || event.key === '=') setZoom(zoom + 0.25);
    if (event.key === '-') setZoom(zoom - 0.25);
    if (event.key === '0') setZoom(1);
  };
}

function getCaseLightbox() {
  let root = document.querySelector('#caseLightbox');
  if (!root) {
    root = document.createElement('div');
    root.id = 'caseLightbox';
    root.className = 'case-lightbox';
    root.hidden = true;
    root.tabIndex = -1;
    root.innerHTML = `
      <div class="case-lightbox__backdrop" data-lightbox-backdrop></div>
      <div class="case-lightbox__panel" role="dialog" aria-modal="true" aria-label="Case study image gallery">
        <div class="case-lightbox__toolbar">
          <span class="case-lightbox__counter" data-lightbox-counter></span>
          <div class="case-lightbox__controls">
            <button type="button" data-lightbox-zoom-out>Zoom out</button>
            <button type="button" data-lightbox-zoom-reset>Reset</button>
            <button type="button" data-lightbox-zoom-in>Zoom in</button>
            <button type="button" data-lightbox-close>Close</button>
          </div>
        </div>
        <button class="case-lightbox__nav case-lightbox__nav--prev" type="button" data-lightbox-prev aria-label="Previous image">&#8592;</button>
        <div class="case-lightbox__viewport">
          <img src="" alt="" data-lightbox-image>
        </div>
        <button class="case-lightbox__nav case-lightbox__nav--next" type="button" data-lightbox-next aria-label="Next image">&#8594;</button>
        <p class="case-lightbox__caption" data-lightbox-caption></p>
      </div>`;
    document.body.appendChild(root);
  }

  return {
    root,
    backdrop: root.querySelector('[data-lightbox-backdrop]'),
    image: root.querySelector('[data-lightbox-image]'),
    caption: root.querySelector('[data-lightbox-caption]'),
    counter: root.querySelector('[data-lightbox-counter]'),
    close: root.querySelector('[data-lightbox-close]'),
    previous: root.querySelector('[data-lightbox-prev]'),
    next: root.querySelector('[data-lightbox-next]'),
    zoomIn: root.querySelector('[data-lightbox-zoom-in]'),
    zoomOut: root.querySelector('[data-lightbox-zoom-out]'),
    zoomReset: root.querySelector('[data-lightbox-zoom-reset]')
  };
}

// Run on load and whenever the hash changes
loadProject();
window.addEventListener('hashchange', loadProject);
