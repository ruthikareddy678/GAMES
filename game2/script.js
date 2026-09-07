"use strict";


/* =========================================================
   EMOJI OPTIONS
   ========================================================= */

var EMOJI_CHOICES = [

  "☀️",
  "🛏️",
  "🪥",
  "🚿",
  "🍳",
  "👕",
  "☕",
  "🚶",
  "💊",
  "📺",
  "🧦",
  "🧴",
  "🥣",
  "🚪",
  "🛋️",
  "📖",
  "☎️",
  "🧺",
  "🍽️",
  "🕯️",
  "🌙",
  "🐶",
  "🌳",
  "🧸"

];


/* =========================================================
   DEFAULT ROUTINE
   ========================================================= */

var DEFAULT_ROUTINE = [

  {
    emoji: "☀️",
    name: "Waking up"
  },

  {
    emoji: "🛏️",
    name: "Making the bed"
  },

  {
    emoji: "🪥",
    name: "Brushing teeth"
  },

  {
    emoji: "🚿",
    name: "Taking a shower"
  },

  {
    emoji: "👕",
    name: "Getting dressed"
  },

  {
    emoji: "🍳",
    name: "Eating breakfast"
  },

  {
    emoji: "💊",
    name: "Taking morning medicine"
  },

  {
    emoji: "📖",
    name: "Reading or resting"
  },

  {
    emoji: "🍽️",
    name: "Eating lunch"
  },

  {
    emoji: "🚶",
    name: "Going for a short walk"
  },

  {
    emoji: "☕",
    name: "Afternoon tea"
  },

  {
    emoji: "📺",
    name: "Watching a show"
  },

  {
    emoji: "🍽️",
    name: "Eating dinner"
  },

  {
    emoji: "🧴",
    name: "Getting ready for bed"
  },

  {
    emoji: "🌙",
    name: "Going to sleep"
  }

];


/* =========================================================
   ROUTINE
   ========================================================= */

var routine = DEFAULT_ROUTINE.slice();


/* =========================================================
   GAME STATE
   ========================================================= */

var state = {

  order: [],

  idx: 0,

  correctCount: 0,

  answered: false

};


/* =========================================================
   SPEECH SYNTHESIS
   ========================================================= */

/*
  Browser's speech system.

  This is used for:

  1. Read the Whole Routine Aloud
  2. Hear this step
  3. Feedback after an answer
*/

var synth =
  window.speechSynthesis || null;


var chosenVoice = null;


/* =========================================================
   LOAD SPEECH VOICES
   ========================================================= */

function loadVoices() {

  if (!synth) {

    return;

  }


  var voices =
    synth.getVoices();


  if (!voices || voices.length === 0) {

    return;

  }


  /*
    Prefer an English voice.
  */

  chosenVoice =
    voices.find(function (voice) {

      return /^en/i.test(voice.lang);

    }) || voices[0];

}


if (synth) {

  loadVoices();


  /*
    Some browsers load voices later.
  */

  if ("onvoiceschanged" in synth) {

    synth.onvoiceschanged =
      loadVoices;

  }

}


/* =========================================================
   STOP SPEECH
   ========================================================= */

/*
  THIS IS THE IMPORTANT FUNCTION.

  It immediately cancels whatever the browser
  is currently reading.

  For example:

  User clicks:
  "Read the Whole Routine Aloud"

  Speech starts...

  User then clicks:
  "Start the Game"

  startGame()
      ↓
  stopSpeech()
      ↓
  speech stops immediately.
*/

function stopSpeech() {

  if (!synth) {

    return;

  }


  try {

    synth.cancel();

  }

  catch (error) {

    console.log(
      "Could not stop speech:",
      error
    );

  }

}


/* =========================================================
   SPEAK
   ========================================================= */

/*
  This function reads text aloud.

  IMPORTANT:
  It does NOT display the text anywhere.
*/

function speak(text) {

  if (!synth) {

    return;

  }


  /*
    Stop any speech already playing
    before starting new speech.
  */

  stopSpeech();


  try {

    var utterance =
      new SpeechSynthesisUtterance(text);


    /*
      Speech speed.
    */

    utterance.rate = 0.9;


    /*
      Normal pitch.
    */

    utterance.pitch = 1;


    /*
      Use selected English voice.
    */

    if (chosenVoice) {

      utterance.voice =
        chosenVoice;

    }


    /*
      Start reading.
    */

    synth.speak(utterance);

  }

  catch (error) {

    console.log(
      "Speech error:",
      error
    );

  }

}


/* =========================================================
   SCREEN ELEMENTS
   ========================================================= */

var screens = {

  home:
    document.getElementById(
      "homeScreen"
    ),

  game:
    document.getElementById(
      "gameScreen"
    ),

  end:
    document.getElementById(
      "endScreen"
    ),

  edit:
    document.getElementById(
      "editScreen"
    )

};


