'use strict';

var WIZARD_COUNT = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var DIALOG_TOP_COORDINATE = '80px';
var DIALOG_LEFT_COORDINATE = '50%';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var fireballColor = document.getElementById('fireball-color');
var setupWizard = document.querySelector('.setup-wizard');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
var setupDialogElement = document.querySelector('.setup');

function showElement(className, element) {
  element.classList.remove(className);
}

function hideElement(className, element) {
  element.classList.add(className);
}

function getRandomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function generateWizard(names, surnames, coats, eyes) {
  var nameWizard = names[getRandomInteger(0, names.length - 1)] + ' ' + surnames[getRandomInteger(0, surnames.length - 1)];
  var coatWizard = coats[getRandomInteger(0, coats.length - 1)];
  var eyeWizard = eyes[getRandomInteger(0, eyes.length - 1)];

  var wizard = {
    name: nameWizard,
    coatColor: coatWizard,
    eyesColor: eyeWizard
  };

  return wizard;
}

function generateWizards(names, surnames, coats, eyes) {
  var wizards = [];

  for (var i = 0; i < WIZARD_COUNT; i++) {
    wizards.push(generateWizard(names, surnames, coats, eyes));
  }

  return wizards;
}

var wizards = generateWizards(WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLORS, EYE_COLORS);

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

function renderWizards(characters) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < characters.length; i++) {
    fragment.appendChild(renderWizard(characters[i]));
  }
  similarListElement.appendChild(fragment);
}

renderWizards(wizards);

userDialog = document.querySelector('.setup-similar');
showElement('hidden', userDialog);

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = COAT_COLORS[getRandomInteger(0, COAT_COLORS.length - 1)];
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = EYE_COLORS[getRandomInteger(0, EYE_COLORS.length - 1)];
});

setupFireballWrap.addEventListener('click', function () {
  var randomColorFireball = FIREBALL_COLORS[getRandomInteger(0, FIREBALL_COLORS.length - 1)];
  fireballColor.value = randomColorFireball;
  setupFireballWrap.style.backgroundColor = randomColorFireball;
});

setupOpen.addEventListener('click', function () {
  showElement('hidden', setup);

  function setupDefaultDialogStyles(dialogElement) {
    dialogElement.style.top = DIALOG_TOP_COORDINATE;
    dialogElement.style.left = DIALOG_LEFT_COORDINATE;
  }

  setupDefaultDialogStyles(setupDialogElement);

  document.addEventListener('keydown', function (evt) {
    if (evt.target.tagName === 'INPUT') {
      return;
    }

    if (evt.keyCode === ESC_KEYCODE) {
      hideElement('hidden', setup);
    }
  });
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    showElement('hidden', setup);
  }
});

setupClose.addEventListener('click', function () {
  hideElement('hidden', setup);
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    hideElement('hidden', setup);
  }
});

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});
