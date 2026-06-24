(function () {
  var bar = document.getElementById('scroll-progress');
  var btn = document.getElementById('back-to-top');
  if (!bar && !btn) return;

  function update() {
    var scrolled = window.scrollY;
    var total = document.documentElement.scrollHeight - window.innerHeight;
    var pct = total > 0 ? (scrolled / total) * 100 : 0;
    if (bar) bar.style.width = pct + '%';
    if (btn) btn.classList.toggle('visible', scrolled > 400);
  }

  window.addEventListener('scroll', update, { passive: true });
  update();

  if (btn) {
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
