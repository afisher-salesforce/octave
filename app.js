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
  const heroImageClass = pageKey === "executive" ? " hero--with-image" : "";
  const hero = `
    <header class="hero${heroImageClass}">
      <div class="hero-inner page-wrap">
        <h1>${page.title}</h1>
        ${page.headline ? `<p class="headline">${page.headline}</p>` : ""}
      </div>
    </header>
  `;

  const sections = page.sections
    .map((section) => {
      const chips = section.chips && section.chips.length
        ? `<div class="chips">${section.chips.map((chip) => `<span class="chip">${chip}</span>`).join("")}</div>`
        : "";
      return `
        <section class="section page-wrap">
          <h2>${section.title}</h2>
          <ul>
            ${section.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
          </ul>
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