/* =========================================================
   SHOW SCREEN
   ========================================================= */

function showScreen(name) {

  /*
    Stop any speech whenever
    we move between screens.
  */

  stopSpeech();


  for (var key in screens) {

    screens[key].classList.toggle(

      "hidden",

      key !== name

    );

  }

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHtml(text) {

  return String(text)

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#039;"
    );

}


/* =========================================================
   RENDER HOME
   ========================================================= */

function renderHome() {

  var list =
    document.getElementById(
      "routinePreview"
    );


  list.innerHTML = "";


  routine.forEach(
    function(step, index) {

      var li =
        document.createElement(
          "li"
        );


      li.innerHTML =

        '<span class="num">' +

        (index + 1) +

        "</span>" +

        '<span class="emoji">' +

        escapeHtml(step.emoji) +

        "</span>" +

        "<span>" +

        escapeHtml(step.name) +

        "</span>";


      list.appendChild(li);

    }
  );

}


/* =========================================================
   READ WHOLE ROUTINE
   ========================================================= */

document
  .getElementById("listenAllBtn")
  .addEventListener(
    "click",
    function() {

      /*
        Create one sentence containing
        the complete routine.
      */

      var text =
        "Here is today's routine. " +

        routine
          .map(function(step) {

            return step.name;

          })
          .join(". Then, ") +

        ".";


      /*
        Read it aloud.
      */

      speak(text);

    }
  );


/* =========================================================
   START GAME
   ========================================================= */

function startGame() {

  /*
    ========================================================
    IMPORTANT FIX
    ========================================================

    If "Read the Whole Routine Aloud" is currently speaking,
    this immediately stops it.

    This happens BEFORE the game starts.
    ========================================================
  */

  stopSpeech();


  /*
    Make sure routine has enough steps.
  */

  if (routine.length < 3) {

    renderHome();

    showScreen("home");

    return;

  }


  /*
    Copy routine into game order.
  */

  state.order =
    routine.slice();


  /*
    Start from first step.
  */

  state.idx = 0;


  /*
    Reset score.
  */

  state.correctCount = 0;


  /*
    Reset answer status.
  */

  state.answered = false;


  /*
    Show game.
  */

  showScreen("game");


  /*
    Draw progress.
  */

  renderProgress();


  /*
    Draw first question.
  */

  renderStep();

}


/* =========================================================
   PROGRESS BAR
   ========================================================= */

function renderProgress() {

  var row =
    document.getElementById(
      "progressRow"
    );


  row.innerHTML = "";


  /*
    There is one question between
    every two routine steps.
  */

  for (
    var i = 0;
    i < state.order.length - 1;
    i++
  ) {

    var dot =
      document.createElement(
        "div"
      );


    dot.className =
      "progress-dot";


    if (i < state.idx) {

      dot.classList.add(
        "done"
      );

    }

    else if (i === state.idx) {

      dot.classList.add(
        "current"
      );

    }


    row.appendChild(dot);

  }

}


/* =========================================================
   RENDER CURRENT STEP
   ========================================================= */

function renderStep() {

  /*
    Hide Continue button.
  */

  document
    .getElementById("nextBtn")
    .classList.add("hidden");


  /*
    Clear feedback.
  */

  document
    .getElementById("feedback")
    .textContent = "";


  /*
    Allow answering again.
  */

  state.answered = false;


  /*
    Current step.
  */

  var current =
    state.order[state.idx];


  /*
    Correct next step.
  */

  var correctNext =
    state.order[
      state.idx + 1
    ];


  /*
    Display current emoji.
  */

  document
    .getElementById("stepEmoji")
    .textContent =
      current.emoji;


  /*
    Display current step name.
  */

  document
    .getElementById("stepName")
    .textContent =
      current.name;


  /*
    Create pool of incorrect options.
  */

  var pool =
    state.order.filter(
      function(step, index) {

        return (

          index !== state.idx &&

          index !== state.idx + 1

        );

      }
    );


  /*
    Shuffle incorrect options.
  */

  shuffle(pool);


  /*
    Pick two incorrect options.
  */

  var distractors =
    pool.slice(0, 2);


  /*
    Combine:

    Correct answer
    +
    Two incorrect answers
  */

  var options =
    [correctNext]
      .concat(distractors);


  /*
    Shuffle all three.
  */

  shuffle(options);


  /*
    Find options container.
  */

  var wrap =
    document.getElementById(
      "optionsWrap"
    );


  wrap.innerHTML = "";


  /*
    Create buttons.
  */

  options.forEach(
    function(option) {

      var button =
        document.createElement(
          "button"
        );


      button.className =
        "option-btn";


      button.innerHTML =

        '<span class="emoji">' +

        escapeHtml(option.emoji) +

        "</span>" +

        "<span>" +

        escapeHtml(option.name) +

        "</span>";


      /*
        When user clicks option.
      */

      button.addEventListener(
        "click",
        function() {

          handleAnswer(

            option,

            correctNext,

            button,

            wrap

          );

        }
      );


      wrap.appendChild(button);

    }
  );

}


