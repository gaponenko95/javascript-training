function RUB_USD_EUR(amount, curCurrency, getCurrency) {
  curCurrency === "RUB";
  if (getCurrency === "USD") {
    return amount * 0.01 + getCurrency;
  } else if (getCurrency === "EUR") {
    return amount * 0.012 + getCurrency;
  } else if (getCurrency === "RUB") {
    return amount + getCurrency;
  } else {
    return null;
  }
}
function USD_RUB_EUR(amount, curCurrency, getCurrency) {
  curCurrency === "USD";
  if (getCurrency === "RUB") {
    return amount * 100 + getCurrency;
  } else if (getCurrency === "EUR") {
    return amount * 0.91 + getCurrency;
  } else if (getCurrency === "USD") {
    return amount + getCurrency;
  } else {
    return null;
  }
}
function EUR_USD_RUB(amount, curCurrency, getCurrency) {
  curCurrency === "EUR";
  if (getCurrency === "USD") {
    return amount * 0.91 + getCurrency;
  } else if (getCurrency === "RUB") {
    return amount * 110.68 + getCurrency;
  } else if (getCurrency === "EUR") {
    return amount + getCurrency;
  } else {
    return null;
  }
}
// Первая общая функция
function currencyConverter(amount, curCurrency, getCurrency) {
  if (curCurrency === "EUR") {
    return EUR_USD_RUB(amount, curCurrency, getCurrency);
  } else if (curCurrency === "USD") {
    return USD_RUB_EUR(amount, curCurrency, getCurrency);
  } else if (curCurrency === "RUB") {
    return RUB_USD_EUR(amount, curCurrency, getCurrency);
  } else {
    return null;
  }
}
// Вторая общая функция
function currencyConverter2(amount, curCurrency, getCurrency) {
  switch (curCurrency) {
    case "EUR":
      return EUR_USD_RUB(amount, curCurrency, getCurrency);
    case "USD":
      return USD_RUB_EUR(amount, curCurrency, getCurrency);
    case "RUB":
      return RUB_USD_EUR(amount, curCurrency, getCurrency);
    default:
      return null;
  }
}

console.log(currencyConverter2(1000, "RUB", "USD"));
