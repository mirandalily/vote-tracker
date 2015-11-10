var choices = [];

function CageBattle(name, file, caption) {
  this.name = name;
  this.file = file;
  this.caption = caption
  this.votes = 0;
  choices.push(this);
};

//Images

var avatar = new CageBattle('Avatar', 'img/nicAvatar.jpg', "Nic goes full Na'vi in Avatar.");
var bella = new CageBattle('Bella', 'img/nicBella.jpg', 'Nic doubled for Kristen Stewart when she was being too awkward.');
var colbert = new CageBattle('Colbert', 'img/nicColbert.jpg', 'Nic Nation');
var et = new CageBattle('ET', 'img/nicET.jpg', 'Nic phone home');
var falcore = new CageBattle('Falcore', 'img/nicFalcore.jpg', 'FAAAAAALCOOOORE!');
var girlscout = new CageBattle('Girl Scout', 'img/nicGirlscout.jpg', 'Nic sold the most thin mints that year');
var hogan = new CageBattle('Hogan', 'img/nicHogan.jpg', '');
var jesus = new CageBattle('Jesus', 'img/nicJesus.jpg', '');
var leia = new CageBattle('Leia', 'img/nicLeia.jpg');
var lennon = new CageBattle('Lennon', 'img/nicLennon.jpg');
var lincoln = new CageBattle('Lincoln', 'img/nicLincoln.jpg');
var montana = new CageBattle('Hannah Montana', 'img/nicMontana.jpg', 'Nic has the best of both worlds.');
var napoleon = new CageBattle('Napoleon Dynamite', 'img/nicNapoleon.jpg', "Nic's favorite animal is a Liger. It's like a lion and a tiger mixed…bred for its skills in magic.");
var pikachu = new CageBattle('Pikachu', 'img/nicPikachu.jpg', 'His acting skills will shock you.');
var potter = new CageBattle('Hermione Granger', 'img/nicPotter.jpg', 'His name might not be Luna, but he sure can Lovegood.');
var progressive = new CageBattle('Flo from Progressive', 'img/nicProgressive.jpg', 'Nic wanted to be Progressive and take on a female role. He did brilliantly.');

//Random Image Generator

var randomNumber = function() {
  return Math.floor(Math.random() * choices.length);
}

//Display Images, No Duplicates

function display() {
  var choice1 = document.getElementById('choice1');
  var choice2 = document.getElementById('choice2');
  // var caption1 = document.getElementById('caption1');
  // var caption2 = document.getElementById('caption2');

  choice1.src = choices[randomNumber()].file;
  choice2.src = choices[randomNumber()].file;

    do {
      file.appendChild(choice1);
      file.appendChild(choice2);
      // caption1.innerHTML = choices[choice1].caption;
      // caption2.innerHTML = choices[choice2].caption;
    } while (img1 === img2) {
      img1.src = choices[randomNumber()].file;
      img2.src = choices[randomNumber()].file;
    }
}
display();

//Click to add Vote

// var voteCount = function(pickNic) {
//   choices[pickNic].votes++;
//   choice1.parentNode.removeChild(choice1);
//   choice2.parentNode.removeChild(choice2);
//   display();
// }
// choice1.addEventListener('click', voteCount);
// choice1.addEventListener('click', voteCount);
