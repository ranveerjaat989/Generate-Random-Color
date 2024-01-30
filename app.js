let button=document.querySelector("button");
button.addEventListener("click",function()
{
    let randomcolor=getRandomColor();
    let h3=document.querySelector("h3");
    let div=document.querySelector("div");
    div.style.backgroundColor=randomcolor;
     h3.innerText=randomcolor;
});

function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}