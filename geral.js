console.log("this is working");


window.onload=function(){
    document.getElementById("menu1").addEventListener("click", Descer);
}



function Descer(){
    
    document.getElementById("dropdown").classList.toggle("active");
}