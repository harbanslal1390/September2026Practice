"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var daysarray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thrusday', 'friday', 'saturday'];
for (let i = 0; i < daysarray.length; i++) {
    console.log("Days values are " + daysarray[i]);
}
for (let i of daysarray) {
    console.log(i);
}
for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= 5; j++) {
        console.log(" The vlaue of i" + i + "the value of j" + j);
    }
}
