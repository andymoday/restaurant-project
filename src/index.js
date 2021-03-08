import {createElements} from './load-func.js';
import {contact_tab} from './contact.js';
import {menu_tab} from './menu.js';

createElements();   
menu_tab();
let body = document.querySelector("body");
let menu = document.getElementById("menu-tab");
let menuTabBtn = document.getElementById("tab1-btn");
let contact = document.getElementById("contact-tab");
let contactTabBtn = document.getElementById("tab2-btn");
menuTabBtn.addEventListener('click', () => {
    if (body.contains(contact)) {
        body.removeChild(contact);
        menuTabBtn.setAttribute("id","tab1-btn");
        contactTabBtn.setAttribute("id","tab2-btn");
        menu_tab();
    }
})
contactTabBtn.addEventListener('click', () => {
    if (body.contains(menu)) {
        body.removeChild(menu);
        menuTabBtn.setAttribute("id","tab1-btn-deactivate");
        contactTabBtn.setAttribute("id","tab2-btn-activate");
        contact_tab();
    }
})