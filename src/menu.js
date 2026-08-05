import menuItems from "./menuItems";

const menuDiv = document.createElement("div");
menuDiv.id = "menuDiv";

for(const menuItem of menuItems){
    const foodItem = document.createElement("div");
    foodItem.classList.add("foodItem");
    foodItem.innerHTML = `
        <img src="${menuItem.coverImage}" alt="${menuItem.name}">
        <h3>${menuItem.name}</h3>
        <p>₹${menuItem.price}</p>
    `;

    menuDiv.appendChild(foodItem);
}

export default menuDiv;
