function contact_tab() {

    let body = document.querySelector("body");
    let contact = document.createElement("div");
    contact.setAttribute("id","contact-tab");
    body.appendChild(contact);

    let title = document.createElement("h1");
    title.textContent = "Contact Us";
    contact.appendChild(title);

    let message = document.createElement("h2");
    message.textContent = "Get in touch if you have any questions!";
    contact.appendChild(message);

    let form = document.createElement("form");
    form.setAttribute("id","form");
    form.setAttribute("class","form-container");
    contact.appendChild(form);
    
    let label1 = document.createElement("label");
    label1.setAttribute("for","name");
    label1.textContent = "Name: "
    form.appendChild(label1);

    let input1 = document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("id","name");
    input1.setAttribute("name","name");
    form.appendChild(input1)
    
    let label2 = document.createElement("label");
    label2.setAttribute("for","email");
    label2.textContent = "Email Address: "
    form.appendChild(label2);

    let input2 = document.createElement("input");
    input2.setAttribute("type","text");
    input2.setAttribute("id","email");
    input2.setAttribute("name","email");
    form.appendChild(input2)

    let label3 = document.createElement("label");
    label3.setAttribute("for","msg");
    label3.textContent = "Your Message: "
    form.appendChild(label3);

    let input3 = document.createElement("textarea");
    input3.setAttribute("type","text");
    input3.setAttribute("id","msg");
    input3.setAttribute("name","msg");
    input3.setAttribute("rows","4");
    input3.setAttribute("cols","43");
    form.appendChild(input3)

    let submit = document.createElement("button");
    submit.setAttribute("type","submit");
    submit.setAttribute("class","btn submit");
    submit.textContent = "Submit"
    form.appendChild(submit)

}

export {contact_tab}