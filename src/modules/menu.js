function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Birthday",
      "Customized birthday cake 2 tier"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Wedding",
      "3 Tier wedding cake. fruit cake"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Anniversary",
      "Customized anniversary for memories"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Birthday",
      "Customized birthday cake 2 tier"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Wedding",
      "3 Tier wedding cake. fruit cake"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Carrot Cake",
      "We offer different designs as well"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Velvet Cake",
      "Well designed and on the flavour"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Wedding Cake",
      "7 tier wedding cake"
    )
  );

  return menu;
}

function createMenuItem(name, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const foodImage = document.createElement("img");
  foodImage.src = `images/cakes/${name.toLowerCase()}.jpg`;
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
