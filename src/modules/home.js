function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const logoImage = document.createElement("img");
  logoImage.src = "images/logo.jpg";
  logoImage.alt = "logo";
  logoImage.classList.add("logo-img")

  home.appendChild(createParagraph("Best cakes in your country"));
  home.appendChild(createParagraph("Made with passion and love"));
  home.appendChild(logoImage);
  home.appendChild(createParagraph("Order via whatsapp on: "));

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
