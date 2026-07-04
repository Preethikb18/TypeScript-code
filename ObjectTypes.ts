
type userType = {name:string,age:number, salary?:number,isActive: boolean,role?:string}

let user : userType=
{
name: 'tom',
age: 34,
salary:345,
isActive:true,
role:'admin'
}

let myUser :userType =
{
name: 'peter',
age: 30,
salary:344,
isActive:false
}

console.log(user);
console.log(myUser);
console.log(typeof(user));

//interface: define schema
 interface userSchema
 {
    name: string,
    age?: number,
    isActive?: boolean
 }

 let u1 : userSchema =
 { name: 'pink'
 }
   
interface Employee 
{
    name: string,
    age: number,
    role: string
}
interface comp{
    company: string
}

interface Dept extends Employee,comp
{
    department: string,
    head: string
}


let empdetails: Dept =
{
department :'HR',
head:'Mat',
name: 'suma',
age: 34,
role: 'software engineer',
company: 'IBM'
}

console.log(empdetails.department,empdetails.name,empdetails.age);

interface Car
{
brand: string
}
interface Car
{
    model: string
}

let myCar : Car =
{
    brand: 'audi',
    model: 'x5'
}
console.log(myCar.brand,myCar.model);

type status = "pending"| "out of delivery" | "delivered";
let OrderStaus : status ="pending";
console.log(OrderStaus);

type userId= string | number;
type age = number;

let id:userId ='p001';
let age1: age = 45;
let id1 : userId = 103;

// type with tuple
type num = [number, number];
let p: num =[10,33]

//Real time example : test automation
interface TestConfig
{
    testName:string,
    browser: "edge" | "chrome" | "safari",
    headless: boolean,
    retries?: number
}

//type of status
type Teststatus = "passed" | "failed" |"skipped";

// interface for the Test results

interface TestResults extends  TestConfig
{
    status: Teststatus,
    duration: number
}

let  results  : TestResults =
{
    status: "passed",
    duration: 10,
    testName: "Login test",
    browser: "chrome",
    headless: false
}

console.log(results);
let resultsJson = JSON.stringify(results,null,2);
console.log(resultsJson);