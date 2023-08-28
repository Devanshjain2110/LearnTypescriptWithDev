"use strict";
function isFish(pet) {
    return pet.swim !== undefined;
}
// if we don't use return type on isFish then the pet in getFood would be union regardless of calling isFish
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish Food";
    }
    else {
        pet;
        return "bird food";
    }
}
