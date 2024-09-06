// for (let i = 10; i >= 0; i--) {
//     console.log(i)
// }

// let n = 10;
// while (n >= 0) {
//     console.log(n)
//     n--;
// }


let sum = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        sum = sum + i;
    }
}
console.log(sum)