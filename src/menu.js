export function createMenu() {
  const menuContent = `
    <h2 class="menu-section-title">Appetizers</h2>
    <div class="menu-section-container">
      <div class="menu-item">
        <div class="details">
          <div class="title">Spicy Feta Dip</div>
          <div class="description">Feta cheese blend, pepperoncini peppers, tomato brunoise, warm pita chips.</div>
        </div>
        <div class="price">13</div>
      </div>
      <div class="menu-item">
        <div class="details">
          <div class="title">Bang Bang Shrimp</div>
          <div class="description">Breaded fried shrimp, spicy bang bang sauce, sweet lime ginger dip, scallions.</div>
        </div>
        <div class="price">13</div>
      </div>
    </div>
    <h2 class="menu-section-title">Soups & Salads</h2>
    <div class="menu-section-container">
      <div class="menu-item">
        <div class="details">
          <div class="title">Wedge Salad</div>
          <div class="description">Wedge of iceberg lettuce, tomatoes, eggs, bacon and blue cheese dressing.</div>
        </div>
        <div class="price">12</div>
      </div>
      <div class="menu-item">
        <div class="details">
          <div class="title">Caprese Salad</div>
          <div class="description">heirloom tomatoes, fresh mozzarella cheese, olive oil, fresh basil leaves.</div>
        </div>
        <div class="price">12</div>
      </div>
    </div>
    <h2 class="menu-section-title">Entrees</h2>
    <div class="menu-section-container">
      <div class="menu-item">
        <div class="details">
          <div class="title">Bacon Wrapped Atlantic Salmon</div>
          <div class="description">Atlantic salmon wrapped in applewood smoked bacon, herb creamed leeks, rice pilaf.</div>
        </div>
        <div class="price">34</div>
      </div>
      <div class="menu-item">
        <div class="details">
          <div class="title">Chilean Seabass</div>
          <div class="description">Parmesan seared seabass, roasted pancetta, smoked tomato scallion broth, potato gnocchi, olive caper relish, oven roasted tomatoes, feta cheese.</div>
        </div>
        <div class="price">44</div>
      </div>
    </div>
  `;
  const menuElement = document.createElement('div');
  menuElement.classList.add('menu');
  menuElement.innerHTML = menuContent;
  return menuElement;
}
