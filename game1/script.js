/* =========================================================
   PICTURE SORTING GAME
   ========================================================= */


/* =========================================================
   SVG ICONS
   ========================================================= */

const ICONS = {

  apple: `
    <svg viewBox="0 0 100 100">
      <path
        d="M50 40 C30 40 20 55 20 68
        C20 85 35 92 45 92
        C48 92 49 90 50 90
        C51 90 52 92 55 92
        C65 92 80 85 80 68
        C80 55 70 40 50 40 Z"
        fill="#d94b3f"/>

      <path
        d="M47 40 C47 30 40 25 40 25
        C40 25 45 22 52 28
        C58 33 55 40 55 40 Z"
        fill="#5a8f3c"/>

      <rect
        x="48"
        y="18"
        width="4"
        height="14"
        rx="2"
        fill="#7a5230"/>
    </svg>
  `,

  cherry: `
    <svg viewBox="0 0 100 100">

      <path
        d="M40 45 C30 55 55 40 45 20"
        fill="none"
        stroke="#5a8f3c"
        stroke-width="3"/>

      <path
        d="M60 45 C68 55 45 40 55 20"
        fill="none"
        stroke="#5a8f3c"
        stroke-width="3"/>

      <circle
        cx="38"
        cy="65"
        r="18"
        fill="#c8273c"/>

      <circle
        cx="64"
        cy="68"
        r="18"
        fill="#c8273c"/>

      <ellipse
        cx="32"
        cy="58"
        rx="4"
        ry="6"
        fill="#e8697a"
        opacity="0.7"/>
    </svg>
  `,

  lemon: `
    <svg viewBox="0 0 100 100">

      <ellipse
        cx="50"
        cy="52"
        rx="34"
        ry="26"
        fill="#f2c531"/>

      <path
        d="M20 52 C16 48 16 44 22 42"
        fill="none"
        stroke="#c99e1d"
        stroke-width="3"/>

      <path
        d="M80 52 C84 56 84 60 78 62"
        fill="none"
        stroke="#c99e1d"
        stroke-width="3"/>

      <ellipse
        cx="42"
        cy="42"
        rx="8"
        ry="4"
        fill="#f7dc72"
        opacity="0.7"/>
    </svg>
  `,

  grape: `
    <svg viewBox="0 0 100 100">

      <path
        d="M50 20 L54 32"
        stroke="#5a8f3c"
        stroke-width="3"
        fill="none"/>

      <circle cx="50" cy="38" r="10" fill="#7b4fa0"/>
      <circle cx="38" cy="50" r="10" fill="#7b4fa0"/>
      <circle cx="62" cy="50" r="10" fill="#7b4fa0"/>
      <circle cx="32" cy="65" r="10" fill="#7b4fa0"/>
      <circle cx="50" cy="65" r="10" fill="#7b4fa0"/>
      <circle cx="68" cy="65" r="10" fill="#7b4fa0"/>
      <circle cx="50" cy="80" r="10" fill="#7b4fa0"/>

    </svg>
  `,


  /* =====================================================
     ANIMALS
     ===================================================== */

  cat: `
    <svg viewBox="0 0 100 100">

      <path
        d="M25 30 L35 50 L18 48 Z"
        fill="#e8a559"/>

      <path
        d="M75 30 L65 50 L82 48 Z"
        fill="#e8a559"/>

      <circle
        cx="50"
        cy="58"
        r="30"
        fill="#f0b96b"/>

      <circle cx="40" cy="52" r="4" fill="#2c2c2a"/>
      <circle cx="60" cy="52" r="4" fill="#2c2c2a"/>

      <path
        d="M46 64 Q50 68 54 64"
        stroke="#2c2c2a"
        stroke-width="2.5"
        fill="none"/>
    </svg>
  `,

  dog: `
    <svg viewBox="0 0 100 100">

      <ellipse
        cx="24"
        cy="45"
        rx="12"
        ry="20"
        fill="#a9784f"/>

      <ellipse
        cx="76"
        cy="45"
        rx="12"
        ry="20"
        fill="#a9784f"/>

      <circle
        cx="50"
        cy="58"
        r="30"
        fill="#c99a6a"/>

      <circle cx="40" cy="54" r="4" fill="#2c2c2a"/>
      <circle cx="60" cy="54" r="4" fill="#2c2c2a"/>

      <ellipse
        cx="50"
        cy="66"
        rx="7"
        ry="5"
        fill="#2c2c2a"/>
    </svg>
  `,

  fish: `
    <svg viewBox="0 0 100 100">

      <path
        d="M15 50 L32 40 L32 60 Z"
        fill="#2f8fb0"/>

      <ellipse
        cx="58"
        cy="50"
        rx="30"
        ry="20"
        fill="#3fa9cf"/>

      <circle
        cx="72"
        cy="45"
        r="4"
        fill="#1c3f4d"/>

      <path
        d="M40 50 Q58 55 76 50"
        stroke="#2f8fb0"
        stroke-width="2"
        fill="none"/>
    </svg>
  `,

  bug: `
    <svg viewBox="0 0 100 100">

      <ellipse
        cx="50"
        cy="58"
        rx="26"
        ry="30"
        fill="#d94b3f"/>

      <path
        d="M50 30 L50 88"
        stroke="#2c2c2a"
        stroke-width="3"/>

      <circle cx="40" cy="45" r="5" fill="#2c2c2a"/>
      <circle cx="60" cy="45" r="5" fill="#2c2c2a"/>
      <circle cx="38" cy="65" r="5" fill="#2c2c2a"/>
      <circle cx="62" cy="65" r="5" fill="#2c2c2a"/>

    </svg>
  `,


  /* =====================================================
     CLOTHES
     ===================================================== */

  shirt: `
    <svg viewBox="0 0 100 100">

      <path
        d="M35 22 L50 30 L65 22
        L82 32 L74 46 L66 40
        L66 82 L34 82 L34 40
        L26 46 L18 32 Z"
        fill="#3f8cd4"/>

    </svg>
  `,

  shoe: `
    <svg viewBox="0 0 100 100">

      <path
        d="M15 68 L15 55 Q15 50 20 50
        L45 50 L58 38 Q62 34 68 36
        L78 42 Q88 46 88 58 L88 68 Z"
        fill="#d9581f"/>

      <rect
        x="15"
        y="68"
        width="73"
        height="10"
        rx="3"
        fill="#2c2c2a"/>

    </svg>
  `,

  hat: `
    <svg viewBox="0 0 100 100">

      <ellipse
        cx="50"
        cy="72"
        rx="38"
        ry="9"
        fill="#3a3a38"/>

      <path
        d="M28 72 Q28 35 50 28
        Q72 35 72 72 Z"
        fill="#4d4d4a"/>

      <rect
        x="28"
        y="60"
        width="44"
        height="8"
        fill="#d94b3f"/>

    </svg>
  `,

  jacket: `
    <svg viewBox="0 0 100 100">

      <path
        d="M35 20 L50 28 L65 20
        L84 34 L75 50 L66 44
        L66 84 L34 84 L34 44
        L25 50 L16 34 Z"
        fill="#5a8f3c"/>

    </svg>
  `,


  /* =====================================================
     MORE FRUITS
     ===================================================== */

  banana: `
    <svg viewBox="0 0 100 100">

      <path
        d="M25 75 C20 55 30 30 55 22
        C58 21 60 24 58 26
        C40 34 32 55 36 72
        C50 78 65 70 72 55
        C73 53 76 54 75 57
        C68 78 45 88 28 80
        C26 79 25 77 25 75 Z"
        fill="#f2c531"/>

    </svg>
  `,

  orange: `
    <svg viewBox="0 0 100 100">

      <circle
        cx="50"
        cy="55"
        r="33"
        fill="#e8811f"/>

      <path
        d="M50 22 L50 30"
        stroke="#5a8f3c"
        stroke-width="3"/>

    </svg>
  `,

  strawberry: `
    <svg viewBox="0 0 100 100">

      <path
        d="M50 30 C25 30 18 55 30 72
        C38 84 62 84 70 72
        C82 55 75 30 50 30 Z"
        fill="#d9273f"/>

      <circle cx="38" cy="50" r="2.5" fill="#f2d24a"/>
      <circle cx="52" cy="45" r="2.5" fill="#f2d24a"/>
      <circle cx="64" cy="52" r="2.5" fill="#f2d24a"/>

      <path
        d="M35 30 L42 18 L50 28
        L58 17 L65 30 Z"
        fill="#5a8f3c"/>

    </svg>
  `,

  pineapple: `
    <svg viewBox="0 0 100 100">

      <path
        d="M50 15 L40 30 M50 15 L50 32 M50 15 L60 30"
        stroke="#5a8f3c"
        stroke-width="4"
        stroke-linecap="round"/>

      <ellipse
        cx="50"
        cy="62"
        rx="28"
        ry="32"
        fill="#e8b326"/>

    </svg>
  `,


  /* =====================================================
     MORE ANIMALS
     ===================================================== */

  rabbit: `
    <svg viewBox="0 0 100 100">

      <ellipse
        cx="38"
        cy="28"
        rx="7"
        ry="20"
        fill="#e8dccb"/>

      <ellipse
        cx="62"
        cy="28"
        rx="7"
        ry="20"
        fill="#e8dccb"/>

      <circle
        cx="50"
        cy="60"
        r="28"
        fill="#f2e9db"/>

      <circle cx="41" cy="56" r="4" fill="#2c2c2a"/>
      <circle cx="59" cy="56" r="4" fill="#2c2c2a"/>

    </svg>
  `,

  bird: `
    <svg viewBox="0 0 100 100">

      <ellipse
        cx="52"
        cy="55"
        rx="26"
        ry="22"
        fill="#3f8cd4"/>

      <circle
        cx="30"
        cy="42"
        r="14"
        fill="#3f8cd4"/>

      <circle
        cx="24"
        cy="38"
        r="3"
        fill="#2c2c2a"/>

      <path
        d="M14 42 L2 46 L14 50 Z"
        fill="#e8811f"/>

    </svg>
  `,

  frog: `
    <svg viewBox="0 0 100 100">

      <ellipse
        cx="50"
        cy="62"
        rx="30"
        ry="22"
        fill="#6fae3e"/>

      <circle
        cx="35"
        cy="35"
        r="12"
        fill="#6fae3e"/>

      <circle
        cx="65"
        cy="35"
        r="12"
        fill="#6fae3e"/>

      <circle
        cx="35"
        cy="32"
        r="5"
        fill="#2c2c2a"/>

      <circle
        cx="65"
        cy="32"
        r="5"
        fill="#2c2c2a"/>

    </svg>
  `,

  turtle: `
    <svg viewBox="0 0 100 100">

      <ellipse
        cx="50"
        cy="58"
        rx="30"
        ry="24"
        fill="#5a8f3c"/>

      <path
        d="M50 38 L50 78
        M32 45 L68 45
        M32 70 L68 70"
        stroke="#3f6a29"
        stroke-width="2"/>

      <ellipse
        cx="20"
        cy="55"
        rx="8"
        ry="6"
        fill="#6fae3e"/>

      <ellipse
        cx="80"
        cy="55"
        rx="8"
        ry="6"
        fill="#6fae3e"/>

    </svg>
  `,


  /* =====================================================
     MORE CLOTHES
     ===================================================== */

  scarf: `
    <svg viewBox="0 0 100 100">

      <path
        d="M20 30 Q50 45 80 30
        L80 40 Q50 55 20 40 Z"
        fill="#c8273c"/>

      <path
        d="M45 42 L40 85 L52 85 L50 48"
        fill="#c8273c"/>

    </svg>
  `,

  sock: `
    <svg viewBox="0 0 100 100">

      <path
        d="M38 18 L62 18 L62 55
        Q80 58 80 75 Q80 84 68 84
        L45 84 Q35 84 32 74
        L28 50 Z"
        fill="#3f8cd4"/>

    </svg>
  `,

  glove: `
    <svg viewBox="0 0 100 100">

      <path
        d="M35 45 L35 20 Q35 15 40 15
        Q45 15 45 20 L45 45

        M47 42 L47 15 Q47 10 52 10
        Q57 10 57 15 L57 42

        M59 42 L59 18 Q59 13 64 13
        Q69 13 69 18 L69 45"
        fill="none"
        stroke="#e8811f"
        stroke-width="9"
        stroke-linecap="round"/>

      <path
        d="M25 55 Q25 85 50 85
        Q75 85 75 55 L75 48
        L25 48 Z"
        fill="#e8811f"/>

    </svg>
  `,

  sweater: `
    <svg viewBox="0 0 100 100">

      <path
        d="M32 22 L50 30 L68 22
        L86 36 L76 50 L68 44
        L68 84 L32 84 L32 44
        L24 50 L14 36 Z"
        fill="#7b4fa0"/>

    </svg>
  `

};


