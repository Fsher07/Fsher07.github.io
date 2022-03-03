// Popup mobile navbar menu

const menu = document.querySelector('.desktop-nav');
const navbarItems = document.querySelectorAll('.navbarItem'); // Get all the navbar items
const hamburgerMenu = document.querySelector('#hamburgerMenu');
const menuIcon = document.querySelector('#menuIcon');
const closeIcon = document.querySelector('#closeIcon');

function toggleMenu() {
  if (menu.classList.contains('openMenu')) {
    menu.classList.remove('openMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('openMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburgerMenu.addEventListener('click', toggleMenu);

navbarItems.forEach((navbarItems) => {
  navbarItems.addEventListener('click', toggleMenu);
});

// Popup desktop project window
const projectWindows = [
  {
    title: 'Keeping track of hundreds  of components website',
    technologies: 'HTML CSS JavaScript',
    image: 'images/portfolioPng.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'Data Dashboard Healthcare',
    technologies: 'Bootstrap html Google',
    image: 'images/portfolioPng.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industrys standard',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'Data Dashboard Healthcare',
    technologies: 'Bootstrap html Google',
    image: 'images/portfolioPng.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industrys standard',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'Data Dashboard Healthcare',
    technologies: 'Bootstrap html Google',
    image: 'images/portfolioPng.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industrys standard',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'Data Dashboard Healthcare',
    technologies: 'Bootstrap html Google',
    image: 'images/portfolioPng.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industrys standard',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'Data Dashboard Healthcare',
    technologies: 'Bootstrap html Google',
    image: 'images/portfolioPng.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industrys standard',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'Data Dashboard Healthcare',
    technologies: 'Bootstrap html Google',
    image: 'images/portfolioPng.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industrys standard',
    liveLink: '#',
    sourceLink: '#',
  }];

const openButton = document.querySelectorAll('.project-open-button');
function popupProjectWindow() {
  // creating overlay
  const overlay = document.createElement('div');
  overlay.id = 'overlay';
  document.body.appendChild(overlay);

  //  creating container of window
  const ProjectWindow = document.createElement('div');
  ProjectWindow.className = 'popup-window';
  document.body.appendChild(ProjectWindow);
  //  creating header
  const ProjectWindowHeader = document.createElement('div');
  ProjectWindowHeader.className = 'popup-window-header';
  ProjectWindowHeader.innerHTML = `<h2 class="popup-title blue"> ${projectWindows[0].title}</h2>`;
  document.querySelector('.popup-window').appendChild(ProjectWindowHeader);

  const Xmark = document.createElement('nav');
  Xmark.className = 'popup-window-closeMark';
  Xmark.innerHTML = '<i class="fa-solid blue fa-xmark project-closeIcon"></i>';
  document.querySelector('.popup-window-header').appendChild(Xmark);

  // creating technology list
  const technologiesList = document.createElement('ul');
  technologiesList.className = 'works-ul flexUl';
  technologiesList.id = 'technologies-List';
  document.querySelector('.popup-window').appendChild(technologiesList);

  // adding li tags
  const techMenu = document.querySelector('#technologies-List');
  let li = document.createElement('li');
  li.innerHTML = `<a class="popup-tabs works-tabs MRWTabs blue" href="#"> ${projectWindows[0].technologies.split(' ')[0]}</a>`;
  techMenu.appendChild(li);

  li = document.createElement('li');
  li.innerHTML = `<a class="popup-tabs works-tabs MRWTabs blue" href="#"> ${projectWindows[0].technologies.split(' ')[1]}'</a>`;
  techMenu.appendChild(li);

  li = document.createElement('li');
  li.innerHTML = `<a class="popup-tabs works-tabs MRWTabs blue" href="#"> ${projectWindows[0].technologies.split(' ')[2]}</a>`;
  techMenu.appendChild(li);

  // creating content part
  const content = document.createElement('div');
  content.className = 'popup-window-content';
  content.innerHTML = `<img class="popup-image" src=" ${projectWindows[0].image}" alt="project-image">`;
  document.querySelector('.popup-window').appendChild(content);

  // creating description part
  const description = document.createElement('div');
  description.className = 'popup-window-text';
  description.innerHTML = `<p class="blue"> ${projectWindows[0].description}</p>`;
  document.querySelector('.popup-window-content').appendChild(description);

  // creating description button part
  const button = document.createElement('div');
  button.className = 'popup-window-buttons';
  button.innerHTML = '<button class="btn popup-button">See Project <img src="images/githubPng.png" alt="button-github-symbol"></i></button>';
  document.querySelector('.popup-window-text').appendChild(button);

  const button1 = document.createElement('button');
  button1.className = 'btn popup-button';
  button1.innerHTML = 'See Live <img src="images/projectbuttonImage.png" alt="button-image">';
  document.querySelector('.popup-window-buttons').appendChild(button1);

  function closeProjectWindow() {
    if (document.querySelector('.popup-window')) {
      document.querySelector('.popup-window').remove();
      document.querySelector('#overlay').remove();
    }
  }
  const closeButton = document.querySelector('.project-closeIcon');
  closeButton.addEventListener('click', closeProjectWindow);
}

openButton.forEach((button) => {
  button.addEventListener('click', popupProjectWindow);
});

function projectCard1() { // project card 1 is created seperately because it is different from the other 5 cards
  return `<div class="card card1 ProjectPage">
  <button type="button" class="projectbtn btn project-open-button">`  
}

function projectCardContent(info) {
  return `<div class="card ProjectPage-h2">
  <h3 class="project-titles ProjectPage-h2">${info.title}</h3>
  <p>${info.description}</p>
  <ul class="project-ul">
    <li><a class="Tags" href="#">${info.technologies.split(' ')[0]}</a></li>
    <li><a class="Tags" href="#">${info.technologies.split(' ')[1]}</a></li>
    <li><a class="Tags" href="#">${info.technologies.split(' ')[2]}</a></li>
  </ul>
</div>`;
}

const projectCardsContainer = document.querySelector('.works-projects');
if (projectCardsContainer) {
  projectCard1();
  for (let i = 2; i < projectWindows.length; i++) {
    projectCardsContainer.innerHTML += projectCardContent(projectWindows[i]);
  }
}  

