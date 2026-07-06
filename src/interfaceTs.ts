

// interface

type ChaiOrder = {
    type:string
    sugar:number
    strong:boolean
}

function makeChai(order:ChaiOrder){
    console.log(order)
}

function serveChai(order:ChaiOrder) {
    console.log(order)
}


type TeaRecipe = {
    water:number
    milk:number
}


// class MasalaChai implements TeaRecipe{
//     water=555;
//     milk=44
// }


// interface
interface CupSize {
    size:"small" | "large"
} 

class Chai implements CupSize {
    size:"small" | "large" = "large"
}


// type Response = {ok:true} | {ok:false}
interface Response{
    okRes: {ok:true} | {ok:false}

} 

class myRes implements Response{
    // ok:boolean = true
        okRes = {
            ok:true
        } 
}



// union

type TeaType = "masla" | "ginger" | "lemon"

function orderChai(t:TeaType) {
    console.log(t)
}

type BaseChai = {teaLeaves:number}
type Extra = {masla:number}

type MaslaChai = BaseChai & Extra

const cup:MaslaChai = {
    teaLeaves:2,
    masla:1
}



type User = {
    username:string
    bio?:string
}

const u1:User = {
    username : "bilal"
}

const u2:User = {
    username:"Bilalcode",
    bio:"hello typescripts"
}

type Config = {
    readonly appName :string
    version:number
}

const cfg:Config ={
    appName:"MasterChai",
    version:11
}

// cfg.appName = "chaiaurcode"
cfg.version = 55 



// mini project
interface Customer {

    name: string;
}

interface Recipe {

    teaType: "masala" | "ginger" | "lemon";

    sugar: number;

    strong: boolean;
}

type Order = Customer & Recipe;

function makeOrder(order: Order) {

    console.log("Preparing Chai...");
    console.log(`Customer : ${order.name}`);
    console.log(`Tea Type : ${order.teaType}`);
    console.log(`Sugar    : ${order.sugar}`);
    console.log(`Strong   : ${order.strong}`);
}

const order1: Order = {

    name: "Bilal",

    teaType: "masala",

    sugar: 2,

    strong: true
};

makeOrder(order1);