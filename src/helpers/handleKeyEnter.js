import { getAdressFromIP } from "."

export function handleKeyEnter(event){
  if(event.key === 'Enter'){
    getAdressFromIP()
  }
}