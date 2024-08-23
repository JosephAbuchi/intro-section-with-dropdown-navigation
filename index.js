'use strict';

const featureBtn = document.querySelector('.feature-btn');
const featureIconArrow = document.querySelector('.icon-arrow-down');
const todoNavBar = document.querySelector('.todo-navbar');
const CompanyBtn = document.querySelector('.company-btn');
const companyIconArrow = document.querySelector('.company-arrow');
const HistoryNavBar = document.querySelector('.history-navbar');
const openBtn = document.querySelector('.menu');
const bothNavBar = document.querySelector('.both-navbar');
const closeBtn = document.querySelector('.close-menu');
const overlayDisplay = document.querySelector('.overlay');



// function toggleAttribute(element, attr, value1, value2) {
//   if (element.getAttribute(attr) === value1) {
//     element.setAttribute(attr, value2);
//   } else {
//     element.setAttribute(attr, value1);
//   }
// }

//for Feature navBar to open and close

featureBtn.addEventListener('click', function () {
  todoNavBar.classList.toggle('hidden');

  // Toggle the arrow direction

  // toggleAttribute(featureIconArrow, 'src', 'images/icon-arrow-down.svg', 'images/icon-arrow-up.svg');

  if (featureIconArrow.getAttribute('src') === 'images/icon-arrow-down.svg') {
    featureIconArrow.setAttribute('src', 'images/icon-arrow-up.svg');
  } else {
    featureIconArrow.setAttribute('src', 'images/icon-arrow-down.svg');
  }
});



//for Company navbar to open and close
CompanyBtn.addEventListener('click', function () {
  HistoryNavBar.classList.toggle('hidden');

  // toggleAttribute(companyIconArrow, 'src', 'images/icon-arrow-down.svg', 'images/icon-arrow-up.svg');

  if (companyIconArrow.getAttribute('src') === 'images/icon-arrow-down.svg') {
    companyIconArrow.setAttribute('src', 'images/icon-arrow-up.svg');
  } else {
    companyIconArrow.setAttribute('src', 'images/icon-arrow-down.svg');
  }



});

// display Navbar
openBtn.addEventListener('click', function () {
  bothNavBar.style.display = 'block';
  overlayDisplay.style.display = 'block';
})

// close Navbar
closeBtn.addEventListener('click', function () {
  bothNavBar.style.display = 'none';
  overlayDisplay.style.display = 'none';
})
