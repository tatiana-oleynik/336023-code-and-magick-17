'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
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

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 115, 40);
  ctx.fillText('Список результатов:', 115, 60);

  renderItem(ctx, names, times);
};

var renderItem = function (ctx, names, times) {
  var maxTime = getMaxElement(times);
  var coordinate = 140;

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';

    ctx.fillText(names[i], coordinate, 270);
    ctx.fillText(Math.round(times[i]), coordinate, 250 + ((-150 * times[i]) / maxTime) - 10);
    returnColor(ctx, names[i]);
    ctx.fillRect(coordinate, 250, 40, (-150 * times[i]) / maxTime);
    coordinate += 90;
  }
};

var returnColor = function (ctx, name) {
  return (name === 'Вы') ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' : ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
};
