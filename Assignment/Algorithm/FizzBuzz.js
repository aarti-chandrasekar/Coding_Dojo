/*
Write code that will go through each number from 1 to 100 and:

For each number that is a multiple of 3, print "Fizz"
For each number that is a multiple of 5, print "Buzz"
For numbers which are a multiple of both 3 and 5, print "FizzBuzz"
All other numbers should just print normally
*/

for (var i = 1; i <= 100; i++) {
    var result = "";
    if (i % 3 == 0) {
        result += "Fizz";
    }
    if (i % 5 == 0) {
        result += "Buzz";
    }

    if (result == "") {
        console.log(i);
    } else {
        console.log(result);
    }
}