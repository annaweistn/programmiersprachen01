// "var" was much in use before "let" and "const" appeared, now we don't need it anymore
// use "const" any time you select an element or you have a variable that doesn't change
// use "let" if value is going to change
var formular = document.querySelector("form");
var endeContainer = document.getElementById("endeSeite");
var startContainer = document.getElementById("startSeite");
var spielContainer = document.getElementById("spielSeite");
// create a class "hidden" in your index.css, put it by default to the elements in your index.html and remove it when needed 
spielContainer.style = "display: none;";
endeContainer.style = "display: none;";

var navScore = document.getElementById("navbar");
navScore.style = "display: none;";
var computer = document.getElementById("computer");
var user = document.getElementById("user");

var spielerAuswahl = document.getElementById("spielerAuswahl");
var computerAuswahl = document.getElementById("computerAuswahl");

var punkt = document.getElementById("point");

var laden = document.getElementById("laden");
laden.style = "display:none;";

var username;

var score = {
  user: 0,
  computer: 0,
};
var auswahlComputer = ["scissors", "stone", "paper"];

formular.addEventListener("submit", function (event) {
  event.preventDefault();
  username = event.target[0].value;
  navScore.style = "display: flex;";
  // please remove any console.log statements, they are only needed for development :)
  console.log(event.target[0].value);
  spielContainer.style = "display: block";
  startContainer.style = "display: none";
  // please remove any unused code
  //var benutzerAnzeige = document.getElementById('user');//wird nie genutzt
  console.log("hello!");
  // add space: username + " 0/3"
  user.innerHTML = username + "0/3";
});

function play(event) {
  var spielerWert = event.target.id;
  var computerWert = auswahlComputer[Math.floor(Math.random() * 3)];
  spielerAuswahl.style = "display: none";
  computerAuswahl.style = "display: none";
  punkt.style = "display:none;";
  // if you have several styles to assign, move them to a separate class in css and use "classList.add("name of your class")" or "classList.remove("name of your class")" "classList.toggle("name of your class")"
  laden.style = "display:flex;justify-content: center;width:100%;";

  // while we are waiting for the timeout function to be executed, we can press another button many times and then the game can become buggy.
  // to fix this you can disable the buttons whenever you pressed a button and enable them as soon as you get the result
  // you can use "element.setAttribute("disabled", true)" to disable a button and "element.removeAttribute("disabled")" to enable them

  setTimeout(function () {
    // move all the content of this function to a separate one, e.g. setResults
    /*time loading */ laden.style = "display: none;";
    // always better use === instead of ==, remember that Javascript will return "true" to "1 == true" and it's not really true :) so you need this strict comparison
    if (spielerWert == "scissors" && computerWert == "paper") {
      score.user += 1;
      punkt.style = "display:flex;justify-content: center;width:100%;";
    } else if (spielerWert == "scissors" && computerWert == "stone") {
      score.computer += 1;
    }
    if (spielerWert == "stone" && computerWert == "paper") {
      score.computer += 1;
    } else if (spielerWert == "stone" && computerWert == "scissors") {
      score.user += 1;
      punkt.style = "display:flex;justify-content: center;width:100%;";
    }

    if (spielerWert == "paper" && computerWert == "scissors") {
      score.computer += 1;
    } else if (spielerWert == "paper" && computerWert == "stone") {
      score.user += 1;
      punkt.style = "display:flex;justify-content: center;width:100%;";
    }

    // a small suggestion how you can write the game logic in less lines: the 1st answer here :) https://stackoverflow.com/questions/53730900/more-efficient-choice-comparison-for-rock-paper-scissors 

    computer.innerHTML = "Computer " + score.computer + "/3";
    user.innerHTML = username + " " + score.user + "/3";

    spielerAuswahl.style = "display:block;";
    computerAuswahl.style = "display:block;";

    spielerAuswahl.children[0].style =
      "background-image: url(./bilder/" + spielerWert + ".png)";
    computerAuswahl.children[0].style =
      "background-image: url(./bilder/" + computerWert + ".png)";
    spielerAuswahl.children[1].innerHTML = "Your choice: " + spielerWert;
    computerAuswahl.children[1].innerHTML = "Computer choice: " + computerWert;

    if (score.user == 3 || score.computer == 3) {
      if (score.user == 3) {
        finish("user");
      } else {
        finish("computer");
      }
    }
  }, 1000);
}
function finish(winner) {
  spielerAuswahl.style = "display: none";
  computerAuswahl.style = "display: none";
  spielContainer.style = "display: none";
  if (winner == "user") {
    endeContainer.style = "display: flex;";
    endeContainer.children[0].innerHTML =
      "<p>You won!</p><img src='./bilder/pokal.png'>";
  } else {
    endeContainer.style = "display: flex;";
    endeContainer.children[0].innerHTML = "<p>Computer won 😈 !!</p>";
  }
}
function restart() {
  score.computer = 0;
  score.user = 0;
  spielContainer.style = "display: block";
  endeContainer.style = "display: none;";
  computer.innerHTML = "Computer: " + score.computer + "/3";
  user.innerHTML = username + " " + score.user + "/3";
  /* Konfetti emoji muss verschwinden wenn man gewonnen hat */
  punkt.style = "display:none;";
}
