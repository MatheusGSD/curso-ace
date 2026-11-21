/* Guarda o curso no aparelho para funcionar sem internet.
   Gerado pelo build.py: curso-ace-20261121-c95c0cbb-dc6cda5e e ["./", "manifest.webmanifest", "icone-180.png", "icone-192.png", "icone-512.png"] são trocados a cada versão,
   então qualquer mudança no curso muda este arquivo e o navegador baixa a versão nova. */
'use strict';
var CACHE = 'curso-ace-20261121-c95c0cbb-dc6cda5e';
var PREFIXO = 'curso-ace-';
var ARQUIVOS = ["./", "manifest.webmanifest", "icone-180.png", "icone-192.png", "icone-512.png"];
// Voz dos quadros: nomes são o hash da fala, então o mesmo arquivo serve a todas as versões.
// Fica num cache à parte, que não é apagado quando o curso muda; baixa em segundo plano.
var AUDIOS = ["audio/00027eb52a2cf039.mp3", "audio/040fe527aed10df3.mp3", "audio/07f4578372c6d4b4.mp3", "audio/0bc14f24a6810dfd.mp3", "audio/0bf48c3dc5e4f8c9.mp3", "audio/0bf8ea5166a42b72.mp3", "audio/0ca80c1584615452.mp3", "audio/0dd24984e8ba340c.mp3", "audio/0e4164e9f845604e.mp3", "audio/0ee1a72ca33907c9.mp3", "audio/0f6c55aef9c5e2ec.mp3", "audio/10e07c0ac6942fbd.mp3", "audio/113e9d2f29ea31cd.mp3", "audio/1269fc090aafc836.mp3", "audio/1310d22486b2c95e.mp3", "audio/1399cb6678d23b82.mp3", "audio/15fd8df793dc71f5.mp3", "audio/174c8899e51bf5c4.mp3", "audio/1850997f276d2b59.mp3", "audio/1a8cf3d451151d72.mp3", "audio/1f72dc177bfb2612.mp3", "audio/1f9e274bc448bb62.mp3", "audio/20ef56a64ff2a4e1.mp3", "audio/22a596062026e2cc.mp3", "audio/2378e53a1acf9240.mp3", "audio/23c0e7d37191f811.mp3", "audio/23e5d2c1fbc0f4f3.mp3", "audio/23f5fac6d8198b64.mp3", "audio/24f55e15419b326b.mp3", "audio/258a973cfca20ed6.mp3", "audio/2672493f9466c9df.mp3", "audio/286986db9b8bdd7b.mp3", "audio/30882cdda665c984.mp3", "audio/32b9346bd01d35e7.mp3", "audio/34340921975cd54b.mp3", "audio/3524b6c1752faeaa.mp3", "audio/37330e9efd1636c4.mp3", "audio/373eed3ac84d4d59.mp3", "audio/37f81530e931c62d.mp3", "audio/38983e5ad178e7d2.mp3", "audio/3a14815f54bdc2eb.mp3", "audio/3a612ffa3cadd597.mp3", "audio/3b333c23de3dc4d7.mp3", "audio/3be8e45d7e980a4a.mp3", "audio/3d3eaea4ecbefa5a.mp3", "audio/3da615e65a9506c0.mp3", "audio/3dc3339f39f8ef31.mp3", "audio/3fe5511e74dcb348.mp3", "audio/40e7656c7e76bd94.mp3", "audio/4100d9bafb0578b0.mp3", "audio/41b0c30233d07107.mp3", "audio/4237381b46825588.mp3", "audio/428461f52463976c.mp3", "audio/4295056248d8841e.mp3", "audio/43033d4c81228e49.mp3", "audio/4378453fd0cba970.mp3", "audio/4381173f04fac2ba.mp3", "audio/43feba424260b9f5.mp3", "audio/4405239ed28258b6.mp3", "audio/45774e15cb0f8b2c.mp3", "audio/465cda0900b53e7e.mp3", "audio/46fa53e22d1dea0b.mp3", "audio/4733296681ac6746.mp3", "audio/4b7bd1a939ad070b.mp3", "audio/4bedfeb07e03d321.mp3", "audio/4c1bd8c220d2ca71.mp3", "audio/4d363f598bc00688.mp3", "audio/4d7ddb629aa0ed6b.mp3", "audio/4daa22fbf5b0ae4e.mp3", "audio/4ea5646b1c55f6d4.mp3", "audio/4f2bf662f69e7121.mp3", "audio/5006efe736bdac8d.mp3", "audio/50bdc726abd3e433.mp3", "audio/52ad1a0ede8c9771.mp3", "audio/53ac542e11cf1baf.mp3", "audio/55dcc5ab6056862a.mp3", "audio/56b227a820f32445.mp3", "audio/576648f4520024aa.mp3", "audio/578e8c22d306f241.mp3", "audio/58d843a01d9c8bee.mp3", "audio/5d64f3e1d71c3454.mp3", "audio/5db1f85bda70a9b2.mp3", "audio/5ec19993a712aff3.mp3", "audio/60352109b76f8d67.mp3", "audio/60552032356e5a64.mp3", "audio/60fec19fd577c106.mp3", "audio/6148234956ed0df2.mp3", "audio/61f5d2b92ccab9cf.mp3", "audio/648586f64f8cfeaa.mp3", "audio/64b461e1efe8f4af.mp3", "audio/64f0c521ce8f8594.mp3", "audio/657237070d69f772.mp3", "audio/66d786ca90b943d5.mp3", "audio/6708af251ea561f9.mp3", "audio/6719d092c245741d.mp3", "audio/67206b6eba7ac707.mp3", "audio/68406b7110972112.mp3", "audio/6c23346bed55ff1b.mp3", "audio/6d32e5e871965da2.mp3", "audio/6e8b05fc0ea0ad96.mp3", "audio/6f3d6914449de271.mp3", "audio/7115dc1b3bff4d0c.mp3", "audio/713963c1d41c123c.mp3", "audio/732c8c6d756c1aff.mp3", "audio/750e7bf9ac1b0f32.mp3", "audio/77e2fa04f0ed3f63.mp3", "audio/780504344e0765c2.mp3", "audio/790552c850162d1a.mp3", "audio/79cbd4c03f542e06.mp3", "audio/7a9de385bd676267.mp3", "audio/7acda4c0a5d2d330.mp3", "audio/7b1ae596633b30a4.mp3", "audio/7bbb927ce840fd65.mp3", "audio/7cfa9e54e809b268.mp3", "audio/811a2df09feee32d.mp3", "audio/851b417754ec925a.mp3", "audio/8739167c3b5b4d3b.mp3", "audio/87ce8057f2290332.mp3", "audio/881d473de58665d5.mp3", "audio/8bcb7b813197ed81.mp3", "audio/8d654b1dba0e1e3e.mp3", "audio/8e051e17c0f97371.mp3", "audio/8e29e97cbab39f95.mp3", "audio/8e492d79aa57a1b0.mp3", "audio/8e68bde4ded6564b.mp3", "audio/8f14b64ba45a9e83.mp3", "audio/8f1f5018dc67f3e2.mp3", "audio/91209fe8fabaf77d.mp3", "audio/916285ec64010ad7.mp3", "audio/919a64a18c2052eb.mp3", "audio/925b192166f993f9.mp3", "audio/92d839c8e9f321f0.mp3", "audio/92e201df0a8c5f41.mp3", "audio/94063f4a587e1ee4.mp3", "audio/94292f98eefa5993.mp3", "audio/94329f93df23928a.mp3", "audio/95bfe3f3ee82f0c3.mp3", "audio/95c0dd08d65b2f25.mp3", "audio/972bded05881c3ae.mp3", "audio/97ceda65d90580c9.mp3", "audio/9951dba363af1446.mp3", "audio/9999d166c4d68dc7.mp3", "audio/9afc5d0f3d1eec8e.mp3", "audio/9b8070402c7742d1.mp3", "audio/9bf07d864b08faea.mp3", "audio/9e9902cd25b90924.mp3", "audio/9eb830236bec0e06.mp3", "audio/9f3f019b404bab30.mp3", "audio/9ff3b031e9f77008.mp3", "audio/a06600bf5a3953ae.mp3", "audio/a0ce7871e1a3d80d.mp3", "audio/a13ced4e34f2ce49.mp3", "audio/a1c96f3a5264dbff.mp3", "audio/a309fd99c64b687e.mp3", "audio/a4e6724ac65d5720.mp3", "audio/a50697d20e7726af.mp3", "audio/a53733bb8cbe3bc8.mp3", "audio/a6033a06d070e4ba.mp3", "audio/a60bcc97f7003f76.mp3", "audio/a6e8a453efc8afcb.mp3", "audio/a7f9101b512ed8e4.mp3", "audio/a807d135c0bb952d.mp3", "audio/a8612b3634aaf2cd.mp3", "audio/a8be4d413868ac63.mp3", "audio/a99b5bb5dbc246b0.mp3", "audio/a9e83571a5294843.mp3", "audio/abd988b9c52d0f9e.mp3", "audio/acfee92fb97e19ea.mp3", "audio/ada239ca83fae930.mp3", "audio/adb48c439c0c32a3.mp3", "audio/ae5e5bc9290a671f.mp3", "audio/aebf04c8700d7d3d.mp3", "audio/b0c5e37aa7834a31.mp3", "audio/b33988dae3f660c0.mp3", "audio/b572e8acebc33db1.mp3", "audio/b7a18195ee9dd979.mp3", "audio/b7dab142aff9e069.mp3", "audio/b86da764475c0369.mp3", "audio/b8ddf96bceecf4cd.mp3", "audio/bbb47137eaf77544.mp3", "audio/bc0ddc89d29ec2ca.mp3", "audio/bc49aa8426993711.mp3", "audio/be9ab4c58a7a3175.mp3", "audio/bed6095f447116cd.mp3", "audio/c1921fe3fd4f0efd.mp3", "audio/c24cb24c82af7ace.mp3", "audio/c426261371fb286a.mp3", "audio/c4b156fa3b86b3bb.mp3", "audio/c4f3fd3aff27c3d2.mp3", "audio/c52a3b80a694ef9e.mp3", "audio/c6307e78ea317da7.mp3", "audio/c69411e87f583c4f.mp3", "audio/c9804f6e76b5a028.mp3", "audio/c99ffa1b59132787.mp3", "audio/cc11f93f3c7919cc.mp3", "audio/ccd089529ca0bb48.mp3", "audio/cddff0e9afa9e7fa.mp3", "audio/ce0a38401dd68358.mp3", "audio/ce5f8dd6fe5f3dc4.mp3", "audio/d02668460127de2f.mp3", "audio/d182a10049473c5e.mp3", "audio/d3ee40d856242d86.mp3", "audio/d51cca64a7547a7c.mp3", "audio/d5b2502bb02c2401.mp3", "audio/d960943a8eaba1e4.mp3", "audio/dae26b201fa1e506.mp3", "audio/db49370fc8a5919d.mp3", "audio/dba23bbca5afdf79.mp3", "audio/de131c196352e1f9.mp3", "audio/df83fccb14f13d94.mp3", "audio/e22e5c11982e5e56.mp3", "audio/e3315fa54c960be5.mp3", "audio/e46f77b217750dba.mp3", "audio/e5d54dc4f77ff911.mp3", "audio/e6779d51351fc9ce.mp3", "audio/e84e102a2a80f6da.mp3", "audio/e87bc8599e62d991.mp3", "audio/e902061ff81c68e8.mp3", "audio/ea080dc221701927.mp3", "audio/eab1a70daf3bd6ae.mp3", "audio/ec19576e585ea639.mp3", "audio/ee24abf0bb44d88f.mp3", "audio/ee3377ae82d2147d.mp3", "audio/ee7a6725586dbe38.mp3", "audio/efe8e6d355121673.mp3", "audio/f02b86cab4477ce3.mp3", "audio/f3f6ba3a370f265c.mp3", "audio/f563b4bcff7a41ed.mp3", "audio/f5b7a8e978a0aa58.mp3", "audio/faf7f5b621e2b8ab.mp3", "audio/fde23d97cc14cb04.mp3", "audio/ffb1a94cebf3b6f4.mp3", "audio/ffe7b1c855cdf397.mp3", "audio/fff9287703d82219.mp3"];
var CACHE_AUDIO = PREFIXO + 'audio';

