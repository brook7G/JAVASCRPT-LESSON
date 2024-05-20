console.log("code debugging and troubleshooting");
console.log("Testing and debugging your code")
//
//
function average(a, b) {
    return a + b / 2;
}
//
console.log(average(2, 10)); //7 expected --->6
console.log(average(5, 5)); //7.5 expected --->5
//
//
console.log("");function largest(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}
//
console.log(largest(1, 1, 2)); // -> 2
console.log(largest(1, 2, 3)); // -> 3
console.log(largest(3, 2, 1)); // -> 3
console.log(largest(2, 2, 1)); // -> 1

//
