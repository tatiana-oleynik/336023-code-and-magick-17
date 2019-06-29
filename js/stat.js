'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var FONT_TEXT = 'PT Mono';
  var SIZE_TEXT = '16px';
  var COLOR_TEXT = '#000';
  var COORDINATE_TEXT_X = 115;
  var COORDINATE_TEXT_Y = 40;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var setText = function (ctx) {
    ctx.fillStyle = COLOR_TEXT;
    ctx.font = SIZE_TEXT + ' ' + FONT_TEXT;
    ctx.fillText('Ура вы победили!', COORDINATE_TEXT_X, COORDINATE_TEXT_Y);
    ctx.fillText('Список результатов:', COORDINATE_TEXT_X, COORDINATE_TEXT_Y + 20);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, 100, 10, '#fff');
    renderItems(ctx, names, times);
    setText(ctx);
  };

  var renderItems = function (ctx, names, times) {
    var maxTime = getMaxElement(times);
    var coordinate = 140;

    for (var i = 0; i < names.length; i++) {
      renderItem(ctx, names[i], times[i], maxTime, coordinate);
      coordinate += 90;
    }
  };

  var renderItem = function (ctx, name, time, maximumTime, coordinate) {
    ctx.fillStyle = COLOR_TEXT;
    ctx.fillText(name, coordinate, 270);
    ctx.fillText(Math.round(time), coordinate, 250 + ((-150 * time) / maximumTime) - 10);
    returnColor(ctx, name);
    ctx.fillRect(coordinate, 250, 40, (-150 * time) / maximumTime);
  };

  var returnColor = function (ctx, name) {
    return (name === 'Вы') ? (ctx.fillStyle = 'rgba(255, 0, 0, 1)') : (ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')');
  };
})();
