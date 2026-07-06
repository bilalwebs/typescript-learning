"use strict";
// interface
Object.defineProperty(exports, "__esModule", { value: true });
function makeChai(order) {
    console.log(order);
}
function serveChai(order) {
    console.log(order);
}
class Chai {
    size = "large";
}
class myRes {
    // ok:boolean = true
    okRes = {
        ok: true
    };
}
function orderChai(t) {
    console.log(t);
}
const cup = {
    teaLeaves: 2,
    masla: 1
};
const u1 = {
    username: "bilal"
};
const u2 = {
    username: "Bilalcode",
    bio: "hello typescripts"
};
const cfg = {
    appName: "MasterChai",
    version: 11
};
// cfg.appName = "chaiaurcode"
cfg.version = 55;
function makeOrder(order) {
    console.log("Preparing Chai...");
    console.log(`Customer : ${order.name}`);
    console.log(`Tea Type : ${order.teaType}`);
    console.log(`Sugar    : ${order.sugar}`);
    console.log(`Strong   : ${order.strong}`);
}
const order1 = {
    name: "Bilal",
    teaType: "masala",
    sugar: 2,
    strong: true
};
makeOrder(order1);
//# sourceMappingURL=interfaceTs.js.map