/* =========================================================
   CATEGORY ICONS
   ========================================================= */

const CAT_ICONS = {

  fruit: `
    <svg viewBox="0 0 100 100">

      <path
        d="M50 40 C30 40 20 55 20 68
        C20 85 35 92 45 92
        C48 92 49 90 50 90
        C51 90 52 92 55 92
        C65 92 80 85 80 68
        C80 55 70 40 50 40 Z"
        fill="#d94b3f"/>

      <path
        d="M47 40 C47 30 40 25 40 25
        C40 25 45 22 52 28
        C58 33 55 40 55 40 Z"
        fill="#5a8f3c"/>

    </svg>
  `,

  animal: `
    <svg viewBox="0 0 100 100">

      <circle
        cx="50"
        cy="58"
        r="30"
        fill="#f0b96b"/>

      <path
        d="M25 30 L35 50 L18 48 Z"
        fill="#e8a559"/>

      <path
        d="M75 30 L65 50 L82 48 Z"
        fill="#e8a559"/>

      <circle cx="40" cy="52" r="4" fill="#2c2c2a"/>
      <circle cx="60" cy="52" r="4" fill="#2c2c2a"/>

    </svg>
  `,

  clothes: `
    <svg viewBox="0 0 100 100">

      <path
        d="M35 22 L50 30 L65 22
        L82 32 L74 46 L66 40
        L66 82 L34 82 L34 40
        L26 46 L18 32 Z"
        fill="#3f8cd4"/>

    </svg>
  `

};


