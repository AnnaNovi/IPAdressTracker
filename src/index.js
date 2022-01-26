import {getAdressFromIP, handleKeyEnter, setInitialAdress} from './helpers';
import './index.scss';
import '../node_modules/leaflet/dist/leaflet.css';



const entryAdress = document.querySelector('#entryAdress');
const entryAdressBtn = document.querySelector('#entryAdressBtn');

setInitialAdress();

entryAdressBtn.addEventListener('click', getAdressFromIP);
entryAdress.addEventListener('keydown', handleKeyEnter);
