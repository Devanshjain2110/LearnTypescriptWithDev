// class User {
//     email : string
//     name: string
//     address!: string
//     constructor(email: string, name : string, address : string ){
//         this.email = email
//         this.name = name 
//         this.address = address
//     }
// }

class User {
   protected _coursecount =  2
    constructor(public email: string,public name : string, private  address : string ){

    }

    private deleteToken(){
        console.log("deleted")
    }

    //getter
    get getAppleEmail() : string {
        return `apple ${this.email}`
    }

    get courseCount() : number {
        return this._coursecount
    }

    set courseCount(courseNum : number ){
        if(courseNum <=1){
            throw new Error("course count should be more than 1")
        }
        this.courseCount = courseNum
    }
}

class subUser extends User {
    isFamily : boolean = true
    changeCourseCount() {
        this._coursecount = 4
    }
}

const dev = new User( "dev@gmail.com","dev", "ahmedabad")