// renderproduct.js
function renderProducts(containerSelector, filterFn = () => true) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const filtered = products.filter(filterFn);

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <h4>${product.name}</h4>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/")) {
    renderProducts(".product-grid", (p, i) => i < 3); // Show first 3 as featured
  }

  if (window.location.pathname.includes("product.html")) {
    renderProducts(".product-grid"); // Show all
  }
});

