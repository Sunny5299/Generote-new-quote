const Btn = document.querySelector(".box1");
const par = document.querySelector(".par")
const author = document.querySelector(".author")

let myurl = "https://api.api-ninjas.com/v1/quotes";
const Api_key = "Aoq9LbKIE67ZX9tpNaXD0w==BV0jLGdoWIpwM2dg";



function fetchquote(){
const Xhr = new XMLHttpRequest();
Xhr.open('GET', myurl,true)

Xhr.setRequestHeader("X-Api-Key", Api_key);
let myquote = ""
let myauthor=""

Xhr.onreadystatechange = function (){
console.log(Xhr.readyState);
    if (Xhr.readyState === 4) {
        const data = JSON.parse(this.response);
        myquote = (data[0].quote)
        myauthor= (data[0].author)
        
    }
    par.innerHTML = myquote
    author.innerHTML = myauthor
    console.log(myquote)
    
}
Xhr.send();
}

function parag(){
    fetchquote();
}




Btn.addEventListener('click',parag);