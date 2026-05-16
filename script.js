// Placeholder for interactive behavior (hamburger menu, carousel, validation)

if (typeof window.setLanguage !== 'function') {
  window.setLanguage = (lang) => {
    const targets = {
      en: '/',
      pl: '/pl/',
    };
    const destination = targets[lang] || targets.en;
    const url = destination.startsWith('http')
      ? destination
      : new URL(destination, window.location.href).toString();
    window.location.href = url;
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const navToggleButton = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('#primary-menu');
  const scrollToTarget = (target, behavior = 'smooth') => {
    if (!target) {
      return;
    }

    const { scrollHeight, clientHeight } = document.documentElement;
    const maxScrollTop = Math.max(0, scrollHeight - clientHeight);
    const rectTop = target.getBoundingClientRect().top + window.scrollY;
    const styles = window.getComputedStyle(target);
    const scrollMarginTop = parseFloat(styles.scrollMarginTop || '0');
    const targetTop = rectTop - (Number.isFinite(scrollMarginTop) ? scrollMarginTop : 0);
    const constrainedTop = Math.max(0, Math.min(targetTop, maxScrollTop));

    window.scrollTo({ top: constrainedTop, behavior });
  };

  if (navToggleButton && navMenu) {
    navToggleButton.addEventListener('click', () => {
      const expanded = navToggleButton.getAttribute('aria-expanded') === 'true';
      navToggleButton.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('open');
    });

    // Close menu on link click (mobile UX)
    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navToggleButton.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
      });
    });
  }

  const skipLink = document.querySelector('.skip-link');
  if (skipLink) {
    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = skipLink.getAttribute('href');
      if (targetId && targetId.length > 1) {
        const el = document.querySelector(targetId);
        if (el) {
          scrollToTarget(el, 'auto');
          window.requestAnimationFrame(() => {
            el.focus({ preventScroll: true });
          });
        }
      }
    });
  }

  // Smooth scroll while leaving the URL untouched for navbar and footer quick links
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]:not(.skip-link)');
  smoothScrollLinks.forEach((a) => {
    const targetId = a.getAttribute('href');
    if (targetId && targetId.length > 1) {
      const el = document.querySelector(targetId);
      if (el) {
        a.addEventListener('click', (e) => {
          e.preventDefault();
          scrollToTarget(el, 'smooth');
        });
      }
    }
  });

  if (window.location.hash) {
    const hashTarget = document.querySelector(window.location.hash);
    if (hashTarget) {
      window.requestAnimationFrame(() => {
        scrollToTarget(hashTarget, 'auto');
      });
    }
  }

  // Accessible client-side validation feedback
  const form = document.querySelector('#contact-form');
  if (form) {
    const fields = Array.from(form.querySelectorAll('[data-label]'));
    const summary = form.querySelector('[data-error-summary]');
    const summaryMessage = 'Please correct the highlighted fields and try again.';

    const setSummary = (message) => {
      if (!summary) {
        return;
      }
      if (message) {
        summary.textContent = message;
        summary.hidden = false;
      } else {
        summary.textContent = '';
        summary.hidden = true;
      }
    };

    const fieldErrorEl = (field) => {
      if (!field.id) {
        return null;
      }
      return form.querySelector(`#${field.id}-error`);
    };

    const getFieldError = (field) => {
      const label = field.dataset.label || field.getAttribute('aria-label') || field.name || 'This field';
      if (field.type === 'checkbox') {
        return field.checked ? '' : `${label} is required.`;
      }

      const value = typeof field.value === 'string' ? field.value.trim() : '';
      if (!value) {
        return `${label} is required.`;
      }

      if (field.type === 'email') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          return 'Enter a valid email address.';
        }
      }

      return '';
    };

    const showFieldError = (field, message) => {
      field.setAttribute('aria-invalid', 'true');
      const errorNode = fieldErrorEl(field);
      if (errorNode) {
        errorNode.textContent = message;
        errorNode.hidden = false;
      }
    };

    const clearFieldError = (field) => {
      field.removeAttribute('aria-invalid');
      const errorNode = fieldErrorEl(field);
      if (errorNode) {
        errorNode.textContent = '';
        errorNode.hidden = true;
      }
    };

    const hasInvalidFields = () => fields.some((input) => input.getAttribute('aria-invalid') === 'true');

    const validateField = (field) => {
      const message = getFieldError(field);
      if (message) {
        showFieldError(field, message);
        return false;
      }
      clearFieldError(field);
      return true;
    };

    const handleRealtimeValidation = (field) => {
      const isValid = validateField(field);
      if (!isValid) {
        setSummary(summaryMessage);
      } else if (!hasInvalidFields()) {
        setSummary('');
      }
    };

    // Validation should trigger only on submit; no realtime validation listeners

    form.addEventListener('submit', (event) => {
      const invalidFields = fields.filter((field) => !validateField(field));
      if (invalidFields.length) {
        event.preventDefault();
        setSummary(summaryMessage);
        invalidFields[0].focus();
      } else {
        setSummary('');
      }
    });

    setSummary('');
  }

  // Equalize pillar titles only on multi-column layouts (desktop/tablet)
  const equalizePillarTitles = () => {
    const grid = document.querySelector('.pillars-grid');
    if (!grid) {
      return;
    }
    const titles = Array.from(grid.querySelectorAll('.pillar-card-title'));
    if (!titles.length) {
      return;
    }
    // Detect if grid is single column using computed style
    const computed = window.getComputedStyle(grid);
    const isSingleColumn = computed.gridTemplateColumns && computed.gridTemplateColumns.split(' ').length <= 1;

    if (isSingleColumn) {
      document.documentElement.style.setProperty('--title-equal-height', 'auto');
      return;
    }

    // Reset any inline heights to measure natural sizes
    titles.forEach((t) => (t.style.minHeight = ''));
    const tallest = titles.reduce((max, t) => Math.max(max, t.getBoundingClientRect().height), 0);
    if (tallest > 0) {
      document.documentElement.style.setProperty('--title-equal-height', `${Math.ceil(tallest)}px`);
    }
  };

  // Run after load and on resize; debounce resize for performance
  equalizePillarTitles();
  let resizeTimer;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(equalizePillarTitles, 120);
  });
});

