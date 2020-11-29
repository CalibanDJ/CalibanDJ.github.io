"use strict";

const CACHE_NAME = 'judupuis-1606582669804';
const SW_SUPPORTED_PROTOCOL_REGEX = /http(s?):/;
const pageUrls = JSON.parse('["/","/blog","/about-us","/reviews","/privacy-policy","/contact-us","/markup/ad","/markup/paywall"]');
const staticAssets = JSON.parse('["//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/4524c1974583bbdd/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/67e3c5dda34f61e9/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/b1e3a93cb6222a2b/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/fb248ae59877b198/styles.css","https://img1.wsimg.com/poly/v2/polyfill.min.js?unknown=polyfill&flags=gated&features=default%2Cfetch%2CArray.prototype.%40%40iterator%2CArray.prototype.find%2CArray.prototype.findIndex%2CFunction.name%2CNumber.isFinite%2CPromise%2CString.prototype.repeat%2CMath.sign%2CMath.trunc%2CArray.prototype.includes%2CObject.entries%2CObject.values%2CObject.is%2CIntersectionObserver%2CIntl.~locale.en-GB","//img1.wsimg.com/blobby/go/gpub/20f4936a46afa139/script.js","//img1.wsimg.com/blobby/go/gpub/2188bb0881d579fc/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/e63145e2df639028/script.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/layout24-87b00614.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/index3-9d3c1b2c.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/Layout-eca4b140.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/index8-4f9780ae.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/NavItems-c8860a9b.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/SplitNav-61225a14.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/legacyOverrides-b3a5b619.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/linkIndicator-71e8cbdc.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/loaders-cdd1ec86.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/modernThinRound-f0ab7555.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/SubTagline-5336804e.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/utils-6f80a19a.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/video-2d5f0f4d.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/utils2-523b4d00.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/utils3-f3f78e42.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/Background-62f46fb7.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/defaultSocialIconPack-de218de9.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/Foreground-707c82cd.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/HEADER/header9-3dacd7f7.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/HEADER/c/defaultProps-620e170a.js","//img1.wsimg.com/ceph-p3-01/website-builder-data-prod/static/widgets/UX.3.71.5.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/c02d992b4f5d88ba/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/308c9235a916f140/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/30c624e99328b32c/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/7b1bb3bab97ef297/script.js","//fonts.googleapis.com/css?family=Muli:400&display=swap","//fonts.googleapis.com/css?family=Quicksand:400,700&display=swap","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/e53699566c37637c/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/6061714c2b3c54c9/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/cd57c96a2eb5a91b/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/447802890ccbf5f5/script.js","//img1.wsimg.com/blobby/go/gpub/2ecdf2bcc69be12d/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/9d1ada92199ee11a/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/d1b16b858b60d045/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/fd1258e373239f01/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/9992af0d198dfc01/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/c7738f704de7291f/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/1ebbbc778f7ff23e/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/7fd6f6daceafb719/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/7fd1f4c9737c417f/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/d58e426d3366902a/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/16099bf6b377e110/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/3a4f582cf99f26cd/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/f84b48ecb6926ae4/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/1c22f7bfdb73b32e/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/9f299176d1cc4bc2/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/68944a1a296be654/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/27c8b3cb660f2ae4/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/fb6f4510fb372937/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/8a5102428c83df22/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/7ee62980967cea6a/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/a3c3c46b16d518c9/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/389d7d9eaab52a62/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/dd857e14acdecb50/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/8030d87c47c8ab9b/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/d5a82e7a8f1348f7/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/a488bb0a1fda000a/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/be612533f938de30/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/dea14c45ad2aa5fd/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/21a3ebbc39a5ec1e/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/f80080c16f61738f/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/1616710133fe1e3e/script.js"]');
const networkOnlyUrls = JSON.parse('["https://api.ola.godaddy.com","https://f0800492-ce65-4f6c-9bad-8a5cc0515c4b.onlinestore.godaddy.com","https://img.secureserver.net/t/1/tl/event","https://img.test-secureserver.net/t/1/tl/event","https://www.google-analytics.com/collect","https://calendar.apps.dev-secureserver.net","https://calendar.apps.test-secureserver.net","https://calendar.apps.secureserver.net"]');
const networkOnlyUrlsRegex = JSON.parse('["judupuis/m/api/.*","judupuis(?:/.*)?/ola/services/.*","judupuis/ola/meetings/.*","securepay.godaddy.com/api/apps/ola/accounts/.*"]').map(regexString => new RegExp(regexString));
const networkThenCacheUrls = JSON.parse('["https://blog.apps.secureserver.net/v1/website/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/feed/post/","https://blog.apps.secureserver.net/v1/website/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/feed"]');
const networkThenCacheUrlsRegex = JSON.parse('["judupuis(?:/.*)?/f/.*"]').map(regexString => new RegExp(regexString));
self.addEventListener('unhandledrejection', function (event) {
  // eslint-disable-next-line no-console
  console.warn('sw unhandledrejection error: ', event.reason);
});

