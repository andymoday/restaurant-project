import {createElements} from './load-func.js';
import {contact_tab} from './contact.js';
import {menu_tab} from './menu.js';

createElements();   
menu_tab();
let body = document.querySelector("body");
let menuTabBtn = document.getElementById("tab1-btn");
let contactTabBtn = document.getElementById("tab2-btn");
let tab1 = document.getElementById("tab1-btn");
tab1.addEventListener('click', () => {
    let contact = document.getElementById("contact-tab");
    if (body.contains(contact)) {
        body.removeChild(contact);
        menuTabBtn.style.backgroundColor = "beige"
        contactTabBtn.style.backgroundColor = "rgba(99, 99, 37, 0.678)"
        menu_tab();
    }
})
let tab2 = document.getElementById("tab2-btn");
tab2.addEventListener('click', () => {
    let menu = document.getElementById("menu-tab");
    if (body.contains(menu)) {
        body.removeChild(menu);
        menuTabBtn.style.backgroundColor = "rgba(99, 99, 37, 0.678)"
        contactTabBtn.style.backgroundColor = "beige"
        contact_tab();
    }
})