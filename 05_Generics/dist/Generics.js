"use strict";
const score = [];
const value = [];
function identityOne(val) {
    return val; // we can type check for boolean and number in our value
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(3);
identityThree("3");
function identityFour(val) {
    return val;
}
identityFour({ brand: "fire", type: 4 });
// for own datatypes, this is the syntax to be followed
