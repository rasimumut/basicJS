//Rasim Umut ÖZKURT
let kg = 75;
let boy = 1.80;
let endeks;
endeks= kg / (boy*boy);
console.log("Boy Kilo Endeksi: " + endeks.toFixed(2));

if (endeks<18.4)
    console.log("Zayıf");
else if (endeks<24.9)
    console.log("İdeal");
else
    console.log("Sisman");
