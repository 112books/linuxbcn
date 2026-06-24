(function () {
  var bar = document.getElementById('scroll-progress');
  var btn = document.getElementById('back-to-top');
  var ring = document.getElementById('btt-ring');
  var circumference = ring ? parseFloat(ring.getAttribute('data-c')) : 0;

  function update() {
    var scrolled = window.scrollY;
    var total = document.documentElement.scrollHeight - window.innerHeight;
    var pct = total > 0 ? scrolled / total : 0;

    if (bar) bar.style.width = (pct * 100) + '%';

    if (ring) {
      ring.style.strokeDashoffset = circumference * (1 - pct);
    }

    if (btn) btn.classList.toggle('visible', scrolled > 300);
  }

  window.addEventListener('scroll', update, { passive: true });
  update();

  if (btn) {
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
