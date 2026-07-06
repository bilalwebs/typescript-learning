"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = '42';
let numericLength = response.length;
let bookString = `{"name":"one of thing"}`;
let bookObject = JSON.parse(bookString);
console.log(bookObject.name);
const inputElement = document.getElementById("hell");
let value;
value = "bilal";
value = 111;
value = [1, 2, 3, 4];
value = 33.33;
value.toUpperCase();
let newValue;
newValue = "bilal";
newValue = 111;
newValue = [1, 2, 3, 4];
newValue = 33.33;
// newValue.toUpperCase()
if (typeof newValue === "string") {
    newValue.toUpperCase();
}
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error", error);
}
const data = "chai aur code";
const strData = data;
function redirectBaseOnRole(role) {
    if (role === "admin") {
        console.log("Redirecting to admin dashbord");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to user dashbord");
        return;
    }
    role;
}
function neverReturn() {
    while (true) { }
}
//# sourceMappingURL=moreType.js.map