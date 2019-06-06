'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var times = ['2725', '4025', '1244', '1339'];
var names = ['Вы', 'Миша', 'Анна', 'Иван'];
var colors = ['rgba(255, 0, 0, 1)', 'rgb(0, 0, 255)', 'rgba(0, 0, 255, 0.2)', 'rgba(0, 0, 255, 0.4)'];

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

window.renderStatistics = function(ctx) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  var maxTime = getMaxElement(times);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 115, 40);
  ctx.fillText('Список результатов:', 115, 60);

  var coordinate = 140;

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], coordinate, 270);
    ctx.fillText(times[i], coordinate, 250 + ((-150 * times[i]) / maxTime) - 10);
    ctx.fillStyle = colors[i];
    ctx.fillRect(coordinate, 250, 40, (-150 * times[i]) / maxTime);
    coordinate += 90;
  }
};