function preCacheResources() {
  return caches.open(CACHE_NAME).then(function (cache) {
    // Pre-Cache pages to improve subsequent navigation but don't making it blocking
    // Avoid extremely large websites from using the end-users data in unexpected amount
    cache.addAll(pageUrls); // Pre-cache all static assets by keeping them as installation dependency

    return cache.addAll(staticAssets);
  });
}

self.addEventListener('install', function (event) {
  // Let the new worker take over as fast as possible
  // For quirks refer: https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#skip_the_waiting_phase
  self.skipWaiting();
  event.waitUntil(preCacheResources());
});

function clearOldCache() {
  return caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (key) {
      return key !== CACHE_NAME;
    }).map(function (key) {
      return caches.delete(key);
    }));
  });
}

self.addEventListener('activate', function (event) {
  // Remember to keep this step as lean as possible
  // Only sutiable for performing stuff that can't be done while the previous worker is running
  event.waitUntil(clearOldCache().then(function () {
    clients.claim(); // eslint-disable-line no-undef
  }));
});

function isPageRequest(url) {
  return url.origin === location.origin && pageUrls.includes(url.pathname);
}

function isNetworkOnlyRequest(url, requestMethod) {
  // Browser extensions don't use the standard `http` and `https` protocols
  // Refer: https://github.com/GoogleChromeLabs/sw-toolbox/issues/171
  if (requestMethod !== 'GET' || !SW_SUPPORTED_PROTOCOL_REGEX.test(url.protocol)) {
    return true;
  }

  const urlOrigin = url.origin;
  const urlPathName = url.pathname;
  const fullUrl = `${urlOrigin}${urlPathName}`;

  if (networkOnlyUrls.includes(urlOrigin) || networkOnlyUrls.includes(fullUrl)) {
    return true;
  }

  if (networkOnlyUrlsRegex.some(regex => regex.test(fullUrl))) {
    return true;
  }

  return false;
}

function isNetworkThenCacheRequest(url, requestMethod) {
  // Browser extensions don't use the standard `http` and `https` protocols
  // Refer: https://github.com/GoogleChromeLabs/sw-toolbox/issues/171
  if (requestMethod !== 'GET' || !SW_SUPPORTED_PROTOCOL_REGEX.test(url.protocol)) {
    return true;
  }

  const urlOrigin = url.origin;
  const urlPathName = url.pathname;
  const fullUrl = `${urlOrigin}${urlPathName}`;

  if (networkThenCacheUrls.includes(urlOrigin) || networkThenCacheUrls.includes(fullUrl)) {
    return true;
  }

  if (networkThenCacheUrlsRegex.some(regex => regex.test(fullUrl))) {
    return true;
  }

  return false;
}

function handleWithNetworkThenCache(event) {
  return event.respondWith(fetch(event.request).then(function (networkResponse) {
    if (!networkResponse.ok) {
      return networkResponse;
    }

    return caches.open(CACHE_NAME).then(function (cache) {
      cache.put(event.request, networkResponse.clone());
      return networkResponse;
    });
  }).catch(function () {
    // network failed, try to serve a cached response or offline page if there is one
    return caches.match(event.request);
  }));
}

function handleWithCacheThenNetwork(event) {
  return event.respondWith(caches.open(CACHE_NAME).then(function (cache) {
    return cache.match(event.request).then(function (response) {
      return response || fetch(event.request).then(function (networkResponse) {
        networkResponse.ok && cache.put(event.request, networkResponse.clone());
        return networkResponse;
      });
    });
  }).catch(function (err) {
    // TODO: respond with `offline.html` as the final fallback for page requests
    // and use appropriate response for other cases
    return err;
  }));
}

function handleWithNetwork(event) {
  return event.respondWith(fetch(event.request));
}

function handleRequests(event) {
  const requestURL = new URL(event.request.url);

  if (isNetworkOnlyRequest(requestURL, event.request.method)) {
    return handleWithNetwork(event);
  }

  if (isPageRequest(requestURL) || isNetworkThenCacheRequest(requestURL, event.request.method)) {
    // To avoid serving stale content after a publish
    // always fetch the markup from origin and use cache only when the user is offline
    return handleWithNetworkThenCache(event);
  }

  return handleWithCacheThenNetwork(event);
}

self.addEventListener('fetch', handleRequests);