/* =========================================================
   HANDLE ANSWER
   ========================================================= */

function handleAnswer(

  chosen,

  correctNext,

  button,

  wrap

) {

  /*
    Prevent multiple answers.
  */

  if (state.answered) {

    return;

  }


  state.answered = true;


  /*
    Get all answer buttons.
  */

  var buttons =
    wrap.querySelectorAll(
      ".option-btn"
    );


  /*
    Disable them.
  */

  buttons.forEach(
    function(btn) {

      btn.disabled = true;

    }
  );


  var feedback =
    document.getElementById(
      "feedback"
    );


  /* ======================================================
     CORRECT ANSWER
     ====================================================== */

  if (
    chosen.name ===
    correctNext.name
  ) {

    button.classList.add(
      "correct"
    );


    state.correctCount++;


    feedback.textContent =
      pick([

        "That's right!",

        "Well remembered!",

        "Exactly right.",

        "Nicely done!"

      ]);


    /*
      Speak positive feedback.
    */

    speak(
      "Yes, next comes " +
      correctNext.name +
      "."
    );

  }


  /* ======================================================
     INCORRECT ANSWER
     ====================================================== */

  else {

    /*
      Gentle amber highlight.
    */

    button.classList.add(
      "gentle-nudge"
    );


    /*
      Highlight correct answer.
    */

    buttons.forEach(
      function(btn) {

        if (
          btn.textContent.indexOf(
            correctNext.name
          ) !== -1
        ) {

          btn.classList.add(
            "correct"
          );

        }

      }
    );


    feedback.textContent =
      "Next comes " +
      correctNext.name +
      " — that's alright, let's keep going.";


    /*
      Speak the correct answer.
    */

    speak(
      "Next comes " +
      correctNext.name +
      "."
    );

  }


  /*
    Show Continue button.
  */

  document
    .getElementById("nextBtn")
    .classList.remove("hidden");

}


/* =========================================================
   CONTINUE BUTTON
   ========================================================= */

document
  .getElementById("nextBtn")
  .addEventListener(
    "click",
    function() {

      /*
        Stop any feedback speech
        before moving to next question.
      */

      stopSpeech();


      /*
        Move to next step.
      */

      state.idx++;


      /*
        Check if game is finished.
      */

      if (
        state.idx >=
        state.order.length - 1
      ) {

        endGame();

      }

      else {

        renderProgress();

        renderStep();

      }

    }
  );


/* =========================================================
   HEAR THIS STEP
   ========================================================= */

document
  .getElementById("speakStepBtn")
  .addEventListener(
    "click",
    function() {

      /*
        Make sure a step exists.
      */

      if (
        !state.order[state.idx]
      ) {

        return;

      }


      /*
        Read current step.
      */

      speak(
        state.order[
          state.idx
        ].name
      );

    }
  );


/* =========================================================
   END GAME
   ========================================================= */

function endGame() {

  /*
    Stop any speech.
  */

  stopSpeech();


  /*
    Number of questions.
  */

  var total =
    state.order.length - 1;


  /*
    Calculate score.
  */

  var percentage =
    total > 0

      ? state.correctCount / total

      : 1;


  /*
    Calculate stars.
  */

  var starCount =

    percentage >= 0.85

      ? 3

      : percentage >= 0.5

      ? 2

      : 1;


  /*
    Display stars.
  */

  document
    .getElementById("starsDisplay")
    .textContent =

      "⭐".repeat(starCount) +

      "☆".repeat(
        3 - starCount
      );


  /*
    Display score.
  */

  document
    .getElementById("endMessage")
    .textContent =

      "You remembered " +

      state.correctCount +

      " of " +

      total +

      " steps. Every bit of practice helps.";


  /*
    Show end screen.
  */

  showScreen("end");

}


/* =========================================================
   START GAME BUTTON
   ========================================================= */

document
  .getElementById("startBtn")
  .addEventListener(
    "click",
    startGame
  );


/* =========================================================
   PLAY AGAIN
   ========================================================= */

document
  .getElementById("playAgainBtn")
  .addEventListener(
    "click",
    startGame
  );


/* =========================================================
   BACK TO HOME FROM END
   ========================================================= */

document
  .getElementById("homeFromEndBtn")
  .addEventListener(
    "click",
    function() {

      stopSpeech();

      renderHome();

      showScreen("home");

    }
  );


/* =========================================================
   EDITOR
   ========================================================= */

var editingList = [];


