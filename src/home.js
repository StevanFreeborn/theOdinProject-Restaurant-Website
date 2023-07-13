export function createHome() {
  const homeContent = `
    <h1>Experience the Taste of Greece</h1>
    <img class="mythos-image" alt="picture of mythos restaurant" src="assets/mythos.jpg" />
  `;

  const homeElement = document.createElement('div');
  homeElement.classList.add('home');
  homeElement.innerHTML = homeContent;

  return homeElement;
}
