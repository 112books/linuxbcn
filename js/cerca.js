(function () {
  'use strict';

  var wrap = document.querySelector('.search-wrap');
  if (!wrap) return;

  var cfg = {};
  try {
    cfg = JSON.parse(wrap.getAttribute('data-search') || '{}') || {};
  } catch (e) {
    cfg = {};
  }
  var isCA = cfg.lang === 'ca';
  var indexUrl = cfg.indexUrl || (isCA ? '/ca/index.json' : '/en/index.json');

fetch(indexUrl)
  .then(r => r.json())
  .then(data => {
    const input = document.getElementById('search-input');
    const results = document.getElementById('results');
    const hint = document.getElementById('search-hint');


    function norm(str) {
      return str ? str.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '') : '';
    }

    function highlight(text, query) {
      if (!query || !text) return text || '';
      const re = new RegExp(`(${norm(query).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      return text.replace(re, '<mark>$1</mark>');
    }

    input.addEventListener('input', function() {
      const q = norm(this.value.trim());
      results.innerHTML = '';

      if (q.length < 2) {
        hint.textContent = isCA
          ? 'Escriu per cercar entre projectes, solucions i continguts'
          : 'Type to search across projects, solutions and content';
        return;
      }

      const found = data.filter(item =>
        (item.title && norm(item.title).includes(q)) ||
        (item.summary && norm(item.summary).includes(q)) ||
        (item.section && norm(item.section).includes(q))
      );

      hint.textContent = found.length
        ? found.length + (found.length > 1
            ? (isCA ? ' resultats' : ' results')
            : (isCA ? ' resultat' : ' result'))
        : '';

      if (!found.length) {
        results.innerHTML = '<div class="no-results">' +
          (isCA ? 'Cap resultat per a aquesta cerca.' : 'No results found.') +
          '</div>';
        return;
      }

      found.forEach(item => {
        const el = document.createElement('a');
        el.href = item.url;
        el.className = 'result-item';
        el.innerHTML =
          '<div class="result-section">' + (item.section || '') + '</div>' +
          '<div class="result-title">' + highlight(item.title, this.value.trim()) + '</div>' +
          '<div class="result-summary">' + highlight(item.summary, this.value.trim()) + '</div>';
        results.appendChild(el);
      });
    });
  });
})();
