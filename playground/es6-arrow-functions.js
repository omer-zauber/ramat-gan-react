const multiplier = {
    numbers: [1,2,3,4, "five", true],
    multiplyBy : 0,
    multiply() {
        return this.numbers.map(number => number*this.multiplyBy);
    }
}

console.log(multiplier.multiply());