export function loadHome() {
  const container = document.createElement("div");

  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  const slogan = document.createElement("p");

  h1.textContent = "NYAMINGS";
  slogan.textContent = "A Taste of Tradition in Every Bite";

  header.appendChild(h1);
  header.appendChild(slogan);

  const heroImage = document.createElement("img");
  heroImage.src =
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4";
  heroImage.classList.add("hero-image");

  const about = document.createElement("section");
  about.classList.add("about-section");

  const h2 = document.createElement("h2");
  h2.textContent = "Welcome to Nyamings";

  const p1 = document.createElement("p");
  p1.textContent = "At Nyamings, we bring bold, soulful flavors...";

  const p2 = document.createElement("p");
  p2.textContent = "Relax and enjoy the true art of dining.";

  const cta = document.createElement("a");
  cta.textContent = "View our Menu";
  cta.href = "#";
  cta.classList.add("cta-button");

  about.append(h2, p1, p2, cta);

  const footer = document.createElement("footer");
  const f1 = document.createElement("p");
  f1.textContent = "© 2026 Nyamings Restaurant";

  const f2 = document.createElement("p");
  f2.textContent = "Old Harbour, Jamaica";

  footer.append(f1, f2);

  container.append(header, heroImage, about, footer);

  return container;
}

