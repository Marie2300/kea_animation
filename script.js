window.addEventListener("load", sidenVises);

"use strict";
let points = -1;

function sidenVises() {
    console.log("sidenVises");
    showStart();

}

function showStart() {
    console.log("showStart");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#start").classList.add("show");
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").addEventListener("click", hideStart);

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

    document.querySelector("#sky1").classList
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

    document.querySelector("#vand").addEventListener("click", vandForsvind);
    document.querySelector("#vand3").addEventListener("click", vandForsvind1);
    document.querySelector("#vand4").addEventListener("click", vandForsvind2);
    document.querySelector("#vand5").addEventListener("click", vandForsvind3);
    document.querySelector("#vand6").addEventListener("click", vandForsvind4);
    document.querySelector("#vand7").addEventListener("click", vandForsvind5);
    document.querySelector("#vand8").addEventListener("click", vandForsvind6);
    document.querySelector("#vand9").addEventListener("click", vandForsvind7);
    document.querySelector("#vand10").addEventListener("click", vandForsvind8);
    document.querySelector("#vand11").addEventListener("click", vandForsvind9);
    document.querySelector("#vand12").addEventListener("click", vandForsvind10);
    document.querySelector("#vand13").addEventListener("click", vandForsvind11);
    document.querySelector("#vand14").addEventListener("click", vandForsvind12);
    document.querySelector("#vand15").addEventListener("click", vandForsvind13);
    document.querySelector("#vand16").addEventListener("click", vandForsvind14);
    document.querySelector("#vand17").addEventListener("click", vandForsvind15);
    document.querySelector("#vand18").addEventListener("click", vandForsvind16);
}

function vandForsvind() {
    console.log("vandForsvind");

    document.querySelector("#vand").classList.add("paused");
    document.querySelector("#vand").classList.add("dissapear");

    points++;
    console.log(points);
    document.querySelector("#points").innerHTML = "points: " + points;

    console.log(this);
    this.classList.add("hide")
}

vandForsvind1();

function vandForsvind1() {
    console.log("vandForsvind1");

    document.querySelector("#vand3").classList.add("paused");
    document.querySelector("#vand3").classList.add("dissapear");

    points++;
    console.log(points);
    document.querySelector("#points").innerHTML = "points: " + points;

    console.log(this);
    this.classList.add("hide")
}

vandForsvind2();

function vandForsvind2() {
    console.log("vandForsvind2");

    document.querySelector("#vand4").classList.add("paused");
    document.querySelector("#vand4").classList.add("dissapear");

    points++;
    console.log(points);
    document.querySelector("#points").innerHTML = "points: " + points;

    console.log(this);
    this.classList.add("hide")
}

vandForsvind3();

function vandForsvind3() {
    console.log("vandForsvind3");

    document.querySelector("#vand5").classList.add("paused");
    document.querySelector("#vand5").classList.add("dissapear");

    points++;
    console.log(points);
    document.querySelector("#points").innerHTML = "points: " + points;

    console.log(this);
    this.classList.add("hide")
}

vandForsvind4();

function vandForsvind4() {
    console.log("vandForsvind4");

    document.querySelector("#vand6").classList.add("paused");
    document.querySelector("#vand6").classList.add("dissapear");

    points++;
    console.log(points);
    document.querySelector("#points").innerHTML = "points: " + points;

    console.log(this);
    this.classList.add("hide")
}

vandForsvind5();

function vandForsvind5() {
    console.log("vandForsvind5");

    document.querySelector("#vand7").classList.add("paused");
    document.querySelector("#vand7").classList.add("dissapear");

    points++;
    console.log(points);
    document.querySelector("#points").innerHTML = "points: " + points;

    console.log(this);
    this.classList.add("hide")
}

vandForsvind6();

function vandForsvind6() {
    console.log("vandForsvind6");

    document.querySelector("#vand8").classList.add("paused");
    document.querySelector("#vand8").classList.add("dissapear");

    points++;
    console.log(points);
    document.querySelector("#points").innerHTML = "points: " + points;

    console.log(this);
    this.classList.add("hide")
}

vandForsvind7();

