// Here starts the Trivia Object ==================================

var TriviaObj = {
  // Create toggle variables to indicate game on and question on.
  gameOn: false,
  questionOn: false,

  // Create timer variables.
  questionTimer: 0,
  movieTimer: 0,
  totalTime: 0,

  // Create question counter variable.
  questionNumber: 0,
  rightAnswer: 0,

  // Create answer selection variable.
  selectedAnswer: "",

  // Create clockTimer variable to assign it a setInterval function.
  clockTimer: "",

  // Create waiting timer variables to control the game time.
  giphyTime: 10000, // In milliseconds.
  answerTime: 20, // In seconds.
  showAnswerTime: 10000, // In milliseconds.

  questionsArr: [
    "Who was the first player in NBA history to be elected league MVP by a unanimous vote?", // Q1
    "Who was the youngest player to score 10,000 points in the NBA?", // Q2
    "What player won All-Star Game MVP, NBA MVP, and NBA Finals MVP awards in 2000?", // Q3
    "Who won the Nestle Crunch Slam Dunk Contest on February 6, 1988?", // Q4
    "Why did Kevin Durant choose the jersey number 35?", // Q5
    "Who is the highest-scoring foreign-born player in NBA history?", // Q6
    "Who was the first player to win consecutive NBA MVP awards since Michael Jordan did it in 1991 and 1992?", // Q7
    "In 2015, which NBA player broke the record for most points scored in a quarter?", // Q8
    "In what year were the first Air Jordan sneakers released?", // Q9
    "Which one of these is not a 1st overall draft pick?", // Q10
    "Who was the first WNBA player to dunk in a playoff game?" // Q11
  ],

  answersObj: [
    [
      "STEPHEN CURRY", // Answer Q1.
      "MICHAEL JORDAN",
      "LEBRON JAMES",
      "MAGIC JOHNSON"
    ],
    [
      "LEBRON JAMES", // Answer Q2.
      "WILT CHAMBERLAIN",
      "MICHAEL JORDAN",
      "KOBE BRYANT"
    ],
    [
      "TIM DUNCAN",
      "MICHAEL JORDAN",
      "SHAQUILLE O'NEAL", // Answer Q3.
      "KOBE BRYANT"
    ],
    [
      "DOMINIQUE WILKINS",
      "SPUD WEBB",
      "MICHAEL JORDAN", // Answer Q4.
      "CLYDE DREXLER"
    ],
    [
      "He plans to play until age 35",
      "His hero was Reggie Lewis",
      "His first coach was murdered at 35", // Answer Q5.
      "It's his first Tetrahedral Number"
    ],
    [
      "YAO MING",
      "HAKEEM OLAJUWON",
      "DETLEF SCHREMPF",
      "DIRK NOWITZKI" // Answer Q6.
    ],
    [
      "LEBRON JAMES",
      "STEVE NASH",
      "TIM DUNCAN", // Answer Q7.
      "STEPHEN CURRY"
    ],
    [
      "KEVIN DURANT",
      "KEVIN LOVE",
      "CARMELO ANTHONY",
      "KLAY THOMPSON" // Answer Q8.
    ],
    [
      "1984", // Answer Q9.
      "1987",
      "1991",
      "1993"
    ],
    [
      "CHRIS WEBBER",
      "ALLEN IVERSON",
      "KENYON MARTIN",
      "DIKEMBE MUTOMBO" // Answer Q10.
    ],
    [
      "TAMIKA CATCHNGS",
      "LISA LESLIE",
      "BRITTNEY GRINER", // Answer Q11.
      "MICHELLE SNOW"
    ]
  ],

  rightAnswerArr: [
    "In 2016, after a record-breaking season in which he led the Warriors to an NBA-record 73 wins and set an individual record of 402 three-point field goals (smashing his own previous league record of 286 set the year before), Golden State Warriors guard Stephen Curry became the NBA's first unanimous Most Valuable Player.",
    "At 23 years and 59 days, LeBron James became the youngest player to score 10,000 points in the NBA.",
    "In 2000, Shaquille O'Neal joined Willis Reed (1970) and Michael Jordan (1996), becoming just the third player to sweep MVP honors for the season, capturing the All-Star Game MVP (which he shared with San Antonio's Tim Duncan), NBA MVP, and NBA Finals MVP awards.",
    "The Chicago Bulls' Michael Jordan won the Nestle Crunch Slam Dunk Contest on February 6, 1988, with a perfect score of 50 on his final dunk in front of an appreciative hometown crowd at Chicago Stadium.",
    "In 2005, Durant's mentor and first basketball coach was tragically murdered. Charles Craig was just 35 years old, and Durant has worn this number ever since in his honor.",
    "Born in Würzburg, Germany, Nowitzki is the highest-scoring foreign-born player in NBA-history.",
    "Tim Duncan replicated Jordan's amazing feat in 2002 and 2003. He achieved this brilliant feat after just five years of being drafted into the NBA.",
    "In March of 2015, Klay Thompson experienced a quarter in which he was perfect from the field, including hitting 9 three-pointers, en route to a record-setting 37-point quarter.",
    "The 'Air Jordan' brand is still going strong decades after its debut in 1984, with Michael Jordan reportedly making more money decades after his retirement than any active NBA players of that era.",
    "Dikemebe Mutombo was drafted fourth pick overall in the 1991 draft by Denver Nuggets.",
    "On August 24, 2014, Griner became the first WNBA player to dunk in a playoff game when she helped the Phoenix Mercury defeat the Los Angeles Sparks, 93-68."
  ],

  rightAnswerNum: [0, 0, 2, 2, 2, 3, 2, 3, 0, 3, 2],

  gifAddress: [
    "https://media.giphy.com/media/wiWms9hnLkVAQ/giphy.gif",
    "https://media.giphy.com/media/4qify5sjr92ec/giphy.gif",
    "https://media.giphy.com/media/UO5elnTqo4vSg/giphy.gif",
    "https://media.giphy.com/media/7Ee6I8ecvwFCU/giphy.gif",
    "https://media.giphy.com/media/iEVH53FFY6wdG/giphy.gif",
    "https://media.giphy.com/media/l3q2IvVBwYBneYlu8/giphy.gif",
    "https://media.giphy.com/media/3oeSAIe8m9fq5oxk3u/giphy.gif",
    "https://media.giphy.com/media/Y3UJBlQ8URhe0/giphy-downsized-large.gif",
    "https://media.giphy.com/media/MRPwvmyC5GQXC/giphy.gif",
    "https://media.giphy.com/media/3oxHQwxeCxMiFVc5Ta/giphy.gif",
    "https://media.giphy.com/media/26CW4vzn6vYh8w1xu/giphy.gif"
  ],

  startGame() {
    $(".questions").html(
      "<div class='triviaText'><h3>Welcome to Basketball Trivia</h3><br>" +
        "<h5>There are 10 related basketball questions. <br>" +
        "So go ahead and test your Basketball Knowledge. <br>" +
        "REMEMBER! There is a time limit to each question. <br>" +
        "Good luck!!!</h5><br>" +
        "<button id='start' class='btn btn-secondary'>Press Here to Start</button></div>" // Creates the Start button
    );
    $(".col-7.answers").hide();
  },

  showQuestion() {
    if (this.questionOn) {
      if (this.questionNumber < 10) {
        $(".triviaText").html(
          "<h4><b>" + this.questionsArr[this.questionNumber] + "</b></h4>"
        );
        $(".oneAnswer").each(function() {
          $(this).html(
            "<h4>" +
              TriviaObj.answersObj[TriviaObj.questionNumber][
                $(this).attr("tag")
              ] +
              "</h4>"
          );
        });
        $(".triviaText").append("<div id='timer'></div>");
        this.questionTimer = 0;
        this.clockTimer = setInterval(this.timeCounter, 1000);
      } else if (this.totalTime == 0) {
        $(".triviaText").html(
          "<h3><b>Was that a buzzer beater OR a Brain Fade!!!</b></h3><br><br><br>" +
            "<button id='start' class='btn btn-secondary'> " +
            "Press to Reload</button></div>" // Creates Reolad Button
        );
        $(".oneAnswer").empty();
        this.questionOn = false;
        this.gameOn = false;
      } else {
        var formattedTotTime = $(".triviaText").html(
          "<h3><b>Thanks for playing!!!</b></h3><br><br>" +
            "<h4>You finished the Basketball Trivia in: <br><br><b>" +
            this.timeFormat(this.totalTime) +
            "</b></h4><br>" +
            "<h4>And with a score of: <b>" +
            this.rightAnswer +
            "</b> answers right.</h4><br>" +
            "<button id='start' class='btn btn-secondary'> " +
            "Press to Reload</button></div>"
        );
        $(".oneAnswer").empty();
        this.questionOn = false;
        this.gameOn = false;
      }
    }
    $(".col-7.answers").show();
  },

  timeCounter() {
    TriviaObj.questionTimer++;
    $("#timer").html("<br><br><h2>" + TriviaObj.questionTimer + "</h2>");
    if (TriviaObj.questionTimer === TriviaObj.answerTime) {
      TriviaObj.questionNumber++;
      TriviaObj.stopCounter();
      TriviaObj.selectedAnswer = "noAnswer";
      TriviaObj.analyzeAnswer();
    }
    // console.log(TriviaObj.questionTimer);
  },

  stopCounter() {
    clearInterval(this.clockTimer);
  },

  analyzeAnswer() {
    this.questionOn = false;
    if (this.selectedAnswer == "noAnswer") {
      $(".triviaText").html(
        "<h4><b>Time's up!!!</b></h4><br><br>" +
          "<h5>Look's like you need to polish up on your basketball knowledge.</h5>"
      );
      setTimeout(function() {
        TriviaObj.questionOn = true;
        TriviaObj.showQuestion();
      }, this.showAnswerTime);
    } else if (
      this.selectedAnswer == this.rightAnswerNum[this.questionNumber]
    ) {
      $(".triviaText").html(
        "<h4><b>You've got that right!!!</b><br><br><br></h4><h5>" +
          this.rightAnswerArr[this.questionNumber] +
          "</h5>"
      );
      this.giphyDisplay();
      this.rightAnswer++;
    } else {
      $(".triviaText").html(
        "<h4><b>The answer is wrong.</b></h4><br><br><h5>" +
          this.rightAnswerArr[this.questionNumber] +
          "<br><br><b>Sorry. Better Luck Next Time!</b></h5>"
      );
      var gameSound = new Audio("../assets/sounds/Buzzer-sports-arena.mp3");
      gameSound.volume = 0.55;
      gameSound.play();
      setTimeout(function() {
        TriviaObj.questionOn = true;
        TriviaObj.showQuestion();
      }, this.showAnswerTime);
    }
  },

  timeFormat(time) {
    var hours = Math.floor(time / 3600);
    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (hours === 0) {
      hours = "00";
    } else if (hours < 10) {
      hours = "0" + hours;
    }

    return hours + "h:" + minutes + "m:" + seconds + "s";
  },

  giphyDisplay() {
    gameSound = new Audio("../assets/sounds/nba.mp3");
    gameSound.volume = 0.55;
    gameSound.play();
    setTimeout(function() {
      $(".giphyDisplay").fadeIn(1500);
      $(".col-7.answers").hide();
    }, 900);

    $(".giphyDisplay").attr("src", this.gifAddress[this.questionNumber]);

    setTimeout(function() {
      $(".giphyDisplay").fadeOut(1500);
      $(".col-7.answers").show();
      setTimeout(function() {
        TriviaObj.questionOn = true;
        TriviaObj.showQuestion();
      }, 400);
    }, this.giphyTime);
  }
};

