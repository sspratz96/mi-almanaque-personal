/* Mi almanaque — service worker
 *
 * Reglas, de arriba hacia abajo:
 *   1. Google (Drive, login, analytics)  -> nunca pasa por aqui.
 *   2. index.html y frases.js            -> red primero, cache de respaldo.
 *   3. Fuentes e iconos                  -> cache primero, se refresca en silencio.
 *
 * "Red primero" para el HTML es a proposito: GitHub Pages tarda 1-3 minutos en
 * publicar y no queremos que el telefono quede pegado en una version vieja.
 * Si no hay señal, igual abre desde el cache.
 *
 * Al cambiar index.html o frases.js, sube VERSION. Eso borra el cache viejo.
 */

const VERSION = 'almanaque-v1';
const CACHE = VERSION;

// Lo minimo para que la app arranque sin conexion.
const NUCLEO = [
  './',
  './index.html',
  './frases.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png'
];

// Dominios que el service worker debe dejar pasar sin tocar.
const SIN_CACHE = [
  'accounts.google.com',
  'apis.google.com',
  'www.googleapis.com',
  'oauth2.googleapis.com'
];

// Dominios cuyos archivos valen la pena guardar para siempre.
const ESTATICOS_EXTERNOS = [
  'fonts.googleapis.com',
  'fonts.gstatic.com'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      // addAll falla entero si un archivo falla; los agregamos de a uno.
      .then((c) => Promise.allSettled(NUCLEO.map((u) => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;

  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // 1. Google: que siga de largo.
  if (SIN_CACHE.some((h) => url.hostname.endsWith(h))) return;

  // 2. Navegacion (abrir la app) y los dos archivos que editas: red primero.
  const esNavegacion = req.mode === 'navigate';
  const esPropioMutable = url.origin === self.location.origin &&
    /\/(index\.html|frases\.js)$/.test(url.pathname);

  if (esNavegacion || esPropioMutable) {
    e.respondWith(redPrimero(req, esNavegacion));
    return;
  }

  // 3. Fuentes, iconos y demas estatico: cache primero.
  const esEstatico = url.origin === self.location.origin ||
    ESTATICOS_EXTERNOS.some((h) => url.hostname.endsWith(h));

  if (esEstatico) {
    e.respondWith(cachePrimero(req));
  }
});

async function redPrimero(req, esNavegacion) {
  try {
    const res = await fetch(req);
    if (res && res.ok) {
      const copia = res.clone();
      caches.open(CACHE).then((c) => c.put(req, copia));
    }
    return res;
  } catch (err) {
    const cacheado = await caches.match(req, { ignoreSearch: esNavegacion });
    if (cacheado) return cacheado;
    if (esNavegacion) {
      const inicio = await caches.match('./index.html');
      if (inicio) return inicio;
    }
    throw err;
  }
}

async function cachePrimero(req) {
  const cacheado = await caches.match(req);
  if (cacheado) {
    // Lo devolvemos ya, y de paso miramos si hay version nueva.
    fetch(req)
      .then((res) => {
        if (res && (res.ok || res.type === 'opaque')) {
          caches.open(CACHE).then((c) => c.put(req, res));
        }
      })
      .catch(() => {});
    return cacheado;
  }
  const res = await fetch(req);
  if (res && (res.ok || res.type === 'opaque')) {
    const copia = res.clone();
    caches.open(CACHE).then((c) => c.put(req, copia));
  }
  return res;
}

// Permite que la pagina fuerce la actualizacion sin esperar.
self.addEventListener('message', (e) => {
  if (e.data === 'actualizar-ya') self.skipWaiting();
});
