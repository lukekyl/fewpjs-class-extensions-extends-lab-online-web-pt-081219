// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides
    }
    
    get countSides(){
        return this.sides.length
    }
    get perimeter(){
        return this.sides.reduce(function(total, side) {
            return total + side
        })
    }
}

class Triangle extends Polygon {
    
    get isValid(){
        let sum1 = ((this.sides[0] + this.sides[1]) > this.sides[2])
        let sum2 = ((this.sides[1] + this.sides[2]) > this.sides[0])
        let sum3 = ((this.sides[2] + this.sides[0]) > this.sides[1])
        if ( sum1 && sum2 && sum3 ){
            console.log(this.sides[0] + this.sides[1])
            console.log(this.sides[2])
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid(){
        if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[2] === this.sides[3]) {
            return true
        } else {
            return false
        }
    }
    get area(){
        return this.sides[0] ** 2
    }
}