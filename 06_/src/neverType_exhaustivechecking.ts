interface Circle {
    kind : "circle",
    radius : number
}

interface Square {
    kind : "square",
    side :  number
}

interface Rectangle{
    kind : "rectangle",
    length: number,
    breadth : number
}

type Shape = Circle | Square | Rectangle

function getArea(shape : Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius **2

        case "square":
            return shape.side ** 2
            
        case "rectangle":
            return shape.length* shape.breadth
            
        default : 
        const _defaultshape : never = shape
        return _defaultshape    
    }
}