window.addEventListener("load", sidenVises);

"use strict";
let points = 0;
let life = 4;

function sidenVises() {
    console.log("All resources finished loading!");
}
showStart();

function showStart() {
    console.log("showStart");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#start").classList.add("show");
    document.querySelector("#settings").addEventListener("click", showSettings);
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").addEventListener("click", hideStart);

}

function showSettings() {
    console.log("showSettings");
    document.querySelector("#settings").classList.toggle('hide');
    document.querySelector("#setting_screen").classList.remove('hide');
    document.querySelector("#setting_screen").classList.add("pulse");
    document.querySelector("settings_close").classList.add("pulse");
}


function hideStart() {
    console.log("hideStart");
    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").addEventListener("animationend", startGame);

}

function startGame() {
    console.log("startGame");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#start").classList.remove("show");

    document.querySelector("#sky1").classList.add("skyflyver1");
    document.querySelector("#sky2").classList.add("skyflyver2");

    document.querySelector("#snefnug1").classList.add("falling5");
    document.querySelector("#snefnug2").classList.add("falling2");
    document.querySelector("#snefnug3").classList.add("falling5");
    document.querySelector("#snefnug4").classList.add("falling4");
    document.querySelector("#snefnug5").classList.add("fallin13")
    document.querySelector("#snefnug6").classList.add("falling6");
    document.querySelector("#snefnug7").classList.add("falling7");
    document.querySelector("#snefnug8").classList.add("falling8");
    document.querySelector("#snefnug9").classList.add("falling9");
    document.querySelector("#snefnug10").classList.add("falling14");
    document.querySelector("#snefnug11").classList.add("falling5");
    document.querySelector("#snefnug12").classList.add("falling14");
    document.querySelector("#snefnug13").classList.add("falling16");
    document.querySelector("#snefnug14").classList.add("falling7");
    document.querySelector("#snefnug15").classList.add("falling5");
    document.querySelector("#snefnug16").classList.add("falling5");
    document.querySelector("#vand").classList.add("falling");
    document.querySelector("#vand3").classList.add("falling1");
    document.querySelector("#vand4").classList.add("falling2");
    document.querySelector("#vand5").classList.add("falling3");
    document.querySelector("#vand6").classList.add("falling4");
    document.querySelector("#vand7").classList.add("falling5")
    document.querySelector("#vand8").classList.add("falling6");
    document.querySelector("#vand9").classList.add("falling7");
    document.querySelector("#vand10").classList.add("falling8");
    document.querySelector("#vand11").classList.add("falling9");
    document.querySelector("#vand12").classList.add("falling10");
    document.querySelector("#vand13").classList.add("falling11");
    document.querySelector("#vand14").classList.add("falling12");
    document.querySelector("#vand15").classList.add("falling13");
    document.querySelector("#vand16").classList.add("falling14");
    document.querySelector("#vand17").classList.add("falling15");
    document.querySelector("#vand18").classList.add("falling16");
    document.querySelector("#vand").addEventListener("click", click);
    document.querySelector("#vand3").addEventListener("click", click);
    document.querySelector("#vand4").addEventListener("click", click);
    document.querySelector("#vand5").addEventListener("click", click);
    document.querySelector("#vand6").addEventListener("click", click);
    document.querySelector("#vand7").addEventListener("click", click);
    document.querySelector("#vand8").addEventListener("click", click);
    document.querySelector("#vand9").addEventListener("click", click);
    document.querySelector("#vand10").addEventListener("click", click);
    document.querySelector("#vand11").addEventListener("click", click);
    document.querySelector("#vand12").addEventListener("click", click);
    document.querySelector("#vand13").addEventListener("click", click);
    document.querySelector("#vand14").addEventListener("click", click);
    document.querySelector("#vand15").addEventListener("click", click);
    document.querySelector("#vand16").addEventListener("click", click);
    document.querySelector("#vand17").addEventListener("click", click);
    document.querySelector("#vand18").addEventListener("click", click);
    document.querySelector("#snefnug1").addEventListener("click", click);
    document.querySelector("#snefnug2").addEventListener("click", click);
    document.querySelector("#snefnug3").addEventListener("click", click);
    document.querySelector("#snefnug4").addEventListener("click", click);
    document.querySelector("#snefnug5").addEventListener("click", click);
    document.querySelector("#snefnug6").addEventListener("click", click);
    document.querySelector("#snefnug7").addEventListener("click", click);
    document.querySelector("#snefnug8").addEventListener("click", click);
    document.querySelector("#snefnug9").addEventListener("click", click);
    document.querySelector("#snefnug10").addEventListener("click", click);
    document.querySelector("#snefnug11").addEventListener("click", click);
    document.querySelector("#snefnug12").addEventListener("click", click);
    document.querySelector("#snefnug13").addEventListener("click", click);
    document.querySelector("#snefnug14").addEventListener("click", click);
    document.querySelector("#snefnug15").addEventListener("click", click);
    document.querySelector("#snefnug16").addEventListener("click", click);


}

function click() {
    console.log("click");

    document.querySelector("click").classList.add("paused");
    document.querySelector("click").classList.add("dissapear");

    if (this.classList.contains("snefnug1")) {
        console.log("snefnug1");
        document.querySelector("#liv" + life).classList.add("hide");
        --life;
    } else if (this.classList.contains("vand1")) {
        console.log("vand1");
        points++;
        document.querySelector("#points").innerHTML = points;

    }

    this.classList.add("dissapear");

    gameStatus()

}


function gameStatus() {
    console.log("gameStatus");
    console.log(life);
    if (life == 0) {
        document.querySelector("#gameover").classList.remove("hide");
    } else if (points == 10) {

        document.querySelector("#levelop").classList.remove("hide");
    }

}

function gameOver() {
    console.log("gameOver");
    document.querySelector("#game").classList.add("blur")



}

function levelComplete() {



}
