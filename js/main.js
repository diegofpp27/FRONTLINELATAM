// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const closeBtn = document.querySelector('.mobile-nav-close');
  const mobileNav = document.querySelector('.mobile-nav');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => mobileNav.classList.add('open'));
  }
  if (closeBtn && mobileNav) {
    closeBtn.addEventListener('click', () => mobileNav.classList.remove('open'));
  }
  document.querySelectorAll('.mobile-nav a').forEach(a => {
    a.addEventListener('click', () => mobileNav.classList.remove('open'));
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  // Contact form -> WhatsApp handoff (no backend required)
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#f-name').value.trim();
      const company = form.querySelector('#f-company').value.trim();
      const service = form.querySelector('#f-service').value;
      const message = form.querySelector('#f-message').value.trim();

      const lines = [
        `Hola Frontline Latam, mi nombre es ${name}.`,
        company ? `Empresa: ${company}` : null,
        service ? `Interés: ${service}` : null,
        message ? `Mensaje: ${message}` : null
      ].filter(Boolean);

      const text = encodeURIComponent(lines.join('\n'));
      const waNumber = '593999288710';
      window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');

      const success = document.querySelector('.form-success');
      if (success) {
        success.classList.add('visible');
        form.reset();
      }
    });
  }

  // Catalogue filter chips (only present on services page)
  const chips = document.querySelectorAll('.filter-chip');
  if (chips.length) {
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const target = chip.getAttribute('data-target');
        if (target) {
          const el = document.querySelector(target);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // Header background intensifies on scroll
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) header.style.background = 'rgba(22, 31, 32, 0.95)';
      else header.style.background = 'rgba(28, 39, 40, 0.82)';
    });
  }

  // Hero shield rotates gently with scroll position
  const heroShield = document.querySelector('#hero-shield');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (heroShield && !prefersReducedMotion) {
    let ticking = false;
    const updateShield = () => {
      const angle = window.scrollY * 0.08;
      heroShield.style.transform = `translateY(-50%) rotate(${angle}deg)`;
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateShield);
        ticking = true;
      }
    });
  }
});
