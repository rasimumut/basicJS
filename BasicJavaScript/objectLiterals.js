let person ={
    names: "Umut",
    age: 1997,
    hobbies:["guitar","music"],
    adress:{
        city: ["düzce","istanbul","antalya"]
    },
    getBirthYear : function(){
        return 2020-this.age;
    }
}

let bilgi1 = person.names;
let bilgi2 = person.age;
let bilgi3 = person.hobbies[1];
let bilgi4 = person.adress.city[0];
console.log(bilgi1);
console.log(bilgi2);
console.log(bilgi3);
console.log(bilgi4);
console.log(person.getBirthYear());


