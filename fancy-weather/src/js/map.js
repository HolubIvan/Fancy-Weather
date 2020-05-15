/* eslint-disable no-undef */
export default function initMapOnLayout (obj){
  mapboxgl.accessToken = 'pk.eyJ1IjoiZ29sdWJiYjEzIiwiYSI6ImNrYTZwcnY3dzA5YWMyeG9oZnh4a3FqcnMifQ.TiG6l8b-Lm5kCl9ZdzO-UA';
  const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [obj.city.coord.lon, obj.city.coord.lat],
  zoom: 9
  });
  // eslint-disable-next-line no-unused-vars
  const marker = new mapboxgl.Marker()
  .setLngLat([obj.city.coord.lon, obj.city.coord.lat])
  .addTo(map);
}

