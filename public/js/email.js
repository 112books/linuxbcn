/*!
 * LinuxBCN — ofuscacio de l'adreca de contacte.
 * L'adreca no apareix mai en text pla a l'HTML: nomes aqui, codificada.
 * Qualsevol element amb [data-lbcn-email] s'omple amb un enllac mailto.
 */
(function () {
  'use strict';
  var encoded = 'aG9sYUBsaW51eGJjbi5jb20=';
  var email = '';
  try { email = window.atob(encoded); } catch (e) { email = ''; }
  if (!email || email.indexOf('@') === -1) return;
  window.LBCN_EMAIL = email;
  function fill(el) {
    el.setAttribute('href', 'mailto:' + email);
    el.setAttribute('rel', 'nofollow');
    el.textContent = email;
    el.setAttribute('aria-label', email);
    el.removeAttribute('data-lbcn-email');
  }
  var nodes = document.querySelectorAll('[data-lbcn-email]');
  for (var i = 0; i < nodes.length; i++) { fill(nodes[i]); }
})();
