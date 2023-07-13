export function createContact() {
  const contactContent = `
    <h1>We'd love to hear from you!</h1>
    <div>Joplin, Missouri</div>
    <div>(417) 624-6984</div>
    <a 
      href="https://goo.gl/maps/xmB3zUumVbVHBxqEA" 
      target="_blank"
    >
      1306 S Range Line Joplin, MO
    </a>
  `;

  const contactElement = document.createElement('div');
  contactElement.classList.add('contact');
  contactElement.innerHTML = contactContent;
  return contactElement;
}
