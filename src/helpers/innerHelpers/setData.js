import {setMapPoint} from '.';

const ipAdressEl = document.querySelector('#ipAdress');
const locationEl = document.querySelector('#location');
const UTCEl = document.querySelector('#UTC');
const ISPEl = document.querySelector('#ISP');

export function setData(dataFromIP){
  setMapPoint(dataFromIP);
  ipAdressEl.innerText = dataFromIP.ip;
  locationEl.innerText = dataFromIP.location.country + '\n' + dataFromIP.location.region + '\n' + dataFromIP.location.city;
  UTCEl.innerText = dataFromIP.location.timezone;
  ISPEl.innerText = dataFromIP.isp;
  entryAdress.value = '';
}