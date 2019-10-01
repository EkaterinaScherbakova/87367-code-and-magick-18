'use strict';

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

var createWizard = function (character) {
  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var element = template.cloneNode(true);
  var label = element.querySelector('.setup-similar-label');
  var coatColor = element.querySelector('.wizard-coat');
  var eyesColor = element.querySelector('.wizard-eyes');

  label.textContent = character.name;
  coatColor.style.fill = character.coatColor;
  eyesColor.style.fill = character.eyesColor;
  return element;
};

var appendWizards = function (characters) {
  var list = document.querySelector('.setup-similar-list');

  for (var i = 0; i < CHARACTERS_COUNT; i++) {
    var element = createWizard(characters[i]);
    list.appendChild(element);
  }
};


document.querySelector('.setup').classList.remove('hidden');
appendWizards(generateCharacters());
document.querySelector('.setup-similar').classList.remove('hidden');
