'use strict';


const names = ["Adam", "Eve", "Seth", "Bob", "Joe"];

for(let i = 0; i < names.length; i++) {
    console.log(i, names[i]);
}

for(let i = 0; i < 11; i++){
    console.log(i)
}

let age = 5

while(age < 10) {
    console.log("Your age is less than 10");
}

document.write("You are now over 10");

for(let row = 1; row < 10; row++) {
    console.log(row);
    for(let col = 1; col <10; col++) {
        console.log(col);
    }
    
}