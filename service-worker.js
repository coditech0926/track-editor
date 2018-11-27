var filesToCache = [
  './css/activities.css',
  './css/dark-bottom.css',
  './css/draganddrop.css',
  './css/images/layers-2x.png',
  './css/images/layers.png',
  './css/leaflet.css',
  './css/Leaflet.Elevation-0.0.4.css',
  './css/l.geosearch.css',
  './css/wtracks.css',
  './img/alert.png',
  './img/donate-paypal.png',
  './img/favicon.ico',
  './img/geosearch.png',
  './img/marker-icon-2x.png',
  './img/marker-icon.png',
  './img/marker-shadow-2x.png',
  './img/marker-shadow.png',
  './img/mylocation.png',
  './img/spinner.gif',
  './img/wtracks-icon-1x.png',
  './img/wtracks-icon-2x.png',
  './img/wtracks-icon-4x.png',
  './js/activities.js',
  './js/config.js',
  './js/cookieconsent.min.js',
  './js/d3.v3.min.js',
  './js/dataset.js',
  './js/draganddrop.js',
  './js/FileSaver.js',
  './js/jquery.flot.min.js',
  './js/jquery.min.js',
  './js/jscolor.min.js',
  './js/l.control.geosearch.js',
  './js/Leaflet.Editable.js',
  './js/Leaflet.Elevation-0.0.4.js',
  './js/leaflet.filelayer.js',
  './js/leaflet.js',
  './js/leaflet.polyprune.js',
  './js/leaflet.polystats.js',
  './js/leaflet.polytrim.js',
  './js/leaflet-routing-machine.js',
  './js/leaflet.wmts.js',
  './js/l.geosearch.provider.openstreetmap.js',
  './js/lrm-graphhopper.js',
  './js/maps.js',
  './js/regression.js',
  './js/sw-toolbox.js',
  './js/togeojson.js',
  './js/utils.js',
  './js/wtracks.js',
  './activities.html',
  './index.html',
  './maps.html'
];

importScripts('js/sw-toolbox.js');
toolbox.options.debug = false;
toolbox.options.cache.name = 'wtracks';
toolbox.options.cache.maxEntries = 200;
toolbox.precache(filesToCache);
toolbox.router.default = toolbox.networkFirst; // toolbox.cacheFirst;
