/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomCard() {
  const suits = ["&hearts;", "&spades;", "&diams;", "&clubs;"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  const suit = getRandomElement(suits);
  const value = getRandomElement(values);

  return { suit, value };
}

function getRandomColorClass() {
  // Return 'red' for hearts and diamonds, 'black' for spades and clubs
  const suitsColors = {
    "&hearts;": "red",
    "&diams;": "red",
    "&spades;": "black",
    "&clubs;": "black"
  };
  return suitsColors[card.suit] || "black";
}

document.addEventListener("DOMContentLoaded", () => {
  const card = getRandomCard();
  const colorClass = getRandomColorClass();

  document.getElementById("top-left").innerHTML = card.suit;
  document.getElementById("bottom-right").innerHTML = card.suit;
  document.getElementById("value").textContent = card.value;

  const cardElement = document.getElementById("card");
  cardElement.classList.add(colorClass);
});
