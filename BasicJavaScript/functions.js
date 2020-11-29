function yasHesap(dogumYili) {
    return 2020-dogumYili;
}
let ageUmut = yasHesap(1997);
console.log(ageUmut)

function emeklilik1(dogumYili,isim) {
    let yas = yasHesap(1997);
    let emeklilik = 65;
    return emeklilik-yas ;
}
if (emeklilik1>65)
    console.log("emekli oldunuz");
else
    console.log(` emekliliğe ${emeklilik1()} yıl var`);

const  sum = function (a=0,b=0) {

    var c = a+b;
    return c;
}
console.log(sum(10));
