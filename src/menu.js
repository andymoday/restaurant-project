function menu_tab() {

    let body = document.querySelector("body");
    let menu = document.createElement("div");
    menu.setAttribute("id","menu-tab");
    menu.style.display = "block"
    menu.setAttribute("style","text-align: center");
    body.appendChild(menu);

    let headline = document.createElement("h1");
    headline.textContent = "Dinner";
    headline.style.fontSize = "30px"
    headline.style.margin = "5px auto"
    menu.appendChild(headline);

    let meal1 = document.createElement("h2");
    meal1.textContent = "Main Course";
    meal1.style.fontSize = "20px"
    meal1.style.margin = "5px auto"
    menu.appendChild(meal1);
    let item1 = document.createElement("h4");
    item1.textContent = "Roasted Nut Loaf";
    item1.style.margin = "5px auto"
    menu.appendChild(item1);
    let desc1 = document.createElement("p");
    desc1.textContent = "A succulent loaf of cashews and mushrooms served with roast potatoes and carrots";
    desc1.style.margin = "5px auto"
    menu.appendChild(desc1);
    let item2 = document.createElement("h4");
    item2.textContent = "Mac'n'Cheeze";
    item2.style.margin = "5px auto"
    menu.appendChild(item2);
    let desc2 = document.createElement("p");
    desc2.textContent = "Corn pasta served in a creamy butternut squash sauce";
    desc2.style.margin = "5px auto"
    menu.appendChild(desc2);

}

export {menu_tab}