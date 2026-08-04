console.log('index.js loaded');

import "./style.css"

const content = document.querySelector("#content");
content.innerHTML = "home";
const navbar = document.querySelector("nav");

const homeButton = document.createElement("button");
const menuButton = document.createElement("button");
const contactButton = document.createElement("button");

homeButton.textContent = "Home";
menuButton.textContent = "Menu";
contactButton.textContent = "Contact";

homeButton.addEventListener("click", () => {
    content.innerHTML = "home";
});

menuButton.addEventListener("click", () => {
    content.innerHTML = "menu";
});

contactButton.addEventListener("click", () => {
    content.innerHTML = "contact";
});

navbar.appendChild(homeButton);
navbar.appendChild(menuButton);
navbar.appendChild(contactButton);


