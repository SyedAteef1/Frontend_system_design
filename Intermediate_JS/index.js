// push and pop are speed than shift and unshift

// let furits=["ateef","ateef","ateef","ateef"]
// console.log(typeof(furits[2]))
// let fru=["ateef","ateef","ateef",undefined,null]
// console.log(typeof(fru[3]))
// fru.push("thelast")
// console.log(fru)
// console.log(fru.pop())
// console.log(fru)
// fru.unshift("thefirst")
// console.log(fru)
// fru.shift()
// console.log(fru)



// //primitive types
// let num1=6
// let num2=num1
// console.log(num1)
// console.log(num2)
// num1++;
// console.log(num1)
// console.log(num2)

// reference type --arrays takes the address of the ara1 as the copy and when tthe ara1 is updated then obviously the ara2 has also the same address

// let ara1=["item1","item2","item3"]
// let ara2=ara1;
// console.log(ara1);
// console.log(ara2);
// ara1.push("item 4")
// console.log(ara1);
// console.log(ara2);

// let ara1=["item1","item2","item3"]
// let ara2=[].concat(ara1);
// let ara2=ara1.slice(0);
// so if you assign the ara1 directly then its gonna return true
// let ara2=[...ara1]\
// let ara3=["item4","item4","item5"]
// ara1.push("item3")
// console.log(ara1)
// console.log(ara1==ara2)
// console.log(ara1);
// console.log(ara2);
// console.log(ara3)
// console.log("the joint of three arrays is given below")
// let ara4=[...ara1,...ara2,"add",...ara3]
// console.log(ara4)

// let furits=["apple","pineapple","juice","cream"]
// console.log(furits)
// console.log(furits.length)
// let furits2=[]
// for(i=0;i<furits.length;i++){
//   furits2.push(furits[i].toUpperCase())
//   console.log(furits[i])


// }
// console.log(furits2)

// while loop


// let furits=["apple","pineapple","juice","cream"]

// let i=0
// while(i<furits.length){
    
//     console.log(furits[i])
//     i++
// }

// for of 

// const furits=["apple","pineapple","grapes","gwaua"]
// let furit2=[]
// for(let furit of furits){
//     console.log(furit)
//     furit2.push(furit)
// }
// console.log(furit2)


// array destructing


// let array=["item1","item2","item3"]

// let myitem1=array[0];
// let myitem2=array[1];
// console.log(myitem1)
// console.log(myitem2 )
// let [myvar1,,myvar2]=array;
// the above type takes only one element from the array
// console.log(myvar1,myvar2)
// let array=["item1","item2","item3","ateef","quadri"]
// let [array1,...newarray]=array;
// console.log(newarray)

// objects
// the keys are stored in string 
// const person={name:"ateef",age:24,Passion:"noting",languages:{c:"intermideate"}}
// const key="email"
// console.log(person.languages.c)
// console.log(person["name"])
// person.gender="male"
// console.log(person);
// person[key]="ateef@gmail.com"
// const person={name:"ateef",age:24,Passion:"noting",languages:{c:"intermideate"}}
// for(let key in person){
//     console.log(key,":",person[key])
//     console.log(`${key} : ${person[key]}`)

// }
// const ateef=["ateef","quadri","ateef","quadri"]
// for(let at in ateef){
//     console.log(at);
//     console.log(ateef[at])
// }
// console.log(typeof(Object.keys(person)))

// const val=Array.isArray(Object.keys(person))
// console.log(val)


// computed properties
// const key1="objkey1";
// const key2="objkey2";

// const value1="myvalue1";
// const value2="myvalue2";

// const obj={
//     [key1]:value1,
//     [key2]:value2
// }

// const obj={}

// obj[key1]=value1;
// obj[key2]=value2;

// console.log(obj)

// ////spread operatoer

//  const array1=[1,2,3]
//  const array2=[4,5,6]

//  const newarray=[...array1,..."ateef"]
//  in the above method the string gonne seperate itself with itself and makes it as "a" "t" "e" "f";

//  console.log(newarray)

// //spread operator with object

