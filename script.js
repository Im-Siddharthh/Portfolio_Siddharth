function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const phrases = ["C++ Programmer", "Front-end Developer", "Content Writer"];
const el = document.getElementById("typewriter");

let sleepTime = 50;
let curPhraseIndex = 0;
const writeloop = async () => {
  while (true) {
    let curWord = phrases[curPhraseIndex];
    for (let i = 0; i < curWord.length; i++) {
      el.innerText = curWord.substring(0, i + 1);
      await sleep(sleepTime);
    }
    await sleep(sleepTime * 10);

    for (let i = curWord.length; i > 0; i--) {
      el.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime);
    }
    await sleep(sleepTime * 5);

    if (curPhraseIndex === phrases.length - 1) {
      curPhraseIndex = 0;
    } else {
      curPhraseIndex++;
    }
  }
};
writeloop();

const phrases1 = ["C++ Programming", "Front-end Development", "Content Wrting"];
const el1 = document.getElementById("typewriter1");

let sleepTime1 = 50;
let curPhraseIndex1 = 0;
const writeloop1 = async () => {
  while (true) {
    let curWord = phrases1[curPhraseIndex1];
    for (let i = 0; i < curWord.length; i++) {
      el1.innerText = curWord.substring(0, i + 1);
      await sleep(sleepTime1);
    }
    await sleep(sleepTime1 * 10);

    for (let i = curWord.length; i > 0; i--) {
      el1.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime1);
    }
    await sleep(sleepTime1 * 5);

    if (curPhraseIndex1 === phrases1.length - 1) {
      curPhraseIndex1 = 0;
    } else {
      curPhraseIndex1++;
    }
  }
};
writeloop1();

const inputs = document.querySelectorAll(".input");
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}
function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}
inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

let div = document.getElementById("navlist");
let display = 0;
function hideshow() {
  if (display == 1) {
    div.style.display = "block";
    display = 0;
  } else {
    div.style.display = "none";
    display = 1;
  }
}

let icon = document.getElementById("icon1");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon1.src = "sun-regular.svg";
  } else {
    icon1.src = "110827_moon_icon.svg";
  }
};

let icon3 = document.getElementById("icon2");
icon3.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon2.src = "sun-regular.svg";
  } else {
    icon2.src = "110827_moon_icon.svg";
  }
};
