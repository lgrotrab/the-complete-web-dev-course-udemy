var buttonsLength = document.querySelectorAll(".drum").length;

//adiciona o evento de click para os botões especificamente.
for (var i = 0; i < buttonsLength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    playSound(this.textContent);
    addAnimation(this.textContent);
  });
}

//Adiciona o evento de keydown para toda a página.
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  addAnimation(event.key);
});

//Toca e atribui os sons aos botões.
function playSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "s":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(key);
      break;
  }
}

function addAnimation(key) {
  currentButton = document.querySelector("." + key);
  currentButton.classList.add("pressed");
  setTimeout(function () {
    currentButton.classList.remove("pressed");
  }, 100);
}
