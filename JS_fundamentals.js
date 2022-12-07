//PROBLEM #1
//2 == '2' TRUE
//'he' == 'she' FALSE
//'true' == true FALSE
//true === true TRUE
//'true' != true TRUE
//'true' !== true TRUE


//PROBLEM #2
//let - this variable can be updated/changed after it's declared
//const - this variable cannot be updated/changed after it's declared
//var - this variable can be updated/changed AND can also be accessed regardless of scope

//PROBLEM #3
//First-class functions when functions in that language are treated like any other variable. 
//For example, in such a language, a function can be passed as an argument to other functions, 
//can be returned by another function and can be assigned as a value to a variable.

function hellWorld() {
    console.log("Hello World!")
}

//Higher-order function
//Functions that operate on other functions, 
//either by taking them as arguments or by returning them

function hello(string){
    console.log("Hello " + string)
    return console.log("Hello " + string)
}

//Callback functions
//A callback function is a function passed into another function as an argument, 
//which is then invoked inside the outer function to complete some kind of routine or action.
function addBy10(num){
    return num+10
}

function calculateNumber(num, callback){
    return callback(num)
}

// console.log(calculateNumber(10,addBy10))

//PROBLEM #4
//c = undefined
//a = "hi"
//b = undefined

//PROBLEM #5
//for statement
// const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let i = 0; i < someArray.length; i++){
//     console.log(someArray[i])
// }

//for of
// for(let elem of someArray){
//     console.log(elem)
// }

//PROBLEM #6
const someArray = [1, 2, 3, 4, 5];
//concat. I made two arrays here
const firstArr = [1,2,3]
const secondArr = [4,5]
console.log(firstArr.concat(secondArr))

//length
console.log(someArray.length)

//filter
console.log(someArray.filter(elem => elem !== 3))

//find
console.log(someArray.find(elem => elem === 5))

//slice
console.log(someArray.slice(2,4))

//splice
// someArray.splice(2,2)
// console.log(someArray)

//includes
console.log(someArray.includes(4))

//indexOf
console.log(someArray.indexOf(2))

//isArray
console.log(Array.isArray(someArray))

//join
console.log(someArray.join(', '))

//map
console.log(someArray.map(elem => {return elem*2}))

//pop
// someArray.pop()
// console.log(someArray)

//push
// someArray.push(6)
// console.log(someArray)

//shift
// someArray.shift()
// console.log(someArray)

//unshift
// someArray.unshift(0)
// console.log(someArray)

//sort
const someArray2 = [9,1,3,5]
console.log(someArray2.sort((a,b) => a - b))

//reduce
console.log(someArray.reduce((total, current) => total + current, 0))

//PROBLEM #7
const someObject = {
    color: 'black'
}

//assign
Object.assign(someObject, {name: "john doe"})


//dot notation
someObject.age = 22

//bracket notation
someObject["address"] = "123 test address"

//keys method
console.log(Object.keys(someObject))

//values method
console.log(Object.values(someObject))

//for in loop
for(key in someObject){
    console.log(someObject[key])
}

//PROBLEM #8
const numbers = [ {
    num: 1 },
    {
    num: 2
    }, {
    num: 3 }
]

for(let elem of numbers){
    console.log(elem.num)
}

//PROBLEM #9
let newSet = new Set()
newSet.add('john doe')

console.log(newSet.has('john doe'))
newSet.delete('john doe')
console.log(newSet)

//PROBLEM #10
let newMap = new Map()
newMap.set("name", "john doe")

newMap.has("name")
console.log(newMap.values())

newMap.delete('name')
console.log(newMap)

//PROBLEM #11
//Asynchronous programming is where you have code running in the background without
//affecting what is happening in the moment. That code running in the background
//can then later be used once the task is finished. It's different from synchronous
//programming which goes step by step.

//PROBLEM #12
//Call back hell is when you have nested callback functions that rely on the previous
//function to move on. 

//PROBLEM #13
//A promise is what you get after an asynchronous function is executed. It guarantees
// that a value will be returned at some point.
//Possible states are fulfilled, rejected, pending. 


//PROBLEM #14
//Async await is when you have an asynchronous function and you want the
//results of a promise to be return first before moving on.

//PROBLEM #15