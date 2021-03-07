function contact_tab() {

    let body = document.querySelector("body");
    let contact = document.createElement("div");
    body.appendChild(contact);

    let title = document.createElement("h1");
    title.textContent = "Contact Us";
    contact.appendChild(title);

    let message = document.createElement("h2");
    message.textContent = "Get in touch if you have any questions!";
    contact.appendChild(message);

    let form = document.createElement("form");
    form.textContent = "Form here";
    contact.appendChild(form);

}

export {contact_tab}