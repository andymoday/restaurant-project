import {createElements} from './load-func.js';
import {contact_tab} from './contact.js';
import {menu_tab} from './menu.js';

createElements();   
menu_tab();
let tab1 = document.getElementById("tab1-btn");
tab1.addEventListener('click', () => {
    let body = document.querySelector("body");
    let contact = document.getElementById("contact-tab");
    if (body.contains(contact)) {
        body.removeChild(contact);
        menu_tab();
    }
})
let tab2 = document.getElementById("tab2-btn");
tab2.addEventListener('click', () => {
    let body = document.querySelector("body");
    let menu = document.getElementById("menu-tab");
    if (body.contains(menu)) {
        body.removeChild(menu);
        contact_tab();
    }
})