/* =========================================================
   ITEMS
   ========================================================= */

const items = [

  {
    name: "apple",
    icon: "apple",
    cat: "fruit"
  },

  {
    name: "cherry",
    icon: "cherry",
    cat: "fruit"
  },

  {
    name: "lemon",
    icon: "lemon",
    cat: "fruit"
  },

  {
    name: "grape",
    icon: "grape",
    cat: "fruit"
  },

  {
    name: "cat",
    icon: "cat",
    cat: "animal"
  },

  {
    name: "dog",
    icon: "dog",
    cat: "animal"
  },

  {
    name: "fish",
    icon: "fish",
    cat: "animal"
  },

  {
    name: "ladybug",
    icon: "bug",
    cat: "animal"
  },

  {
    name: "shirt",
    icon: "shirt",
    cat: "clothes"
  },

  {
    name: "shoe",
    icon: "shoe",
    cat: "clothes"
  },

  {
    name: "hat",
    icon: "hat",
    cat: "clothes"
  },

  {
    name: "jacket",
    icon: "jacket",
    cat: "clothes"
  },

  {
    name: "banana",
    icon: "banana",
    cat: "fruit"
  },

  {
    name: "orange",
    icon: "orange",
    cat: "fruit"
  },

  {
    name: "strawberry",
    icon: "strawberry",
    cat: "fruit"
  },

  {
    name: "pineapple",
    icon: "pineapple",
    cat: "fruit"
  },

  {
    name: "rabbit",
    icon: "rabbit",
    cat: "animal"
  },

  {
    name: "bird",
    icon: "bird",
    cat: "animal"
  },

  {
    name: "frog",
    icon: "frog",
    cat: "animal"
  },

  {
    name: "turtle",
    icon: "turtle",
    cat: "animal"
  },

  {
    name: "scarf",
    icon: "scarf",
    cat: "clothes"
  },

  {
    name: "sock",
    icon: "sock",
    cat: "clothes"
  },

  {
    name: "glove",
    icon: "glove",
    cat: "clothes"
  },

  {
    name: "sweater",
    icon: "sweater",
    cat: "clothes"
  }

];