// const onj1={
//     key1:"objkey1",
//      key2:"objkey2"
// }
// const onj2={
//     key3:"objkey3",
//      key4:"objkey4"
// }
// const objnew={
//     ...onj1,
//     ...onj2
// }
// console.log(objnew)

// const newobj={
//     ..."abc",
//     ..."ateef sohail"
// }

// console.log(newobj)


// ------------------------------/
//  so the for each have the two parameter i.e value and the index
// const numbers=[1,2,3,4,5,6]
// function multiplyby2(number,ind){
//     console.log("the index is",ind)
//     console.log(`${number}*2 = ${number*2}`)
    
// }

// for(let i=0;i<numbers.length;i++){
//     multiplyby2(numbers[i],i)
// }

// numbers.forEach(multiplyby2)
//  const users=[
//     {
//         first_name:"ateef",
//         age:25,
//         gender:"male"
//     },
//     {
//         first_name:"sohail",
//         age:25,
//         gender:"male"
//     },
//     {
//         first_name:"tousif",
//         age:25,
//         gender:"male"
//     }
//  ]
//  users.forEach(function(user){
//     console.log(user.first_name)
//     console.log(user.age)
//     console.log(user.gender)
//  })
//  users.forEach((user)=>{
//         console.log(user.first_name)
//         console.log(user.age)
//         // console.log(user.age)
//         console.log(user.gender)
//  })
// for(let user of users){
//     console.log(user.first_name)
// }

// users.forEach((user,index)=>{
//     console.log(user.first_name)
//     console.log(index)

// })


// ---------------------------------------
// map 
// so map should return or else it will b defined as undefined and it creates array
// const nums=[3,4,5,67,43]
// const square=function(number){
//     return number*number;
// }
// const result=nums.map((number,index)=>{
//      return `${index} the nuumber is ${number*number}`
// });
// console.log(result)


//  const users=[
//     {
//         first_name:"ateef",
//         age:25,
//         gender:"male"
//     },
//     {
//         first_name:"sohail",
//         age:25,
//         gender:"male"
//     },
//     {
//         first_name:"tousif",
//         age:25,
//         gender:"male"
//     }
//  ]

// const names= users.map((user)=>{
//         return user.first_name
//  })
//  console.log(names)

// -----filter method(so it basically works on the true and false statement )
// remember it filter ,map (should be stored in the variable) and for each in that 
// const number=[1,2,34,5,5,63,23]

// const check=number.filter((num)=>{
//     return num%2!==0;

// })
// console.log(check)
// const odd=number.filter((num)=>{
//     return num%2===0;

// });
// console.log(odd)
// so basically the filter stores the element where the condition of the element is true
// /--------reduce

// const nums=[1,2,3,4,5,243,232]

// const sum=nums.reduce((acc,cv)=>{
//     return acc + cv;
// })
// console.log(sum)
// const users=[
//     {
//         name:"ateef",
//         itemprice:10000,
//         item2price:20000,
//         item3price:20000
//     },
//     {
//         name:"sohail",
//         itemprice:30000,
//         item2price:20000,
//         item3price:20000
//     },
//     {
//         name:"tousif",
//         itemprice:10000,
//         item2price:40000,
//         item3price:20000
//     },
// ]

// users.forEach((user)=>{
//     console.log(`for the user ${user.name} the total cart price is ${user.itemprice+user.item2price+user.item3price}`)
// })

// const sums =users.reduce((totalprice,currprice)=>{
//         return currprice.itemprice+currprice.item2price+currprice.item3price+totalprice
// },0)
// console.log(sums)

// const prod=[
//     {
//         productid:1,
//         productname:"asus",
//         price:10000
//     },
//     {
//         productid:2,
//         productname:"dell",
//         price:10000
//     },
//     {
//         productid:1,
//         productname:"hp",
//         price:10000
//     },
// ]

// const prodsum=prod.reduce((totalprice,currprice)=>{

//     return currprice.price +totalprice

// },0)
// //at the end it should give initial value and it is optional
// console.log(prodsum)

