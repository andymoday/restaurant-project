(()=>{"use strict";function e(){let e=document.querySelector("body"),t=document.createElement("div");t.setAttribute("id","menu-tab"),e.appendChild(t);let n=document.createElement("h1");n.textContent="Dinner Menu",t.appendChild(n);let a=document.createElement("h2");a.textContent="Starter",t.appendChild(a);let d=document.createElement("h3");d.textContent="Vegetable Soup",t.appendChild(d);let l=document.createElement("p");l.textContent="A wholesome soup of seasonal veg, served with crusty soda bread",t.appendChild(l);let o=document.createElement("h3");o.textContent="Cashew Camembert",t.appendChild(o);let i=document.createElement("p");i.textContent="Creamy baked cashews in the style of a traditional camembert cheese",t.appendChild(i);let c=document.createElement("h2");c.textContent="Main Course",t.appendChild(c);let m=document.createElement("h3");m.textContent="Roasted Nut Loaf",t.appendChild(m);let r=document.createElement("p");r.textContent="A succulent loaf of cashews and mushrooms served with roast potatoes and carrots",t.appendChild(r);let u=document.createElement("h3");u.textContent="Mac'n'Cheeze",t.appendChild(u);let s=document.createElement("p");s.textContent="Corn pasta served in a creamy butternut squash sauce",t.appendChild(s);let p=document.createElement("h2");p.textContent="Dessert",t.appendChild(p);let b=document.createElement("h3");b.textContent="Roasted Nut Loaf",t.appendChild(b);let h=document.createElement("p");h.textContent="A succulent loaf of cashews and mushrooms served with roast potatoes and carrots",t.appendChild(h);let C=document.createElement("h3");C.textContent="Mac'n'Cheeze",t.appendChild(C);let E=document.createElement("p");E.textContent="Corn pasta served in a creamy butternut squash sauce",t.appendChild(E)}!function(){let e=document.getElementById("content"),t=document.createElement("img");t.setAttribute("src","./images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg"),t.setAttribute("alt","picture of lovely food"),t.setAttribute("id","main-img"),e.appendChild(t);let n=document.createElement("h1");n.textContent="The Moday Munchies",e.appendChild(n);let a=document.createElement("h2");a.textContent="The Moday Munchies is a new vegan restaurant serving you the very latest in plant based cuisine",e.appendChild(a);let d=document.createElement("h3");d.textContent="We'll be serving you mouthwatering delights from 6pm - 11pm every night of the week",e.appendChild(d);let l=document.createElement("button");l.setAttribute("id","tab1-btn"),l.setAttribute("class","btn"),l.textContent="Menu",e.appendChild(l);let o=document.createElement("button");o.setAttribute("id","tab2-btn"),o.setAttribute("class","btn"),o.textContent="Contact",e.appendChild(o)}(),e();let t=document.querySelector("body"),n=document.getElementById("tab1-btn"),a=document.getElementById("tab2-btn");document.getElementById("tab1-btn").addEventListener("click",(()=>{let d=document.getElementById("contact-tab");t.contains(d)&&(t.removeChild(d),n.setAttribute("id","tab1-btn"),a.setAttribute("id","tab2-btn"),e())})),document.getElementById("tab2-btn").addEventListener("click",(()=>{let e=document.getElementById("menu-tab");t.contains(e)&&(t.removeChild(e),n.setAttribute("id","tab1-btn-deactivate"),a.setAttribute("id","tab2-btn-activate"),function(){let e=document.querySelector("body"),t=document.createElement("div");t.setAttribute("id","contact-tab"),e.appendChild(t);let n=document.createElement("h1");n.textContent="Contact Us",t.appendChild(n);let a=document.createElement("h2");a.textContent="Get in touch if you have any questions!",t.appendChild(a);let d=document.createElement("form");d.setAttribute("id","form"),d.setAttribute("class","form-container"),t.appendChild(d);let l=document.createElement("label");l.setAttribute("for","name"),l.textContent="Name: ",d.appendChild(l);let o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("id","name"),o.setAttribute("name","name"),d.appendChild(o);let i=document.createElement("label");i.setAttribute("for","email"),i.textContent="Email Address: ",d.appendChild(i);let c=document.createElement("input");c.setAttribute("type","text"),c.setAttribute("id","email"),c.setAttribute("name","email"),d.appendChild(c);let m=document.createElement("label");m.setAttribute("for","msg"),m.textContent="Your Message: ",d.appendChild(m);let r=document.createElement("textarea");r.setAttribute("type","text"),r.setAttribute("id","msg"),r.setAttribute("name","msg"),r.setAttribute("rows","4"),r.setAttribute("cols","43"),d.appendChild(r);let u=document.createElement("button");u.setAttribute("type","submit"),u.setAttribute("class","btn submit"),u.textContent="Submit",d.appendChild(u)}())}))})();