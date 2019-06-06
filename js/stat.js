'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var results = ['2725', '4025', '1244', '1339'];
var players = ['Вы', 'Миша', 'Анна', 'Иван'];
var colors = ['rgba(255, 0, 0, 1)',
              'rgb(0, 0, 255)',
              'rgba(0, 0, 255, 0.2)',
              'rgba(0, 0, 255, 0.4)'];

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  var maxTime = getMaxElement(results);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 115, 40);
  ctx.fillText('Список результатов:', 115, 60);

  var coordinate = 140;

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], coordinate, 270);
    ctx.fillText(results[i], coordinate, 250 + ((-150 * results[i]) / maxTime) - 10);
    ctx.fillStyle = colors[i];
    ctx.fillRect(coordinate, 250, 40, (-150 * results[i]) / maxTime);
    coordinate += 90;
  }
};
