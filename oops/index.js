// OBJECT 

const car={
    cname:"Ford",
    cprice:40000,
    colour:"red",
    sayhello:function(){console.log("hello everone I brought a car named as FORD")},
}
const car1={
    cname:"maruti",
    cprice:50000,
    colour:"grey",
}
console.log(car.cname);
console.log(car.cprice);
console.log(car.colour);
car.sayhello();
console.log(car1.cname);
console.log(car1.cprice);
console.log(car1.colour);

//*********************************************************************************************************************************************************************** */

//this keyword 

const person={
    fname : "Deepthi",
    lname : "Duraisamy",
    age : 19,
    sayhello : function(){console.log(`Hello everyone..! I am ${this.fname}`)},
}
console.log(person.fname);
console.log(person.lname);
console.log(person.age);
person.sayhello();

//********************************************************************************************************************************************************************************** */

//CONSTRUCTOR 

function fruit(name,colour,price){
    this.name = name,
    this.colour=colour,
    this.price=price,
    this.hello=function()
    {
        console.log(`I love ${this.name} which is ${this.colour} colour..!`)
    }
    
}

const fruit1 = new fruit("Apple","Red",200);
const fruit2 = new fruit("Orange","Orange",300);
const fruit3 = new fruit("Banana","Yellow",400);

console.log(fruit1.name);
console.log(fruit1.colour);
console.log(fruit1.price);
console.log(fruit2.name);
console.log(fruit2.colour);
console.log(fruit2.price);
fruit1.hello();
fruit3.hello();

//****************************************************************************************************************************************************************** */


//class


class product{
    constructor(name,price){
        this.name=name,
        this.price=price
    }
    displayProduct(){
        console.log(`Product name is ${this.name}.`);
        console.log(`The price of the product is ${this.price}.`);
    }
}
const product1 = new product("Chudi",700);
const product2 = new product("Saree",1200);

product1.displayProduct();
product2.displayProduct();

// **********************************************************************************************************************************************************************************************


//static


class User{
    static userCount=0;
    constructor(username){
        this.username=username;
        User.userCount++;
    }
}
const user1=new User("Deepthi");
const user2=new User("Dharshini");

console.log(user1.username);
console.log(user2.username);
console.log(User.userCount);

class maths{
    static a=10;
    static b=5;
    static add(a,b){
        return a+b;
    }
    static sub(a,b){
        return a-b;
    }
}
console.log(maths.add(10,5));
console.log(maths.sub(10,5));

// **************************************************************************************************************************************************************************

//INHERITANCE 



class Animal{
    eat(){
        console.log(`${this.name} is eating`);
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
    }
}
class Rabbit extends Animal{
    name = "Rabbit";
    run(){
        console.log( `${this.name}is Running` );
    }
}
class Cow extends Animal{
    name = "Cow";
    sound(){
        console.log(`${this.name} gives a sound as maaa` );
    }
}
const r = new Rabbit();
const c = new Cow();
r.eat();
r.sleep();
r.run();
c.eat();
c.sound();

// *********************************************************************************************************************************************************************************

//Super keyword



class persons{
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;
    }
}
class user extends persons{
    constructor(fname,lname,age){
        super(fname,lname);
        this.age=age;
    }
    run(){
        console.log(`This ${this.fname} is running`);
    }
}
class users extends persons{
    constructor(fname,lname,height){
        super(fname,lname);
        this.height=height;
    }
}
const u=new user("Deeps","Durai",19);
const us=new users("Dhars","Duraisamy",17);
u.run();
console.log(u.fname);
console.log(u.lname);
console.log(u.age);
console.log(us.fname);
console.log(us.lname);
console.log(us.height);


//  **************************************************************************************************************

// getter setter

class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }

set width(newwidth)
{
    if(newwidth>0)
        this._width=newwidth;
    else
    console.log( `Width should not be non-negative..!`);
}
set height(newheight)
{
    if(newheight>0)
        this._height=newheight;
    else
    console.log(`Height should not be non-negative..!`);
}
get width(){
    return this._width;
}
get height()
{
    return this._height;
}
get area(){
    return this._width * this._height;
}
}
const rectangle=new Rectangle(12,34);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

// ******************************************************************************************************************************************

// DESTRUCTUREING 

let a=10;
let b=5;
[a, b]=[b, a];
console.log(a);
console.log(b);