// Here ends the Trivia Object ====================================

// Here starts Event Listeners ====================================

$(".oneAnswer").on("mouseover", function() {
  if (TriviaObj.questionOn) {
    // $(this).css("background-color", "rgb(131, 131, 100)"); //rgb(131, 131, 100)
    $(this).css("cursor", "grab");
  }
});

$(".oneAnswer").on("mouseout", function() {
  if (TriviaObj.questionOn) {
    // $(this).css("background-color", "rgb(194, 194, 149)"); //rgb(131, 131, 100)
  }
});

$(".oneAnswer").on("click", function() {
  if (TriviaObj.questionOn) {
    $(".oneAnswer").css("cursor", "default");
    // $(this).css("background-color", "rgb(194, 194, 149)");
    TriviaObj.selectedAnswer = $(this).attr("tag");
    TriviaObj.analyzeAnswer(TriviaObj.selectedAnswer);
    TriviaObj.selectedAnswer = "";
    TriviaObj.questionNumber++;
    TriviaObj.stopCounter();
    TriviaObj.totalTime = TriviaObj.totalTime + TriviaObj.questionTimer;
  }
});

$(document).on("click", "#start", function() {
  // Reset the game variables.
  TriviaObj.questionTimer = 0;
  TriviaObj.movieTimer = 0;
  TriviaObj.totalTime = 0;
  TriviaObj.questionNumber = 0;
  TriviaObj.rightAnswer = 0;
  TriviaObj.selectedAnswer = "";

  TriviaObj.gameOn = true;
  TriviaObj.questionOn = true;
  $(".triviaText").empty();
  TriviaObj.showQuestion();
});

// Here ends Event Listeners ======================================

// Calling function to start the game =============================

TriviaObj.startGame();
