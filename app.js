var choices = [];
//Image Constructor
function CageBattle(name, file) {
  this.name = name;
  this.file = file;
  this.votes = 0;
  choices.push(this);
};


//Images

var avatar = new CageBattle('Avatar', 'img/nicAvatar.jpg');
var bella = new CageBattle('Bella', 'img/nicBella.jpg');
var colbert = new CageBattle('Colbert', 'img/nicColbert.jpg');
var et = new CageBattle('ET', 'img/nicET.jpg');
var falcore = new CageBattle('Falcore', 'img/nicFalcore.jpg');
var girlscout = new CageBattle('Girl Scout', 'img/nicGirlscout.jpg');
var hogan = new CageBattle('Hogan', 'img/nicHogan.jpg');
var jesus = new CageBattle('Jesus', 'img/nicJesus.jpg');
var leia = new CageBattle('Leia', 'img/nicLeia.jpg');
var lennon = new CageBattle('Lennon', 'img/nicLennon.jpg');
var lincoln = new CageBattle('Lincoln', 'img/nicLincoln.jpg');
var montana = new CageBattle('Hannah Montana', 'img/nicMontana.jpg');
var napoleon = new CageBattle('Napoleon Dynamite', 'img/nicNapoleon.jpg');
var pikachu = new CageBattle('Pikachu', 'img/nicPikachu.jpg');
var potter = new CageBattle('Hermione Granger', 'img/nicPotter.jpg');
var progressive = new CageBattle('Flo from Progressive', 'img/nicProgressive.jpg');

//Random Image Generator

var randomNumber = function() {
  return Math.floor(Math.random() * choices.length);
}

//Display Random Images


function display() {
  var choice1 = document.getElementById('choice1');
  var choice2 = document.getElementById('choice2');
  choice1.src = choices[randomNumber()].file;
  choice2.src = choices[randomNumber()].file;
  file.appendChild(choice1);
  file.appendChild(choice2);
}

display();

