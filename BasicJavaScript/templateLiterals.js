const name="Rasim Umut ÖZKURT";
const city= "İstanbul";
let dogumyili= "1997";
let val;
val = "my name is" + name +" ı live in " + city +
    " ı was born in" + 1997 + " ı' m" + (2020 - dogumyili);
 val = ` my name is ${name} ı live in ${city} ı was born in ${dogumyili}  ı'm ${(2020-dogumyili)} years old 
 and ı m ${(2020-dogumyili>=18)?"over ":"under" }18 years old` ;

 console.log(val);
