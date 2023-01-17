class dev {
    name: string;
    age : number;
    stack : string

    constructor (names: string ,age : number, stack : string ){
        this.name= names;
        this.age= age;
        this.stack = stack
    }
    intros():void {
        console.log(`hey guys!! my name is ${this.name} and i am ${this.age}years old and my stack is ${this.stack}`)        
    }
    static total_age(){
       let answer = []
       answer.push()
    }
}

let dev1 = new dev( "uzoma" ,  10, "MERN")
let dev2 = new dev( "sylvia" ,  20, "MERN")
let dev3 = new dev( "favour" ,  35, "MERN")
// console.log(dev1 , dev2 , dev3)
// console.log(dev1)
// console.log(dev2)
// console.log(dev3)
// console.log(`the total age is : ` , dev1.total_age()+ dev2.total_age()+ dev3.total_age())
// console.log(dev1.total_age())
// console.log(dev2.total_age())
// console.log(dev3.total_age())

//IHERITANCE
class tokenkey extends dev {
    tokendata : string | number;

    constructor(token : number, name : string , age : number , stack : string){
        super(name , age ,stack);
        this.tokendata=token;
    }
     input(x){
        if(x=== this.tokendata){
            console.log("correct input")
        }
        else {
            console.log("wrong")
        }
    }

}
let tokenuser = new tokenkey(2004 , "sofia" , 30 , "DEVOPs")
console.log(tokenuser)

// tokenuser.tokendata= 20028
console.log(tokenuser.input(2004))

interface motor {
    name : string;
    model : number;
    color: string;
    tire : boolean
}
//every class must have a member (field) , constructor and a method and interfaces also accepts methods (functions)
class mototypes implements motor {
    name : string;
    model : number;
    color: string;
    tire: boolean

    constructor(options : motor){
        this.name = options.name;
        this.model = options.model;
        this.color= options.color;
        this.tire= options.tire
    }
}
let mine = new mototypes({name : "golf" , model : 1889 , color: "black" , tire: true})
console.log(mine);
