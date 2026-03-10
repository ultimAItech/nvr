export function renderNavbar() {
  const currentPath = window.location.pathname;
  const isHome = currentPath === '/' || currentPath === '/index.html';

  return `
    <nav class="navbar">
      <div class="nav-container">
        <a href="/" class="brand">
          <img src="/logo.png" alt="NV Rostock Logo" style="height: 40px; width: auto;" />
          <span class="brand-text">NV Rostock</span>
        </a>
        <button class="mobile-menu-btn" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="nav-links">
          <a href="/verein.html" class="${currentPath.includes('verein') ? 'active' : ''}">Verein</a>
          <a href="/mitgliedschaft.html" class="${currentPath.includes('mitgliedschaft') ? 'active' : ''}">Mitgliedschaft</a>
          <a href="/vorstand.html" class="${currentPath.includes('vorstand') ? 'active' : ''}">Vorstand</a>
          <a href="/veranstaltungen.html" class="${currentPath.includes('veranstaltungen') ? 'active' : ''}">Veranstaltungen</a>
          <a href="/seemannschaft.html" class="${currentPath.includes('seemannschaft') ? 'active' : ''}">Seemannschaft</a>
          <a href="/kontakt.html" class="${currentPath.includes('kontakt') ? 'active' : ''}">Kontakt</a>
        </div>
      </div>
    </nav>
  `;
}

export function renderFooter() {
  return `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-info">
          <h3>Nautischer Verein Rostock e.V.</h3>
          <p>Treffpunkt für Seefahrende und Seefahrtbegeisterte seit 1990</p>
        </div>
        <div class="footer-links">
          <a href="/kontakt.html">Kontakt</a>
          <a href="https://www.instagram.com/nautischer_verein_rostock/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Nautischer Verein Rostock e.V.</p>
      </div>
    </footer>
  `;
}

export function initComponents() {
  const header = document.getElementById('global-header');
  if (header) {
    header.innerHTML = renderNavbar();
  }

  const footer = document.getElementById('global-footer');
  if (footer) {
    footer.innerHTML = renderFooter();
  }

  // Mobile menu logic
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileBtn.classList.toggle('active');
    });
  }

  // Scroll effect on navbar
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
}
