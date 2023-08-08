const addressLat = 43;
const addressLong = 131;
const positionLat = 46;
const positionLong = 142;

const a = positionLong - addressLong;
const b = positionLat - addressLat;

const distance = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log(`${distance} км`)