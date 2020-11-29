var hak=5;
var sayi = Math.floor((Math.random()*10)+1);
console.log(sayi);
let tahmin;
while (hak>0){
    tahmin = Number(prompt("bir sayı giriniz: "));
    if (sayi==tahmin){
        console.log("bildiniz");
        break;
    }
    else if (sayi>tahmin){
        console.log("aşşağı");
    }
    else{
        console.log("yukarı");
    }
    hak--;
}
