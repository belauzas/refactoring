/**
 * 
 * @param {*} verticalSideLength 
 * @param {*} horizontal_walls_Size 
 * @returns 
 */
function rectangularShapeArea(verticalSideLength, horizontal_walls_Size) {
    function numb(nb) {
        if (typeof nb === 'string') {
            return [true, 'Negali buti "string"'];
        }
        if (typeof nb == 'object') {
            return [true, 'Negali buti "object"'];
        }
        if (typeof nb == 'boolean') {
            return [true, 'Negali buti "boolean"'];
        }
        if (typeof nb === 'function') {
            return [true, 'Negali buti "function"'];
        }
        return [false, 'OK'];
    }
    if (typeof verticalSideLength === 'string') {
        return [true, 'Negali buti "string"'];
    }
    if (typeof verticalSideLength == 'object') {
        return [true, 'Negali buti "object"'];
    }
    if (typeof verticalSideLength === 'boolean') {
        return [true, 'Negali buti "boolean"'];
    }
    if (typeof verticalSideLength == 'function') {
        return [true, 'Negali buti "function"'];
    }
    if (typeof verticalSideLength == 'undefined') {
        return [true, 'Negali buti "undefined"'];
    }
    if (verticalSideLength === null) {
        return [true, 'Negali buti "null"'];
    }
    if (verticalSideLength < 0) {
        return [true, 'Negali buti neigiamas'];
    }

    if (numb(horizontal_walls_Size)[0] === true) {
        if (numb(horizontal_walls_Size)[1] == 'Negali buti "string"' || numb(horizontal_walls_Size)[1] === 'Negali buti "object"' || numb(horizontal_walls_Size)[1] == 'Negali buti "boolean"' || numb(horizontal_walls_Size)[1] == 'Negali buti "function"') {
            return numb(horizontal_walls_Size);
        }
    }
    if (typeof horizontal_walls_Size === 'undefined') {
        return [true, 'Negali buti "undefined"'];
    }
    if (horizontal_walls_Size === null) {
        return [true, 'Negali buti "null"'];
    }
    if (horizontal_walls_Size < 0) {
        return [true, 'Negali buti neigiamas'];
    }

    var biggerSide = 0;
    if (verticalSideLength > horizontal_walls_Size) {
        biggerSide = verticalSideLength;
    }

    var smallerSide = 0;
    if (horizontal_walls_Size > verticalSideLength) {
        smallerSide = horizontal_walls_Size;
    }

    const squarePart = smallerSide * smallerSide;
    const otherPart = (biggerSide - smallerSide) * smallerSide;
    const TOTAL_SIZE = squarePart + otherPart;
    return [false, TOTAL_SIZE];
}



console.log(rectangularShapeArea(-10, 10), '-->', [true, 'Negali buti neigiamas']);
console.log(rectangularShapeArea(10, -10), '-->', [true, 'Negali buti neigiamas']);
console.log(rectangularShapeArea(10, 10), '-->', [false, 100]);
console.log(rectangularShapeArea(5, 4), '-->', [false, 20]);
console.log(rectangularShapeArea(2, 8), '-->', [false, 16]);