// ---------------------------sort js
// const nums=[1323,231,3242,3242,12,1]
// nums.sort((a,b)=>a-b)
// console.log(nums)
// const nums=[123,231,3242,3242,12,1]
// nums.sort((a,b)=>a-b)
// console.log(nums)

// const product=[
//     {
//         productid:1,
//         price:10293
//     },
//     {
//         productid:2,
//         price:23231
//     },
//     {
//         productid:3,
//         price:432424
//     },
// ]
// const pro=[...product]
// // product.sort((a,b)=>b.price-a.price)

// console.log(product)

// const hightolow= pro.sort((a,b)=>b.price-a.price)
// console.log(hightolow)


// ----------------find method basically it finds the true statement to a given login and return the first occurence of true

// const arr=["ateef","sohail","tousif","kuc","thenex"]
// const result=arr.find((str)=>str.length==3)
// console.log(result)

// const ateef=["atee","quadri","sohail","tousif","aliya","jeelan"]


// const fined=ateef.find((at)=>at.length==5)

// console.log(fined)

// const users=[
//     {
//         userid:1,
//         username:"ateef",

//     },
//     {
//         userid:2,
//         username:"sohail",

//     },
//     {
//         userid:3,
//         username:"tousif",

//     },
// ]

// const results= users.find((user)=>user.userid==3)
// console.log(results)

// -----------------------every method
// so in every method the given arguments should be true or we can say the call back func should be true for every given argument and then the main every method will return true


// const users=[
//     {
//         userid:1,
//         username: "ateef",
//         salary:10000

//     },
//     {
//         userid:2,
//         username:"sohail",
//         salary:20000

//     },
//     {
//         userid:3,
//         username:21,
//         salary:50000

//     },
// ]

// const res=users.every((user)=>typeof(user.username)==="string")
// const res=users.every((user)=>user.salary<=40000)
// console.log(res)    


// --------------------some method
// const nums=[5,2,5,223,435,23]

// const res=nums.some((num)=>num>22000)
// console.log(res)

// const products=[
//     {
//         productid:1,
//         productname:"ateef",
//         productprice:23000
//     },
//     {
//         productid:1,
//         productname:"ateef",
//         productprice:32000
//     },
//     {
//         productid:1,
//         productname:"ateef",
//         productprice:5000
//     },
// ]

// const res=products.some((product)=>product.productprice<10000)
// console.log(res)


// ------------------fill method

// const array=new Array(1000).fill("ateef")
// console.log(array)

// const arr=[1,2,3,4,5,6,7,8]
// //(value,start,end)
// arr.fill(1,3,6)
// console.log(arr)

// -------splice not slice

// const items=["item1","item2","item3","item4"]
// const it=["newthings","newthings","newthings","newthings","lastthings"]
// const store=items.splice(0,2,...it)
// console.log(items)
// console.log(store)


// -------iterables

// const name="ateef"
// for(let nam of name){
//     console.log(nam)
// }

// const items=["item1","item2","item3","item4"]
// for(let item of items){
//     console.log(item)
// }
// const obj={name:"ateef",id:2}
// for(let ob of obj){
//     console.log(ob)
// }
// const obj1=[
//     {name:"ateef",salary:30000,age:30},
//     {name:"ateef",salary:40000,age:30},
//     {name:"ateef",salary:40000,age:30},
// ]
// for(let obb of obj1){
//     console.log(obb)
// }

// /----array like object
// the object which can hav length and index 
// const array="newthig"
// console.log(array.length)
// console.log(array[3])

// --------sets
// sets are iterables 
// stores data
// sets also havve its own methods
// no index based access
// order is not garanteed 
// the items cant be repeated
// const array=["items1","items1","items3","ateef"]
// const array=[1,2,3,4,5,3,2,1]
// const ateef=new Set();
// ateef.add(1)
// ateef.add(2)
// ateef.add(3)
// ateef.add(["items1,Items2"])
// ateef.add(["items1,Items2"])
// ateef.add(array)
// console.log(ateef)
// const uniqueelements=new Set(array);
// length=0
// for(let item of uniqueelements){
//     length++;
// }
// console.log(length)
// const arraylist =new Array(uniqueelements);
// console.log(arraylist)
// console.log(uniqueelements.size)


