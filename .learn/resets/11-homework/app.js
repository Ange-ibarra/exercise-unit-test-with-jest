// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromDollarToYen= function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInYen = valueInDollar * 156.5;
    // Retornamos el valor en dólares
    return valueInYen;
}
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromYenToPound = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}


module.exports = { sum, fromEuroToDollar }
module.exports = { sum, fromDollarToYen }
module.exports = { sum, fromYenToPound }