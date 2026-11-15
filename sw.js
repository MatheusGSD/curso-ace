/* Guarda o curso no aparelho para funcionar sem internet.
   Gerado pelo build.py: curso-ace-20261115-66bf74b1-185449d2 e ["./", "manifest.webmanifest", "icone-180.png", "icone-192.png", "icone-512.png"] são trocados a cada versão,
   então qualquer mudança no curso muda este arquivo e o navegador baixa a versão nova. */
'use strict';
var CACHE = 'curso-ace-20261115-66bf74b1-185449d2';
var PREFIXO = 'curso-ace-';
var ARQUIVOS = ["./", "manifest.webmanifest", "icone-180.png", "icone-192.png", "icone-512.png"];

self.addEventListener('install', function (ev) {
  ev.waitUntil(
    caches.open(CACHE)
      .then(function (c) {
        // 'reload' fura o cache HTTP: garante que guardamos a versão nova, não uma cópia velha
        return Promise.all(ARQUIVOS.map(function (a) { return c.add(new Request(a, { cache: 'reload' })); }));
      })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (ev) {
  ev.waitUntil(
    caches.keys().then(function (nomes) {
      var velhos = nomes.filter(function (n) { return n.indexOf(PREFIXO) === 0 && n !== CACHE; });
      return Promise.all(velhos.map(function (n) { return caches.delete(n); }))
        .then(function () { return self.clients.claim(); })
        .then(function () {
          if (!velhos.length) return; // primeira instalação: nada a avisar
          return self.clients.matchAll({ type: 'window' }).then(function (abas) {
            abas.forEach(function (a) { a.postMessage({ tipo: 'nova-versao' }); });
          });
        });
    })
  );
});

self.addEventListener('fetch', function (ev) {
  var req = ev.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  var alvo = req.mode === 'navigate' ? './' : req;
  ev.respondWith(
    caches.open(CACHE).then(function (c) {
      return c.match(alvo, { ignoreSearch: true }).then(function (r) {
        return r || fetch(req);
      });
    })
  );
});
