// 1. Función que determina si un año es bisiesto
function esBisiesto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

// Pruebas
console.log(esBisiesto(2020)); // true
console.log(esBisiesto(1900)); // false
console.log(esBisiesto(2000)); // true
console.log(esBisiesto(2021)); // false

// 2. Función que convierte grados Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Pruebas
console.log(celsiusAFahrenheit(0)); // 32
console.log(celsiusAFahrenheit(100)); // 212
console.log(celsiusAFahrenheit(-40)); // -40
console.log(celsiusAFahrenheit(37)); // 98.6

// 3. Función que devuelve el mayor de dos números
function mayorDeDos(n1, n2) {
    return n1 > n2 ? n1 : n2;
}

// Pruebas
console.log(mayorDeDos(5, 10)); // 10
console.log(mayorDeDos(20, 15)); // 20
console.log(mayorDeDos(-5, -10)); // -5
console.log(mayorDeDos(0, 0)); // 0

// 4. Función que convierte una cantidad de minutos en una cadena que indique cuántas horas y minutos corresponden
function convertirMinutos(minutos) {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
    return `${horas} horas y ${minutosRestantes} minutos`;
}

// Pruebas
console.log(convertirMinutos(130)); // "2 horas y 10 minutos"
console.log(convertirMinutos(60)); // "1 horas y 0 minutos"
console.log(convertirMinutos(190)); // "1 horas y 30 minutos"
console.log(convertirMinutos(0)); // "0 horas y 0 minutos"

// 5. Función que determina si un número está dentro de un rango dado (incluyendo los límites)
function estaEnRango(numero, inicio, fin) {
    return numero >= inicio && numero <= fin;
}

// Pruebas
console.log(estaEnRango(5, 1, 10)); // true
console.log(estaEnRango(0, 1, 10)); // false
console.log(estaEnRango(10, 10, 10)); // true
console.log(estaEnRango(15, 1, 10)); // false

// 6. Función que calcula el precio final después de aplicar un porcentaje de descuento a un precio inicial
function calcularPrecioFinal(precioInicial, descuento) {
    return precioInicial - (precioInicial * (descuento / 100));
}

// Pruebas
console.log(calcularPrecioFinal(100, 20)); // 80
console.log(calcularPrecioFinal(200, 50)); // 100
console.log(calcularPrecioFinal(150, 10)); // 135
console.log(calcularPrecioFinal(80, 25)); // 60

// 7. Función que determina si una persona puede votar según su edad
function puedeVotar(edad) {
    return edad >= 18;
}

// Pruebas
console.log(puedeVotar(18)); // true
console.log(puedeVotar(17)); // false
console.log(puedeVotar(20)); // true
console.log(puedeVotar(15)); // false

// 8. Función que calcula el área de un triángulo dados su base y altura
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Pruebas
console.log(calcularAreaTriangulo(10, 5)); // 25
console.log(calcularAreaTriangulo(7, 3)); // 10.5
console.log(calcularAreaTriangulo(0, 5)); // 0
console.log(calcularAreaTriangulo(10, 0)); // 0