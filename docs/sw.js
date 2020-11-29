"use strict";

const CACHE_NAME = 'docs-1606668434639';
const SW_SUPPORTED_PROTOCOL_REGEX = /http(s?):/;
const pageUrls = JSON.parse('["/","/a-propos","/projets","/privacy-policy","/contact","/markup/ad","/markup/paywall"]');
const staticAssets = JSON.parse('["//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/4524c1974583bbdd/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/dde6606fd94c45b/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/87404774dc5886ba/styles.css","https://img1.wsimg.com/poly/v2/polyfill.min.js?unknown=polyfill&flags=gated&features=default%2Cfetch%2CArray.prototype.%40%40iterator%2CArray.prototype.find%2CArray.prototype.findIndex%2CFunction.name%2CNumber.isFinite%2CPromise%2CString.prototype.repeat%2CMath.sign%2CMath.trunc%2CArray.prototype.includes%2CObject.entries%2CObject.values%2CObject.is%2CIntersectionObserver%2CIntl.~locale.en-GB","//img1.wsimg.com/blobby/go/gpub/20f4936a46afa139/script.js","//img1.wsimg.com/blobby/go/gpub/2188bb0881d579fc/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/e63145e2df639028/script.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/layout24-87b00614.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/index3-9d3c1b2c.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/Layout-eca4b140.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/index8-4f9780ae.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/NavItems-c8860a9b.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/SplitNav-61225a14.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/legacyOverrides-b3a5b619.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/linkIndicator-71e8cbdc.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/loaders-cdd1ec86.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/modernThinRound-f0ab7555.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/SubTagline-5336804e.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/utils-6f80a19a.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/video-2d5f0f4d.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/utils2-523b4d00.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/utils3-f3f78e42.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/Background-62f46fb7.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/defaultSocialIconPack-de218de9.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/Foreground-707c82cd.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/HEADER/header9-3dacd7f7.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/HEADER/c/defaultProps-620e170a.js","//img1.wsimg.com/ceph-p3-01/website-builder-data-prod/static/widgets/UX.3.71.5.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/8eaad94fab10688a/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/97d81dc742e6694/script.js","//img1.wsimg.com/blobby/go/gpub/a7bf6448c9e8f59f/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/4d2b39f340acaeab/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/5cce30771e56d4c1/script.js","//fonts.googleapis.com/css?family=Muli:400&display=swap","//fonts.googleapis.com/css?family=Quicksand:400,700&display=swap","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/da69bd569ecc5954/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/22548a366bc9db62/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/ed4cab70d2f8b609/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/50cd01a42abe3970/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/87ed71e050871137/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/d082091190022057/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/ec280c50e196c72c/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/51771fe5cc4d7ed4/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/f83f28153713374d/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/30071de0df264649/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/52d58843ee10c88/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/7bf703a0398cde0e/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/101cf996171a769f/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/ddc7e92c22f4ad54/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/7ee62980967cea6a/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/ca830b48818b9065/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/ec9f5a5b27d53d19/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/a0d9e60cdaab9260/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/79aef5b84c74026a/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/37bc4eaac30da367/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/ed201f5056f60adc/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/65b15ff79caeb1ac/styles.css","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/78818e3ecd5073ad/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/f1f5ccacdc3e856/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/eefbb11efbe42ad0/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/e74cd840d22b0bb0/script.js","//img1.wsimg.com/blobby/go/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/gpub/efea2c2bb502c320/script.js"]');
const networkOnlyUrls = JSON.parse('["https://api.ola.godaddy.com","https://f0800492-ce65-4f6c-9bad-8a5cc0515c4b.onlinestore.godaddy.com","https://img.secureserver.net/t/1/tl/event","https://img.test-secureserver.net/t/1/tl/event","https://www.google-analytics.com/collect","https://calendar.apps.dev-secureserver.net","https://calendar.apps.test-secureserver.net","https://calendar.apps.secureserver.net"]');
const networkOnlyUrlsRegex = JSON.parse('["docs/m/api/.*","docs(?:/.*)?/ola/services/.*","docs/ola/meetings/.*","securepay.godaddy.com/api/apps/ola/accounts/.*"]').map(regexString => new RegExp(regexString));
const networkThenCacheUrls = JSON.parse('["https://blog.apps.secureserver.net/v1/website/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/feed/post/","https://blog.apps.secureserver.net/v1/website/f0800492-ce65-4f6c-9bad-8a5cc0515c4b/feed"]');
const networkThenCacheUrlsRegex = JSON.parse('["docs(?:/.*)?/f/.*"]').map(regexString => new RegExp(regexString));
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