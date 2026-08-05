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
  const groupOrder = ["Overview", "Vignettes", "Architecture", "Appendix"];

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

function pageHrefForKey(pageKey) {
  const entry = window.OCTAVE_NAV.find((item) => item.href === "index.html" && pageKey === "executive");
  if (entry) return "index.html";
  const pageMap = {
    journey: "journey.html",
    research: "external-research.html",
    v1: "vignette-1.html",
    v2: "vignette-2.html",
    v3: "vignette-3.html",
    v4: "vignette-4.html",
    v5: "vignette-5.html",
    capability: "capability-map.html",
    salesforce: "salesforce-summary.html",
    fls: "forward-looking-statement.html"
  };
  return pageMap[pageKey] || "index.html";
}

function buildCapabilityIndex() {
  const entries = [];
  Object.entries(window.OCTAVE_PAGES).forEach(([pageKey, page]) => {
    const pageHref = pageHrefForKey(pageKey);
    const pageTitle = page.title;
    (page.sections || []).forEach((section) => {
      (section.capabilities || []).forEach((cap) => {
        entries.push({
          code: cap.code || "",
          name: cap.name || "",
          description: cap.body || "",
          location: `${pageTitle} — ${section.title}`,
          href: pageHref
        });
      });
      (section.domainGroups || []).forEach((group) => {
        (group.capabilities || []).forEach((cap) => {
          entries.push({
            code: cap.code || "",
            name: cap.name || "",
            description: `${group.title} domain capability`,
            location: `${pageTitle} — ${group.title}`,
            href: pageHref
          });
        });
      });
    });
  });
  return entries;
}

function installNavTools(currentHref) {
  const sidebar = document.querySelector(".sidebar");
  if (!sidebar || document.getElementById("nav-tools")) return;

  if (!document.getElementById("global-nav-toggle")) {
    const globalToggle = document.createElement("button");
    globalToggle.id = "global-nav-toggle";
    globalToggle.className = "global-nav-toggle";
    globalToggle.type = "button";
    globalToggle.textContent = "Hide Navigation";
    document.body.appendChild(globalToggle);
  }

  const tools = document.createElement("div");
  tools.id = "nav-tools";
  tools.innerHTML = `
    <button id="toggle-nav" class="nav-toggle" type="button" aria-expanded="true">Hide Navigation</button>
    <label class="search-label" for="capability-search">Capability Search</label>
    <input id="capability-search" class="search-input" type="search" placeholder="Search code, name, description, location" />
    <div id="search-results" class="search-results"></div>
  `;

  const nav = document.getElementById("sidebar-nav");
  nav.before(tools);

  const body = document.body;
  const collapseKey = "octave-nav-collapsed";
  const toggleButton = document.getElementById("toggle-nav");
  const globalToggle = document.getElementById("global-nav-toggle");

  function syncButtons(isCollapsed) {
    const label = isCollapsed ? "Show Navigation" : "Hide Navigation";
    toggleButton.textContent = label;
    toggleButton.setAttribute("aria-expanded", String(!isCollapsed));
    if (globalToggle) {
      globalToggle.textContent = label;
      globalToggle.setAttribute("aria-expanded", String(!isCollapsed));
    }
  }

  const collapsed = localStorage.getItem(collapseKey) === "true";
  if (collapsed) body.classList.add("nav-collapsed");
  syncButtons(collapsed);

  toggleButton.addEventListener("click", () => {
    const isCollapsed = body.classList.toggle("nav-collapsed");
    localStorage.setItem(collapseKey, String(isCollapsed));
    syncButtons(isCollapsed);
  });

  if (globalToggle) {
    globalToggle.addEventListener("click", () => {
      const isCollapsed = body.classList.toggle("nav-collapsed");
      localStorage.setItem(collapseKey, String(isCollapsed));
      syncButtons(isCollapsed);
    });
  }

  const index = buildCapabilityIndex();
  const input = document.getElementById("capability-search");
  const results = document.getElementById("search-results");

  function renderResults(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      results.innerHTML = "";
      return;
    }
    const matches = index.filter((item) => {
      return (
        item.code.toLowerCase().includes(q) ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q)
      );
    }).slice(0, 8);

    if (!matches.length) {
      results.innerHTML = `<p class="search-empty">No matching capabilities</p>`;
      return;
    }

    results.innerHTML = matches.map((match) => {
      const active = currentHref === match.href ? "active" : "";
      return `
        <a class="search-result ${active}" href="${match.href}">
          <span class="result-code">${match.code}</span>
          <span class="result-name">${match.name}</span>
          <span class="result-location">${match.location}</span>
        </a>
      `;
    }).join("");
  }

  input.addEventListener("input", (event) => renderResults(event.target.value));
}

function renderPage(pageKey) {
  const page = window.OCTAVE_PAGES[pageKey];
  if (!page) return;

  document.title = page.title;
  const content = document.getElementById("content");
  const heroClass = page.showHero ? "hero hero--with-image" : "hero hero-compact";
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

  function renderImage(section) {
    if (!section.imagePath) return "";
    return `
      <figure class="journey-figure">
        <img src="${section.imagePath}" alt="${section.imageAlt || "Journey visual"}" class="journey-image" />
      </figure>
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
          ${renderImage(section)}
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
  installNavTools(currentFile);
  renderNav(currentFile);
  renderPage(pageKey);
}

init();
