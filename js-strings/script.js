


text = "Hello World"
textfortrim = "           Hello World            "
    document.getElementById("p1").innerHTML= "1.1) " + text.length;
    document.getElementById("p2.1").innerHTML = "2.1) " +text.charAt(0);
    document.getElementById("p2.2").innerHTML = "2.2) " +text.charAt(6);
    document.getElementById("p3.1").innerHTML = "3.1) " +text.charCodeAt(0);
    document.getElementById("p3.2").innerHTML = "3.2) " +text.charCodeAt(6);
    document.getElementById("p4.1").innerHTML = "4.1) " +text.codePointAt(0);
    document.getElementById("p4.2").innerHTML = "4.2) " +text.codePointAt(6);
    document.getElementById("p5.1").innerHTML = "5.1) " +text.at(0);
    document.getElementById("p5.2").innerHTML = "5.2) " +text.at(6);
    document.getElementById("p6.1").innerHTML = "6.1) " +text.concat(" Salam");
    document.getElementById("p6.2").innerHTML = "6.2) " +text.concat(" Necesen");
    document.getElementById("p7.1").innerHTML = "7.1) " +text.slice(0, 5);
    document.getElementById("p7.2").innerHTML = "7.2) " +text.slice(-6,-1);
    document.getElementById("p8.1").innerHTML = "8.1) " +text.substring(0, 5);
    document.getElementById("p8.2").innerHTML = "8.2) " +text.substring(6,11);
    document.getElementById("p9.1").innerHTML = "9.1) " +text.toUpperCase();
    document.getElementById("p9.2").innerHTML = "9.2) " +text.toLowerCase();
    document.getElementById("p10.1").innerHTML = "10.1) " +text.isWellFormed();
    document.getElementById("p10.2").innerHTML = "10.2) " +text.toWellFormed();
    document.getElementById("p11.1").innerHTML = "11.1) " +textfortrim.trim() + "  length: " + textfortrim.trim().length;
    document.getElementById("p11.2").innerHTML = "11.2) " + textfortrim.trimStart() + "  length: " + textfortrim.trimStart().length;
    document.getElementById("p12.1").innerHTML = "12.1) " +text.padStart(15 , "X");
    document.getElementById("p12.2").innerHTML = "12.2) " +text.padEnd(15 , "X");
    document.getElementById("p13.1").innerHTML = "13.1) " +text.repeat(2);
    document.getElementById("p14.1").innerHTML = "14.1) " +text.replace("Hello" , "Salam");
    document.getElementById("p14.2").innerHTML = "14.2) " +text.replace("World" , "Dunya");
    document.getElementById("p15.1").innerHTML = "15.1) " +text.split(" ");
    document.getElementById("p16.1").innerHTML = "16.1) " +text.indexOf("Hello")
    document.getElementById("p16.2").innerHTML = "16.2) " +text.indexOf("World")
    document.getElementById("p17.1").innerHTML = "17.1) " +text.search("Hello")
    document.getElementById("p17.2").innerHTML = "17.2) " +text.search("World")
    document.getElementById("p18.1").innerHTML = "18.1) " +text.match("lo")
    document.getElementById("p19.1").innerHTML = "19.1) " +text.includes("Hello")
    document.getElementById("p19.2").innerHTML = "19.2) " +text.includes("Salam")
    document.getElementById("p20.1").innerHTML = "20.1) " +text.startsWith("Hello")
    document.getElementById("p20.2").innerHTML = "20.2) " +text.startsWith("Salam")
    
