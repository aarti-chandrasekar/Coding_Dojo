// Given a 2 dimensional array return true if value is present false otherwise
function isPresent2d(arr2d, value) {
    var ilen = arr2d.length;
    for (var i = 0; i < ilen; i++) {
        var jlen = arr2d[i].length;
        for (var j = 0; j < jlen; j++) {
            if (arr2d[i][j] == value){
                return true;
            }
        }
    }
    return false;
}

var arr2d = [ [2, 5, 8],
[3, 6, 1],
[5, 7, 7] ];
console.log(isPresent2d(arr2d, 7));
console.log(isPresent2d(arr2d, 4));

// Flatten a 2d array in to single dimensional array
function flatten(arr2d) {
    var flat = [];
    var ilen = arr2d.length;
    for (var i = 0; i < ilen; i++) {
        var jlen = arr2d[i].length;
        for (var j = 0; j < jlen; j++) {
            flat.push(arr2d[i][j]);
        }
    }
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]