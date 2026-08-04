function groupBy(items, key) {
  return items.reduce((acc, item) => {
    const value = item[key];
    if (!acc[value]) acc[value] = [];
    acc[value].push(item);
    return acc;
  }, {});
}

function renderNav(currentHref) {
  const sidebar = document.getElementById("sidebar-nav");
  const grouped = groupBy(window.OCTAVE_NAV, "group");
  const groupOrder = ["Overview", "Vignettes", "Architecture"];

  const html = groupOrder
    .map((groupName) => {
      const links = grouped[groupName] || [];
      const linksHtml = links
        .map((link) => {
          const active = currentHref === link.href ? "active" : "";
          return `<a class="nav-link ${active}" href="${link.href}">${link.title}</a>`;
        })
        .join("");

      return `
        <section class="nav-group">
          <p class="nav-label">${groupName}</p>
          ${linksHtml}
        </section>
      `;
    })
    .join("");

  sidebar.innerHTML = html;
}

function renderPage(pageKey) {
  const page = window.OCTAVE_PAGES[pageKey];
  if (!page) return;

  document.title = page.title;
  const content = document.getElementById("content");
  const heroClass = page.showHero ? "hero" : "hero hero-compact";
  const hero = `
    <header class="${heroClass}">
      <div class="hero-inner page-wrap">
        <h1>${page.title}</h1>
        ${page.headline ? `<p class="headline">${page.headline}</p>` : ""}
        ${page.meta && page.meta.length ? `<div class="meta-row">${page.meta.map((item) => `<span class="meta-pill">${item}</span>`).join("")}</div>` : ""}
      </div>
    </header>
  `;

  function renderCards(cards) {
    if (!cards || !cards.length) return "";
    return `
      <div class="cards-grid">
        ${cards
          .map(
            (card) => `
          <article class="card-item">
            ${card.kicker ? `<p class="card-kicker">${card.kicker}</p>` : ""}
            <h3>${card.title}</h3>
            <p>${card.body}</p>
          </article>
        `
          )
          .join("")}
      </div>
    `;
  }

  function renderCapabilityCards(capabilities) {
    if (!capabilities || !capabilities.length) return "";
    return `
      <div class="cards-grid">
        ${capabilities
          .map(
            (cap) => `
          <article class="cap-card">
            <div class="cap-head">
              <span class="cap-code">${cap.code}</span>
              <h3>${cap.name}</h3>
            </div>
            <p class="cap-domain">${cap.domain}</p>
            <p>${cap.body}</p>
          </article>
        `
          )
          .join("")}
      </div>
    `;
  }

  function renderPhases(phases) {
    if (!phases || !phases.length) return "";
    return phases
      .map(
        (phase) => `
      <div class="phase-block">
        <h3>${phase.title}</h3>
        <p class="muted">${phase.summary}</p>
        ${renderCapabilityCards(phase.capabilities)}
      </div>
    `
      )
      .join("");
  }

  function renderDomainGroups(domainGroups) {
    if (!domainGroups || !domainGroups.length) return "";
    return `
      <div class="domain-grid">
        ${domainGroups
          .map(
            (group) => `
          <article class="domain-card">
            <h3>${group.title}</h3>
            <div class="cap-pill-wrap">
              ${group.capabilities
                .map(
                  (cap) => `
                <span class="cap-pill ${cap.highlight ? "highlight" : ""}">
                  <strong>${cap.code}</strong> ${cap.name}
                </span>
              `
                )
                .join("")}
            </div>
          </article>
        `
          )
          .join("")}
      </div>
    `;
  }

  const sections = page.sections
    .map((section) => {
      const chips = section.chips && section.chips.length
        ? `<div class="chips">${section.chips.map((chip) => `<span class="chip">${chip}</span>`).join("")}</div>`
        : "";
      const bullets = section.bullets && section.bullets.length
        ? `
          <ul>
            ${section.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
          </ul>
        `
        : "";
      return `
        <section class="section page-wrap">
          <h2>${section.title}</h2>
          ${bullets}
          ${renderCards(section.cards)}
          ${renderCapabilityCards(section.capabilities)}
          ${renderPhases(section.phases)}
          ${renderDomainGroups(section.domainGroups)}
          ${chips}
        </section>
      `;
    })
    .join("");

  const footer = `
    <section class="section page-wrap">
      <p class="muted">
        Internal discussion draft for executive alignment. Prepared for strategic planning conversation and pilot design.
      </p>
    </section>
  `;

  content.innerHTML = `${hero}${sections}${footer}`;
}

function init() {
  const currentFile = window.location.pathname.split("/").pop() || "index.html";
  const pageKey = document.body.getAttribute("data-page");
  renderNav(currentFile);
  renderPage(pageKey);
}

init();
