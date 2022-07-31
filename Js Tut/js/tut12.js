console.log("This is Tut 13");

let element =document.getElementsByClassName("child");

let y =document.getElementById("heading");
console.log(y);

y.addEventListener('click',function(e){
    // location.href='//www.google.com'
    variable =e.target;
    console.log(variable)
    
    console.log("You have clicked me");
    console.log(e)
});

