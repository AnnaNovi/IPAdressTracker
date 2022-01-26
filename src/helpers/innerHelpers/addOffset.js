export function addOffset(map){
  const offsety = map.getSize().y * 0.25;

  map.panBy([0, -offsety], {animate: false});
}