// eg 2:

let colour=["red","blue","pink","grey","orange"];
[colour[0], colour[3]]=[colour[3], colour[0]];
console.log(colour);

// eg3

let colours=["red","blue","pink","grey","orange"];
const [fcolour, scolour, ...extracolour]=colours;
console.log(fcolour);
console.log(scolour);
console.log(extracolour);

// eg 4 destructure in function parameter


function display({firstName,lastName,age,job})
{
    console.log(`name : ${firstName} ${lastName}`);
    console.log(`age : ${age}`);
    console.log(`job : ${job}`);
}


const person1={
    firstName : "Deepthi",
    lastName : "Duraisamy",
    age : 20,
    job : "IT",
}

display(person1);

// *********************************************************************************************************

// nested object

class person4{
    constructor(name,age,...address)
    {
        this.name=name;
        this.age=age;
        this.address = new Address(...address);
    }
}
class Address{
    constructor(street,city)
    {
        this.street=street;
        this.city=city;
    }
}
const person5=new person4("deepthi",23,"nehru_street","tirupur");
console.log(person5.name);
console.log(person5.age);
console.log(person5.address);
console.log(person5.address.street);
console.log(person5.address.city);

// eg 2

const fruits=[{name : "apple", color : "red" , calo : 95},
    {name : "banana", color : "yellow" , calo : 105},
    {name : "orange", color : "orange" , calo : 45},
    {name : "pineaplle", color : "yellow" , calo : 37}];

// push :
fruits.push({name : "grapes", color : "purple" , calo : 85});
console.log(fruits);

// pop :

// fruits.pop();
// console.log(fruits);

// splice :

// const ab =fruits.splice(1,2);
// console.log(fruits);
// console.log(ab);

// forEach :

fruits.forEach(fruit => console.log(fruit.name));
fruits.forEach(fruit => console.log(fruit.color));
fruits.forEach(fruit => console.log(fruit.calo));

// map :

const fruitname = fruits.map(fruit=>fruit.name);
console.log(fruitname);
const fruitcolor = fruits.map(fruit=>fruit.color);
console.log(fruitcolor);
const fruitcalo = fruits.map(fruit=>fruit.calo);
console.log(fruitcalo);

// filter :

const yellowfruit = fruits.filter(fruit=>fruit.color==="yellow");
console.log(yellowfruit);
const calomore = fruits.filter(fruit=>fruit.calo>90);
console.log(calomore);

// reduce :

const maxfruit = fruits.reduce((max, fruit)=> 
                        fruit.calo>max.calo ? fruit : max);
console.log(maxfruit);

const minfruit = fruits.reduce((min, fruit)=> 
    fruit.calo<min.calo ? fruit : min);
console.log(minfruit);

// *********************************************************************************************************
// sort 

const number =[6,5,4,3,2,1,10];
number.sort();
console.log(number);

number.sort((a,b)=> a-b);
console.log(number);

number.sort((a,b)=> b-a);
console.log(number);

//eg 2

const person3=[{name : "deeps", age:23,food: "sandwich"},
              {name : "dhars", age:30,food: "pizza"},
              {name : "ishu", age:12,food: "burger"},
              {name : "dhaks", age:17,food: "noodles"}];

person3.sort((a,b)=>a.age-b.age);

console.log(person3);

person3.sort((a,b)=>b.age-a.age);

console.log(person3);

// *****************************************************************************************************88

// date 
const dates=new Date();
console.log(dates);

const date = new Date(0);
console.log(date);

const datee = new Date(`2024-02-01T12:04:45`);
console.log(datee);

// **********************************************************************************************************

// closure eg1 

function createGame(){
let score = 0;

function increase(points){
score+=points;
console.log(`+${points}pts`);
}

function decrease(points){
    score-=points;
    console.log(`-${points}pts`);
}

function getscore(){
    return score;
}
return{increase,decrease,getscore};
}
const game=createGame();

game.increase(5);
game.increase(6);
game.decrease(2);
console.log(`The final score is ${game.getscore()}`);

// eg 2
function createCounter(){
let count=0;
function increment(){
    count++;
    console.log(`The count increased by ${count}`);
}
function getcount(){
    return count;
}
return {increment,getcount};
}
const counter = createCounter();
counter.increment();
counter.increment();
console.log(`total count is ${counter.getcount()}`);

// ******************************************************************************************************

