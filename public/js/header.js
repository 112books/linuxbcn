(function () {
  var header = document.querySelector('.site-header');
  var headerTop = document.querySelector('.header-top');
  if (!header) return;
  var collapseAt = headerTop ? headerTop.offsetHeight : 60;
  var expandAt = 16;
  var scrolled = false;
  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    if (!scrolled && y > collapseAt) {
      scrolled = true;
      header.classList.add('is-scrolled');
    } else if (scrolled && y < expandAt) {
      scrolled = false;
      header.classList.remove('is-scrolled');
    }
  }, { passive: true });
}());
