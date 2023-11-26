function currencyConverter(amount, sourceCurrency, targetCurrency) {
  let rate;

  switch (sourceCurrency) {
    case "USD":
      switch (targetCurrency) {
        case "USD":
          rate = 1;
          break;
        case "EUR":
          rate = 0.91;
          break;
        case "RUB":
          rate = 87.77;
          break;
        default:
          rate = null;
      }
      break;
    case "EUR":
      switch (targetCurrency) {
        case "USD":
          rate = 1.1;
          break;
        case "EUR":
          rate = 1;
          break;
        case "RUB":
          rate = 96.19;
          break;
        default:
          rate = null;
      }
      break;
    case "RUB":
      switch (targetCurrency) {
        case "USD":
          rate = 1 / 87.77;
          break;
        case "EUR":
          rate = 1 / 96.19;
          break;
        case "RUB":
          rate = 1;
          break;
        default:
          rate = null;
      }
      break;
    default:
      rate = null;
  }

  return rate !== null ? amount * rate : null;
}

console.log(currencyConverter(1000, "RUB", "RUB"));