function printMessage(){

   alert("Time Over");

}
function start(){
    window.setTimeout(printMessage,10000);
}

switch(window.location.hostname){

    case "www.netflix.com":
    printMessage();
        break;

    
}
