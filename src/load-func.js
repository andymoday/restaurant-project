
function createElements() {

    let content = document.getElementById("content");
    let image = document.createElement("img");
    image.setAttribute("src","../images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg");
    image.setAttribute("alt","picture of lovely food"); 
    image.setAttribute("width","500px");
    content.appendChild(image);
    let headline = document.createElement("h1");
    headline.textContent = "The Moday Munchies";
    content.appendChild(headline);
    let paragraphOne = document.createElement("p");
    paragraphOne.textContent = "The Moday Munchies is a new vegan restaurant serving you the very latest in plant based cuisine";
    content.appendChild(paragraphOne);
    let paragraphTwo = document.createElement("p");
    paragraphTwo.textContent = "We'll be serving you mouthwatering delights from 6pm - 11pm every night of the week";
    content.appendChild(paragraphTwo);
    //let tab1 = document.createElement("button");
    //tab1.setAttribute("id" = "tab1-btn");
    //content.appendChild(tab1);
    //let tab2 = document.createElement("button");
    //tab2.setAttribute("id" = "tab2-btn");
    //content.appendChild(tab2);
}

export {createElements}