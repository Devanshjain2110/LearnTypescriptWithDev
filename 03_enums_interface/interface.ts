interface User {
    email : string,
    userId : number
    startTrial  : () => string
    // startTrail() : string
    getCoupon(counponName : string) : number
}

interface User {
    CouponId : number
}

interface Admin extends User {
    something?: number
}

const dev : Admin = {
    CouponId : 34,
    email : "devnashjain@gmail.com", 
    userId : 23, 
startTrial : () => {
    return "trial started"
},
getCoupon : (name : "ref") => {
    return 10
}
}

export {}