/* =========================================================
   OPEN EDITOR
   ========================================================= */

function openEditor() {

  /*
    Stop speech.
  */

  stopSpeech();


  /*
    Make a copy of routine.
  */

  editingList =
    routine.map(
      function(step) {

        return {

          emoji: step.emoji,

          name: step.name

        };

      }
    );


  /*
    Display editor.
  */

  renderEditor();


  /*
    Show editor screen.
  */

  showScreen("edit");

}


/* =========================================================
   RENDER EDITOR
   ========================================================= */

function renderEditor() {

  var container =
    document.getElementById(
      "editorList"
    );


  container.innerHTML = "";


  editingList.forEach(
    function(step, index) {

      /*
        Create row.
      */

      var row =
        document.createElement(
          "div"
        );


      row.className =
        "editor-row";


      /* ================= ICON SELECT ================= */

      var select =
        document.createElement(
          "select"
        );


      select.setAttribute(
        "aria-label",
        "Icon for step " +
        (index + 1)
      );


      /*
        Add emoji options.
      */

      EMOJI_CHOICES.forEach(
        function(emoji) {

          var option =
            document.createElement(
              "option"
            );


          option.value =
            emoji;


          option.textContent =
            emoji;


          if (
            emoji ===
            step.emoji
          ) {

            option.selected =
              true;

          }


          select.appendChild(
            option
          );

        }
      );


      /*
        Change emoji.
      */

      select.addEventListener(
        "change",
        function() {

          editingList[index].emoji =
            select.value;

        }
      );


      /* ================= TEXT INPUT ================= */

      var input =
        document.createElement(
          "input"
        );


      input.type = "text";


      input.value =
        step.name;


      input.setAttribute(
        "aria-label",
        "Name for step " +
        (index + 1)
      );


      /*
        Update step name.
      */

      input.addEventListener(
        "input",
        function() {

          editingList[index].name =
            input.value;

        }
      );


      /* ================= REMOVE BUTTON ================= */

      var removeButton =
        document.createElement(
          "button"
        );


      removeButton.className =
        "remove-row";


      removeButton.textContent =
        "✕";


      removeButton.setAttribute(
        "aria-label",
        "Remove this step"
      );


      /*
        Remove step.
      */

      removeButton.addEventListener(
        "click",
        function() {

          editingList.splice(
            index,
            1
          );


          renderEditor();

        }
      );


      /* ================= ADD TO ROW ================= */

      row.appendChild(
        select
      );

      row.appendChild(
        input
      );

      row.appendChild(
        removeButton
      );


      container.appendChild(
        row
      );

    }
  );

}


/* =========================================================
   EDIT BUTTON
   ========================================================= */

document
  .getElementById("editBtn")
  .addEventListener(
    "click",
    openEditor
  );


/* =========================================================
   CANCEL EDIT
   ========================================================= */

document
  .getElementById("cancelEditBtn")
  .addEventListener(
    "click",
    function() {

      stopSpeech();

      renderHome();

      showScreen("home");

    }
  );


/* =========================================================
   ADD NEW STEP
   ========================================================= */

document
  .getElementById("addRowBtn")
  .addEventListener(
    "click",
    function() {

      editingList.push({

        emoji: "☀️",

        name: "New step"

      });


      renderEditor();

    }
  );


/* =========================================================
   SAVE ROUTINE
   ========================================================= */

document
  .getElementById("saveEditBtn")
  .addEventListener(
    "click",
    function() {

      /*
        Remove empty names.
      */

      var cleanedRoutine =
        editingList
          .filter(
            function(step) {

              return (
                step.name.trim()
                  .length > 0
              );

            }
          )
          .map(
            function(step) {

              return {

                emoji:
                  step.emoji,

                name:
                  step.name.trim()

              };

            }
          );


      /*
        Need at least 3 steps.
      */

      if (
        cleanedRoutine.length < 3
      ) {

        alert(
          "Please keep at least 3 steps in the routine."
        );

        return;

      }


      /*
        Save.
      */

      routine =
        cleanedRoutine;


      /*
        Return home.
      */

      renderHome();

      showScreen("home");

    }
  );


/* =========================================================
   SHUFFLE
   ========================================================= */

function shuffle(array) {

  for (
    var i = array.length - 1;
    i > 0;
    i--
  ) {

    var j =
      Math.floor(
        Math.random() *
        (i + 1)
      );


    var temp =
      array[i];


    array[i] =
      array[j];


    array[j] =
      temp;

  }


  return array;

}


/* =========================================================
   PICK RANDOM ITEM
   ========================================================= */

function pick(array) {

  return array[
    Math.floor(
      Math.random() *
      array.length
    )
  ];

}


/* =========================================================
   INITIAL LOAD
   ========================================================= */

renderHome();

showScreen("home");