"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let data;
data = 10; // valid assignment
data = "Hello"; // valid assignment
data = true; // valid assignment
data = { name: "John", age: 30 }; // valid assignment
let name = "John Doe";
if (typeof name === 'string') {
    console.log(name.toUpperCase());
}
function getChai(kind) {
    if (typeof kind === "string") {
        return `Making ${kind} chai...`;
    }
    return `Chai order: ${kind}`;
}
function serviceChai(msg) {
    if (msg) {
        return `Service ${msg}`;
    }
    return `Service default masla chai`;
}
function chaiOrder(size) {
    if (size === "small") {
        return `small cutting chai..`;
    }
    if (size === "medium" || size === "large") {
        return ` make extra chai`;
    }
    return `chai oder #${size}`;
}
class KhuldChai {
    server() {
        return `serving khuldhad chai..`;
    }
}
class Cutting {
    serve() {
        return `serving cutting chai..`;
    }
}
function serve(chai) {
    if (chai instanceof KhuldChai) {
        return chai.server();
    }
    return chai.serve();
}
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar.`;
    }
    return `Serving custom chai: ${item}`;
}
function MakeChai(order) {
    switch (order.type) {
        case "masala":
            return `Masala Chai`;
            break;
        case "ginger":
            return `Ginger Chai`;
            break;
        case "elaichi":
            return `Elaichi Chai`;
            break;
        default:
            break;
    }
}
function brew(order) {
    if ("spicelevel" in order) {
    }
}
//unknown
// function isStringArray(arr:unknown):arr is string[]{
// }
//# sourceMappingURL=typeNarrowing.js.map