/* =========================================================
   GAME VARIABLES
   ========================================================= */

let deck = [];
let shuffled = [];
let idx = 0;
let score = 0;
let best = 0;


/* =========================================================
   SHUFFLE
   ========================================================= */

function shuffleArray(arr) {

  const a = [...arr];

  for (
    let i = a.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [a[i], a[j]] =
      [a[j], a[i]];

  }

  return a;
}


/* =========================================================
   DEAL ROUND
   ========================================================= */

function dealRound() {

  if (deck.length < 10) {

    const extra =
      shuffleArray(items)
        .filter(it => !deck.includes(it));

    deck =
      deck.concat(extra);
  }

  const round =
    deck.slice(0, 10);

  deck =
    deck.slice(10);

  return round;
}


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const iconEl =
  document.getElementById("item-icon");

const nameEl =
  document.getElementById("item-name");

const scoreEl =
  document.getElementById("score");

const roundEl =
  document.getElementById("round");

const bestEl =
  document.getElementById("best");

const feedbackEl =
  document.getElementById("feedback");

const stageEl =
  document.getElementById("stage");

const catsEl =
  document.querySelector(".cats");

const gameoverEl =
  document.getElementById("gameover");

const loadingEl =
  document.getElementById("loading");


/* =========================================================
   CATEGORY BUTTON LABELS
   ========================================================= */

