

// union and any type

let sub: number | string = 10 // Union type, can be number or string
sub = "Hello"; // valid assignment


let apiRequestStatus:"pending" | "success" | "error" = "pending"; // Union type with specific string literals

apiRequestStatus = "success"; // valid assignment

// ! apiRequestStatus='bilal' // invalid assignment, Type '"bilal"' is not assignable to type '"pending" | "success" | "error"'

let airlineSeat: "window" | "aisle" | "middle" = "aisle"; // Union type with specific string literals

airlineSeat = "middle"; // valid assignment


const orders = ['12', '13', '14'] 

let currentOrder:string | undefined; // Union type with string and undefined

for (let order of orders) {
    if(order === '13') {
        currentOrder = order; // currentOrder is inferred as string
        break
    }   
}

console.log(currentOrder)