// --------these below are called object literals
// const person={
//     firstname:"ateef",
//     age:2,
//     1:"two"

// }
// console.log(person["firstname"])
// for(let key in person){
//     console.log(person[key])
// }

// /---------------------map (where in object the keys were either string or symbol but most of the time it would be string but in map it would be our choice)

// const exmaps=new Map();
// exmaps.set(12,"twelve")
// exmaps.set({name:"ateef"},"newateefobject")
// exmaps.set(["item1","item2"],"items")
// exmaps.set("fourth","strinss")
// console.log(exmaps.get(12))
// for(let key of exmaps.keys()){
//     console.log(key,typeof(key))
// }
// for(let key of exmaps){
//     console.log(key,Array.isArray(key))
// }

// -------------closures in javascript
// when ever we return a func under a func then the the innerfunction takes the local variable of outer func while getting returned
// function printfullname(first_name,last_name){
//         function printname(){
//             console.log(first_name,last_name)
//         }
//         return printname
// }

// const ans=printfullname("ateef","sohail");
// ans()
// ///---------------------------11-10-2024
// --methods
// ---her we have this,window,use strict,apply(use in array),bind(which binds the data from a object or somewhere and stores in a var)
// function info(){
//     console.log(`the name of the person is ${this.firstname} and his age is ${this.age}`)
// }
// const user={
//     firstname:"ateef",
//     age:12,
//     about:info
// }
// const user1={
//     firstname:"sohail",
//     age:18,
//     about:info
// }
// const user2={
//     firstname:"tousif",
//     age:16,
//     about:info
// }
// user.about()
// user1.about()
// user2.about()

//  function myfunc(){
//     console.log(this)
//  }
//  myfunc();
// above function returns the window object if we console the this operator in the function
// for avioding we use strict mode
// "use strict";
// function ateef(){
    
//     console.log(this)
// }
// ateef();

// function about(dept,salary){
//     console.log(`this is the name of the person ${this.fname} and his age is ${this.age} and his dept is ${dept} and his salary is ${salary}`)
// }
// const user={
//     fname:"ateef",
//     age:18,
    
// }
// const user2={
//         fname:"sohail",
//         age:20,

// }
// about.call(user,"cse",10000)
// about.call(user2,"mech",20000)
// about.apply(user,["cse",10000])
// about.apply(user2,["sohail",20000])
// const res=about.bind(user,"cse","100000")
// res()

// const user={
//     firstname:"ateef",
//     age:20,
//     about:function(){
//         console.log(`the name is ${this.firstname} and agie is ${this.age}`)
//     }
// }
// const res=user.about.bind(user);
// res();  



// creating objects for as in the function

// const createuser=(firstname,age,salary,dept,height)=>{
//     const user={}
//     user.firstname=firstname;
//     user.age=age;
//     user.salary=salary;
//     user.dept=dept;
//     user.height=height;
//     user.about=function(){
//         return `the name is ${this.firstname} and age is ${this.age}`
//     }
//     user.is18=function(){
//         return this.age>18;
//     }
//     return user;
// }
// const user1=createuser("ateef",18,10000,"cse",5.2)
// console.log(user1)
// this is not efficient way

// const usermethods={
//     about:function(){
//         return `the name is ${this.firstname} and age is ${this.age}`
//     },
//     is18:function(){
//         return this.age>18;
//     }
// }
// const createuser=(firstname,age,salary,dept,height)=>{
//     const user={}
//     user.firstname=firstname;
//     user.age=age;
//     user.salary=salary;
//     user.dept=dept;
//     user.height=height;
//     user.about=usermethods.about;
//     user.is18=usermethods.is18;
//     return user;
// }
// const user1=createuser("ateef",18,10000,"cse",5.2)
// const user2=createuser("sohail",18,20000,"cse",5.4)
// console.log(user2.about())


// /another way of creating obj 
// by this method we can assign proto to a object reference 
// const obj1={
//     key1:"value1",
//     key2:"value2"
// }
// const obj2=Object.create(obj1)
// obj2.key3="vlaue3"
// console.log(obj2.key0)
// console.log(obj2,obj2.__proto__)

