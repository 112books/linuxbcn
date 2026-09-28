/* ═══════════════════════════════════════════════════════════
   CONFIG
═══════════════════════════════════════════════════════════ */
const CACHE_URL   = 'analytics-cache.json';
const FETCH_URL   = 'fetch-analytics.php';
const SECTION_NAMES = {
  inici: 'Inici', projectes: 'Projectes', solucions: 'Solucions',
  'com-treballem': 'Com treballem', 'qui-som': 'Qui som',
  contacte: 'Contacte', serveis: 'Serveis', admin: '(admin)',
};
const BROWSER_ICON = {
  chrome:'🟡', chromium:'🟡', firefox:'🦊', safari:'🔵',
  edge:'🔷', opera:'🔴', samsung:'📱', brave:'🦁', vivaldi:'🔴', ie:'🔵',
};
const OS_ICON = {
  windows:'🪟', macos:'🍎', mac:'🍎', linux:'🐧',
  android:'🤖', ios:'📱', iphone:'📱', ipad:'📱',
  chromeos:'🟡', ubuntu:'🐧', debian:'🐧',
};

let globalData = null;
let visitsChart = null;
let chartPeriodDays = 7;
let chartGroup = 'day';
const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ═══════════════════════════════════════════════════════════
   AUTH
   L'accés està protegit pel servidor (HTTP Basic Auth a /admin/).
   No hi ha cap contrasenya al costat client.
═══════════════════════════════════════════════════════════ */
document.getElementById('btn-logout').addEventListener('click', () => {
  location.reload();
});

showDashboard();

function showDashboard() {
  document.getElementById('dashboard').style.display = 'block';
  document.getElementById('dash-main').focus();
  loadCache();
}

/* ═══════════════════════════════════════════════════════════
   TABS
═══════════════════════════════════════════════════════════ */
const tabButtons = Array.from(document.querySelectorAll('.tab-btn'));

function showTab(id, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  tabButtons.forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
    b.tabIndex = -1;
  });
  document.getElementById('tab-' + id).classList.add('active');
  btn.classList.add('active');
  btn.setAttribute('aria-selected', 'true');
  btn.tabIndex = 0;
}

tabButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => showTab(btn.dataset.tab, btn));
  btn.addEventListener('keydown', event => {
    let target = null;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') target = (index + 1) % tabButtons.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') target = (index - 1 + tabButtons.length) % tabButtons.length;
    else if (event.key === 'Home') target = 0;
    else if (event.key === 'End') target = tabButtons.length - 1;
    if (target === null) return;
    event.preventDefault();
    const next = tabButtons[target];
    next.focus();
    showTab(next.dataset.tab, next);
  });
});

/* ═══════════════════════════════════════════════════════════
   CHART CONTROLS
═══════════════════════════════════════════════════════════ */
document.querySelectorAll('.period-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    chartPeriodDays = parseInt(btn.dataset.days, 10);
    document.querySelectorAll('.period-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    if (globalData) renderChart(globalData);
  });
});
document.querySelectorAll('.group-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    chartGroup = btn.dataset.group;
    document.querySelectorAll('.group-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    if (globalData) renderChart(globalData);
  });
});

/* ═══════════════════════════════════════════════════════════
   DADES: CARREGA CACHE
═══════════════════════════════════════════════════════════ */
async function loadCache() {
  setBanner('loading', 'carregant estadístiques…');
  try {
    const r = await fetch(CACHE_URL + '?t=' + Date.now());
    if (!r.ok) throw new Error('cache_missing');
    const data = await r.json();
    globalData = data;
    clearBanner();
    renderAll(data);
  } catch (e) {
    if (e.message === 'cache_missing') {
      setBanner('empty',
        'Encara no hi ha dades en caché. ' +
        'Fes clic a <strong>"↻ actualitzar"</strong> per generar les estadístiques per primera vegada.'
      );
    } else {
      setBanner('error', 'Error carregant les dades: ' + esc(e.message));
    }
    setTopbarGen(null);
  }
}

