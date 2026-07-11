

// functionTS.ts




function makeChai(type:string,cups:number) {
    console.log(`Making ${cups} chai of ${type}`)
    
}

makeChai("Lemon",2)


function getChaiPrice():number{
    return 33
}


function makeOrder(order:string):string | null {
    if (!order) {
        return null
    }
    return order
}

function logChasi():void {
    console.log("chai is ready")
}

function orderChai(type:string="Masla"){

}

function crateChai(order:{
    type:string,
    sugar:number,
    size:"small" | "large"
}):number{
    return 4
}