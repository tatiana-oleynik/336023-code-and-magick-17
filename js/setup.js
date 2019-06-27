'use strict';

(function () {
  // var WIZARD_COUNT = 4;
  var DIALOG_TOP_COORDINATE = '80px';
  var DIALOG_LEFT_COORDINATE = '50%';
  // var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  // var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  // var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  // var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  // var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var userNameInput = setup.querySelector('.setup-user-name');
  // var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
  // var fireballColor = document.getElementById('fireball-color');
  // var setupWizard = document.querySelector('.setup-wizard');
  // var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  // var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var userDialog = document.querySelector('.setup');
  // var similarListElement = userDialog.querySelector('.setup-similar-list');
  // var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  //     .content
  //     .querySelector('.setup-similar-item');
  var setupDialogElement = document.querySelector('.setup');

//   function generateWizard(names, surnames, coats, eyes) {
//     var nameWizard = names[window.util.getRandomInteger(0, names.length - 1)] + ' ' + surnames[window.util.getRandomInteger(0, surnames.length - 1)];
//     var coatWizard = coats[window.util.getRandomInteger(0, coats.length - 1)];
//     var eyeWizard = eyes[window.util.getRandomInteger(0, eyes.length - 1)];
//
//     var wizard = {
//       name: nameWizard,
//       coatColor: coatWizard,
//       eyesColor: eyeWizard
//     };
//
//     return wizard;
//   }
//
//   function generateWizards(names, surnames, coats, eyes) {
//     var wizards = [];
//
//     for (var i = 0; i < WIZARD_COUNT; i++) {
//       wizards.push(generateWizard(names, surnames, coats, eyes));
//     }
//
//     return wizards;
//   }
//
//   var wizards = generateWizards(WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLORS, EYE_COLORS);
//
//   function renderWizard(wizard) {
//     var wizardElement = similarWizardTemplate.cloneNode(true);
//
//     wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
//     wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
//     wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
//
//     return wizardElement;
//   }
//
//   function renderWizards(characters) {
//     var fragment = document.createDocumentFragment();
//     for (var i = 0; i < characters.length; i++) {
//       fragment.appendChild(renderWizard(characters[i]));
//     }
//     similarListElement.appendChild(fragment);
//   }
//
//   renderWizards(wizards);
//
//   userDialog = document.querySelector('.setup-similar');
//   window.util.showElement('hidden', userDialog);
//
// //Изменение цвета деталей волшебника по клику или нажитию на клавиатуру
//   function paintWizard (argument, constant) {
//     argument.style.fill = constant[window.util.getRandomInteger(0, constant.length - 1)];
//   }
//
//   wizardCoat.addEventListener('click', function () {
//     paintWizard(wizardCoat, COAT_COLORS);
//   });
//
//   wizardEyes.addEventListener('click', function () {
//     paintWizard(wizardEyes, EYE_COLORS);
//   });
//
//   setupFireballWrap.addEventListener('click', function () {
//     var randomColorFireball = FIREBALL_COLORS[window.util.getRandomInteger(0, FIREBALL_COLORS.length - 1)];
//     fireballColor.value = randomColorFireball;
//     setupFireballWrap.style.backgroundColor = randomColorFireball;
//   });

//Открытие/закрытие диалога по клику и нажатию на клавиатуру
  function onPopupEscPress (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  function openPopup () {
    window.util.showElement('hidden', setup);
  };

  function closePopup () {
    window.util.hideElement('hidden', setup);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();

    function setupDefaultDialogStyles(dialogElement) {
      dialogElement.style.top = DIALOG_TOP_COORDINATE;
      dialogElement.style.left = DIALOG_LEFT_COORDINATE;
    }
    setupDefaultDialogStyles(setupDialogElement);

    document.addEventListener('keydown', function (evt) {
      if (evt.target.tagName === 'INPUT') {
        return;
      }

      onPopupEscPress(evt);
    });
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

//Валидация поля формы "Имя волшебника"
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
})();
