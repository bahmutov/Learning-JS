<!-- 
/*
Assignment: Library Function
    Write a function that checks if argument is a
        - number
        - string
        - array
        - empty object
        - function
        - rexexp
        - email
    -also wrap it in a closure

Assigner: Gleb
Assignee: Lindsey
*/


var library = function(testype, testval) {
  return typeof testval === testype.toLowerCase();
}

module.exports = library;