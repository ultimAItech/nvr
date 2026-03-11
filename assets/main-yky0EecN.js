(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();function i(){const t=window.location.pathname;return t==="/"||t.endsWith("/")||t.endsWith("index.html"),`
    <nav class="navbar">
      <div class="nav-container">
        <a href="index.html" class="brand">
          <img src="logo.png" alt="NV Rostock Logo" style="height: 40px; width: auto;" />
          <span class="brand-text">NV Rostock</span>
        </a>
        <button class="mobile-menu-btn" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="nav-links">
          <a href="verein.html" class="${t.includes("verein")?"active":""}">Verein</a>
          <a href="mitgliedschaft.html" class="${t.includes("mitgliedschaft")?"active":""}">Mitgliedschaft</a>
          <a href="vorstand.html" class="${t.includes("vorstand")?"active":""}">Vorstand</a>
          <a href="veranstaltungen.html" class="${t.includes("veranstaltungen")?"active":""}">Veranstaltungen</a>
          <a href="seemannschaft.html" class="${t.includes("seemannschaft")?"active":""}">Seemannschaft</a>
          <a href="kontakt.html" class="${t.includes("kontakt")?"active":""}">Kontakt</a>
        </div>
      </div>
    </nav>
  `}function c(){return`
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-info">
          <h3>Nautischer Verein Rostock e.V.</h3>
          <p>Treffpunkt für Seefahrende und Seefahrtbegeisterte seit 1990</p>
        </div>
        <div class="footer-links">
          <a href="kontakt.html">Kontakt</a>
          <a href="https://www.instagram.com/nautischer_verein_rostock/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Nautischer Verein Rostock e.V.</p>
      </div>
    </footer>
  `}function l(){const t=document.getElementById("global-header");t&&(t.innerHTML=i());const s=document.getElementById("global-footer");s&&(s.innerHTML=c());const o=document.querySelector(".mobile-menu-btn"),r=document.querySelector(".nav-links");o&&r&&o.addEventListener("click",()=>{r.classList.toggle("active"),o.classList.toggle("active")});const e=document.querySelector(".navbar");e&&window.addEventListener("scroll",()=>{window.scrollY>50?e.classList.add("scrolled"):e.classList.remove("scrolled")})}document.addEventListener("DOMContentLoaded",()=>{l();const t=document.querySelectorAll(".reveal"),s={threshold:.15,rootMargin:"0px 0px -50px 0px"},o=new IntersectionObserver(function(r,e){r.forEach(n=>{if(n.isIntersecting)n.target.classList.add("active"),e.unobserve(n.target);else return})},s);t.forEach(r=>{o.observe(r)})});
