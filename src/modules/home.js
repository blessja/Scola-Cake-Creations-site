function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const logoImage = document.createElement("img");
  logoImage.src = "images/logo.jpg";
  logoImage.alt = "logo";
  logoImage.classList.add("logo-img");

  const whatsapplink = document.createElement("a");
  whatsapplink.href = "https://api.whatsapp.com/send?phone=+27782386120";

  const whatsappIcon = document.createElement("i");
  whatsappIcon.classList.add("fa-brands")
  whatsappIcon.classList.add("fa-whatsapp")

  


  home.appendChild(createParagraph("Best cakes in your country"));
  home.appendChild(createParagraph("Made with passion and love"));
  home.appendChild(logoImage);
  home.appendChild(createParagraph("Order via whatsapp"));
  home.appendChild(whatsapplink)
  whatsapplink.appendChild(whatsappIcon);

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
