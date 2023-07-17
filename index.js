let name1=prompt("Enter the name of the first person");
name1=name1.toUpperCase();
document.getElementById("p1").innerHTML = name1;
let name2=prompt("Enter the name of the second person");
name2=name2.toUpperCase();
document.getElementById("p2").innerHTML=name2;
let randomperson=Math.floor((Math.random()*2)+1);
let tossperson;
if(randomperson===1)
{
    tossperson=name1;
}
else
{
    tossperson=name2;
}
let choice=prompt("What's your call "+tossperson+" : type (heads) or (tails) OR (h) or (t)");
choice=choice.toUpperCase();
if(choice!=="HEADS" || choice!=="TAILS" || choice!=="H" || choice!=="T")
{
    let flag=1;
    while(flag)
    {
        choice=prompt("You entered a wrong input!!! "+tossperson+" Please type (heads) or (tails) OR (h) or (t) ");
        choice=choice.toUpperCase();
        if(choice==="HEADS" || choice==="TAILS" || choice==="H" || choice==="T")
        {
            break;
        }
    }
}
let randomnumber=Math.floor(Math.random()*2)+1;
if(randomnumber===1 && tossperson===name1)
{
    document.querySelectorAll("img")[0].setAttribute("src","./images/head.jpeg");
    document.querySelectorAll("img")[1].setAttribute("src","./images/tail.jpeg");
    if(choice==="HEADS" || choice==="H")
    {
        document.querySelector("h1").innerHTML="🚩 "+name1+" wins";
    }
    else
    {
        document.querySelector("h1").innerHTML=name2+" wins 🚩";
    }
}
else if(randomnumber===2 && tossperson===name1)
{
    document.querySelectorAll("img")[0].setAttribute("src","./images/tail.jpeg");
    document.querySelectorAll("img")[1].setAttribute("src","./images/head.jpeg");
    if(choice==="TAILS" || choice==="T")
    {
        document.querySelector("h1").innerHTML="🚩 "+name1+" wins";
    }
    else
    {
        document.querySelector("h1").innerHTML=name2+" wins 🚩";
    }
}
else if(randomnumber===1 && tossperson===name2)
{
    document.querySelectorAll("img")[0].setAttribute("src","./images/head.jpeg");
    document.querySelectorAll("img")[1].setAttribute("src","./images/tail.jpeg");
    if(choice==="HEADS" || choice==="H")
    {
        document.querySelector("h1").innerHTML="🚩 "+name1+" wins";
    }
    else
    {
        document.querySelector("h1").innerHTML=name2+" wins 🚩";
    }
}
else if(randomnumber===2 && tossperson===name2)
{
    document.querySelectorAll("img")[0].setAttribute("src","./images/tail.jpeg");
    document.querySelectorAll("img")[1].setAttribute("src","./images/head.jpeg");
    if(choice==="TAILS" || choice==="T")
    {
        document.querySelector("h1").innerHTML="🚩 "+name1+" wins";
    }
    else
    {
        document.querySelector("h1").innerHTML=name2+" wins 🚩";
    }
}
    