/* ═══════════════════════════════════════════════════════════
   REFRESH: crida PHP → genera cache → recarrega
═══════════════════════════════════════════════════════════ */
document.getElementById('btn-refresh').addEventListener('click', async () => {
  const btn = document.getElementById('btn-refresh');
  const btnLabel = document.getElementById('btn-refresh-label');
  btnLabel.textContent = 'actualitzant…';
  btn.setAttribute('aria-busy', 'true');
  btn.classList.add('loading');
  clearBanner();
  setBanner('loading', 'Obtenint dades de GoatCounter… (~5 segons)');
  try {
    const r = await fetch(FETCH_URL + '?t=' + Date.now());
    const result = await r.json();
    if (!r.ok || result.error) throw new Error(result.error || 'Error al servidor');
    clearBanner();
    await loadCache();
  } catch (e) {
    setBanner('error',
      'Error actualitzant les dades: ' + esc(e.message) +
      '. Comprova que el servidor té PHP i permisos d\'escriptura a /admin/.'
    );
  } finally {
    btnLabel.textContent = 'actualitzar';
    btn.removeAttribute('aria-busy');
    btn.classList.remove('loading');
  }
});

/* ═══════════════════════════════════════════════════════════
   RENDERITZACIÓ PRINCIPAL
═══════════════════════════════════════════════════════════ */
function _renderAllBase(data) {
  const today   = isoToday();
  const hbd     = data.hits_by_day || [];

  // KPIs calculats a client des de hits_by_day
  const avui  = sumDays(hbd, today, today);
  const set7  = sumDays(hbd, daysAgo(7), today);
  const mes30 = sumDays(hbd, daysAgo(30), today);
  const total = data.total || 0;
  const p     = data.period || {};

  setText('kpi-avui',  fmt(avui));
  setText('sub-avui',  avui === 1 ? '1 visita' : fmt(avui) + ' visites');
  setText('kpi-7d',    fmt(set7));
  setText('kpi-30d',   fmt(mes30));
  setText('kpi-total', fmt(total));
  setText('sub-total', p.start && p.end ? fmtPeriod(p.start, p.end) : '');

  const daysWithData = hbd.filter(d => d.count > 0).length;
  setText('kpi-pps', daysWithData > 0 ? (total / daysWithData).toFixed(1) : '—');

  setTopbarGen(data.generated);

  // Advertència si el cache té més de 24 hores
  if (data.generated) {
    const age = (Date.now() - new Date(data.generated).getTime()) / 3600000;
    if (age > 24) {
      setBanner('error',
        `⚠ Les dades tenen ${Math.round(age)} hores d'antiguitat (cache del ${new Date(data.generated).toLocaleDateString('ca-ES')}). ` +
        `Prem <strong>↻ actualitzar</strong> per obtenir dades actuals.`
      );
    }
  }

  renderChart(data);
  renderLang(data);
  renderSections(data);
  renderPages(data);
  renderProjects(data);
  renderRefs(data);
  renderLocations(data);
  renderDevices(data);
  renderBrowsersSystems(data);

  // Animació de les barres (amb un tick de retard per al transition CSS)
  requestAnimationFrame(() => {
    document.querySelectorAll('[data-bar-w]').forEach(el => {
      el.style.width = el.dataset.barW + '%';
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   CHART.JS
═══════════════════════════════════════════════════════════ */
function renderChart(data) {
  if (typeof Chart === 'undefined') return;

  const hbd    = data.hits_by_day || [];
  const cutoff = daysAgo(chartPeriodDays);
  const filtered = hbd.filter(d => d.date >= cutoff);
  const grouped  = groupHits(filtered, chartGroup);
  const labels   = grouped.map(g => g.label);
  const values   = grouped.map(g => g.count);

  if (visitsChart) {
    visitsChart.data.labels = labels;
    visitsChart.data.datasets[0].data = values;
    visitsChart.update();
  } else {
    const ctx = document.getElementById('chart-canvas').getContext('2d');
    Chart.defaults.color = '#6b6b66';
    Chart.defaults.font.family = "'IBM Plex Mono', 'Courier New', monospace";
    Chart.defaults.font.size = 10;

    visitsChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'Visites',
          data: values,
          borderColor: '#b04d06',
          backgroundColor: ctx2 => {
            const g = ctx2.chart.ctx.createLinearGradient(0, 0, 0, ctx2.chart.height);
            g.addColorStop(0, 'rgba(176,77,6,0.18)');
            g.addColorStop(1, 'rgba(176,77,6,0.01)');
            return g;
          },
          fill: true,
          tension: 0.3,
          pointRadius: values.length > 60 ? 0 : 3,
          pointHoverRadius: 5,
          pointBackgroundColor: '#b04d06',
          borderWidth: 1.5,
        }],
      },
      options: {
        responsive: true,
        animation: prefersReducedMotion ? false : undefined,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        scales: {
          x: {
            grid: { color: 'rgba(17,17,16,0.05)' },
            ticks: { color: '#6b6b66', maxTicksLimit: 10, font: { size: 10 } },
            border: { color: 'rgba(17,17,16,0.12)' },
          },
          y: {
            grid: { color: 'rgba(17,17,16,0.05)' },
            ticks: { color: '#6b6b66', font: { size: 10 } },
            border: { color: 'rgba(17,17,16,0.12)' },
            beginAtZero: true,
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#f5f4f0',
            borderColor: '#ddddd8',
            borderWidth: 1,
            titleColor: '#111110',
            bodyColor: '#6b6b66',
            padding: 10,
            callbacks: {
              label: ctx3 => ' ' + ctx3.parsed.y.toLocaleString('ca') + ' visites',
            },
          },
        },
      },
    });
  }

  updateChartSummary(grouped);
}

