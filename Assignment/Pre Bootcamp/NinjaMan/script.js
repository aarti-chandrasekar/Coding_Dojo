var layout = [[false, false, false, false, false, false, false, false, false, false],
    [false, true,  true,  true,  false, true,  true,  false, true,  false],
    [false, true, false, true, false, false, false, false, false, false],
    [false, true, false, true, true, false, false, false, false, false],
    [false, true, false, false, true, false, false, false, false, false],
    [false, true, false, false, true, false, false, false, false, false],
    [false, true, false, false, true, false, false, false, false, false],
    [false, true, false, true, true, false, false, false, false, false],
    [false, true, true,   true, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false]];

function loadGame() {
    var rlen = layout.length;
    var clen = layout[0].length;

    var main = document.getElementById("main");
    for (var i=0; i<rlen; i++){
        // Create row div
        var row = document.createElement('div');
        for (var j=0; j<clen; j++){
            var block = document.createElement('div');
            block.id = "block" + i + "," + j;
            if (layout[i][j] == false){
                block.className = "block bg_grey";
                console.log(layout[i][j]);
            }else {
                block.className = "block bg_yellow";
            }
            row.appendChild(block);
            console.log("Row " + i + " added");
        }
        main.appendChild(row);
    }
}