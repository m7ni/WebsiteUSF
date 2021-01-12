function registolink() {
    location.href = "/registo/registo.html "
};
document.getElementById("registo").addEventListener('click', registolink);




/*
function logincertolink(){
    location.href = "/Login/logincerto/logincerto.html"
};




function loginmal(){
    document.getElementById("errado").addEventListener.style.visibility="visible";
};



*/

function validação() {
    var emailtexto = document.getElementById("email").value;
    var pw = document.getElementById("password").value;
    var verifi = /^([a-z A-Z 0-9\.-]+)@([a-z 0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    if (verifi.test(emailtexto) && pw != "") {
        location.href = "/Login/logincerto/logincerto.html";

    }
    else {

        document.getElementById("errado").style.visibility = "visible";
    }
};