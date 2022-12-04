/* 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
Do not ignore spaces, punctuation or capitalization
*/
// RIOT Read Input Output Talk
const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;

const str5 = "abba"
const expected5 = true;

/*
    This function uses 1 pointer to iterate through the string
*/
function isPalindrome2(str) {
    //Your code here
    var len = str.length;
    var mid = Math.floor(len / 2);
    
    for (var i = 0; i < mid; i++) {
        if (str[i] != str[len-1-i]) {
            return false;
        }
    }
    return true;
}

/*
    This function uses 2 pointers to iterate through the string
*/
function isPalindrome(str) {
    // const str1 = "raceVScar"; len=9

    var len = str.length;
    var mid = len/2;

    for (var i=0, j=len-1; i < mid; i++, j--){
        if (str[i] != str[j]){
            return false;
        } 
    }
    return true;
}

console.log(isPalindrome(str1)) //expected: true
console.log(isPalindrome(str2)) //expected: true
console.log(isPalindrome(str3)) //expected: false
console.log(isPalindrome(str4)) //expected: false
console.log(isPalindrome(str5)) //expected: true

