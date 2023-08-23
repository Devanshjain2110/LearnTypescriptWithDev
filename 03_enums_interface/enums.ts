enum MCQ {
  a,
  b,
  c,
  d,
} // Auto assignment and auto incrementing of values takes place if we don't initialize

enum MCQs {
  a = 22,
  b,
  c,
  d,
} // Here the value gets incremented from 22 as have initialized it

// enum city {
//     gujarat = "Ahmedabad",
//     maharashtra,
//     rajasthan
// }
// In the above case as we initialized a member with a string then typescript doesn't auto assign values

enum city {
  gujarat,
  maharashtra,
  delhi = "delhi",
} // This is allowed

// Reverse Mapping

enum Enum {
  x,
}
let X = Enum.x;
let nameOfX = Enum[X];
// Will assign x as it is member name in Enum

const enum names {
  dev,
  rahul,
  chirag,
} 
let F = names.dev // Here only this variable will be created with the value in the subsequent js file and no extra lines of code will be created for the typescript of enum by the ts compiler

export {}