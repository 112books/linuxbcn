(function() {
  var cfgData = {};
  try {
    cfgData = JSON.parse(document.getElementById('contacte-form').getAttribute('data-contacte') || '{}') || {};
  } catch (e) { cfgData = {}; }
  const isCA = cfgData.lang === 'ca';

  const MSG = isCA ? {
    tipus:    'Selecciona una opció per continuar.',
    nom:      'Escriu el teu nom.',
    email:    'Escriu un correu electrònic vàlid.',
    missatge: 'Descriu la teva situació.',
    rgpd:     'Cal acceptar la política de privacitat.',
    send:     "No hem pogut enviar la consulta. Torna-ho a provar d'aquí una estona."
  } : {
    tipus:    'Select an option to continue.',
    nom:      'Please enter your name.',
    email:    'Please enter a valid email address.',
    missatge: 'Please describe your situation.',
    rgpd:     'You must accept the privacy policy.',
    send:     "We could not send your enquiry. Please try again in a moment."
  };

  const CONFIG = isCA ? {
    'artista-music': {
      context: 'Treballem amb músics, bandes i artistes escènics des de fa anys. Alguns exemples: <strong>Bratia</strong>, <strong>Barcelona Bib Blues Band</strong>, <strong>BGKO</strong>, <strong>Ivan Kovačević</strong>. Saben el que necessiten i el que no.',
      step2title: 'Parla\'ns del teu projecte musical o artístic',
      placeholder: 'Quina mena de projecte tens? Tens web ara? Quin és el principal problema que vols resoldre?',
      checks: ['Necessito una web nova o renovada', 'Vull gestionar agenda i concerts', 'Busco integrar discografia i streaming', 'Necessito press kit o seccions tècniques', 'Vull un butlletí per als fans']
    },
    'entitat-collectiu': {
      context: 'Hem treballat amb la <strong>FAVB</strong>, <strong>Nau Bostik</strong>, <strong>Ateneu Popular 9 Barris</strong>, <strong>9 Barris Acull</strong> i molts altres col·lectius. Entenem com funcionen per dins.',
      step2title: 'Explica\'ns com funciona el vostre col·lectiu digitalment',
      placeholder: 'Quants sou? Com gestioneu ara la comunicació i la web? Quin és el principal problema que voleu resoldre?',
      checks: ['La web és difícil de gestionar', 'Depenem massa d\'eines de Google', 'Volem més sobirania digital', 'Necessitem gestió de socis o membres', 'Volem millorar la comunicació interna']
    },
    'negoci': {
      context: 'Hem acompanyat negocis com <strong>Machiroku</strong>, <strong>Hotel Peninsular</strong>, <strong>Marhaba Viatges</strong> o <strong>Family Art Tattoo</strong>. Cadascun amb les seves necessitats, cap amb una plantilla.',
      step2title: 'Explica\'ns el teu negoci i el que necessites',
      placeholder: 'A què et dediques? Tens web ara? Vols vendre en línia? Quin és el principal fre digital que tens?',
      checks: ['Necessito una web nova o renovada', 'Vull vendre en línia (e-commerce)', 'Vull unificar la meva comunicació digital', 'Necessito domini, hosting o correu professional', 'Vull deixar de dependre de plataformes externes']
    },
    'altres': {
      context: 'Si no saps ben bé on encaixes o simplement tens una pregunta, explica\'ns. Ho llegim tot i responem amb honestedat.',
      step2title: 'Explica\'ns el que necessites',
      placeholder: 'Explica\'ns la teva situació o la teva pregunta. Sense format, sense pressa.',
      checks: []
    }
  } : {
    'artista-music': {
      context: 'We\'ve worked with musicians and performing artists for years. Some examples: <strong>Bratia</strong>, <strong>Barcelona Bib Blues Band</strong>, <strong>BGKO</strong>, <strong>Ivan Kovačević</strong>. We know what they need — and what they don\'t.',
      step2title: 'Tell us about your musical or artistic project',
      placeholder: 'What kind of project do you have? Do you have a website now? What\'s the main problem you want to solve?',
      checks: ['I need a new or redesigned website', 'I want to manage gigs and concerts', 'I want to integrate discography and streaming', 'I need a press kit or technical sections', 'I want a newsletter for my fans']
    },
    'entitat-collectiu': {
      context: 'We\'ve worked with <strong>FAVB</strong>, <strong>Nau Bostik</strong>, <strong>Ateneu Popular 9 Barris</strong>, <strong>9 Barris Acull</strong> and many other collectives. We understand how they work from the inside.',
      step2title: 'Tell us how your collective manages its digital presence',
      placeholder: 'How many of you are there? How do you manage communication and the website now? What\'s the main problem you want to solve?',
      checks: ['The website is hard to manage', 'We rely too much on Google tools', 'We want more digital sovereignty', 'We need member or associate management', 'We want to improve internal communication']
    },
    'negoci': {
      context: 'We\'ve worked with businesses like <strong>Machiroku</strong>, <strong>Hotel Peninsular</strong>, <strong>Marhaba Viatges</strong> and <strong>Family Art Tattoo</strong>. Each with their own needs — no templates.',
      step2title: 'Tell us about your business and what you need',
      placeholder: 'What do you do? Do you have a website now? Do you want to sell online? What\'s your main digital obstacle?',
      checks: ['I need a new or redesigned website', 'I want to sell online (e-commerce)', 'I want to unify my digital communication', 'I need a domain, hosting or professional email', 'I want to stop depending on external platforms']
    },
    'altres': {
      context: 'If you\'re not sure where you fit or just have a question, tell us. We read everything and reply honestly.',
      step2title: 'Tell us what you need',
      placeholder: 'Tell us your situation or your question. No format required, no rush.',
      checks: []
    }
  };

  const form      = document.getElementById('contacte-form');
  const step1     = document.getElementById('step-1');
  const step2     = document.getElementById('step-2');
  const stepDone  = document.getElementById('step-done');
  const btnSeg    = document.getElementById('btn-seguent');
  const btnEnr    = document.getElementById('btn-enrere');
  const ctxEl     = document.getElementById('tipus-context');
  const s2title   = document.getElementById('step2-title');
  const textarea  = document.getElementById('missatge');
  const checksGrp = document.getElementById('checks-group');
  const checksList= document.getElementById('checks-list');
  const radios    = form.querySelectorAll('input[type="radio"]');
  const tipusFieldset = document.getElementById('tipus-fieldset');
  const nom       = document.getElementById('nom');
  const email     = document.getElementById('email');
  const rgpd      = document.getElementById('rgpd');
  const formStatus= document.getElementById('form-status');

  // Testimoni anti-spam: el servidor firma un timestamp i el JS el desa als
  // camps ocults. Sense aquest testimoni, enviar.php descarta l'enviament.
  (function carregaTestimoni() {
    const ts  = document.getElementById('form_ts');
    const sig = document.getElementById('form_sig');
    if (!ts || !sig || !form) return;
    const action = form.getAttribute('action') || '/formulari/enviar.php';
    const tokenURL = action.replace(/enviar\.php(?=($|[?#]))/, 'token.php');
    fetch(tokenURL + '?_=' + Date.now(), {
      headers: { 'Accept': 'application/json' },
      cache: 'no-store',
      credentials: 'same-origin'
    })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (d && d.t) { ts.value = String(d.t); sig.value = String(d.s || ''); }
      })
      .catch(function () {});
  })();

  let selectedTipus = null;

  function setError(field, errorId, message) {
    const el = document.getElementById(errorId);
    if (el) el.textContent = message || '';
    if (field) field.setAttribute('aria-invalid', message ? 'true' : 'false');
  }

  function clearError(field, errorId) {
    setError(field, errorId, '');
  }

  radios.forEach(r => {
    r.addEventListener('change', () => {
      form.querySelectorAll('.opcio').forEach(o => o.classList.remove('selected'));
      r.closest('.opcio').classList.add('selected');
      selectedTipus = r.value;
      btnSeg.disabled = false;
      clearError(tipusFieldset, 'tipus-error');
      const cfg = CONFIG[r.value];
      ctxEl.innerHTML = '<div class="tipus-hint">' + cfg.context + '</div>';
    });
  });

  btnSeg.addEventListener('click', () => {
    if (!selectedTipus) {
      setError(tipusFieldset, 'tipus-error', MSG.tipus);
      const firstRadio = form.querySelector('input[name="tipus"]');
      if (firstRadio) firstRadio.focus();
      return;
    }
    clearError(tipusFieldset, 'tipus-error');
    const cfg = CONFIG[selectedTipus];
    s2title.textContent = cfg.step2title;
    textarea.placeholder = cfg.placeholder;
    checksList.innerHTML = '';
    if (cfg.checks.length) {
      cfg.checks.forEach((c, i) => {
        checksList.innerHTML += '<label class="mini-check"><input type="checkbox" name="interes[]" value="' + c + '"><span>' + c + '</span></label>';
      });
    }
    checksGrp.classList.toggle('hidden', cfg.checks.length === 0);
    step1.classList.remove('active');
    step2.classList.add('active');
    s2title.focus();
  });

  btnEnr.addEventListener('click', () => {
    step2.classList.remove('active');
    step1.classList.add('active');
    btnSeg.focus();
  });

  function validEmail(value) {
    if (!value) return false;
    if (email && email.validity) return email.validity.valid;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function validate() {
    let firstInvalid = null;

    if (!selectedTipus) {
      setError(tipusFieldset, 'tipus-error', MSG.tipus);
      firstInvalid = firstInvalid || form.querySelector('input[name="tipus"]');
    } else {
      clearError(tipusFieldset, 'tipus-error');
    }

    if (!nom.value.trim()) {
      setError(nom, 'nom-error', MSG.nom);
      firstInvalid = firstInvalid || nom;
    } else {
      clearError(nom, 'nom-error');
    }

    if (!validEmail(email.value.trim())) {
      setError(email, 'email-error', MSG.email);
      firstInvalid = firstInvalid || email;
    } else {
      clearError(email, 'email-error');
    }

    if (!textarea.value.trim()) {
      setError(textarea, 'missatge-error', MSG.missatge);
      firstInvalid = firstInvalid || textarea;
    } else {
      clearError(textarea, 'missatge-error');
    }

    if (!rgpd.checked) {
      setError(rgpd, 'rgpd-error', MSG.rgpd);
      rgpd.closest('.form-check').classList.add('error');
      firstInvalid = firstInvalid || rgpd;
    } else {
      clearError(rgpd, 'rgpd-error');
      rgpd.closest('.form-check').classList.remove('error');
    }

    if (firstInvalid) {
      firstInvalid.focus();
      return false;
    }
    return true;
  }

  [nom, email, textarea].forEach(function (input) {
    input.addEventListener('input', function () {
      clearError(input, input.id + '-error');
    });
  });

  rgpd.addEventListener('change', function () {
    clearError(rgpd, 'rgpd-error');
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    formStatus.textContent = '';
    if (!validate()) return;
    const data = new FormData(form);
    fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
      .then(r => {
        if (r.ok) {
          step2.classList.remove('active');
          stepDone.classList.add('active');
          if (window.goatcounter && typeof window.goatcounter.count === 'function') {
            window.goatcounter.count({ path: '/formulari-enviat', title: 'Formulari enviat', event: true });
          }
        }
        else { formStatus.textContent = MSG.send; }
      })
      .catch(() => { formStatus.textContent = MSG.send; });
  });
})();
