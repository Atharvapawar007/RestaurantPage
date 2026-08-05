console.log('index.js loaded');

import "./style.css";
import hero from "./assets/RestaurantBackground.png";
import homeDiv from "./home.js";
import menuDiv from "./menu.js";
import contactDiv from "./contact.js";
import imageLogo from "./assets/restaurantLogo.svg"

const content = document.querySelector("#content");
content.innerHTML = "";
content.appendChild(homeDiv);
content.style.backgroundImage = `url(${hero})`;

const navbar = document.querySelector("nav");

const homeButton = document.createElement("button");
const menuButton = document.createElement("button");
const contactButton = document.createElement("button");

homeButton.textContent = "Home";
menuButton.textContent = "Menu";
contactButton.textContent = "Contact";

homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(homeDiv);
});

menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(menuDiv);
});

contactButton.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(contactDiv);
});

navbar.appendChild(homeButton);
navbar.appendChild(menuButton);
navbar.appendChild(contactButton);


