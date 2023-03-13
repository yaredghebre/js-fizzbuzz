// Creo un ciclo for con numeri da 1 a 100
// Al posto dei mulitpli di 15 STAMPO FizzBuzz
// Al posto dei mulitpli di 3 STAMPO Fizz
// Al posto dei mulitpli di 5 STAMPO Buzz


// CALCOLO
const gridElem = document.querySelector(".grid");
for (let i = 1; i <=100; i++) {
    let multiple = i;
    let classColor;
    if (i % 15 === 0) {
        multiple = "FizzBuzz";
        classColor = "fifteen"
    } else if (i % 3 === 0) {
        multiple = "Fizz";
        classColor = "three"
    } else if (i % 5 === 0) {
        multiple = "Buzz";
        classColor = "five"
    }

// OUTPUT
    // console.log(i, multiple);
    // gridElem.innerHTML += `<div class ="box ${classColor}">${multiple}</div>`;


// Lezione 
    const newBox = document.createElement("div");
    newBox.innerHTML = multiple;
    newBox.className = `box ${multiple}`;
    newBox.addEventListener ("click", function() {
        alert(multiple);
    });
    gridElem.append(newBox);
    }


    // const newBox = document.createElement("div");
    // newBox.innerHTML = boxText;
    // newBox.className = `box ${boxClass}`;
    // newBox.addEventListener("click", function() {
    //     alert(boxText);
    // });
    // containerElem.append(newBox);