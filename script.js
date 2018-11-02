window.addEventListener("load", start);

function start() {
    console.log("start");
    document.querySelector("#vand").classList.add("falling");
    document.querySelector("#vand2").classList.add("falling1");
    document.querySelector("#vand3").classList.add("falling2");
    document.querySelector("#vand4").classList.add("falling3");
    document.querySelector("#vand5").classList.add("falling4");
    document.querySelector("#vand6").classList.add("falling5");
    document.querySelector("#vand7").classList.add("falling6");
    document.querySelector("#vand8").classList.add("falling7");
    document.querySelector("#vand9").classList.add("falling8");
    document.querySelector("#vand10").classList.add("falling9");
    document.querySelector("#vand11").classList.add("falling10");
    document.querySelector("#vand12").classList.add("falling11");
    document.querySelector("#vand13").classList.add("falling12");
    document.querySelector("#vand14").classList.add("falling13");
    document.querySelector("#vand15").classList.add("falling14");
    document.querySelector("#vand16").classList.add("falling15");
    document.querySelector("#vand17").classList.add("falling16");
    document.querySelector("#vand18").classList.add("falling17");
    document.querySelector("#vand19").classList.add("falling18");
    document.querySelector("#vand").addEventListener("click", vandForsvind);

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
