import L from 'leaflet';

export function getMapLayer(mapId){
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW5uYW5vdiIsImEiOiJja3l0djliZWMxaDRoMm9vN2g2dWg2dGlrIn0.g72l7Qch5MPr6RbKnTVgow', {
      attribution: 'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by Anna Novickova',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
  }).addTo(mapId);
}

