'use strict';
// var DIALOG_TOP_COORDINATE = '80px';
// var DIALOG_LEFT_COORDINATE = '675px';
// setupDialogElement.style.top = '80px';
// setupDialogElement.style.left = '675px';

(function () {
  var setupDialogElement = document.querySelector('.setup');
  var dialogHandler = setupDialogElement.querySelector('.upload');

  function setupDefaultStyles(dialog) {
    dialog.style.top = '50%';
    dialog.style.left = '50%';
    dialog.style.transform = 'translate(-50%, -50%)';
    dialog.style.position = 'absolute';
  }
  setupDefaultStyles(setupDialogElement);

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
      setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (event) {
          event.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
