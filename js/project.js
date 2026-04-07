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
    <a href="${project.url}" target="_blank" rel="noopener" class="btn btn--primary">
      Visit Live Project &#8599;
    </a>
    <a href="index.html#work" class="btn btn--ghost">&#8592; All Projects</a>`;

  // Sidebar
  document.getElementById('pjClient').innerHTML = `<h4>Client</h4><p>${project.client}</p>`;
  document.getElementById('pjRole').innerHTML   = `<h4>Role</h4><p>${project.role}</p>`;
  document.getElementById('pjYear').innerHTML   = `<h4>Year</h4><p>${project.year}</p>`;
  document.getElementById('pjTools').innerHTML  = `
    <h4>Tools & Tech</h4>
    <ul>${project.tools.map(t => `<li>${t}</li>`).join('')}</ul>`;

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

// Run on load and whenever the hash changes
loadProject();
window.addEventListener('hashchange', loadProject);