function updateChartSummary(grouped) {
  const canvas = document.getElementById('chart-canvas');
  if (!grouped || !grouped.length) {
    setText('chart-summary', '');
    if (canvas) canvas.setAttribute('aria-label', 'Gràfic de visites sense dades per a aquest període.');
    return;
  }
  const total = grouped.reduce((s, g) => s + g.count, 0);
  const max   = grouped.reduce((a, b) => a.count > b.count ? a : b);
  const avg   = Math.round(total / grouped.length);
  const lbl   = chartGroup === 'day' ? 'dia' : chartGroup === 'week' ? 'setmana' : 'mes';
  document.getElementById('chart-summary').innerHTML =
    `Total: <strong>${fmt(total)}</strong> · ` +
    `Mitjana/${lbl}: <strong>${fmt(avg)}</strong> · ` +
    `Pic: <span class="accent">${fmt(max.count)}</span> (${esc(max.label)})`;
  if (canvas) canvas.setAttribute('aria-label',
    `Gràfic de visites. Total ${fmt(total)}, mitjana ${fmt(avg)} per ${lbl}, pic de ${fmt(max.count)} el ${esc(max.label)}.`);
}

function groupHits(days, groupBy) {
  if (groupBy === 'day') {
    return days.map(d => ({ label: fmtDateShort(d.date), count: d.count }));
  }
  const buckets = {};
  days.forEach(d => {
    let key;
    if (groupBy === 'week') {
      const dt  = new Date(d.date + 'T12:00:00');
      const mon = new Date(dt);
      mon.setDate(dt.getDate() - ((dt.getDay() + 6) % 7));
      key = mon.toISOString().slice(0, 10);
    } else {
      key = d.date.slice(0, 7);
    }
    buckets[key] = (buckets[key] || 0) + d.count;
  });
  return Object.keys(buckets).sort().map(k => ({
    label: groupBy === 'week' ? 'S. ' + fmtDateShort(k) : fmtMonth(k),
    count: buckets[k],
  }));
}

/* ═══════════════════════════════════════════════════════════
   RENDERS: PÀGINES TAB
═══════════════════════════════════════════════════════════ */
function renderLang(data) {
  const el = document.getElementById('lang-wrap');
  const by_lang = data.by_lang || {};
  const total = Object.values(by_lang).reduce((s, v) => s + v, 0);
  if (!total) { el.innerHTML = '<span class="empty">sense dades</span>'; return; }

  const ca = by_lang.ca || 0;
  const en = by_lang.en || 0;
  const es = by_lang.es || 0;
  const caPct = Math.round(ca / total * 100);
  const enPct = Math.round(en / total * 100);
  const esPct = 100 - caPct - enPct;

  el.innerHTML = `
    <div class="lang-bar" aria-hidden="true">
      ${caPct > 0 ? `<div class="lang-seg lang-ca" style="width:${caPct}%">${caPct > 8 ? 'CA ' + caPct + '%' : ''}</div>` : ''}
      ${enPct > 0 ? `<div class="lang-seg lang-en" style="width:${enPct}%">${enPct > 8 ? 'EN ' + enPct + '%' : ''}</div>` : ''}
      ${esPct > 0 ? `<div class="lang-seg lang-es" style="width:${esPct}%">${esPct > 8 ? 'ES ' + esPct + '%' : ''}</div>` : ''}
    </div>
    <div class="lang-detail">
      ${ca > 0 ? `<span>Català: ${fmt(ca)}</span>` : ''}
      ${en > 0 ? `<span>Anglès: ${fmt(en)}</span>` : ''}
      ${es > 0 ? `<span>Castellà: ${fmt(es)}</span>` : ''}
    </div>`;
}

