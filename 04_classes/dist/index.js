"use strict";
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
    constructor(email, name, address) {
        this.email = email;
        this.name = name;
        this.address = address;
        this._coursecount = 2;
    }
    deleteToken() {
        console.log("deleted");
    }
    //getter
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._coursecount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more than 1");
        }
        this.courseCount = courseNum;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._coursecount = 4;
    }
}
const dev = new User("dev@gmail.com", "dev", "ahmedabad");
