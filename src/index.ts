var id:number=7

//types 

let mebtus:string = "Etubaba";
let age:number = 38;
let bad:any = 'etu'
let arr:number[]=[1,2,1,3]    // array of numbers
let arr2:string[] = ['na','cool','fool']; // array of strings
let arr3:any[] =[`msm`,4,true] //array of any 

//tuples

//tuples defines the type choice 

let person: [string,number,boolean]=['name',32,false]

let employee:[number,string][] //array of arrays


employee=[
    [3,'food'],
    [4,'meat']
]

//union 
let ashawo : string|number  // using or in types 


ashawo=9



//enum types (enumerated types)

enum Direction1{      //enum defines a set of name constants,up default is 0
    Up,
    Down,
    Left,
    Right
}

//object types

 type User={             // u can use type with union 
    id:number 
    name:string
 }


 // u can compine two types to one type by using  ' type name = otherTypeName & {....}'(after equal sign)
 const user : User = {
    id:0,
    name: 'user'
}

//for an array of objects
const arrObject:User[]=[{id:1,name: 'user1'},{id:2,name: 'user2'}]

//interfaces
 interface Member{      //u cant use interface with union || primitive
    id:number|string
    readonly etuId:number      //read only is not assignable  
    name:string
    age?:number        // age is optional
 }

 const member : Member = {
    id:7,
    name: 'user',
    etuId:8
}
// u can compine two interface to one by using  ' interface name  extends otherInterfaceName {....}'

//interface can extends type and type can include interface 

//interface with function

interface CarryMeDeGo {
    (x:number,y:number):number 
}

const add :CarryMeDeGo =(x:number,y:number):number =>x+y
const minus :CarryMeDeGo =(x:number,y:number):number =>x-y

//type assertion

let buns :any=7

let pepperRoll = buns as string 


pepperRoll='food'


//functions 

function sum(a:number,b:number):number{
    return a + b
}

console.log('calc',minus(80,50))

//fuction can return anytype or void(for nothing) or never for nothing


//classes 
class Human {
    id:number
    food: string

    constructor(id:number,food:string) {
        this.id = id
        this.food = food
    }
}
const brad= new Human(6,'mee');
const knows= new Human(4,'you')
console.log('class', brad,knows)

//using interface with class

interface HumanClass{
    id:number
    name:string
    register():string
}

class Human2 implements HumanClass{
    id: number
    name:string
     constructor(id:number, name:string){
        this.id = id
        this.name = name
     }
     register(): string {
         return `${this.name} is registered `
     }
}

//generics  
 
function getArr<T>(arr: T[]): T[] {
    return Array().concat(arr)
}

const numArr=getArr<number>([1,2,3,4,5])
const strArr =getArr<string>(['mee','you','youe'])

strArr.push('tuuu') //only takes string
numArr.push(9) //only takes number





//https://www.youtube.com/watch?v=FJDVKeh7RJI
