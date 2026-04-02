export function loadMenu() {
  const container = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "Our Menu";

  const item1 = document.createElement("p");
  item1.textContent = "Jerk Chicken - $12";

  const item2 = document.createElement("p");
  item2.textContent = "Oxtail - $15";

  const item3 = document.createElement("p");
  item3.textContent = "Curry Goat - $14";

  container.append(title, item1, item2, item3);

  return container;
}
