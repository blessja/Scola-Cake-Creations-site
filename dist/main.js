(()=>{"use strict";function e(e){const t=document.createElement("p");return t.textContent=e,t}const t=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("home");const n=document.createElement("img");n.src="images/logo.jpg",n.alt="logo",n.classList.add("logo-img");const a=document.createElement("a");a.href="https://api.whatsapp.com/send?phone=+27782386120";const d=document.createElement("i");return d.classList.add("fa-brands"),d.classList.add("fa-whatsapp"),t.appendChild(e("Best cakes in your country")),t.appendChild(e("Made with passion and love")),t.appendChild(n),t.appendChild(e("Order via whatsapp")),t.appendChild(a),a.appendChild(d),t}())};function n(e,t){const n=document.createElement("div");n.classList.add("menu-item");const a=document.createElement("h2");a.textContent=e;const d=document.createElement("p");d.textContent=t;const c=document.createElement("img");return c.src=`images/cakes/${e.toLowerCase()}.jpg`,c.alt=`${e}`,n.appendChild(c),n.appendChild(a),n.appendChild(d),n}const a=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(n("Birthday","Customized birthday cake 2 tier")),e.appendChild(n("Wedding","6 Tier wedding cake with extra smalls. fruit cake")),e.appendChild(n("Anniversary","Customized anniversary for memories")),e.appendChild(n("Birthday","Customized birthday cake 2 tier")),e.appendChild(n("Wedding","6 Tier wedding cake with extra smalls. fruit cake")),e.appendChild(n("Carrot Cake","We offer different designs as well")),e.appendChild(n("Velvet Cake","Well designed and on the flavour")),e.appendChild(n("Wedding Cake","7 tier wedding cake")),e}())},d=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("p");t.textContent="📞 +263 77 341 8501";const n=document.createElement("p");n.textContent="🏠 14004 Madokero Eastate, Harare";const a=document.createElement("img");return a.src="images/scola-address.png",a.alt="Scola Cake Creations",e.appendChild(t),e.appendChild(n),e.appendChild(a),e}())};function c(e){document.querySelectorAll(".button-nav").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}!function(){const e=document.getElementById("content");e.appendChild(function(){const e=document.createElement("header");e.classList.add("header");const n=document.createElement("h1");return n.classList.add("restaurant-name"),n.textContent="Scola Cake Creations",e.appendChild(n),e.appendChild(function(){const e=document.createElement("nav"),n=document.createElement("button");n.classList.add("button-nav"),n.textContent="Home",n.addEventListener("click",(e=>{e.target.classList.contains("active")||(c(n),t())}));const o=document.createElement("button");o.classList.add("button-nav"),o.textContent="Menu",o.addEventListener("click",(e=>{e.target.classList.contains("active")||(c(o),a())}));const s=document.createElement("button");return s.classList.add("button-nav"),s.textContent="Contact",s.addEventListener("click",(e=>{e.target.classList.contains("active")||(c(s),d())})),e.appendChild(n),e.appendChild(o),e.appendChild(s),e}()),e}()),e.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e}()),e.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");t.textContent=`Copyright © ${(new Date).getFullYear()} Scola Cakes`;const n=document.createElement("a");n.href="https://github.com/michalosman";const a=document.createElement("i");return a.classList.add("fa-brands"),a.classList.add("fa-facebook"),n.appendChild(a),e.appendChild(t),e.appendChild(n),e}()),c(document.querySelector(".button-nav")),t()}()})();