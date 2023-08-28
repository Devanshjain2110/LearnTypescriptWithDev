"use strict";
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.length * shape.breadth;
        default:
            const _defaultshape = shape;
            return _defaultshape;
    }
}
