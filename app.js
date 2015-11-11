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

var tracker = {

  img1: 0,
  img2: 0
}

function display() {
  var choice1 = document.getElementById('choice1');
  var choice2 = document.getElementById('choice2');
  // var caption1 = document.getElementById('caption1');
  // var caption2 = document.getElementById('caption2');


    do {
     tracker.img1 = randomNumber();
     tracker.img2 = randomNumber();
      choice1.src = choices[tracker.img1].file;
      choice2.src = choices[tracker.img2].file;
      // caption1.innerHTML = choices[choice1].caption;
      // caption2.innerHTML = choices[choice2].caption;
    } while (tracker.img1 === tracker.img2)

    votesChart.update();
}

//Click to add Vote

var selectionOne = function() {
  var selection = choices[tracker.img1];
  selection.votes++;
  data.datasets[0].data[tracker.img1] += 1;
  votesChart.datasets[0].bars[tracker.img1].value += 1;
  console.log(selection.name + " has " + selection.votes + " votes.")
  display();
}

var selectionTwo = function() {
  var selection = choices[tracker.img2];
  selection.votes++;
  data.datasets[0].data[tracker.img2] += 1;
  votesChart.datasets[0].bars[tracker.img2].value += 1;
  console.log(selection.name + " has " + selection.votes + " votes.")
  display();
}

choice1.addEventListener('click', selectionOne);
choice2.addEventListener('click', selectionTwo);

//Chart

var data = {
  labels: ["Avatar", "Twilight", "Colbert", "ET", "Neverending Story", "Girl Scout", "Hulk Hogan", "Jesus", "Princess Leia", "John and Yoko", "Abe Lincoln", "Hannah Montana", "Napoleon Dynamite", "Pikachu", "Hermione Granger", "Flo from Progressive"],
  datasets: [
      {
          label: "Votes Cast",
          fillColor: "rgba(220,220,220,0.5)",
          strokeColor: "rgba(220,220,220,0.8)",
          highlightFill: "rgba(220,220,220,0.75)",
          highlightStroke: "rgba(220,220,220,1)",
          data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        }
      ]
}


var context = document.getElementById('vote-chart').getContext('2d');

var chartOptions = {

    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero : true,

    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - If there is a stroke on each bar
    barShowStroke : true,

    //Number - Pixel width of the bar stroke
    barStrokeWidth : 2,

    //Number - Spacing between each of the X value sets
    barValueSpacing : 5,

    //Number - Spacing between data sets within X values
    barDatasetSpacing : 1,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
};

var votesChart = new Chart(context).Bar(data, chartOptions);

display();


