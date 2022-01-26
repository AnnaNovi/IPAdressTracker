import { getMapLayer, addOffset } from ".";
import L from 'leaflet';
import iconSVG from '../../../images/icon-location.svg'

const map = L.map('map',{
  center: [50.5, 30.5],
  zoom: 13,
  zoomControl: false
});
const icon = L.icon({
  iconUrl: iconSVG,
  iconSize: [30, 40],
});
const controls = L.control.zoom({
  position: 'bottomright',
})

export function setMapPoint(dataFromIp){
  const {lat, lng} = dataFromIp.location;
  const popup = L.popup();
  const marker = L.marker([lat, lng],{icon:icon})

  map.setView([lat, lng])
  getMapLayer(map);

  marker.addTo(map);
  controls.addTo(map);
  popup.setLatLng([lat, lng]).setContent(`${(dataFromIp.as?.domain) ? `<a target='_blank' href=${dataFromIp.as?.domain}>${dataFromIp.as?.domain}</a>` : 'no site here'}`).openOn(map);

  marker.addEventListener('click', () => popup.openOn(map));

  if(window.matchMedia("(max-width: 1024px)").matches){
    addOffset(map);
  }
}
