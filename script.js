const subjects = {
  "Lunedì": [
    {"time": "9:00", "subject": "Plastiche E3"},
    {"time": "9:50", "subject": "Plastiche E3"},
    {"time": "10:40", "subject": "Ricreazione"},
    {"time": "10:50", "subject": "Plastiche E30"},
    {"time": "11:40", "subject": "Storia dell'Arte B7"},
    {"time": "12:30", "subject": "Inglese B7"},
    {"time": "13:18", "subject": "Ricreazione"},
    {"time": "13:32", "subject": "Ita/Geo/Sto B7"},
    {"time": "14:20 / 15:10", "subject": "Matematica B7"}
  ],
  "Martedì": [
    {"time": "8:10", "subject": "Scienze D4"},
    {"time": "9:00", "subject": "Geometriche D4"},
    {"time": "9:50", "subject": "Geometriche D4"},
    {"time": "10:40", "subject": "Ricreazione"},
    {"time": "10:50", "subject": "Geometriche D4"},
    {"time": "11:40", "subject": "Religione B7"},
    {"time": "12:30", "subject": "Ita/Geo/Sto B7"},
    {"time": "13:18", "subject": "Ricreazione"},
    {"time": "13:32 / 14:20", "subject": "Ita/Geo/Sto B7"}
  ],
  "Mercoledì": [
    {"time": "9:00", "subject": "Pittoriche D6"},
    {"time": "9:50", "subject": "Pittoriche D6"},
    {"time": "10:40", "subject": "Ricreazione"},
    {"time": "10:50", "subject": "Pittoriche D6"},
    {"time": "11:40", "subject": "Pittoriche D6"},
    {"time": "12:30", "subject": "Scienze B7"},
    {"time": "13:18", "subject": "Ricreazione"},
    {"time": "13:32", "subject": "Inglese B7"},
    {"time": "14:20 / 15:10", "subject": "Inglese B7"}
  ],
  "Giovedì": [
    {"time": "8:10", "subject": "Lab. Artistico B7"},
    {"time": "9:00", "subject": "Lab. Artistico B7"},
    {"time": "9:50", "subject": "Lab. Artistico B7"},
    {"time": "10:40", "subject": "Ricreazione"},
    {"time": "10:50", "subject": "Storia dell'Arte B7"},
    {"time": "11:40", "subject": "Storia dell'Arte B7"},
    {"time": "12:30", "subject": "Ita/Geo/Sto B7"},
    {"time": "13:18", "subject": "Ricreazione"},
    {"time": "13:32 / 14:20", "subject": "Ita/Geo/Sto B7"}
  ],
  "Venerdì": [
    {"time": "9:00", "subject": "Palestra Pal2"},
    {"time": "9:50", "subject": "Palestra Pal2"},
    {"time": "10:40", "subject": "Ricreazione"},
    {"time": "10:50", "subject": "Ita/Geo/Sto B7"},
    {"time": "11:40", "subject": "Ita/Geo/Sto B7"},
    {"time": "12:30", "subject": "Matematica B7"},
    {"time": "13:18", "subject": "Ricreazione"},
    {"time": "13:32 / 14:20", "subject": "Matematica B7"},
  ]
}

const weekDays = {
  1: 'Lunedì',
  2: 'Martedì',
  3: 'Mercoledì',
  4: 'Giovedì',
  5: 'Venerdì'
}

function createTable() {
  console.log(Object.keys(subjects).length)
  var table = document.getElementById('table');
  for (i in Object.keys(subjects)) {
    var timeDiv = document.createElement('div');
    timeDiv.classList.add('day');
    if ((parseInt(i) + 1) === Object.keys(subjects).length) {
      timeDiv.classList.add('last-day');
    };
    var day = Object.keys(subjects)[i];
    var hours = subjects[Object.keys(subjects)[i]];
    var h1 = document.createElement('h1');
    h1.classList.add('weekDay');
    h1.innerText = day;
    timeDiv.appendChild(h1);
    ul = document.createElement('ul');
    ul.classList.add('subjects')
    for (x=0; x < hours.length; x++) {
      var li = document.createElement('li');
      li.classList.add('subject');
      li.innerHTML = `<a class='hour'>${hours[x]['time']}</a> - </a class='sub-name'>${hours[x]['subject']}</a>`
      ul.appendChild(li)
    };
    timeDiv.appendChild(ul);
    table.appendChild(timeDiv);
  };
}

function refreshTime() {
  var timeDisplay = document.getElementById("clock");
  var date = new Date();
  var weekDay = date.getDay()
  var dateString = date.toLocaleString("it-it", {timeZone: "Europe/Rome"});
  var dates = dateString.split(", ");
  timeDisplay.innerHTML = `${weekDays[weekDay]} - ${dates[1]}`;
}

setInterval(refreshTime, 1000);
window.onload = createTable;
