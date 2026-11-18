(function () {
  'use strict';

  var LANG = document.documentElement.lang || 'ca';
  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var i18n = {
    ca: {
      msg:    'Pàgina no trobada',
      detail: 'error: aquesta ruta no existeix al sistema',
      typing: 'cd / && ls -la',
      home:   '← inici',
      back:   '↩ tornar',
      scare:  'root@linuxbcn'
    },
    en: {
      msg:    'Page not found',
      detail: 'error: this path does not exist on the system',
      typing: 'cd / && ls -la',
      home:   '← home',
      back:   '↩ back',
      scare:  'root@linuxbcn'
    }
  };

  var typingTimer = null;

  function applyLang(lang) {
    var t = i18n[lang] || i18n['ca'];
    document.getElementById('lbcn-error-msg').textContent      = t.msg;
    document.getElementById('lbcn-detail-text').textContent    = t.detail;
    document.getElementById('lbcn-btn-home').textContent       = t.home;
    document.getElementById('lbcn-btn-back').textContent       = t.back;
    document.getElementById('lbcn-scare-label').textContent    = t.scare;
    startTyping(t.typing);
  }

  function startTyping(str) {
    clearInterval(typingTimer);
    var el = document.getElementById('lbcn-typed');
    if (reduceMotion) { el.textContent = str; return; }
    el.textContent = '';
    var i = 0;
    typingTimer = setInterval(function () {
      if (i < str.length) { el.textContent += str[i++]; }
      else { clearInterval(typingTimer); }
    }, 75);
  }

  window.lbcnSetLang = function (lang) {
    LANG = lang;
    document.querySelectorAll('.lbcn-lang-btn').forEach(function (b) {
      b.classList.toggle('lbcn-active', b.textContent.toLowerCase() === lang);
    });
    applyLang(lang);
  };

  document.querySelectorAll('.lbcn-lang-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      window.lbcnSetLang(b.getAttribute('data-lang'));
    });
  });

  /* ── Matrix canvas ── */
  var canvas  = document.getElementById('lbcn-canvas');
  var ctx     = canvas.getContext('2d');
  var fontSize = 13;
  var cols, drops;

  var chars = ('$ ls -la grep sudo chmod apt git commit push pull' +
    ' init bash ./run make kernel panic EOF NULL >> | & # ! 0 1' +
    ' ~ / \\ {} [] <> root dev null tmp var etc usr bin').split('');

  function resizeCanvas() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    cols  = Math.floor(canvas.width / fontSize);
    drops = Array.from({ length: cols }, function () {
      return Math.random() * -60;
    });
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function drawMatrix() {
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = fontSize + 'px Courier New';
    drops.forEach(function (y, i) {
      var ch  = chars[Math.floor(Math.random() * chars.length)];
      var x   = i * fontSize;
      var pct = (y * fontSize) / canvas.height;
      if (pct > 0.82) {
        ctx.fillStyle = '#d4600a';
      } else if (Math.random() > 0.97) {
        ctx.fillStyle = '#cccccc';
      } else {
        var g = Math.floor(70 + Math.random() * 185);
        ctx.fillStyle = 'rgb(0,' + g + ',18)';
      }
      ctx.fillText(ch, x, y * fontSize);
      if (y * fontSize > canvas.height && Math.random() > 0.974) drops[i] = 0;
      else drops[i] += 0.45;
    });
  }

  /* ── Seqüència d'entrada ── */
  applyLang(LANG);
  if (reduceMotion) {
    drawMatrix();
  } else {
    setInterval(drawMatrix, 38);
  }

  var scare   = document.getElementById('lbcn-scare');
  var glitch  = document.getElementById('lbcn-glitch');
  var content = document.getElementById('lbcn-content');

  if (reduceMotion) {
    scare.style.display = 'none';
    content.classList.add('lbcn-visible');
  } else {
  setTimeout(function () {
    /* glitch flash */
    glitch.style.opacity = '0.65';
    setTimeout(function () { glitch.style.opacity = '0'; }, 55);
    setTimeout(function () { glitch.style.opacity = '0.35'; }, 95);
    setTimeout(function () {
      glitch.style.opacity = '0';
      /* apareix la foto */
      scare.classList.add('lbcn-visible');
      setTimeout(function () {
        /* exit susto → entra contingut */
        scare.classList.remove('lbcn-visible');
        scare.classList.add('lbcn-exit');
        setTimeout(function () {
          scare.style.display = 'none';
          content.classList.add('lbcn-visible');
        }, 580);
      }, 1900);
    }, 130);
  }, 2500);
  }

  var backBtn = document.getElementById('lbcn-btn-back');
  if (backBtn) {
    backBtn.addEventListener('click', function () { history.back(); });
  }
}());
