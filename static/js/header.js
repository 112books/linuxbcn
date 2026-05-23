(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', function () {
    header.classList.toggle('is-scrolled', window.scrollY > 20);
  }, { passive: true });
}());
