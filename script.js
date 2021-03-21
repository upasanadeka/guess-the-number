//Reload to game page

function start() {
  location.href = "game.html";
}

//System randomly selects a number from [1, 100]
var num = Math.floor(Math.random() * 100) + 1;
var counter = 0;
function detect_enter_key(event) {
  var key_board_keycode = event.which || event.keyCode;
  if (key_board_keycode == 13) {
    submit();
  }
}

//Evaluation of answers given by user
function submit() {
  var reg = /^\d+$/;
  if (reg.test(document.getElementById("ans").value)){
    counter += 1;
  flag = 0;
  var choice = document.getElementById("ans").value;
    var hint = "";
  if (num != choice && counter < 7) {
    quote = "Not really... You might wanna try again!";

    if (num > choice) {
      hint = "It is greater than " + choice;
    } 
    else if (num < choice) {
      hint = "It is less than " + choice;
    }
  } 
  
  else if (num != choice && counter == 7) {
    document.getElementById("heading").innerHTML = "GAME OVER!!!";
    document.getElementById("heading2").innerHTML = "";
    quote = "The number was " + num;
    document.getElementById("heading2").type = "hidden";
    document.getElementById("ans").type = "hidden";
    document.getElementById("submit").type = "hidden";
    document.getElementById("svg-cat").innerHTML =
      "<img src='./cat" + ".svg' class='w-40 sm:w-56 mt-6 sm:mt-0' >";
    document.getElementById("restart").innerHTML =
      "<img src='./redo-white" +
      ".svg' >" +
      "<p class='text-lg font-bold text-white'>Play Again</p>";
    flag = 2;
    play();
  } 
  
  else if (num != choice && counter > 7) {
    // location.reload();
    location.href = "index.html";
  }
  
  else if (num == choice) {
    quote = "BIG BRAIN ENERGY! 👊🏽";
    document.getElementById("heading").innerHTML = "YASSS!!";
    document.getElementById("heading2").innerHTML = "";
    document.getElementById("ans").type = "hidden";
    document.getElementById("submit").type = "hidden";
    document.getElementById("svg-cat").innerHTML =
      "<img src='./win" + ".gif' width='100px' >";
    document.getElementById("restart").innerHTML =
      "<img src='./redo-white" +
      ".svg' >" +
      "<p class='text-lg font-bold text-white'>Play Again</p>";
    flag = 1;
    play();
  }
  if (counter == 7 || num == choice) {
    document.getElementById("chances-left").className = "hidden";
  }
  else {
    document.getElementById("chances").innerHTML = 7 - counter;
  }
  
  document.getElementById("ans").value = "";
  document.getElementById("ques").innerHTML = quote;
  document.getElementById("hint").innerHTML = hint;
  }
  // console.log("choice: ", choice, " counter: ", counter, " num: ", num);
  
}

//Reload or Replay Game
function reloadGame() {
  location.href = "index.html";
}

//Play audio
function play() {
  if (flag == 1) {
    var audio = document.getElementById("audio-win");
    audio.play();
    audio.volume = 0.4;
  }
  else if (flag == 2) {
    var audio = document.getElementById("audio-cat");
    audio.play();
  }
}

//Background color

var colors = ["yellow", "#32CD32", "cyan"];
var currentIndex = 0;

setInterval(function () {
  document.body.style.cssText = "background-color: " + colors[currentIndex];
  currentIndex++;
  if (currentIndex == undefined || currentIndex >= colors.length) {
    currentIndex = 0;
  }
}, 1000);

//Text animations
var textWrapper = document.querySelector(".ml9 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml9 .letter",
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i + 1),
  })
  .add({
    targets: ".ml9",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

var textWrapper = document.querySelector(".ml3");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: ".ml3 .letter",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 2250,
  delay: (el, i) => 150 * (i + 1),
});
