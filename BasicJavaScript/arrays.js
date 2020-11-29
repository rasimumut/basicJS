let names = ["umut","berkan","büşraB","büşraS","sinem","tugba"];
let years =[1997,1999,1999,1998,1999];

//get array item
console.log(names[0] + years[0]);

//set array item
names[0]="Rasim"
console.log(names[0]);

// remove item
years.pop();
names.pop();
console.log(names[5] + " " + years[5]);

// add item
names.push("tugba");
years.push(1999);
console.log(names[5] + " " + years[5]);

// indeks of
let ara = names.indexOf("Rasim");
console.log(ara);

// concat
let birles = years.concat(names);
console.log(birles);

// splice "hangi elemandan başlıyosun" + "kaç eleman siliyosun" + "ne ekliyosun"
names.splice(2,0,'mustafa');
years.splice(2,0,1998);
console.log(names[2] + " " + years[2]);

// filter
function over18(years){
      let age = 2020 - years;
      return age>=18;
}
for (let i=0 ; i<names.length ; i++){
    console.log(names[i]);
}
let onsekizyas = years.filter(over18);
console.log(onsekizyas);






