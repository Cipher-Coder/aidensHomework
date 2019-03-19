window.onload = function() {
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  var categories; // Array of topics
  var chosenCategory; // Selected category
  var word; // Selected word
  var guess; // Guess
  var guesses = []; // Stored guesses
  var lives; // Lives
  var counter; // Count correct guesses
  var space; // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");
  // create alphabet ul
  var buttons = function() {
    myButtons = document.getElementById("buttons");
    letters = document.createElement("ul");

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = "alphabet";
      list = document.createElement("li");
      list.id = "letter";
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  };

  // Select Category
  var selectCat = function() {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "From the 'TNReady' list for 03/15";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "Mix of words from the 03/15 and 03/22 list";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "From the TNReady list for 03/22";
    }
  };

  // Create guesses ul
  result = function() {
    wordHolder = document.getElementById("hold");
    correct = document.createElement("ul");

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute("id", "my-word");
      guess = document.createElement("li");
      guess.setAttribute("class", "guess");
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  };

  //Show lives
  let numRight = 0;
  comments = function() {
    showLives.innerHTML = "You have " + lives + " lives";
    document.getElementById("mylives").style.color = "black";
    if (lives < 1) {
      showLives.innerHTML = "Game Over!";
      document.getElementById("mylives").style.color = "red";
    }
    for (let i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
        document.getElementById("mylives").style.color = "green";
      }
    }
    if (showLives.innerHTML == "You Win!") {
      numRight = numRight + 1;
      document.getElementById("ttl-right").innerHTML = numRight;
    }
  };

  // Animate man
  var animate = function() {
    var drawMe = lives;
    drawArray[drawMe]();
  };

  // Hangman
  canvas = function() {
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 2;
  };

  head = function() {
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext("2d");
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
  };

  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
  };

  frame1 = function() {
    draw(0, 150, 150, 150);
  };

  frame2 = function() {
    draw(10, 0, 10, 600);
  };

  frame3 = function() {
    draw(0, 5, 70, 5);
  };

  frame4 = function() {
    draw(60, 5, 60, 15);
  };

  torso = function() {
    draw(60, 36, 60, 70);
  };

  rightArm = function() {
    draw(60, 46, 100, 50);
  };

  leftArm = function() {
    draw(60, 46, 20, 50);
  };

  rightLeg = function() {
    draw(60, 70, 100, 100);
  };

  leftLeg = function() {
    draw(60, 70, 20, 100);
  };

  drawArray = [
    rightLeg,
    leftLeg,
    rightArm,
    leftArm,
    torso,
    head,
    frame4,
    frame3,
    frame2,
    frame1
  ];

  // OnClick Function
  check = function() {
    list.onclick = function() {
      var guess = this.innerHTML;
      this.setAttribute("class", "activeselect");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        }
      }
      var j = word.indexOf(guess);
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    };
  };

  // Play
  play = function() {
    categories = [
      [
        "passage",
        "opinion",
        "difference",
        "addition",
        "repeated",
        "pentagon",
        "hexagon",
        "sounds",
        "repeated"
      ],
      [
        "total",
        "vowel",
        "altogether",
        "digit",
        "equation",
        "equal",
        "rectangle",
        "nearest",
        "triangle",
        "quadrilateral"
      ],
      [
        "greatest",
        "least",
        "measure",
        "inch",
        "centimeter",
        "value",
        "square",
        "graph",
        "angle",
        "array"
      ]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  };

  play();

  // part of score
  let count1 = document.getElementById("ttlcount");
  let numPlayed = 0;
  function trackScore() {
    numPlayed = numPlayed + 1;
    count1.innerHTML = numPlayed;
  }
  // Reset
  document.getElementById("reset").onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    context.clearRect(0, 0, 400, 400);
    play();
    trackScore();
  };
};

// Reset the score to 0
function resetScore() {
  numRight = 0;
  numPlayed = 0;
  document.getElementById("ttl-right").innerHTML = numRight;
  count1.innerHTML = numPlayed;
}
