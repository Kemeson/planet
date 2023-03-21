const map = L.map('map').setView([37.783, -122.395], 12);
L.tileLayer(
  'https://tiles.planet.com/basemaps/v1/planet-tiles/global_monthly_2020_01_mosaic/gmap/{z}/{x}/{y}.png?api_key=PLAK1454f802d1244d79a9e76e5e3ca95ace',
  {
    id: 'global_monthly',
    maxzoom: 22
  }).addTo(map);

