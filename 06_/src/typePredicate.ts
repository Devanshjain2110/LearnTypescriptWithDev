type Fish = {swim: () => void}
type Bird = {fly: () => void}

function isFish(pet : Fish | Bird) : pet is Fish{
    return (pet as Fish).swim !== undefined
}
// if we don't use return type on isFish then the pet in getFood would be union regardless of calling isFish
function getFood(pet : Fish | Bird){
    if(isFish(pet)){
        pet 
        return "Fish Food"
    } else {
        pet 
        return "bird food"
    }
}
