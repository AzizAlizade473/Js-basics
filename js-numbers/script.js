let number= 12.345

document.getElementById("0").innerHTML = "The Target Is: " + number
//to string
document.getElementById("1.1").innerHTML = number.toString() + "  |  the type: " + (typeof number.toString());
//toExponential
document.getElementById("2.1").innerHTML = number.toExponential(0)
document.getElementById("2.2").innerHTML = number.toExponential(2)
document.getElementById("2.3").innerHTML = number.toExponential(4)
//toFixed
document.getElementById("3.1").innerHTML = number.toFixed(0)
document.getElementById("3.2").innerHTML = number.toFixed(2)
//toPrecision
document.getElementById("4.1").innerHTML = number.toPrecision()
document.getElementById("4.2").innerHTML = number.toPrecision(2)
//valueOf
document.getElementById("5.1").innerHTML = number.valueOf()
document.getElementById("5.2").innerHTML = (17+18).valueOf(2)
//Number()
document.getElementById("6.1").innerHTML = Number(number)
document.getElementById("6.2").innerHTML = Number(true)
document.getElementById("6.3").innerHTML = Number(false)
document.getElementById("6.4").innerHTML = Number("123")
document.getElementById("6.5").innerHTML = Number("75.99")
document.getElementById("6.6").innerHTML = Number("Aziz")
//ParseInt
document.getElementById("7.1").innerHTML = parseInt(number)
document.getElementById("7.2").innerHTML = parseInt(true)
document.getElementById("7.3").innerHTML = parseInt(-10)
document.getElementById("7.4").innerHTML = parseInt("Aziz")
//ParseFloat
document.getElementById("8.1").innerHTML = parseFloat(number)
document.getElementById("8.2").innerHTML = parseFloat(true)
document.getElementById("8.3").innerHTML = parseFloat(-10)
document.getElementById("8.4").innerHTML = parseFloat("Aziz")
//is integer
document.getElementById("9.1").innerHTML = Number.isInteger(number)
document.getElementById("9.2").innerHTML = Number.isInteger(10)
//is Finite
document.getElementById("10.1").innerHTML = Number.isFinite(number)
document.getElementById("10.2").innerHTML = Number.isFinite("Hello")
//is NaN
document.getElementById("11.1").innerHTML = Number.isNaN(number)
document.getElementById("11.2").innerHTML = isNaN("Hello")
//is SafeInteger
document.getElementById("12.1").innerHTML = Number.isSafeInteger(10)
document.getElementById("12.2").innerHTML = Number.isSafeInteger(12345678901234567890)
