(()=>{"use strict";function e(e){const t=document.createElement("p");return t.textContent=e,t}const t=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("home");const n=document.createElement("img");return n.src="images/logo.jpg",n.alt="logo",n.classList.add("logo-img"),t.appendChild(e("Best cakes in your country")),t.appendChild(e("Made with passion and love")),t.appendChild(n),t.appendChild(e("Order via whatsapp on: ")),t}())};function n(e,t){const n=document.createElement("div");n.classList.add("menu-item");const a=document.createElement("h2");a.textContent=e;const o=document.createElement("p");o.textContent=t;const c=document.createElement("img");return c.src=`images/cakes/${e.toLowerCase()}.jpg`,c.alt=`${e}`,n.appendChild(c),n.appendChild(a),n.appendChild(o),n}const a=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(n("Birthday","Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil")),e.appendChild(n("Wedding","Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil")),e.appendChild(n("Anniversary","Tomato sauce, Mozarella, Chilli flakes, Olives, Basil")),e.appendChild(n("Birthday","Tomato sauce, Bacon, Pineapple, Olives, Basil")),e.appendChild(n("Wedding","Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil")),e.appendChild(n("Carrot Cake","Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli")),e.appendChild(n("Velvet Cake","White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil")),e.appendChild(n("Wedding Cake","Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli")),e}())},o=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("p");t.textContent="📞 +263 77 341 8501";const n=document.createElement("p");n.textContent="🏠 Marimba Harare, Zimbabwe";const a=document.createElement("img");return a.src="images/restaurant-location.png",a.alt="Scola Cake Creations",e.appendChild(t),e.appendChild(n),e.appendChild(a),e}())};function c(e){document.querySelectorAll(".button-nav").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}!function(){const e=document.getElementById("content");e.appendChild(function(){const e=document.createElement("header");e.classList.add("header");const n=document.createElement("h1");return n.classList.add("restaurant-name"),n.textContent="Scola Cake Creations",e.appendChild(n),e.appendChild(function(){const e=document.createElement("nav"),n=document.createElement("button");n.classList.add("button-nav"),n.textContent="Home",n.addEventListener("click",(e=>{e.target.classList.contains("active")||(c(n),t())}));const d=document.createElement("button");d.classList.add("button-nav"),d.textContent="Menu",d.addEventListener("click",(e=>{e.target.classList.contains("active")||(c(d),a())}));const i=document.createElement("button");return i.classList.add("button-nav"),i.textContent="Contact",i.addEventListener("click",(e=>{e.target.classList.contains("active")||(c(i),o())})),e.appendChild(n),e.appendChild(d),e.appendChild(i),e}()),e}()),e.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e}()),e.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");t.textContent=`Copyright © ${(new Date).getFullYear()} Scola Cakes`;const n=document.createElement("a");n.href="https://github.com/michalosman";const a=document.createElement("i");return a.classList.add("fab"),a.classList.add("fa-github"),n.appendChild(a),e.appendChild(t),e.appendChild(n),e}()),c(document.querySelector(".button-nav")),t()}()})();