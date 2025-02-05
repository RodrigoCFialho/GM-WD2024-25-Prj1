/*MENU*/
let menuIcon = document.querySelector("#menuIcon");
menuIcon.onclick = function () {
  showMenu(this);
};

function showMenu(x) {
  x.classList.toggle("change");
  let menu = document.querySelector("#navpop");
    if (menu.style.visibility == "visible") {
    menu.style.visibility = "hidden";
  } else {
    menu.style.visibility = "visible";
  }
}

/* MODAL IN SHOP*/

let imgsBanner = document.querySelectorAll(".product img");
for (let i = 0; i < imgsBanner.length; i++) {
  imgsBanner[i].onclick = function () {
    onClick(this);
  };
}

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}

/*GAME
import { Preloader } from './Preloader.js';
import { Play } from './Play.js';

const config = {
    title: 'Card Memory Game',
    type: Phaser.AUTO,
    backgroundColor: "#192a56",
    width: 549,
    height: 480,
    parent: "phaser-example",
    render: {
        pixelArt: true,
    },
    scene: [
        Preloader,
        Play
    ]
};

new Phaser.Game(config);*/