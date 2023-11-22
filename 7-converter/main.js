function RUB_USD_EUR(amount, curCurrency, getCurrency) {
  curCurrency === "RUB"
  switch (getCurrency) {
    case "USD":
      return amount * 87.77
    case "EUR":
      return amount * 96.19
    case "RUB":
      return amount
    default:
      return null
  }
  
}

function USD_RUB_EUR(amount, curCurrency, getCurrency) {
  curCurrency === "USD"
  switch (getCurrency) {
    case "USD":
      return amount
    case "EUR":
      return amount * 0.91
    case "RUB":
      return amount * 87.77
    default:
      return null
  }
}

function EUR_USD_RUB(amount, curCurrency, getCurrency) {
  curCurrency === "EUR"
  switch (getCurrency) {
    case "USD":
      return amount * 1.10
    case "EUR":
      return amount
    case "RUB":
      return amount * 96.19
    default:
      return null
  }
}

function currencyConverter(amount, curCurrency, getCurrency) {
  switch (curCurrency) {
    case "USD":
      return USD_RUB_EUR(amount, curCurrency, getCurrency)
    case "EUR":
      return EUR_USD_RUB(amount, curCurrency, getCurrency)
    case "RUB":
      return RUB_USD_EUR(amount, curCurrency, getCurrency)
    default:
      return null
  }
}

console.log(currencyConverter(1000, "RUB", "RUB"));



































