// Creo un ciclo for con numeri da 1 a 100
// Al posto dei mulitpli di 15 STAMPO FizzBuzz
// Al posto dei mulitpli di 3 STAMPO Fizz
// Al posto dei mulitpli di 5 STAMPO Buzz


// CALCOLO
for (let i = 1; i <=100; i++) {
    let multiple;
    if (i % 15 === 1) {
        multiple = "FizzBuzz"
    } else if (i % 3 === 1) {
        multiple = "Fizz"
    } else if (i % 5 === 1) {
        multiple = "Buzz"
    }
    console.log(multiple);
}

// for (let i = 1; i <= 100; i++) {
//     let multiple
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }