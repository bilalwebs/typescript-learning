

let response:any = '42'

let numericLength:number = (response as string).length



type Book = {
    name:string
}

let bookString = `{"name":"one of thing"}`
let bookObject = JSON.parse(bookString) as Book
console.log(
    bookObject.name
)

const inputElement = document.getElementById("hell") as HTMLElement

let value:any;

value = "bilal"
value = 111
value = [1,2,3,4]
value = 33.33
value.toUpperCase()

let newValue:unknown;

newValue = "bilal"
newValue = 111
newValue = [1,2,3,4]
newValue = 33.33
// newValue.toUpperCase()

if(typeof newValue === "string"){
    newValue.toUpperCase()
}


try {
    
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message)
        
    }
    console.log("Error",error)
    
}

const data :unknown = "chai aur code"
const strData:string = data as string


type Role = "admin"|"user"

function redirectBaseOnRole(role:Role):void {
    if (role ==="admin") {
        console.log("Redirecting to admin dashbord")
        return
    }
    if (role ==="user") {
        console.log("Redirecting to user dashbord")
        return
    }
    role 
    
}


function neverReturn():never {
    while(true){}
    
}