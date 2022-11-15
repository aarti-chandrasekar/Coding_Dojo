// Check if a given array is a palindrome

function isPalin(arr){
    var len = arr.length;
    var end = Math.floor(len / 2);

    for (var i=0, j=len-1; i < end; i++, j--){
        console.log(i + " - " + j);
        if (arr[i] != arr[j]){
            return false;
        }
    }
    return true;
    
}

var result1 = isPalin( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPalin( [3, 2, 1, 1, 2, 3] );
console.log(result2);