function guardarAudios() {
  return caches.open(CACHE_AUDIO).then(function (c) {
    return c.keys().then(function (tem) {
      var ja = {};
      tem.forEach(function (r) { ja[new URL(r.url).pathname.split('/').pop()] = 1; });
      var falta = AUDIOS.filter(function (a) { return !ja[a.split('/').pop()]; });
      // um por vez e sem desistir no primeiro erro: rede ruim não impede o resto
      return falta.reduce(function (p, a) {
        return p.then(function () { return c.add(a).catch(function () { /* tenta de novo na próxima abertura */ }); });
      }, Promise.resolve());
    });
  });
}

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
      var velhos = nomes.filter(function (n) { return n.indexOf(PREFIXO) === 0 && n !== CACHE && n !== CACHE_AUDIO; });
      // voz que nenhuma fala usa mais sai do aparelho
      caches.open(CACHE_AUDIO).then(function (c) {
        return c.keys().then(function (tem) {
          var usados = {};
          AUDIOS.forEach(function (a) { usados[a.split('/').pop()] = 1; });
          tem.forEach(function (r) { if (!usados[new URL(r.url).pathname.split('/').pop()]) c.delete(r); });
        });
      });
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

self.addEventListener('message', function (ev) {
  if (ev.data && ev.data.tipo === 'guardar-audios') ev.waitUntil(guardarAudios());
});

self.addEventListener('fetch', function (ev) {
  var req = ev.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  if (new URL(req.url).pathname.indexOf('/audio/') >= 0) {
    // voz: do aparelho; se ainda não estiver, da rede, e já guarda
    ev.respondWith(caches.open(CACHE_AUDIO).then(function (c) {
      return c.match(req, { ignoreSearch: true }).then(function (r) {
        return r || fetch(req).then(function (resp) {
          if (resp.ok && resp.status === 200) c.put(req, resp.clone());
          return resp;
        });
      });
    }));
    return;
  }
  var alvo = req.mode === 'navigate' ? './' : req;
  ev.respondWith(
    caches.open(CACHE).then(function (c) {
      return c.match(alvo, { ignoreSearch: true }).then(function (r) {
        return r || fetch(req);
      });
    })
  );
});
