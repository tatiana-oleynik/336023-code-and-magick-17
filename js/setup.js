'use strict';

(function () {
  var DIALOG_TOP_COORDINATE = '80px';
  var DIALOG_LEFT_COORDINATE = '50%';

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  //  Открытие/закрытие диалога по клику и нажатию на клавиатуру
  function onPopupEscPress(evt) {
    window.util.isEscEvent(evt, closePopup);
  }

  function openPopup() {
    window.util.showElement('hidden', setup);
  }

  function closePopup() {
    window.util.hideElement('hidden', setup);
  }

  setupOpen.addEventListener('click', function () {
    openPopup();

    function setupDefaultDialogStyles(dialogElement) {
      dialogElement.style.top = DIALOG_TOP_COORDINATE;
      dialogElement.style.left = DIALOG_LEFT_COORDINATE;
    }
    setupDefaultDialogStyles(setup);

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

})();
