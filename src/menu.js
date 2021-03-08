function menu_tab() {

    let body = document.querySelector("body");
    let menu = document.createElement("div");
    menu.setAttribute("id","menu-tab");
    body.appendChild(menu);

    let headline = document.createElement("h1");
    headline.textContent = "Dinner Menu";
    menu.appendChild(headline);

    let meal1 = document.createElement("h2");
    meal1.textContent = "Starter";
    menu.appendChild(meal1);

    let item1 = document.createElement("h3");
    item1.textContent = "Vegetable Soup";
    menu.appendChild(item1);

    let desc1 = document.createElement("p");
    desc1.textContent = "A wholesome soup of seasonal veg, served with crusty soda bread";
    menu.appendChild(desc1);
    
    let item2 = document.createElement("h3");
    item2.textContent = "Cashew Camembert";
    menu.appendChild(item2);

    let desc2 = document.createElement("p");
    desc2.textContent = "Creamy baked cashews in the style of a traditional camembert cheese";
    menu.appendChild(desc2);

    let meal2 = document.createElement("h2");
    meal2.textContent = "Main Course";
    menu.appendChild(meal2);

    let item3 = document.createElement("h3");
    item3.textContent = "Roasted Nut Loaf";
    menu.appendChild(item3);

    let desc3 = document.createElement("p");
    desc3.textContent = "A succulent loaf of cashews and mushrooms served with roast potatoes and carrots";
    menu.appendChild(desc3);
    
    let item4 = document.createElement("h3");
    item4.textContent = "Mac'n'Cheeze";
    menu.appendChild(item4);

    let desc4 = document.createElement("p");
    desc4.textContent = "Corn pasta served in a creamy butternut squash sauce";
    menu.appendChild(desc4);

    let meal3 = document.createElement("h2");
    meal3.textContent = "Dessert";
    menu.appendChild(meal3);

    let item5 = document.createElement("h3");
    item5.textContent = "Roasted Nut Loaf";
    menu.appendChild(item5);

    let desc5 = document.createElement("p");
    desc5.textContent = "A succulent loaf of cashews and mushrooms served with roast potatoes and carrots";
    menu.appendChild(desc5);
    
    let item6 = document.createElement("h3");
    item6.textContent = "Mac'n'Cheeze";
    menu.appendChild(item6);

    let desc6 = document.createElement("p");
    desc6.textContent = "Corn pasta served in a creamy butternut squash sauce";
    menu.appendChild(desc6);

}

export {menu_tab}