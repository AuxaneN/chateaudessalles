import L from 'leaflet'

const Icon = L.icon({
  iconUrl: require('../../../static/markerIcon.png'),
  iconSize: [34, 40],
  iconAnchor: [0, 40],
  popupAnchor: [-3, -76],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null
});

export {Icon}