document
  .querySelectorAll(".catbtn")
  .forEach(btn => {

    const cat =
      btn.getAttribute("data-cat");

    btn.innerHTML =
      CAT_ICONS[cat] +
      "<span>" +
      (
        cat === "fruit"
          ? "Fruits"
          : cat === "animal"
            ? "Animals"
            : "Clothes"
      ) +
      "</span>";

  });


/* =========================================================
   HIGH SCORE
   ========================================================= */

const HS_KEY =
  "picture-sorting-high-score";


function loadHighScore() {

  try {

    const saved =
      localStorage.getItem(HS_KEY);

    best =
      saved
        ? parseInt(saved, 10) || 0
        : 0;

  }

  catch (e) {

    best = 0;

  }

  bestEl.textContent =
    best;

  loadingEl.style.display =
    "none";
}


/* =========================================================
   SAVE HIGH SCORE
   ========================================================= */

function saveHighScoreIfBeaten() {

  if (score > best) {

    best = score;

    bestEl.textContent =
      best;

    try {

      localStorage.setItem(
        HS_KEY,
        String(best)
      );

    }

    catch (e) {

      console.error(
        "Could not save high score",
        e
      );

    }

    return true;
  }

  return false;
}


/* =========================================================
   NEW GAME
   ========================================================= */

function newGame() {

  shuffled =
    dealRound();

  idx = 0;

  score = 0;

  scoreEl.textContent =
    0;

  stageEl.style.display =
    "flex";

  catsEl.style.display =
    "grid";

  gameoverEl.style.display =
    "none";

  document
    .getElementById("newbestline")
    .style.display =
    "none";

  feedbackEl.textContent =
    "";

  showItem();
}


/* =========================================================
   SHOW ITEM
   ========================================================= */

function showItem() {

  const item =
    shuffled[idx];

  iconEl.innerHTML =
    ICONS[item.icon];

  nameEl.textContent =
    item.name;

  roundEl.textContent =
    (idx + 1) + "/10";

  feedbackEl.textContent =
    "";

  feedbackEl.style.background =
    "transparent";
}


/* =========================================================
   CATEGORY CLICK
   ========================================================= */

catsEl.addEventListener(
  "click",
  (e) => {

    const btn =
      e.target.closest(".catbtn");

    if (!btn) return;

    const chosen =
      btn.getAttribute("data-cat");

    const item =
      shuffled[idx];


    /* CORRECT */

    if (chosen === item.cat) {

      score++;

      scoreEl.textContent =
        score;

      feedbackEl.style.color =
        "var(--correct-text)";

      feedbackEl.style.background =
        "var(--correct-bg)";

      feedbackEl.textContent =
        "✓ Correct! Well done!";

    }


    /* WRONG */

    else {

      feedbackEl.style.color =
        "var(--wrong-text)";

      feedbackEl.style.background =
        "var(--wrong-bg)";

      feedbackEl.textContent =
        "That is " +
        item.cat +
        ".";

    }


    idx++;


    /* MORE ITEMS */

    if (idx < shuffled.length) {

      setTimeout(
        showItem,
        900
      );

    }


    /* GAME FINISHED */

    else {

      setTimeout(
        () => {

          stageEl.style.display =
            "none";

          catsEl.style.display =
            "none";

          feedbackEl.textContent =
            "";

          gameoverEl.style.display =
            "block";

          document
            .getElementById("finalline")
            .textContent =
            "🎉 Game finished! You scored " +
            score +
            " out of 10.";

          const beat =
            saveHighScoreIfBeaten();

          document
            .getElementById("newbestline")
            .style.display =
            beat
              ? "block"
              : "none";

        },
        900
      );

    }

  }
);


/* =========================================================
   RESTART
   ========================================================= */

document
  .getElementById("restart")
  .addEventListener(
    "click",
    newGame
  );


/* =========================================================
   START GAME
   ========================================================= */

loadHighScore();

newGame();