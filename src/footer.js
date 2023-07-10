function createGithubImage() {
  const githubImage = document.createElement('img');
  githubImage.src = 'assets/github.png';
  githubImage.classList.add('github-image');
  return githubImage;
}

function createGithubUsername() {
  const githubUsername = document.createElement('span');
  githubUsername.textContent = 'StevanFreeborn';
  githubUsername.classList.add('github-username');
  return githubUsername;
}

function createGithubLink() {
  const githubImage = createGithubImage();
  const githubUsername = createGithubUsername();
  const githubLink = document.createElement('a');
  githubLink.href =
    'https://github.com/StevanFreeborn/theOdinProject-Restaurant-Website';
  githubLink.target = '_blank';
  githubLink.append(githubImage);
  githubLink.append(githubUsername);
  githubLink.classList.add('github-link');
  return githubLink;
}

function createGithubContainer() {
  const githubContainer = document.createElement('div');
  githubContainer.classList.add('github-container');
  return githubContainer;
}

export function renderFooter(contentElement) {
  const githubLink = createGithubLink();
  const githubContainer = createGithubContainer();
  githubContainer.append(githubLink);
  const footerElement = document.createElement('footer');
  footerElement.append(githubContainer);
  contentElement.append(footerElement);
}