function vandForsvind7() {
    console.log("vandForsvind7");

    document.querySelector("#vand9").classList.add("paused");
    document.querySelector("#vand9").classList.add("dissapear");

    points++;
    console.log(points);
    document.querySelector("#points").innerHTML = "points: " + points;

    console.log(this);
    this.classList.add("hide")
}

vandForsvind8();

function vandForsvind8() {
    console.log("vandForsvind8");

    document.querySelector("#vand10").classList.add("paused");
    document.querySelector("#vand10").classList.add("dissapear");

    points++;
    console.log(points);
    document.querySelector("#points").innerHTML = "points: " + points;

    console.log(this);
    this.classList.add("hide")
}

vandForsvind9();

function vandForsvind9() {
    console.log("vandForsvind9");

    document.querySelector("#vand11").classList.add("paused");
    document.querySelector("#vand11").classList.add("dissapear");

    points++;
    console.log(points);
    document.querySelector("#points").innerHTML = "points: " + points;

    console.log(this);
    this.classList.add("hide")
}

vandForsvind10();

function vandForsvind10() {
    console.log("vandForsvind10");

    document.querySelector("#vand12").classList.add("paused");
    document.querySelector("#vand12").classList.add("dissapear");

    points++;
    console.log(points);
    document.querySelector("#points").innerHTML = "points: " + points;

    console.log(this);
    this.classList.add("hide")
}

vandForsvind11();

function vandForsvind11() {
    console.log("vandForsvind11");

    document.querySelector("#vand13").classList.add("paused");
    document.querySelector("#vand13").classList.add("dissapear");

    points++;
    console.log(points);
    document.querySelector("#points").innerHTML = "points: " + points;

    console.log(this);
    this.classList.add("hide")
}

vandForsvind12();

function vandForsvind12() {
    console.log("vandForsvind12");

    document.querySelector("#vand14").classList.add("paused");
    document.querySelector("#vand14").classList.add("dissapear");

    points++;
    console.log(points);
    document.querySelector("#points").innerHTML = "points: " + points;

    console.log(this);
    this.classList.add("hide")
}

vandForsvind13();

function vandForsvind13() {
    console.log("vandForsvind13");

    document.querySelector("#vand15").classList.add("paused");
    document.querySelector("#vand15").classList.add("dissapear");

    points++;
    console.log(points);
    document.querySelector("#points").innerHTML = "points: " + points;

    console.log(this);
    this.classList.add("hide")
}

vandForsvind14();

function vandForsvind14() {
    console.log("vandForsvind14");

    document.querySelector("#vand16").classList.add("paused");
    document.querySelector("#vand16").classList.add("dissapear");

    points++;
    console.log(points);
    document.querySelector("#points").innerHTML = "points: " + points;

    console.log(this);
    this.classList.add("hide")
}

vandForsvind15();

function vandForsvind15() {
    console.log("vandForsvind15");

    document.querySelector("#vand17").classList.add("paused");
    document.querySelector("#vand17").classList.add("dissapear");

    points++;
    console.log(points);
    document.querySelector("#points").innerHTML = "points: " + points;

    console.log(this);
    this.classList.add("hide")
}

vandForsvind16();

function vandForsvind16() {
    console.log("vandForsvind16");

    document.querySelector("#vand18").classList.add("paused");
    document.querySelector("#vand18").classList.add("dissapear");
    settingsStart();

    points++;
    console.log(points);
    document.querySelector("#points").innerHTML = "points: " + points;

    console.log(this);
    this.classList.add("hide")

}


function settingsStart() {
    console.log("settingsStart");
    document.querySelector("#settings").classList.add("pulse");
    document.querySelector("#settings").addEventListener("click", hideStart);
    document.querySelector("#settings").addEventListener("click", hideSettings);

}

function hideSettings() {
    console.log("hideSettings");
    document.querySelector("#settings").classList.remove("pulse");

}

function gameStatus() {

    if (life <= 0) {
        gameOver();
    }

}

function gameOver() {
    console.log("gameOver");
    document.querySelector("#game").classList.add("blur")



}

function levelComplete() {



}