// const usermethod={
//     about:function(){
//         return `${this.firstname} ${this.age}`
//     },
//     sing:function(){
//         return `alncbsdbiuabsudi`
//     }   
// }
// function createuser(firstname,age,salary){
//     const user= Object.create(createuser.prototype);
//     user.firstname=firstname;
//     user.age=age;
//     user.salary=salary;
//     return user;
// }
// console.log(createuser.prototype)
// createuser.prototype.about=function(){
//     return `${this.firstname} ${this.age}`
// }

// const user1=createuser("ateef",18,10000);
// console.log(user1)
// console.log(user1.about())

// function helloi(){
//     console.log("hello world")
// }
// const helloi={key1:"value1"}
// const helloi="proto"
// therefore the funciton only has the prototype
// if(helloi.prototype){
//     console.log("prototype is present")
// }
// else{
//     console.log("prototype is not present")
// }
// you can add your ow props 
// javascript function===> function + object
// name property ===>tells function name

// --new keyword
// empty object  this
// return this

// function Createuser(firstname,age){
//     this.firstname =firstname;
//     this.age=age;
// }
// Createuser.prototype.about=function(){
//     console.log(`${this.firstname} ${this.age}`)
// }

// const user1=new Createuser("ateef",19);
// console.log(user1)
// user1.about()

// for(let key in user1){
//     // console.log(key)
//     if(user1.hasOwnProperty(key)){
//         console.log(key)
//     }
    
// }
// hasOwnProperty

// const numbers=new Array(1,2,3)
// console.log(numbers.length)
// console.log(Array.prototype)
// const numbers=[1,2,3]
// console.log(Object.getPrototypeOf(numbers))
// so as the above var is not a funciton but how it is refering many of the array function from its prototype ? so the thing is basically the array is created inner as const array=new array()
// console.log(numbers)

// the function retuns the object when we print the prototype and the array retunrs the array itself if we print the prototype

// function hello(){
//     console.log("hello world")

// }
// console.log(hello.prototype)
// hello.prototype=[]
// console.log(hello.prototype)
// hello.prototype.thing="ateef"


// -----class in js

// class Createuser{
//         constructor(firstname,lastname,age){
//             console.log("constructor called")
//             this.firstname=firstname;
//             this.lastname=lastname;
//             this.age=age;
//         }
//         about(){
//             return `my name is ${this.firstname} and age is ${this.age}`
//         }
// }

// const user1=new Createuser("ateef","quadri",19)
// console.log(user1)
// console.log(user1.about())
// console.log(Object.getPrototypeOf(user1))

// class Animal{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;

//     }
//     amar(){
//          if(this.age>5){
//             return `the animal ${this.name} is amar`
//          }else return `nothing`
//     }

// }
// const cat=new Animal("cat",2);
// // console.log(cat.amar())

// class Dog extends Animal{
//    constructor(name,age,speed){
//     super(name,age)
// this.speed=speed;
//     }
//         iscute(){
//             return this.age>19
//         }
// }
// const tommy=new Dog("ateef",20,45);
// console.log(tommy)

// //first it cheks the func in itself after that it will go to the superclass

// class Person{
//     constructor(name,age,salary){
//         this.name=name;
//         this.age=age;
//         this.salary=salary;
//     }
//     //by adding get it treats function as a property
//    get fullname(){
//         return `full name is ${this.name}`
//     }
//    set fullname(a){
        
//         const [fname,lname]=a.split(" ")
//         console.log(fname)
//         console.log(lname)
//         this.fname==this.name
//     }
//     // setname(name){
//     //     this.name=name;
//     // }
// }
// //so the basic way to access the fullname function is 
// const person1=new Person("ateef",14,10000)
// // console.log(person1.fullname())
// //so the next method for this is 
// console.log(person1.fullname)
// // console.log(person1.setname("sohail"))
// console.log(person1.name)
// person1.fullname="syed ateef"
// console.log(person1)



// SCYN programming
// console.log("code starts")
// for(let i=0;i<1000;i++){
//     console.log("hey ther")
// }
// console.log("code ends here")

// settimeout

