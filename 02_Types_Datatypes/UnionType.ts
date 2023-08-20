
let score : number | string = 33

score = 44
score = "55"

type User = {
    name : string
    id : number
}
type Admin = {
    username : string
    id : number
}

let dev : User | Admin = {name : "devUser", id : 23}
dev =  {username : "devAdmin", id : 23}

function getId (id: number | string){
    // id.toLowerCase() : here, it is treating as new datatype as we haven't defined what the type would be and it's vague

    if( typeof id === "string"){
        id.toLowerCase()
    }
    if( typeof id === "number"){
        id.toString()
    }

}

const data : (number | string)[] = [2,3,4,"6"]

let gender : "male" | "female"
gender = "male"
// gender = "none" : will give type check
export {}