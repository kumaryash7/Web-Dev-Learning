console.log("TUt 11");


 
  let element =document.createElement('li');

  element.className="child";
  element.style.color="red";


  let ul =document.querySelector('ul.list');

console.log(element);

ul.innerHTML=`<b>Hello</b>`
console.log(ul);

let yash=document.createElement('h3');

yash.id="yash";
yash.className="yaash";
let tnode =document.createTextNode("Wow ky ladka hai");

yash.append(tnode);

ul.replaceWith(yash)
console.log(ul)
