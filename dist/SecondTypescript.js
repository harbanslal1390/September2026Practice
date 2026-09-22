"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let objvalue = {
    name: "harry",
    classname: "first",
    rollno: 100,
    address: {
        city: "NewYork",
        state: "new jersy",
        country: "USA"
    },
    skills: ['java', '.net', 'php']
};
console.log(objvalue);
objvalue.department = 'IT';
console.log(objvalue);
console.log(objvalue.address.city);
