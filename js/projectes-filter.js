(function () {
  'use strict';

  var btns = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('#projects-grid .project-card');

  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');

      btns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      cards.forEach(function (card) {
        var serveis = card.getAttribute('data-serveis') || '';
        var show = filter === '*' || serveis.split(' ').indexOf(filter) !== -1;
        card.classList.toggle('hidden', !show);
      });
    });
  });
})();
