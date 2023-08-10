const langSelector = prompt("Please, select a language: Ru, Eng, De!");

switch (true) {
  case langSelector === "Ru":
    console.log("Добро пожаловать!");
    break;
  case langSelector === "Eng":
    console.log("Welcome!");
    break;
  case langSelector === "De":
    console.log("Willkommen!");
    break;
  default:
    console.log("error");
};
