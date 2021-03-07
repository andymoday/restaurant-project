
function createElements() {

    let content = document.getElementById("content");
    content.style.display = "block"
    content.setAttribute("style","text-align: center");

    let image = document.createElement("img");
    image.setAttribute("src","../images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg");
    image.setAttribute("alt","picture of lovely food");
    image.style.width = "400px";
    image.style.display = "block";
    image.style.margin = "10px auto"; 
    image.style.border = "1px solid black"
    content.appendChild(image);
    
    let headline = document.createElement("h1");
    headline.textContent = "The Moday Munchies";
    headline.style.margin = "10px auto"; 
    headline.style.fontSize = "40px"
    content.appendChild(headline);
    
    let paragraphOne = document.createElement("p");
    paragraphOne.textContent = "The Moday Munchies is a new vegan restaurant serving you the very latest in plant based cuisine";
    paragraphOne.style.margin = "10px auto"; 
    paragraphOne.style.fontSize = "20px"
    content.appendChild(paragraphOne);
    
    let paragraphTwo = document.createElement("p");
    paragraphTwo.textContent = "We'll be serving you mouthwatering delights from 6pm - 11pm every night of the week";
    paragraphTwo.style.margin = "10px auto";
    content.appendChild(paragraphTwo);
    
    let tab1 = document.createElement("button");
    tab1.setAttribute("id","tab1-btn");
    tab1.textContent = "Menu"
    tab1.style.height = "30px"
    tab1.style.width = "200px"
    tab1.style.backgroundColor = "beige"
    content.appendChild(tab1);
    
    let tab2 = document.createElement("button");
    tab2.setAttribute("id","tab2-btn");
    tab2.textContent = "Contact"
    tab2.style.height = "30px"
    tab2.style.width = "200px"
    tab2.style.backgroundColor = "rgba(99, 99, 37, 0.678)"
    content.appendChild(tab2);
    
}

export {createElements}