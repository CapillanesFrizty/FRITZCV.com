const currentyear = new Date();
var year = currentyear.getFullYear();

const copyright = document.getElementById("copoyright").innerText = "Copyright " +year;



function toCookingPage() {
    window.location = "tocook.html";
}

function toProgramPage(){
    window.location = "program.html";
}

function totravel(){
    window.location = "travel.html";
}