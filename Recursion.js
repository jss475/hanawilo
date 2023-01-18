// const flatTheArray = (arr) => {


//     var flattenedArr = []
//     //iterate through the inner arrays
//     for (const singArr of arr){
//         console.log(singArr)
//         if(typeof singArr === "object" ){
//             flattenedArr = flattenedArr.concat(flatTheArray( singArr ));
//         }else{
//             flattenedArr.push( singArr );
//         }
//     }
    
//     return flattenedArr
// }

const flatTheArray = (arr) => {
    //initialize the array to hold the flattened result
    let newArr = []

    return recurse(arr)
    
    function recurse(arr) {
        for(const singArr of arr){
            if(typeof singArr === "object"){
                newArr.concat(recurse(singArr))
            }else{
                newArr.push(singArr)
            }
        }
        return newArr
    }
}

// console.log(flatTheArray([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatTheArray([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
// console.log(flatTheArray([[1],[2],[3]])) // [1,2,3]
// console.log(flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]

const capitalizeAllLetters = (array) => {
    //initialize the new array
    let newArr = []

    return recurse(newArr,array)
    //create a function to recurse
    function recurse(newArr, arr){
        //base case of array length = 1
        if(arr.length === 0){
            // console.log(newArr)
            return newArr
        }
        newArr = newArr.concat(arr[0].toUpperCase())
        arr.shift()
        return recurse(newArr,arr)
    }
    
}

// let words = ['tony', 'kim'];
// console.log(capitalizeAllLetters(words)); // ['TONY', 'KIM']

const factorial = (num) => {
    //base case of if num = 1
    if(num === 1){
        return 1
    }
    
    return num * factorial(num-1)
}

// console.log(factorial(1)) // 1 
// console.log(factorial(2)) // 2 
// console.log(factorial(7)) // 5040

const collectStrings = (obj) => {
    //create an array of all the values
    let values = Object.values(obj)
    let stringArr = []
    //recurse through the array
    return recurse(stringArr,values)
    function recurse(stringArr,values){
        //base case of values length === 0
        if(values.length === 0){
            return stringArr
        }
        //check each element for an array
        if(typeof values[0] === "string"){
            stringArr.push(values[0])
        }
        values.shift()

        return recurse(stringArr,values)
    }
}

let obj = {"a": "hello", "b": "world", "c": 5, "d": "john"}
console.log(collectStrings(obj)) // ["hello", "world", "bajohnz"])


const capitalizeFirstLetter = (array) => { 
    //initialize the new array holding capitalized array
    let stringArr = []
    return recurse(stringArr, array)
    function recurse(stringArr,arr){
        //base case
        if(arr.length === 0){
            return stringArr
        }
        let firstWord = arr.shift()
        let title = firstWord[0].toUpperCase()
        firstWord = title + firstWord.substring(1)
        stringArr.push(firstWord)
        return recurse(stringArr, arr)

    }
}

console.log(capitalizeFirstLetter(['tony', 'truck'])); // ['Tony', 'Truck']