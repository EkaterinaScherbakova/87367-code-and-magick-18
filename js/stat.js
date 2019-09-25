'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GRAPH_HEIGHT = 150;
var GRAPH_STEP = 90;

var createCloud = function (ctx) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(CLOUD_X + 10, CLOUD_Y + 10, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = '#fff';
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var createCloudTitle = function (ctx) {
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + 30, CLOUD_Y + 20);
  ctx.fillText('Список результатов:', CLOUD_X + 30, CLOUD_Y + 40);
};

var createStatistic = function (ctx, names, times) {
  var maxTime = Math.max.apply(Math, times);

  for (var i = 0; i < times.length; i++) {
    var scoreHeight = GRAPH_HEIGHT * times[i] / maxTime;
    var scorePositionX = CLOUD_X + 50 + GRAPH_STEP * i;

    ctx.fillStyle = (names[i] === 'Вы')
      ? 'rgba(255, 0, 0, 1)'
      : 'hsl(240,' + Math.ceil(Math.random() * 100) + '% , 50%)';
    ctx.fillRect(scorePositionX, CLOUD_HEIGHT - 25, 40, -scoreHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.ceil(times[i]), scorePositionX, (CLOUD_HEIGHT - 25 - scoreHeight - 20));
    ctx.fillText(names[i], scorePositionX, CLOUD_HEIGHT - 15);
  }
};

window.renderStatistics = function (ctx, names, times) {
  createCloud(ctx);
  createCloudTitle(ctx);
  createStatistic(ctx, names, times);
};
