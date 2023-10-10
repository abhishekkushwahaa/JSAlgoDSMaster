var createCounter = function(n) {
    let counter = n
    return function() {
        return counter++;
    };
};
const count = createCounter(10);
console.log(count());
console.log(count());
console.log(count());
