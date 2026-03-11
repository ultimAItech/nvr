(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function i(){const n=window.location.pathname;return n==="/"||n.endsWith("/")||n.endsWith("index.html"),`
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
          <a href="verein.html" class="${n.includes("verein")?"active":""}">Verein</a>
          <a href="mitgliedschaft.html" class="${n.includes("mitgliedschaft")?"active":""}">Mitgliedschaft</a>
          <a href="vorstand.html" class="${n.includes("vorstand")?"active":""}">Vorstand</a>
          <a href="veranstaltungen.html" class="${n.includes("veranstaltungen")?"active":""}">Veranstaltungen</a>
          <a href="seemannschaft.html" class="${n.includes("seemannschaft")?"active":""}">Seemannschaft</a>
          <a href="kontakt.html" class="${n.includes("kontakt")?"active":""}">Kontakt</a>
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
        <p>&copy; ultimAItech 2026</p>
      </div>
    </footer>
  `}function l(){const n=document.getElementById("global-header");n&&(n.innerHTML=i());const a=document.getElementById("global-footer");a&&(a.innerHTML=c());let s=document.getElementById("site-watermark");s||(s=document.createElement("div"),s.id="site-watermark",s.textContent="ultimAItech",document.body.appendChild(s));const r=document.querySelector(".mobile-menu-btn"),e=document.querySelector(".nav-links");r&&e&&r.addEventListener("click",()=>{e.classList.toggle("active"),r.classList.toggle("active")});const t=document.querySelector(".navbar");t&&window.addEventListener("scroll",()=>{window.scrollY>50?t.classList.add("scrolled"):t.classList.remove("scrolled")})}document.addEventListener("DOMContentLoaded",()=>{l();const n=document.querySelectorAll(".reveal"),a={threshold:.15,rootMargin:"0px 0px -50px 0px"},s=new IntersectionObserver(function(r,e){r.forEach(t=>{if(t.isIntersecting)t.target.classList.add("active"),e.unobserve(t.target);else return})},a);n.forEach(r=>{s.observe(r)})});
