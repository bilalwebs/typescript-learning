// class Chai {
//     flavor:string
//     price:number

//     // constructor(flavor:string,price:number){
//     //     this.flavor = flavor
//     //     this.price = price
//     // }

//     constructor(flavor:string){
//         this.flavor = flavor
//         console.log(this)
//     }
// }



// const masala = new Chai("ginger",66)
// masala.flavor




class Chai{
    public flavor:string = "Masala Chai"

    private secretIngredient = "Cardamon"

    reveal(){
        return this.secretIngredient //ok not direct access
    }

}

// const c = new Chai()

// c.flavor
class  Shop {
    protected shopName = "Chai Corner"
}

class Branch extends Shop {
    getName(){
        return this.shopName
    }
}

new Branch().getName

class Walet{
    #balance = 100

    getBalance(){
        return this.#balance
    }
}

const w = new Walet()

class Cup{
    readonly capcity:number  = 250

    constructor(capacity:number){
        this.capcity = capacity
    }
}

class ModernChai {
    private _sugar = 2


    get sugar(){
        return this._sugar
    }

    set sugar(value:number){
        if (value > 5) throw new Error("too sweet")
        this._sugar = value
    }
}

const c = new ModernChai()
c.sugar = 3


// statiuc
class EkChai{
    static shopName = "ChaiCode Coffee"

    constructor(public flavor:string){


    }
}

console.log(EkChai.shopName)

const newChai1 = new EkChai("Masala Chai")
console.log(newChai1.flavor)


abstract class Drink{
    serve(){
        console.log("Serving Drink")
    }

    abstract make():void
}

class makeChai extends Drink{
    make(){
        console.log("Brewing chai")
    }
}

const chai = new makeChai(); 
chai.make()
chai.serve()


abstract class Payment {

    pay() {
        console.log("Starting Payment...");
    }

    abstract process(): void;
}

class JazzCash extends Payment {

    process() {
        console.log("Processing JazzCash Payment");
    }

}

class EasyPaisa extends Payment {

    process() {
        console.log("Processing EasyPaisa Payment");
    }

}

const j = new JazzCash();

j.pay();

j.process();


class Heater{
    heat(){
        console.log("Heating water...");
    }

}

class ChaiMaker{
    constructor(private heater:Heater){

    }

    make(){
        this.heater.heat()
        console.log("Making Chai...");
    }
}

const heater = new Heater()
const chaii = new ChaiMaker(heater)
chaii.make()
