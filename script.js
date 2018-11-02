window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    showstart();

}

function showstart() {
    console.log("showStart");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#start").classList.add("show");
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").addEventListener("click", hideStart);

    document.querySelector("#settingsknap").classList.add("pulse");


}

function hideStart() {
    console.log("hideStart");
    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");
    docum.querySelector("#start").addEventListener("animationend", startGame);

}

function startGame() {
    console.log("startGame");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#start").classList.remove("show");

    document.querySelector("#vand").classList.add("falling");
    document.querySelector("#vand2").classList.add("falling");
    document.querySelector("#vand3").classList.add("falling");
    document.querySelector("#vand4").classList.add("falling");
    document.querySelector("#vand5").classList.add("falling");
    document.querySelector("#vand6").classList.add("falling");
    document.querySelector("#vand7").classList.add("falling");
    document.querySelector("#vand8").classList.add("falling");
    document.querySelector("#vand9").classList.add("falling");
    document.querySelector("#vand10").classList.add("falling");
    document.querySelector("#vand11").classList.add("falling");
    document.querySelector("#vand12").classList.add("falling");
    document.querySelector("#vand13").classList.add("falling");
    document.querySelector("#vand14").classList.add("falling");
    document.querySelector("#vand15").classList.add("falling");
    document.querySelector("#vand16").classList.add("falling");
    document.querySelector("#vand17").classList.add("falling");
    document.querySelector("#vand18").classList.add("falling");
    document.querySelector("#vand19").classList.add("falling");

}

function vandforsvind() {
    console.log("vandForsvind");

    document.querySelector("#vand").classList.add("paused");
    document.querySelector("#vand").classList.add("dissapear");

}

function gameStatus() {

    if (life <= 0) {
        gameOver();
    }

}

function gameOver() {
    console.log("gameOver");



}

function levelComplete() {



}
