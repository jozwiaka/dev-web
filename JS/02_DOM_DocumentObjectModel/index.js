var hello = document.firstElementChild.lastElementChild.firstElementChild;
hello.innerHTML = "<em>Good Bye</em>";
hello.style.color = "red";
document.querySelector("h1").style.fontSize = "5rem"; //matches first h1 element

var checkbox = document.getElementById('bg-checkbox');
var body = document.getElementsByTagName('body')[0];

checkbox.addEventListener('change', function(){
    if(this.checked){
        body.style.backgroundColor='lightblue';
    }
    else{
        body.style.backgroundColor='white';
    }
    document.querySelectorAll("button").forEach(btn => btn.classList.toggle("invisible"));
    console.log(document.querySelector("button").classList);
})

document.querySelector("a").setAttribute("href","https://getbootstrap.com/");