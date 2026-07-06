

let data :unknown;

data = 10; // valid assignment
data = "Hello"; // valid assignment
data = true; // valid assignment
data = { name: "John", age: 30 }; // valid assignment


let name :unknown = "John Doe";

if (typeof name === 'string') {
    console.log(name.toUpperCase());
}

function getChai(kind:string | number){
    if (typeof kind === "string") {
        return `Making ${kind} chai...`
        
    }
    return `Chai order: ${kind}`
    
}


function serviceChai(msg?:string) {
    if (msg) {
        return `Service ${msg}`
        
    }
    return `Service default masla chai`
}


function chaiOrder(size:"small"|"large"|"medium"|number){
    if (size === "small") {
        return `small cutting chai..`
    }
    if (size === "medium" || size === "large") {
        return ` make extra chai`
    }
    return `chai oder #${size}`
}


class KhuldChai{
    server(){
        return `serving khuldhad chai..`
    }
}

class Cutting{
    serve(){
        return `serving cutting chai..`
    }
}

function serve(chai:KhuldChai | Cutting){
    if (chai instanceof KhuldChai) {
        return chai.server()
    }
    return chai.serve()
}


type ChaiOrder = {
    type:string,
    sugar:number
}

function isChaiOrder(obj:any):obj is ChaiOrder {
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item:ChaiOrder | string){
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar.`
    }
    return `Serving custom chai: ${item}`
}

type MasalaChai = {type:"masala",spicelevel:number}
type GingerChai = {type:"ginger",amount:number}
type ElaichiChai = {type:"elaichi",aroma:number}

type Chai = MasalaChai | ElaichiChai | GingerChai

function MakeChai(order:Chai) {
    switch (order.type) {
        case "masala":
            return `Masala Chai`
            break;
        case "ginger":
            return `Ginger Chai`
            break;
        case "elaichi":
            return `Elaichi Chai`
            break;
    
        default:
            break;
    }
    
}

function brew(order:MasalaChai | GingerChai) {
    if ("spicelevel" in order) {

        
    }
    
}


//unknown
// function isStringArray(arr:unknown):arr is string[]{

// }