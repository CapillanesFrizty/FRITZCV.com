const currentyear = new Date();
var year = currentyear.getFullYear();

const copyright = document.getElementById("copoyright").innerText = "Copyright " +year;



function toCookingPage() {
    window.location = "./subhtml/tocook.html";
}

function toProgramPage(){
    window.location = "./subhtml/program.html";
}

function totravel(){
    window.location = "./subhtml/travel.html";
}