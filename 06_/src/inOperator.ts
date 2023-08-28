interface User{
    name : string,
    id : number
}

interface Admin { 
    name : string,
    id : number,
    isAdmin : true
}

function isAdminAccount( account : User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
}