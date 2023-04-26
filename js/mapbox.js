mapboxgl.accessToken =
  "pk.eyJ1Ijoib2xzY3Jpc3RpYW4iLCJhIjoiY2w1MDFwcDFjMjJ0NTNibW50dHZmcjNldiJ9.Xr_4lUlRN69zpFb2VCXXRA";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [-75.271365, 6.1271183], // starting position [lng, lat]
  zoom: 11, // starting zoom
  projection: "globe", // display the map as a 3D globe
});

const marker = new mapboxgl.Marker()
  .setLngLat([-75.271365, 6.1271183])
  .addTo(map);
