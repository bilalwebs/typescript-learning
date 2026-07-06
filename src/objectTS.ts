

// objectTS.ts

const chai = {
    name:"Masla Chai",
    price:222,
    isHot:true

}


let tea : {
    name:string;
    price:number;
    isHot:boolean
}

tea = {
    name: "ginger",
    price:34,
    isHot:true
}


type Tea = {
    name:string
    price:number
    integredient:string[]
}

const adrakChai:Tea = {
    name:"Adrak Chai",
    price:44,
    integredient:["ginger","tea leaves"]

}
// duck type

type Cup = {size:string}

let smallCup:Cup =  {size : "500ml"} 

let bigCup = {size:"500ml",material:"steel"}

smallCup = bigCup

type Brew = {brewTime:number}

const coffee = {brewTime:5,beans:"Arabica"}

const chaiBrew:Brew = coffee


type User = {
    username:string
    password:string

}

const i:User = {
    username:"bilal",
    password:"72723je78"
}

type Item =  {name:string,quantity:number,}
type Address =  {street:string,pin:number,}

type Order = {
    id:string
    items:Item[]
    address:Address
}

// type Chai = {
//     name:string
//     price:number
//     isHot:boolean
// }

const updateChai = (updates:Partial<Chai>)=>{
    console.log("update chai with: ",updateChai)
}

updateChai({price:555})
updateChai({isHot:true})
updateChai({})


type ChaiOrder={
    name?:string
    quantity?:number
}

const placeOrder = (order:Required<ChaiOrder>)=>{
    console.log(order)
}

placeOrder({
    name:"Bilal",
    quantity:55
})



type Chai = {
    name:string
    price:number
    isHot:boolean
    integredients:string[]
}

type BasicChaiInfo = Pick<Chai,"name" | "price">

const chaiInfo:BasicChaiInfo = {
    name:"Lemon Chai",
    price:44
}


type ChaiNews = {
    name:string
    price:number
    isHot:boolean
    secretIngredients:string[]
}

type PublicChai = Omit<ChaiNews,"secretIngredients">
