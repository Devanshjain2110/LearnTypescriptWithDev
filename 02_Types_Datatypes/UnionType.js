"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
var dev = { name: "devUser", id: 23 };
dev = { username: "devAdmin", id: 23 };
function getId(id) {
    // id.toLowerCase() : here, it is treating as new datatype as we haven't defined what the type would be and it's vague
    if (typeof id === "string") {
        id.toLowerCase();
    }
    if (typeof id === "number") {
        id.toString();
    }
}
var data = [2, 3, 4, "6"];
var gender;
gender = "male";
