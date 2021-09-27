/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let alt = a => Math.floor(Math.random() * (a - 0 + 0)) + 0;

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let excuse =
    who[alt(who.length - 1)] +
    " " +
    action[alt(action.length - 1)] +
    " " +
    what[alt(what.length - 1)] +
    " " +
    when[alt(when.length - 1)];
  document.querySelector("#excuse").innerHTML = excuse;
  console.log("Hello Rigo from the console!");
};
