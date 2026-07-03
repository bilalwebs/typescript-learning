

let data :unknown;

data = 10; // valid assignment
data = "Hello"; // valid assignment
data = true; // valid assignment
data = { name: "John", age: 30 }; // valid assignment


let name :unknown = "John Doe";

if (typeof name === 'string') {
    console.log(name.toUpperCase());
}