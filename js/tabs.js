// temporary JS to easily view the different UI elements
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const welcomeView = document.querySelector('.welcome');
const mealView = document.querySelector('.meal-view');
const dayView = document.querySelector('.day-view');
const links = document.querySelectorAll('.side-nav__link');

function displayDay() {
  welcomeView.style.display = 'none';
  mealView.style.display = 'none';
  dayView.style.display = 'block';
}

function displayMeal() {
  welcomeView.style.display = 'none';
  mealView.style.display = 'block';
  dayView.style.display = 'none';
}

function selectTab(e) {
  // check if the link text is a day of the week
  if (days.indexOf(e.target.textContent) !== -1) {
    displayDay();
  } else {
    displayMeal();
  }
  links.forEach(link => {
    if (link === e.target) {
      link.className += ' side-nav__link--active';
    } else {
      link.className = 'side-nav__link';
    }
  });
  e.preventDefault();
}

document.querySelectorAll('.side-nav__item').forEach(item => {
  item.addEventListener('click', selectTab);
});

document.querySelector('.feature--view').addEventListener('click', () => {
  displayDay();
  links.forEach(link => {
    if (link.textContent === 'Monday') {
      link.className += ' side-nav__link--active';
    } else {
      link.className = 'side-nav__link';
    }
  });
});

document.querySelector('.feature--create').addEventListener('click', () => {
  displayMeal();
  links.forEach(link => {
    if (link.textContent === 'Create Meal') {
      link.className += ' side-nav__link--active';
    } else {
      link.className = 'side-nav__link';
    }
  });
});
