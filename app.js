let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07,  // us dollar
    "GBP": 0.87   // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let euros = valueInDollar / oneEuroIs.USD;
    let yen = euros * oneEuroIs.JPY;
    return yen;
}

const fromYenToPound = function(valueInYen) {
    let euros = valueInYen / oneEuroIs.JPY;
    let pounds = euros * oneEuroIs.GBP;
    return pounds;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };

