let a = 0;
let b = 0;
let score = 0;

function generateRandom() {
  a = Math.floor(Math.random() * 10 + 1); //rnd num between 1-10
  b = Math.floor(Math.random() * 10 + 1); //can change to whatever
  document.getElementById("rndNumber1").innerHTML = a;
  document.getElementById("rndNumber2").innerHTML = b;
}

function checkAnswer() {
  answer = document.getElementById("userAnswer").value;
  if (answer == a * b) {
    document.getElementById("mesg").style.color = "green";
    document.getElementById("mesg").innerHTML = "Correct!";
    document.getElementById("userAnswer").value = "";
    score = ++score;
  } else {
    document.getElementById("mesg").style.color = "red";
    document.getElementById("mesg").innerHTML = "Incorrect";
    document.getElementById("userAnswer").value = "";
  }
  generateRandom();
  document.getElementById("scoremesg").innerHTML = score;
}

function startOver() {
  document.getElementById("scoremesg").innerHTML = 0;
  document.getElementById("mesg").style.color = "black";
  document.getElementById("mesg").innerHTML = "Enter Your Answer";
}

// Addition Portion
let c = 0;
let d = 0;
let scoreAdd = 0;

function generateRandomAdd() {
  c = Math.floor(Math.random() * 20 + 1); //rnd num between 1-10
  d = Math.floor(Math.random() * 20 + 1); //can change to whatever
  document.getElementById("rndNumber3").innerHTML = c;
  document.getElementById("rndNumber4").innerHTML = d;
}

function checkAnswerAdd() {
  answer = document.getElementById("userAnswer-add").value;
  if (answer == c + d) {
    document.getElementById("mesg-add").style.color = "green";
    document.getElementById("mesg-add").innerHTML = "Correct!";
    document.getElementById("userAnswer-add").value = "";
    scoreAdd = ++scoreAdd;
  } else {
    document.getElementById("mesg-add").style.color = "red";
    document.getElementById("mesg-add").innerHTML = "Incorrect";
    document.getElementById("userAnswer-add").value = "";
  }
  generateRandomAdd();
  document.getElementById("scoremesg-add").innerHTML = scoreAdd;
}

function startOverAdd() {
  document.getElementById("scoremesg-add").innerHTML = 0;
  document.getElementById("mesg-add").style.color = "black";
  document.getElementById("mesg-add").innerHTML = "Enter Your Answer";
}

// Subtraction Portion
let e = 0;
let f = 0;
let scoreSubtract = 0;

function generateRandomSub() {
  e = Math.floor(Math.random() * 20 + 10); //rnd num between 1-10
  f = Math.floor(Math.random() * 10 + 1); //can change to whatever
  document.getElementById("rndNumber5").innerHTML = e;
  document.getElementById("rndNumber6").innerHTML = f;
}

function checkAnswerSub() {
  answer = document.getElementById("userAnswer-sub").value;
  if (answer == e - f) {
    document.getElementById("mesg-sub").style.color = "green";
    document.getElementById("mesg-sub").innerHTML = "Correct!";
    document.getElementById("userAnswer-sub").value = "";
    scoreSubtract = ++scoreSubtract;
  } else {
    document.getElementById("mesg-sub").style.color = "red";
    document.getElementById("mesg-sub").innerHTML = "Incorrect";
    document.getElementById("userAnswer-sub").value = "";
  }
  generateRandomSub();
  document.getElementById("scoremesg-sub").innerHTML = scoreSubtract;
}

function startOverSub() {
  document.getElementById("scoremesg-sub").innerHTML = 0;
  document.getElementById("mesg-sub").style.color = "black";
  document.getElementById("mesg-sub").innerHTML = "Enter Your Answer";
}

// Hide/Show Mobile menu
function sideMenu() {
  var menu = document.getElementById("navbar");
  if (menu.className === "topnav") {
    menu.className += " responsive";
  } else {
    menu.className = "topnav";
  }
}

// Load the Math Problems onLoad
function startLoading() {
  generateRandom();
  generateRandomAdd();
  generateRandomSub();
}

// Tab Content on Vocab Page
function openName(evt, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
