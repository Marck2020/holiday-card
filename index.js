/* FUNCTIONS */
document.getElementById("italian-button").onclick = function () { italianText()};
document.getElementById("spanish-button").onclick = function () { spanishText()};
document.getElementById("english-button").onclick = function () { englishText()};
document.getElementById("german-button").onclick = function () { germanText()};
 


/* BUTTONS */
function italianText() {
    document.getElementById("text").innerHTML ="BUON &nbsp; 2021!";
    document.getElementById("text").style.fontSize ="32px";
    document.getElementById("text").style.marginTop ="88px";

}

function spanishText() {
    document.getElementById("text").innerHTML ="FELIZ &nbsp; 2021!";
    document.getElementById("text").style.fontSize ="32px";
    document.getElementById("text").style.marginTop ="88px";

}

function germanText() {
    document.getElementById("text").innerHTML ="FROHES NEUES 2021!";
    document.getElementById("text").style.marginTop ="48px";

}

function englishText() {
    document.getElementById("text").innerHTML ="HAPPY &nbsp; NEW 2021!";
    document.getElementById("text").style.fontSize ="32px";
    document.getElementById("text").style.marginTop ="48px";

}
