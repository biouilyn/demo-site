'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "662abb934599bdc4a362306625e2318d",
"index.html": "4cc5dbc3d0f69a75670fa5e10efa27b0",
"/": "4cc5dbc3d0f69a75670fa5e10efa27b0",
"main.dart.js": "cafa18861bfe8edb7fa2285b58ba1f4e",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "19f72a9a57ef21527536ac677492c1af",
"assets/AssetManifest.json": "383bd86abc1538f7753f35147149bb1b",
"assets/NOTICES": "d223042add862a3a4e5e34a01fd1236f",
"assets/FontManifest.json": "9371b632773b620d220232e2731b4b7f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "09e011be7d55724b4d1591bac96a3478",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/treatment_view_back.png": "ec3eeb4c5c42aa9b67d7d04014362001",
"assets/assets/images/care.png": "4557f5c3eae86ec62501cf6ae97009b5",
"assets/assets/images/payment_details_phone.png": "92c78dcca56ad7567dea6617f97c1802",
"assets/assets/images/dummy_people.png": "c75833a5d6f6c2cb77c1a0bac5dca927",
"assets/assets/images/back_dummy_view.png": "702bc842c98555d99c72c105ab28df70",
"assets/assets/images/home_active.png": "0bb4f45569a24b92f1a4e2762492d863",
"assets/assets/images/programs_active.png": "0b47359ceb95959d1f65c7465c5afaa5",
"assets/assets/images/program_dummy.mp4": "4878c17ab4325b22d88bcf05ac06be8a",
"assets/assets/images/discover.png": "cbac3474f12af825cbed651aef6b6f7d",
"assets/assets/images/chapter_icon.png": "93a364c8d626a19815c3bf92b9fd093b",
"assets/assets/images/boy.mp4": "40392553856f5d0581b890a4bbee96cc",
"assets/assets/images/money_back.png": "59f5b6f6fbf9362a91671b4b9baec366",
"assets/assets/images/app_icon.png": "6b772215fb6fc1c50f2a3f2fd0574340",
"assets/assets/images/care_active.png": "4f6d1f448c80d5ea2089dfd9271a821d",
"assets/assets/images/upload_dummy_photo.png": "a11c2fd58749906550fbfcc88007e1ed",
"assets/assets/images/concierge_back.png": "18cae3f9e0520c87bcf6fc6647c278af",
"assets/assets/images/front_dummy_view.png": "63b196c2f59b198916503e627327e79d",
"assets/assets/images/programs.png": "9c03a1b0eb6c19eb95ed8db13ceeb4a2",
"assets/assets/images/splash.mp4": "66d2bd4c81fcf09720852b595c9a5ddf",
"assets/assets/images/start_visit.png": "92d21092970fc39dff39891331f9a08d",
"assets/assets/images/visa.png": "8a44c58098dbe62c0c4d30f5914be2ec",
"assets/assets/images/home.png": "0089b25e423e0bb35fc1cc15eb2f7b97",
"assets/assets/images/shop.png": "14b3136a15f827f0e8e576002868f175",
"assets/assets/images/logo_name.png": "f76d1ee7a289a55275ab6952ef8f0810",
"assets/assets/images/health_intro_1.png": "8384842579ff1a2874f722df96eb13a5",
"assets/assets/images/get_started_back_video.mp4": "4839e3a12532645c46ff521bf2179d43",
"assets/assets/images/answer_icon.png": "d7b50d7581aeb36ce2ff3ec812ee72f1",
"assets/assets/images/health_intro_2.png": "8591be54318a168fc23336e50d340607",
"assets/assets/images/doctor_icon.png": "d6a6e6d4c959f3da1cad4c648e8c9330",
"assets/assets/images/shop_active.png": "167f557cd3bca6912365a9ac64047046",
"assets/assets/images/free_shipping.png": "2cf46c52de03a2f11781aa63d00fba7b",
"assets/assets/images/expert_reco_back.png": "c1fa4a12275341fd24fa9a124a0c78b2",
"assets/assets/images/allow_noti_back.png": "1ea88cda45b32e055e0e1eb71109e4aa",
"assets/assets/images/continued_support.png": "7a9c27db410b10a8afe50dc023415ebf",
"assets/assets/images/logo.png": "ec2832d4c5d32e05ece03a0393603479",
"assets/assets/images/health_talk.png": "f6327aab2d9aa2241d89be0d4addba05",
"assets/assets/images/upload_dummy_nid.png": "d79a660ca7f4f9fa5226e521184bc4e0",
"assets/assets/images/calendar_icon.png": "c0f9d70befbfaa66b5d702b77effb295",
"assets/assets/images/half_logo.png": "928ae451196f316ba119a54031dc4379",
"assets/assets/images/mastercard.png": "7d3a5e7ce5527de46e7aec3a20500c4e",
"assets/assets/images/videoplayback.mp4": "19bcb9b80757ab59181b5cdfe8ac4bad",
"assets/assets/images/american_express.png": "a8e0f8567d2e089f7a89f5acbc1b05d0",
"assets/assets/vectors/fire.svg": "4e669cf53b20289fea1f6700427b01c7",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Cairo-SemiBold.ttf": "b9eb3a03009d618aa53a0ca8eaa6ab4b",
"assets/assets/fonts/Cairo-Medium.ttf": "dcb85dee1c4674ba69ab76c7275b515e",
"assets/assets/fonts/Cairo-Regular.ttf": "374ef4fe60ef13426296c292bba5e237",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
