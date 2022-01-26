import { setData } from "./innerHelpers";

export function setInitialAdress(){
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_xrRjjq80SaXskk1Mbm1AOtaP2ljfk&ipAddress=8.8.8.8`;
    fetch(url)
      .then(response => response.json())
      .then(setData)
}