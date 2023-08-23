var MCQ;
(function (MCQ) {
    MCQ[MCQ["a"] = 0] = "a";
    MCQ[MCQ["b"] = 1] = "b";
    MCQ[MCQ["c"] = 2] = "c";
    MCQ[MCQ["d"] = 3] = "d";
})(MCQ || (MCQ = {})); // Auto assignment and auto incrementing of values takes place if we don't initialize
var MCQs;
(function (MCQs) {
    MCQs[MCQs["a"] = 22] = "a";
    MCQs[MCQs["b"] = 23] = "b";
    MCQs[MCQs["c"] = 24] = "c";
    MCQs[MCQs["d"] = 25] = "d";
})(MCQs || (MCQs = {})); // Here the value gets incremented from 22 as have initialized it
// enum city {
//     gujarat = "Ahmedabad",
//     maharashtra,
//     rajasthan
// }
// In the above case as we initialized a member with a string then typescript doesn't auto assign values
var city;
(function (city) {
    city[city["gujarat"] = 0] = "gujarat";
    city[city["maharashtra"] = 1] = "maharashtra";
    city["delhi"] = "delhi";
})(city || (city = {})); // This is allowed
// Reverse Mapping
var Enum;
(function (Enum) {
    Enum[Enum["x"] = 0] = "x";
})(Enum || (Enum = {}));
var X = Enum.x;
var nameOfX = Enum[X];
var F = 0 /* names.dev */; // Here only this variable will be created with the value in the subsequent js file and no extra lines of code will be created for the typescript of enum by the ts compiler
