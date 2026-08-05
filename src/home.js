import restaurantLogo from "./assets/restaurantLogo.svg";
import menuDiv from "./menu.js";

const homeDiv = document.createElement("div");
homeDiv.id = "homeDiv";

const logo = document.createElement("img");
logo.src = restaurantLogo;

const viewMenuButton = document.createElement("button");
viewMenuButton.textContent = "View menu"
viewMenuButton.addEventListener("click", () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.appendChild(menuDiv);
})

homeDiv.appendChild(logo);
homeDiv.appendChild(viewMenuButton);

export default homeDiv;