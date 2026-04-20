// =============================================
// LUMORA — LANDING PAGE SCRIPTS
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- MOBILE MENU ----
  const burger = document.querySelector('.nav__burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-menu a');

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    burger.classList.toggle('open');
  });
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      burger.classList.remove('open');
    });
  });

  // ---- BILLING TOGGLE ----
  const toggle = document.getElementById('billing-toggle');
  const monthlyLabel = document.getElementById('monthly-label');
  const annualLabel = document.getElementById('annual-label');
  const amounts = document.querySelectorAll('.plan__amount');
  let isAnnual = false;

  toggle.addEventListener('click', () => {
    isAnnual = !isAnnual;
    toggle.classList.toggle('annual', isAnnual);
    monthlyLabel.classList.toggle('active', !isAnnual);
    annualLabel.classList.toggle('active', isAnnual);

    amounts.forEach(el => {
      const val = isAnnual ? el.dataset.annual : el.dataset.monthly;
      el.textContent = val;
    });
  });

  // ---- NAV SCROLL EFFECT ----
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(6,6,10,0.95)';
    } else {
      nav.style.background = 'rgba(6,6,10,0.7)';
    }
  });

  // ---- SCROLL REVEAL ----
  const revealEls = document.querySelectorAll(
    '.feature-card, .step, .tcard, .plan, .section-title, .section-tag'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.55s ${i * 0.07}s ease, transform 0.55s ${i * 0.07}s ease`;
    observer.observe(el);
  });

  // ---- SMOOTH SCROLL HINT CLICK ----
  const scrollHint = document.querySelector('.hero__scroll-hint');
  if (scrollHint) {
    scrollHint.addEventListener('click', () => {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
    });
    scrollHint.style.cursor = 'pointer';
  }

});
