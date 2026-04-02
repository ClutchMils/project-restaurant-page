export function loadAbout() {
  const container = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "About Us";

  const text = document.createElement("p");
  text.textContent =
    "Nyamings was built on passion, culture, and authentic Jamaican flavor.";

  container.append(title, text);

  return container;
}
