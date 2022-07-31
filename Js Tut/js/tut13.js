console.log("Welcome to Tut 13");
let y= document.getElementById("heading");
y.addEventListener("click",function(e){
    console.log(e);
    console.log(y)
})

localStorage.setItem("name","yash");
localStorage.setItem("name2","yashu");
// localStorage.clear();

let name = localStorage.getItem("name");
console.log(name);
let arr=["Bhindi","Gobi","Matar","Chola"];

// JSON.stringify converts normal string to its actual data type 
localStorage.setItem("Sabzi",JSON.stringify(arr))
let  yash =localStorage.getItem("Sabzi")
console.log(yash)
;


// We can use session storage instead of local storage . All methods are same the only difference is that session storage saves data only till website is open but  local storage saves data even after website is closed
