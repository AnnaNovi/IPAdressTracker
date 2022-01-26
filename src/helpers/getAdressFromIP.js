import { validateAdress, setData, createModal } from "./innerHelpers";

export function getAdressFromIP(){

  if(validateAdress(entryAdress.value)){
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_xrRjjq80SaXskk1Mbm1AOtaP2ljfk&ipAddress=${entryAdress.value}`;
    fetch(url)
      .then(response => response.json())
      .then(setData)
  } else {
    createModal();
  }
}
