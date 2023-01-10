// ******************* 1 *****************************
console.log('********* 1 **********')
console.log(hello);                                   
var hello = 'world';       

// After Hoisting
var hello;
console.log(hello);                               
hello = 'world';    

// Answer -------------------> Prints undefined  

// ******************* 2 *****************************
console.log('********* 2 **********')
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// After Hoisting
var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle); 
}
test();

// Answer -------------------> Prints magnet  


// ******************* 3 *****************************
console.log('********* 3 **********')
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// After Hoisting
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// Answer -------------------> Prints super cool. print() function is never called  


// ******************* 4 *****************************
console.log('********* 4 **********')
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// After Hoisting
var food = 'chicken';
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
console.log(food);
eat();

// Answer -------------------> Prints chicken, half-chicken  


// ******************* 5 *****************************
console.log('********* 5 **********')
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// After Hoisting
var mean;
mean();
console.log(food);
var mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);

// Answer -------------------> TypeError: mean is not a function  

// ******************* 6 *****************************
console.log('********* 6 **********')
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// After Hoisting
var genre;
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre);

// Answer -------------------> undefined, rock, r&b, disco  

// ******************* 7 *****************************
console.log('********* 7 **********')
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// After Hoisting
var dojo;
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// Answer -------------------> san jose, seattle, burbank, san jose


// ******************* 8 *****************************
console.log('********* 8 **********')
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// After Hoisting
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

// Answer -------------------> TypeError - dojo is a const and cannot be assigned a different value

