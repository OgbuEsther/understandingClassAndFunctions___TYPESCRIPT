console.log("hello CodeLab set 06");
console.log("aunty amina");
let y: string = "esther"
y = "true"
console.log(y);

let x:number = 12
x = 10 + 2 
console.log(x)

let u : number = 20;
let e : number = 20;
let s : number = e + 25
let w = u + e + s
console.log(w)

let namer:string = "esther"
namer= "ogbu"
console.log(namer)

let person: boolean | number = 12;
console.log(person)
//this | allows your variable to accept more than one data type

let data: any = true;
// ANY allows your variable to accept any data type

//to declare  a null datatype
let test : null = null
console.log(test)

let we : undefined;
console.log(we);

//ARRAYS
let names:(string|number | boolean | null)[] = ["nigeria","Lagos" ,"ajegunle" , 20 , null , true]
console.log(names);

let some : (string | number | boolean | undefined | null)[]=["esther" , 20 , true , null]
console.log(some.length);
//the length is not a function but a property
some[0] = "ogbu uzoma";
console.log(some)
some[3] = undefined
console.log(some)



//TUPLE METHOD : in this method , it follows a strict sequence , the datatypes and its value must follow the same sequence
// and pattern, it is fixed EXAMPLE : RGBA (0,0,0,0) it must follow a sequence and be strict to it 
// the syntax [boolean , number , string , null , undefined] = [true , 18 , "delight" , null , undefined]
let ARR:[number ,string , boolean] = [20 , "esther" , false ]
console.log(ARR.length)
// tuple method
const meme : [number , string] = [1 , "3"];
meme[0] = 15;
// console.log(meme)uj

//OBJECTS
let AboutMe :{
    name : string,
    age : number,
    car : null,
    pagination? : number | string,
     myARR : (string | number)[]

} = {
    name : "esther",
    age : 20,
    car : null,
    pagination : "twenty",
    myARR :["me"]
}
console.log(AboutMe)


//write an object of a person that takes in number, name , height , age , color and score and let the score take in four values [4,10 ,15 ,20]
let personality :{
    name : string,
    age : number,
    color : string,
    height : string,
    score : (number)[]
} = {
    name : "jaji",
    age : 20,
    color : "dark",
    height : "tall",
    score :[4, 10 , 15 , 20]
    // let count : number = score.reduce((a,b)=>{
    //     return a + b
    // })

}
let count : number = personality.score.reduce((a , b)=> a + b)
// console.log(personality)

//TYPES AND INTERFACES
//types gives our variable a custom name so that it could be reused
//in type , this "|" is known as a union type because it is used to bind two datatypes
type person = {
    name: string;
    age : number;
    short : boolean | number;
    color : string;
    head_size ?: number
    //the question mark makes the key and value optional
}
type person2 = {
    race : string;
    nationality? : string;
}
let student : person | person2 = {
    name : "uzoma",
    age : 10,
    short: false, 
    color: "black",
    race : "black"
}
console.log(student)

//INTERFACES
interface data {
    name : string;
    age : number;
    black : boolean;
}

interface data {
    academy : string;
    score : number;
    short : boolean;

}
let MyData : data= {
    name: "isaac",
    age : 27,
    black: false,
    academy : "CodeLab",
    score : 99.9,
    short : false,

}
interface newData extends data{
    nationality : string
}
console.log(MyData)

//26-09-2022
type myinfo ={
    name : string;
    age : number;
    email : string;
    dark : boolean
}
const me : myinfo ={
    name : "esther",
    age : 20,
    email : "ogbuuzoma",
    dark : true
}
console.log(me)
//to change a value
me.age = 19
console.log(me)
//if you declare a "readonly " key word to a key , it is not editable; its constant

//ENUMS
// this is to use assign permanent or constant values to your variable. to declare it , use the key word "enum". if you do not assign a value to it , it will take the default index (0, 1 , 2 ,3........)
//use case : shopping store like jumia , 
type datatypes = {
    small : number;
    medium : number;
    large : number
}
enum about  {
    small = 200 ,
    medium = 300,
    large = 500
}
console.log(about)
const first = about.small
console.log(first)

function myfunc(){

}

const myfunc2 = ( x: number[]) :number =>{
    return x.reduce((a ,b )=> a + b);

}
console.log(myfunc2([1, 2, 3] ));



//OOP : object oriented programming that focues on objects ; how it is used and positioned..... it has to do with the concept of objects
/**class is a template for creating objects (an extension for an object)
 * an object in the real world are things that can be seen , felt and touched (tangible and intangible )
 * object in OOP is an abstract datatype 
 * BASICS / FUNDAMENTALS OF OOP
 * 1: abstraction : this means taking only the relevant attribute of an object (to separate and choose the relevant attribute out of an object), to simplify reality
 * 2: encapsulation : hiding datas and complexity , binding properties and methods
 * 3: inheritance : deriving or getting methods and properties from another class. the child class(sub-class) is an extension of the parent class (super- class); it extends from the parent class
 * 4: polymorphesim :   doing things more than one way
 * 
 * syntax
 * class name{
 * }
 */

class personality_test{
    name : string;
    age : number | string;
    race : string;
    complexion : string;

    

}
let person_1 = new personality_test()
person_1.name = "Delight";
console.log(person_1)

let person_2 = new personality_test()
person_2.name = "Esther";

person_2 = {
    name : "Uzoma",
    age : 20,
    race : "black",
    complexion : "dark"
}
console.log(person_2)

class allstudent {
    name : string;
    age : number
    constructor(name:string , age: number){
        this.name= name;
        this.age = age;
    }
    intro():void{
        console.log(`my name is ${this.name} and i am ${this.age}years old`)
    }
}
let first_student = new allstudent("esther" , 20)
console.log(first_student)
first_student.intro()
let second_student = new allstudent("delight" , 30)
console.log(second_student)
second_student.intro()
//read on types of inheritance and polymorphesim
//inheritance
/*Different Forms of Inheritance in Object Oriented Programming
Single Inheritance
Multiple Inheritance
Multi-level Inheritance
Hierarchical Inheritance
Hybrid Inheritance
Inheritance is the procedure in which one class inherits the attributes and methods of another class. The class whose properties and methods are inherited is known as the Parent class. And the class that inherits the properties from the parent class is the Child class.

The interesting thing is, along with the inherited properties and methods, a child class can have its own properties and methods.
single inheritance : this is when  a class acquires the methods or properties of another class E.G when a child class inherits the properties of a single parent class
multiple inheritance : this is when a sub class acquires the methods or properties of more than one parent class E.G inheriting the properties of both mom and dad
multilevel inheritance : this is when a subclass acqiures the properties of a subclass , which inherited its own properties from the parent class
hierarchical inheritance: is when many subclasses inherit the properties of one parent class
hybrid inheritance :
(using the extend key word)
polymorphism is the act of reusing a property or method , it saves time 
 */








