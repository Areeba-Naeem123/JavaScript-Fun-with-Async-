//  random color generator 

const randomColor=function(){
    const hex="0123456789ABCDEF";
    let color='#';
    let randomNUM
    for (let index = 0; index < 6; index++) {
        randomNUM=Math.floor((Math.random())*16);

color+=hex[randomNUM]
    }
    return color;

}
const ChangebgColor=function(){
    if (!intervelID){
        document.body.style.backgroundColor=randomColor()

    }

}
let intervelID
const startChanging=function(){
 intervelID=setInterval(ChangebgColor,1000)
}



const StopChanging=function(){
clearInterval(intervelID);
//  for more clear code instead of overwriting clear the variable 
intervelID=null;

}

document.querySelector('#start').addEventListener('click',startChanging);

document.querySelector('#stop').addEventListener('click',StopChanging);