function renderSections(data) {
  const sections = data.by_section || {};
  const items = Object.entries(sections)
    .filter(([k]) => k !== 'admin')
    .map(([k, v]) => ({ name: SECTION_NAMES[k] || k, count: v }))
    .sort((a, b) => b.count - a.count);
  renderBars('sections-wrap', items, 'name');
}

function renderPages(data) {
  const hits = (data.hits || []).slice(0, 10);
  const items = hits.map(h => ({
    name: h.path,
    count: h.count,
    href: h.path,
  }));
  renderBars('pages-wrap', items, 'name', true);
}

function renderProjects(data) {
  const hits = data.hits || [];
  const grouped = {};
  hits.forEach(h => {
    if (!h.path || !h.path.includes('/projectes/') || h.path.endsWith('/projectes/')) return;
    const name = h.path.replace(/\/(ca|en)\/projectes\//, '').replace(/\/$/, '') || h.path;
    grouped[name] = (grouped[name] || 0) + h.count;
  });
  const items = Object.entries(grouped)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
  renderBars('projects-wrap', items, 'name');
}

function renderLocations(data) {
  renderBars('locations-wrap', (data.locations || []).slice(0, 15), 'name');
}

function renderRefs(data) {
  const refs = data.refs || [];
  const el = document.getElementById('refs-wrap');
  const emptyEl = document.getElementById('refs-empty');
  if (!refs.length) {
    el.innerHTML = '';
    emptyEl.style.display = 'block';
    return;
  }
  emptyEl.style.display = 'none';
  const wrap = document.createElement('div');
  wrap.className = 'bars';
  el.replaceChildren(wrap);
  renderBars('refs-wrap', refs.slice(0, 10), 'name');
}

/* ═══════════════════════════════════════════════════════════
   RENDERS: DISPOSITIUS TAB
═══════════════════════════════════════════════════════════ */
function renderDevices(data) {
  const sizes = data.sizes || [];
  let mobile = 0, tablet = 0, desktop = 0;
  sizes.forEach(s => {
    const id = (s.id || s.name || '').toLowerCase();
    const c  = s.count || 0;
    if (id === 'phone')                       mobile  += c;
    else if (id === 'tablet')                 tablet  += c;
    else if (id === 'desktop' || id === 'desktophd' || id === 'larger') desktop += c;
    else {
      // Fallback: size numeric
      const w = parseInt(id, 10);
      if (!isNaN(w)) {
        if (w < 768) mobile += c;
        else if (w < 1200) tablet += c;
        else desktop += c;
      }
    }
  });
  const total = mobile + tablet + desktop || 1;
  const pct = n => total > 1 ? `(${Math.round(n / total * 100)}%)` : '';

  setText('dev-mobile',     mobile  > 0 ? fmt(mobile)  : '—');
  setText('dev-mobile-pct', mobile  > 0 ? pct(mobile)  : '');
  setText('dev-tablet',     tablet  > 0 ? fmt(tablet)  : '—');
  setText('dev-tablet-pct', tablet  > 0 ? pct(tablet)  : '');
  setText('dev-desktop',    desktop > 0 ? fmt(desktop) : '—');
  setText('dev-desktop-pct',desktop > 0 ? pct(desktop) : '');
}

function renderBrowsersSystems(data) {
  const browsers = (data.browsers || []).map(b => ({
    name: getIcon(b.name || '', BROWSER_ICON) + ' ' + (b.name || '?'),
    count: b.count,
  }));
  const systems = (data.systems || []).map(s => ({
    name: getIcon(s.name || '', OS_ICON) + ' ' + (s.name || '?'),
    count: s.count,
  }));
  renderBars('browsers-wrap', browsers, 'name');
  renderBars('systems-wrap',  systems,  'name');
}

/* ═══════════════════════════════════════════════════════════
   UTILITAT: renderBars
═══════════════════════════════════════════════════════════ */
function renderBars(containerId, items, nameKey, withLinks = false) {
  const el = document.getElementById(containerId);
  if (!items || !items.length) {
    el.removeAttribute('role');
    el.innerHTML = '<span class="empty">sense dades per a aquest període</span>';
    return;
  }
  const max = items[0].count || 1;
  const total = items.reduce((s, i) => s + i.count, 0) || 1;

  el.className = 'bars';
  el.setAttribute('role', 'list');
  el.innerHTML = '';
  items.forEach(item => {
    const pct  = Math.round(item.count / max * 100);
    const gpct = Math.round(item.count / total * 100);
    const name = String(item[nameKey] || '?');

    const row = document.createElement('div');
    row.className = 'bar-row';
    row.setAttribute('role', 'listitem');

    const label = document.createElement('div');
    label.className = 'bar-label';
    label.title = name;
    if (withLinks && item.href) {
      const a = document.createElement('a');
      a.href = item.href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = name;
      label.appendChild(a);
    } else {
      label.textContent = name;
    }

    const track = document.createElement('div');
    track.className = 'bar-track';
    track.setAttribute('aria-hidden', 'true');

    const fill = document.createElement('div');
    fill.className = 'bar-fill';
    fill.style.width = '0%';
    fill.dataset.barW = pct;
    if (gpct > 12) {
      const pctSpan = document.createElement('span');
      pctSpan.className = 'bar-pct';
      pctSpan.textContent = gpct + '%';
      fill.appendChild(pctSpan);
    }
    track.appendChild(fill);

    const count = document.createElement('div');
    count.className = 'bar-count';
    count.textContent = fmt(item.count);

    row.appendChild(label);
    row.appendChild(track);
    row.appendChild(count);
    el.appendChild(row);
  });
}

/* ═══════════════════════════════════════════════════════════
   UTILITATS
═══════════════════════════════════════════════════════════ */
const fmt       = n  => (n == null || isNaN(n)) ? '—' : Number(n).toLocaleString('ca-ES');
const isoToday  = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0'); };
const setText   = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
const esc       = s  => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function daysAgo(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
}

function sumDays(hbd, from, to) {
  return (hbd || []).filter(d => d.date >= from && d.date <= to).reduce((s, d) => s + (d.count || 0), 0);
}

function getIcon(name, map) {
  const n = name.toLowerCase();
  for (const key of Object.keys(map)) {
    if (n.includes(key)) return map[key];
  }
  return '·';
}

function setTopbarGen(isoStr) {
  const el = document.getElementById('topbar-gen');
  if (!isoStr) {
    el.textContent = 'sense caché — fes clic a ↻ actualitzar';
    return;
  }
  const d = new Date(isoStr);
  const fmt2 = d.toLocaleString('ca-ES', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  el.innerHTML = `Actualitzat: <strong>${fmt2}</strong>`;
}

function setBanner(type, msg) {
  const el = document.getElementById('state-banner');
  const cls = type === 'error' ? 'banner banner-error' : type === 'empty' ? 'banner banner-empty' : 'banner banner-loading';
  el.className = cls;
  el.setAttribute('role', type === 'error' ? 'alert' : 'status');
  el.innerHTML = msg;
}
function clearBanner() {
  const el = document.getElementById('state-banner');
  el.className = '';
  el.textContent = '';
  el.removeAttribute('role');
}

function fmtDateShort(str) {
  if (!str) return '';
  const d = new Date(str + 'T12:00:00');
  return d.toLocaleDateString('ca-ES', { day: 'numeric', month: 'short' });
}
function fmtMonth(ym) {
  const [y, m] = ym.split('-');
  return new Date(+y, +m - 1, 1).toLocaleDateString('ca-ES', { month: 'short', year: '2-digit' });
}
function fmtPeriod(start, end) {
  const f = s => new Date(s + 'T12:00:00').toLocaleDateString('ca-ES', { day: 'numeric', month: 'short', year: 'numeric' });
  return f(start) + ' – ' + f(end);
}

/* ═══════════════════════════════════════════════════════════
   INTERPRETACIÓ AUTOMÀTICA
═══════════════════════════════════════════════════════════ */
function renderAll(data) {
  // Sobreescriu renderAll per afegir insights al final
  _renderAllBase(data);
  renderTemporalInsight(data);
  renderPaginesInsight(data);
  renderDispositiusInsight(data);
}

function renderTemporalInsight(data) {
  const ins  = document.getElementById('temporal-insight');
  const body = document.getElementById('temporal-insight-body');
  const hbd  = data.hits_by_day || [];
  if (!hbd.length) { ins.style.display = 'none'; return; }

  const lines = [];
  const today = isoToday();

  // Tendència: últimes 2 setmanes vs les 2 anteriors
  const s14 = sumDays(hbd, daysAgo(14), today);
  const s28  = sumDays(hbd, daysAgo(28), daysAgo(15));
  if (s28 > 0) {
    const delta = Math.round((s14 - s28) / s28 * 100);
    if (delta > 10)       lines.push(`Les visites han <em>crescut un ${delta}%</em> en les últimes 2 setmanes respecte a les anteriors.`);
    else if (delta < -10) lines.push(`Les visites han <em>baixat un ${Math.abs(delta)}%</em> en les últimes 2 setmanes respecte a les anteriors.`);
    else                  lines.push(`El trànsit s'ha mantingut estable (±${Math.abs(delta)}%) en les últimes 4 setmanes.`);
  }

  // Pic de visites
  const max = hbd.reduce((a, b) => a.count > b.count ? a : b, { count: 0 });
  if (max.count > 0) {
    lines.push(`El pic va ser <em>${fmtDateShort(max.date)}</em> amb <em>${fmt(max.count)} visites</em>.`);
  }

  // Dia de la setmana més actiu
  const byDow = [0,0,0,0,0,0,0];
  hbd.forEach(d => { byDow[new Date(d.date + 'T12:00:00').getDay()] += d.count; });
  const dowNames = ['diumenge','dilluns','dimarts','dimecres','dijous','divendres','dissabte'];
  const maxDow = byDow.indexOf(Math.max(...byDow));
  if (byDow[maxDow] > 0) lines.push(`El <em>${dowNames[maxDow]}</em> és el dia amb més trànsit habitualment.`);

  // Dies sense visites
  const daysNoVisit = hbd.filter(d => d.count === 0).length;
  if (daysNoVisit > 0) lines.push(`${daysNoVisit} dies sense cap visita registrada — normal en un lloc en creixement.`);

  ins.style.display = lines.length ? 'block' : 'none';
  body.innerHTML = lines.map(l => `<div>— ${l}</div>`).join('');
}

function renderPaginesInsight(data) {
  const ins  = document.getElementById('pagines-insight');
  const body = document.getElementById('pagines-insight-body');
  const lines = [];

  // Idioma
  const by_lang = data.by_lang || {};
  const langTotal = Object.values(by_lang).reduce((s, v) => s + v, 0);
  if (langTotal > 0) {
    const ca = by_lang.ca || 0;
    const en = by_lang.en || 0;
    const caPct = Math.round(ca / langTotal * 100);
    const enPct = Math.round(en / langTotal * 100);
    if (caPct >= enPct) lines.push(`L'idioma principal és el <em>Català</em> (${caPct}% del trànsit).`);
    else                lines.push(`L'idioma principal és l'<em>Anglès</em> (${enPct}% del trànsit).`);
    if (enPct >= 5 && caPct > enPct) lines.push(`L'Anglès representa el <em>${enPct}%</em> — audiència internacional present.`);
    if (caPct >= 5 && enPct > caPct) lines.push(`El Català representa el <em>${caPct}%</em>.`);
  }

  // Secció més visitada
  const sections = data.by_section || {};
  const secEntries = Object.entries(sections).filter(([k]) => k !== 'admin').sort((a,b) => b[1]-a[1]);
  const secTotal = secEntries.reduce((s, [,v]) => s + v, 0);
  if (secEntries.length) {
    const [topSec, topCount] = secEntries[0];
    const topName = { inici:'Inici', projectes:'Projectes', solucions:'Solucions', 'com-treballem':'Com treballem', 'qui-som':'Qui som', contacte:'Contacte', serveis:'Serveis' }[topSec] || topSec;
    const topPct = secTotal > 0 ? Math.round(topCount / secTotal * 100) : 0;
    lines.push(`La secció més visitada és <em>${topName}</em> amb <em>${fmt(topCount)} visites</em> (${topPct}% del total).`);
  }

  // Contacte
  const hits = data.hits || [];
  const contacteHits = hits.filter(h => h.path && h.path.includes('/contacte')).reduce((s, h) => s + h.count, 0);
  if (contacteHits > 0) lines.push(`<em>${fmt(contacteHits)} visites</em> al formulari de contacte.`);

  // Projecte amb més interès
  const projectHits = hits.filter(h => h.path && h.path.includes('/projectes/') && !h.path.endsWith('/projectes/'));
  if (projectHits.length) {
    const top = projectHits.reduce((a, b) => a.count > b.count ? a : b);
    const name = top.path.replace(/\/(ca|en)\/projectes\//, '').replace(/\/$/, '');
    lines.push(`El projecte amb més interès és <em>${esc(name)}</em> (${fmt(top.count)} visites).`);
  }

  // Refs: cercadors vs social vs directe
  const refs = data.refs || [];
  const searchEngines = ['google','bing','duckduckgo','yahoo','ecosia','startpage','qwant','baidu','yandex'];
  const socialNets    = ['instagram','facebook','twitter','linkedin','mastodon','tiktok','youtube'];
  let fromSearch = 0, fromSocial = 0;
  refs.forEach(r => {
    const id = (r.id || r.name || '').toLowerCase();
    if (searchEngines.some(s => id.includes(s)))  fromSearch += r.count;
    else if (socialNets.some(s => id.includes(s))) fromSocial += r.count;
  });
  if (fromSearch > 0) lines.push(`<em>${fmt(fromSearch)} visites</em> des de cercadors — el SEO comença a funcionar.`);
  if (fromSocial > 0) lines.push(`<em>${fmt(fromSocial)} visites</em> des de xarxes socials.`);

  // País principal
  const locs = data.locations || [];
  if (locs.length) {
    const locTotal = locs.reduce((s, l) => s + l.count, 0) || 1;
    const top = locs[0];
    const topPct = Math.round(top.count / locTotal * 100);
    lines.push(`<em>${topPct}%</em> del trànsit ve de <em>${esc(top.name)}</em>.${locs[1] ? ` Seguit de ${esc(locs[1].name)} (${Math.round(locs[1].count/locTotal*100)}%).` : ''}`);
  }

  ins.style.display = lines.length ? 'block' : 'none';
  body.innerHTML = lines.map(l => `<div>— ${l}</div>`).join('');
}

function renderDispositiusInsight(data) {
  const ins  = document.getElementById('dispositius-insight');
  const body = document.getElementById('dispositius-insight-body');
  const lines = [];

  // Dispositiu
  const sizes = data.sizes || [];
  let mobile = 0, tablet = 0, desktop = 0;
  sizes.forEach(s => {
    const id = (s.id || s.name || '').toLowerCase();
    const c  = s.count || 0;
    if (id === 'phone')                                      mobile  += c;
    else if (id === 'tablet')                                tablet  += c;
    else if (id === 'desktop' || id === 'desktophd' || id === 'larger') desktop += c;
    else { const w = parseInt(id,10); if (!isNaN(w)) { if (w<768) mobile+=c; else if (w<1200) tablet+=c; else desktop+=c; } }
  });
  const devTotal = mobile + tablet + desktop || 1;
  if (devTotal > 1) {
    const mobilePct  = Math.round(mobile  / devTotal * 100);
    const desktopPct = Math.round(desktop / devTotal * 100);
    if (mobilePct >= desktopPct) {
      lines.push(`El <em>mòbil</em> és el dispositiu principal (${mobilePct}%).${mobilePct > 50 ? ' El disseny mobile-first és la decisió correcta.' : ''}`);
    } else {
      lines.push(`L'<em>escriptori</em> és el dispositiu principal (${desktopPct}%).`);
    }
    if (tablet > 0) lines.push(`La tauleta representa el ${Math.round(tablet/devTotal*100)}% del trànsit.`);
  }

  // Navegador
  const browsers = data.browsers || [];
  if (browsers.length) {
    const bTotal = browsers.reduce((s, b) => s + b.count, 0) || 1;
    const top = browsers[0];
    lines.push(`<em>${esc(top.name)}</em> és el navegador majoritari (${Math.round(top.count/bTotal*100)}% dels usuaris).`);
  }

  // SO
  const systems = data.systems || [];
  if (systems.length) {
    const sTotal = systems.reduce((s, b) => s + b.count, 0) || 1;
    const top = systems[0];
    lines.push(`<em>${esc(top.name)}</em> és el sistema operatiu principal (${Math.round(top.count/sTotal*100)}%).`);
  }

  ins.style.display = lines.length ? 'block' : 'none';
  body.innerHTML = lines.map(l => `<div>— ${l}</div>`).join('');
}
