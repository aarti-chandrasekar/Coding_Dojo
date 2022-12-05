var theDojo = [[1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
[3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
[5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
[2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
[6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
[0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
[0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
[2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
[5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
[9, 2, 2, 2, 0, 7, 0, 1, 1, 0]];
var dojoDiv = document.querySelector("#the-dojo");

var showCnt = 0;
// Creates the rows of buttons for this game
function render(theDojo) {
  var result = "";
  for (var i = 0; i < theDojo.length; i++) {
    for (var j = 0; j < theDojo[i].length; j++) {
      result += `<button class="tatami" id="btn[${i}][${j}]" onclick="howMany(${i}, ${j}, this)"></button>`;
    }
  }
  return result;
}

// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
  if (theDojo[i][j] == 10) {
    alert("You stepped on a MINE");
    location.reload();
  }

  var rlen = theDojo.length;
  var clen = theDojo[0].length;

  for (var r = i - 1; r <= i + 1; r++) {
    if (r >= 0 && r < rlen) {
      for (var c = j - 1; c <= j + 1; c++) {
        if (c >= 0 && c < clen) {
          showCnt++;
          var btn = document.getElementById("btn[" + r + "][" + c + "]");
          if (theDojo[r][c] == 10) { //Ninja
            btn.innerHTML = '<img src="red.gif" alt="X" width="25">'
          } else {
            // btn.innerText = (theDojo[r][c] == 0)? "" : theDojo[r][c];
            btn.innerText = theDojo[r][c];
          }
          btn.disabled = true;
        }
      }
    }
  }
  if (showCnt == 100) {
    alert("You did it !!!");
    location.reload();
  }
  // alert(showCnt);
}

// at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
function loadNinjas() {
  // Generate 10 random numbers between 0 and 99
  // Assign the ninjas to those random spots
  for (var cnt = 1; cnt <= 10; cnt++) {
    var randNum = Math.random() * 100;
    var row = Math.floor(randNum / 10);
    var col = Math.floor(randNum % 10);

    theDojo[row][col] = 10;
  }

  console.table(theDojo);
  var rlen = theDojo.length;
  var clen = theDojo[0].length;

  for (var i = 0; i < rlen; i++) {
    for (var j = 0; j < clen; j++) {
      if (theDojo[i][j] == 10) {
        continue;
      }
      var ninjaCnt = 0;
      for (var r = i - 1; r <= i + 1; r++) {
        if (r >= 0 && r < rlen) {
          for (var c = j - 1; c <= j + 1; c++) {
            if (c >= 0 && c < clen) {
              if (theDojo[r][c] == 10) {
                ninjaCnt++;
              }
            }
          }
        }
      }
      theDojo[i][j] = ninjaCnt;
    }
  }

  console.table(theDojo);
}

// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;

// start the game
// message to greet a user of the game
var style = "color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes

// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);
loadNinjas();

