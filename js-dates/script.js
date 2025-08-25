
document.getElementById("1.1").innerHTML = new Date("2006-11-22")
document.getElementById("1.2").innerHTML = new Date("2025-08-22")
document.getElementById("1.3").innerHTML = new Date("2006-11-22T12:00:00Z")
document.getElementById("1.4").innerHTML = new Date("2025-08-22T12:00:00-06:30")

document.getElementById("2.1").innerHTML = new Date("05/25/2025")
document.getElementById("2.2").innerHTML = new Date("10/5/2025")

document.getElementById("3.1").innerHTML = new Date("Nov 22 2006")
document.getElementById("3.2").innerHTML = new Date("22 August 2025")

document.getElementById("4.1").innerHTML = Date.parse("March 21, 2012");
document.getElementById("4.2").innerHTML = new Date(28378238256447)
//Get
const D = new Date("08/24/2025")
const Dnow = new Date()
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday" , "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
document.getElementById("5.1").innerHTML = "Year:  " + D.getFullYear();
document.getElementById("5.2").innerHTML = "Month:  " + D.getMonth();
document.getElementById("5.3").innerHTML = "Month:  " + months[D.getMonth()];
document.getElementById("5.4").innerHTML = "Date:  " + D.getDate();
document.getElementById("5.5").innerHTML = "Current hour:  " + Dnow.getHours();
document.getElementById("5.6").innerHTML = "Current Minutes:  " + Dnow.getMinutes();
document.getElementById("5.7").innerHTML = "Current Seconds:  " + Dnow.getSeconds();
document.getElementById("5.8").innerHTML = "Current MilliSeconds:  " + Dnow.getMilliseconds();
document.getElementById("5.9").innerHTML = "Day:  " + D.getDay();
document.getElementById("5.10").innerHTML = "Day:  " + days[D.getDay()];
document.getElementById("5.11").innerHTML = "Time:  " + D.getTime();
document.getElementById("5.12").innerHTML = "Datenow:  " + Date.now()
document.getElementById("5.13").innerHTML ="getTimezoneOffset:  " + D.getTimezoneOffset();


//Set
D.setFullYear("2006")

document.getElementById("6.1").innerHTML = D

D.setMonth("10")
document.getElementById("6.2").innerHTML = D

D.setDate("22")
document.getElementById("6.3").innerHTML = D

D.setHours("14")
document.getElementById("6.4").innerHTML = D

D.setMinutes("22")
document.getElementById("6.5").innerHTML = D

D.setSeconds("54")
document.getElementById("6.6").innerHTML = D

D.setMilliseconds("73")
document.getElementById("6.7").innerHTML = D
