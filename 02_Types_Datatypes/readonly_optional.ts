 type user = {
    name : string
    readonly _id : number
    email : string
    creditDetail ?: number
 }

 let users : user = {
     _id : 234,
     name : "Dev",
     email : "@xgmail.com"
 }

 users.creditDetail = 234

 export {}