// console.log("set time ")
// function hello(){
//     console.log("hello world")
// }
// setTimeout(hello,10000)
// console.log("script end") 
// console.log("this is the start")
// function hello(){
//     console.log("hello world")
// }
// setTimeout(hello,0)
// console.log("this is the end ")
// console.log("this is the second end")
// console.log("hello world")
// for(let i=0;i<10000;i++){
//     console.log("this is for loop")
// }
// console.log("this is the outer of for loop")




// console.log("hey this is async")

// const id=setTimeout(() => {
//     for(let i=0;i<1000;i++){
//         console.log("this is for loop")
//     }
// }, 10000);
// //so the settimeout returns some of the id 
// console.log("this is outer loops")
// console.log(id)
// clearTimeout(id)


// /----set interval 


// const body =document.body;
// console.log(body)
// const button =document.querySelector('button')

// const id=setInterval(() => {
//     const red=Math.floor(Math.random() * 126)
// const green=Math.floor(Math.random() * 126)
// const blue=Math.floor(Math.random() * 126)
// const rgb= `rgb(${red},${green},${blue})`
//     body.style.background=rgb
// }, 1000);
// button.addEventListener("click",()=>{
//     clearInterval(id)
//     body.style.background="white"
//     button.textContent="reload"
// })

// callbacks -------------

// function gettwonumbers(number1,number2,callbacks,failures){
//     // console.log(number1,number2)
//     if(typeof number1==="number" && typeof number2==="number"){
//         callbacks(number1,number2);
//     }else{
//         failures();
//     }
// }
// // function addnumber(num1,num2){
// //     console.log(num1+num2)
// // }
// // gettwonumbers(3,4,addnumber)

// gettwonumbers(8,4,(num1,num2)=>{
//     console.log(num1+num2)
// },()=>{console.log("pleasse enter the right data type")})


// const body=document.body;
// const heading1=document.querySelector('.HEADING1')
// setTimeout(() => {
//     heading1.textContent="Ateef Quadri"
//     heading1.style.color="red"
   
// }, 1000);

// callback hell
// const body=document.body;
// const heading1=document.querySelector('.HEADING1')
// setTimeout(() => {
//     heading1.textContent="Ateef Quadri"
//     heading1.style.color="red"
//     setTimeout(() => {
//         console.log("this is next timeout")
//     }, 1000);
// }, 1000);













// ---- Synchronous tasks----

// console.log("hi there")

// for(let i=0;i<1000;i++){
//     console.log("this is for")
// }

// console.log("this is end")








// ----Asynchronous tasks----

// console.log("hi there")

// setTimeout(() => {
//     for(i=0;i<1000;i++){
//         console.log("this is for loop")
//     }
// }, 1000);
// console.log("this is the end")


// promise

// is is feature of browser
// when the promise is been executed it will be assigned to thr browser and then it can execute all the task leaving promise task
// const bucket=["vegetable","dsa","biscut","teapowder"]

// const newproblem=new Promise((resolv,rejec)=>{
//     if(bucket.includes("milk")&&bucket.includes("teapowder")&&bucket.includes("biscut")){
//          resolv("we can proceed with the next steps")
//     }else{
//         rejec("sorry we cant make anyting with it")
//     }

// })

// newproblem.then((myfriedtice)=>{console.log(myfriedtice)},(notbab)=>{console.log(`${notbab} this is it`)})

// function mypromise(){
//     return new Promise((resolve,reject)=>{
//         const value=false;
//         if(value){
//             resolve()
//         }else{
//             reject()
//         }
//     })
// }
// mypromise()
// .finally(()=>{
//     console.log("this is not valid")
// })



// function thisisnow(heading,text,time,color){
//         const element=document.querySelector(`.${heading}`)
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if(element){
//                     element.textContent=text
//                     element.style.color=color
//                     resolve();
//                 }else{
//                     reject();
//                 }
//             }, 
//         time);
//         })
// }
// thisisnow("HEADING1","Ateef",1000,"red")
// .then(()=>{
//     console.log("this is done")
// })
// .catch(()=>{
//     console.log("this is not done")
// })
