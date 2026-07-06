"use strict";
// union and any type
Object.defineProperty(exports, "__esModule", { value: true });
let sub = 10; // Union type, can be number or string
sub = "Hello"; // valid assignment
let apiRequestStatus = "pending"; // Union type with specific string literals
apiRequestStatus = "success"; // valid assignment
// ! apiRequestStatus='bilal' // invalid assignment, Type '"bilal"' is not assignable to type '"pending" | "success" | "error"'
let airlineSeat = "aisle"; // Union type with specific string literals
airlineSeat = "middle"; // valid assignment
const orders = ['12', '13', '14'];
let currentOrder; // Union type with string and undefined
for (let order of orders) {
    if (order === '13') {
        currentOrder = order; // currentOrder is inferred as string
        break;
    }
}
console.log(currentOrder);
//# sourceMappingURL=unionAndany.js.map