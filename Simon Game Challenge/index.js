var colors = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userPattern = [];
var level = 0;
var gameStarted = false;

startGame();

//Generate nextSequence
function nextSequence() {
  level++;
  userPattern = [];
  var count = 0;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  gamePattern.push(colors[randomNumber]);
  showNextSequence(count);
}

//Function for showing every single color flashing one at the time.
function showNextSequence(count) {
  setTimeout(() => {
    $("#" + gamePattern[count])
      .fadeOut(100)
      .fadeIn(100);
    playSound(gamePattern[count]);
    count++;
    if (count < level) {
      showNextSequence(count);
    }
  }, 500);
}

//compare results
function compareResults(currentLevel) {
  if (userPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 500);
    }
  } else {
    gameOver();
  }
}

//GameOver
function gameOver() {
  $("#level-title").text("Game over! Press any key to start over again");
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 100);
  userPattern = [];
  gamePattern = [];
  level = 0;
  gameStarted = false;
  startGame();
}

//Click actions
$(".btn").click(function (event) {
  var colorId = $(event.target).attr("id");
  $("#" + colorId).addClass("pressed");
  setTimeout(() => {
    $("#" + colorId).removeClass("pressed");
  }, 100);
  playSound(colorId);
  if (gameStarted) {
    userPattern.push(colorId);
    compareResults(userPattern.length - 1);
  }
});

//Sound playing
function playSound(soundName) {
  var soundEffect = new Audio("./sounds/" + soundName + ".mp3");
  soundEffect.play();
}

//Game Start
function startGame() {
  $(document).one("keydown", function () {
    gameStarted = true;
    nextSequence();
  });
}
