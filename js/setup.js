'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var CHARACTERS_COUNT = 4;

var generateCharacters = function () {
  var characters = [];

  for (var i = 0; i < CHARACTERS_COUNT; i++) {
    var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' + SURNAMES[Math.round(Math.random() * (SURNAMES.length - 1))];
    var coatColor = COATCOLORS[Math.round(Math.random() * (COATCOLORS.length - 1))];
    var eyesColor = EYESCOLORS[Math.round(Math.random() * (EYESCOLORS.length - 1))];
    characters[i] = {
      name: name,
      coatColor: coatColor,
      eyesColor: eyesColor
    };
  }
  return characters;
};

var characters = generateCharacters();
window.console.log(characters);
