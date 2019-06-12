'use strict';

var WIZARD_COUNT = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function showElement(unit) {
  return document.querySelector(unit);
}
var userDialog = showElement('.setup');

function hideElement(unit, element) {
  element.classList.remove(unit);
}
hideElement('hidden', userDialog);

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var generateWizard = function (names, surnames, coats, eyes) {
  var nameWizard = names[getRandomInteger(0, names.length - 1)] + ' ' + surnames[getRandomInteger(0, surnames.length - 1)];
  var coatWizard = coats[getRandomInteger(0, coats.length - 1)];
  var eyeWizard = eyes[getRandomInteger(0, eyes.length - 1)];

  var wizard = {
    name: nameWizard,
    coatColor: coatWizard,
    eyesColor: eyeWizard
  };

  return wizard;
};

var generateWizards = function (names, surnames, coats, eyes) {
  var wizards = [];

  for (var i = 0; i < WIZARD_COUNT; i++) {
    wizards.push(generateWizard(names, surnames, coats, eyes));
  }

  return wizards;
};

var wizards = generateWizards(WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLORS, EYE_COLORS);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function (wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

renderWizards(wizards);

var userDialog = showElement('.setup-similar');
hideElement('hidden', userDialog);
