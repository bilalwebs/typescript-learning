

const chaiFlavors:string [] = ["Masala","Adrak"]
const chaiPrice:number [] = [1,2,3,4]

const rating:Array<number> = [111.1,23.5,7.5]


type Chai = {
    name:string
    price:number
}

const menu:Chai[] = [
    {name:"Masala",price:555},
    {name:"Adrak",price:5},
]


const cities:readonly string[] = ["karachi","lahore"]
// cities.push("faisalabad")

const table:number[][] = [
    [
        1,2,3,4
    ],
    [
        22,3,4,5
    ]
]


let chaiType:[string,number];
chaiType = ['masala',44]


let userInfo:[string,number,boolean?];
userInfo = ['masala',66.4,true]
userInfo = ['Adrak',66.4]


const location:readonly [number,number] =[444,444]

enum CupSize {
    MEDIUM,
    LARGE,
    SMALL
}

const size=CupSize.LARGE


enum STATUS {
    PENDING=33,
    SERVED,
    CANCELLED
}


enum ChaiType {
 MASALA="masala",
 ADRAK='adrak'
}

function makeChai(type:ChaiType){
    console.log(`Make:${type}`)

}

makeChai(ChaiType.ADRAK)
// makeChai("Masala")


enum RandomEnum {
    ID=1,
    NAME="Masala"
}

const enum Sugar {
    LARGE = 1,
    MEDIUM=2,
    HIGH=3
}

// const s = Sugar.HIGH

let t:[string,number] = ['chai',33]
t.push("ginger")