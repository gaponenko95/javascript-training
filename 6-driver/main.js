/*
Написать код (одной строкой), который позволяет проверить возможность вести машину по следующим параметрам:
hasLicence - имеет права 
age - возраст
isDrunk - пьян
Пользователь может вести машину только если ему больше 18 он имеет права и не пьян. Если может - вернуть 'может', если не может - венуть'не может'.
*/

const hasLicence = true;
const age = 18;
const isDrunk = false;

console.log(hasLicence && age >= 18 && !isDrunk ? "Может" : "Не может");