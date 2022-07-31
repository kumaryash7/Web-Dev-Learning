console.log("Tut 7");
console.time("Time");

let num = String(100);
console.log(num);
const mixed =['arr',10,10,[10,20]];
console.log(mixed);
// console.log(mixed.lastIndexOf(10));

console.log(mixed.push("yash"))

const marks =[20,210,201,88,5,63,2];

console.log(marks.reverse());

let myObj ={

name:"Yash",

channel:"Yooutube",
isActive:"true",



}
console.log(myObj);
console.log(myObj.channel);

for(let key in myObj){
    console.log(myObj[key])
}
console.timeEnd("Time")