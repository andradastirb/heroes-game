let showWinner = document.getElementById("show-winner");
showWinner.innerHTML = epicFight.findWinner();

let heroesContainer = document.querySelector(".heroes-container");

let startFight = document.getElementById("start-fight");
startFight.addEventListener("click", startFightFunc);

let showHeroes = document.getElementById("show-heroes");
showHeroes.addEventListener("click", showHeroesFunc); //pe butonul show-heroes adaug un eveniment care la click apeleaza functia showHeroesFunc


function showHeroesFunc() {
    heroesContainer.classList.add("d-flex");
    showHeroes.classList.add("d-none");
    startFight.classList.add("d-block");
}

function startFightFunc() {
    startFight.classList.remove("d-block");
    showWinner.classList.add("d-block");
}
