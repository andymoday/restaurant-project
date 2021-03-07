function menu_tab() {

    let body = document.querySelector("body");
    let menu = document.createElement("div");
    body.appendChild(menu);

    let headline = document.createElement("h1");
    headline.textContent = "Menu";
    menu.appendChild(headline);

    let meal1 = document.createElement("h2");
    meal1.textContent = "Dinner";
    menu.appendChild(meal1);
    let item1 = document.createElement("h4");
    item1.textContent = "Roasted Nut Loaf";
    menu.appendChild(item1);
    let desc1 = document.createElement("p");
    desc1.textContent = "A succulent loaf of cashews and mushrooms served with roast potatoes and carrots";
    menu.appendChild(desc1);
    let item2 = document.createElement("h4");
    item2.textContent = "Mac'n'Cheeze";
    menu.appendChild(item2);
    let desc1 = document.createElement("p");
    desc1.textContent = "Corn pasta served in a creamy butternut squash sauce";
    menu.appendChild(desc1);

}

export {menu_tab}