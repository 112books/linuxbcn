(function () {
  var lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  var lbImg = document.getElementById('lightbox-img');
  var closeBtn = document.getElementById('lightbox-close');
  var placeholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  var isCA = (document.documentElement.lang || 'ca').indexOf('en') !== 0;
  var lastFocus = null;

  function openLightbox(img) {
    lastFocus = document.activeElement;
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt || '';
    lightbox.classList.add('active');
    if (closeBtn) closeBtn.focus();
    else lightbox.focus();
  }

  function closeLightbox() {
    if (!lightbox.classList.contains('active')) return;
    lightbox.classList.remove('active');
    lbImg.src = placeholder;
    lbImg.alt = '';
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }

  document.querySelectorAll('.project-content img, .lightbox-trigger').forEach(function (img) {
    if (!img.hasAttribute('tabindex')) img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.setAttribute('aria-haspopup', 'dialog');
    if (!img.hasAttribute('aria-label')) {
      var alt = img.getAttribute('alt') || '';
      img.setAttribute('aria-label', alt
        ? alt + (isCA ? ' — ampliar' : ' — enlarge')
        : (isCA ? 'Ampliar imatge' : 'Enlarge image'));
    }
    img.addEventListener('click', function () { openLightbox(img); });
    img.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        openLightbox(img);
      }
    });
  });

  lightbox.addEventListener('click', function (e) {
    if (closeBtn && e.target === closeBtn) return;
    closeLightbox();
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', function () { closeLightbox(); });
  }

  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      closeLightbox();
      return;
    }
    if (e.key === 'Tab') {
      var focusables = lightbox.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (!focusables.length) {
        e.preventDefault();
        lightbox.focus();
        return;
      }
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
})();
