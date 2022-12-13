//PROBLEM 1

//Big O notation is a way for people to compare the time and space complexity of their code. 
//The reason it is a good way to use for comparison is because you can reduce 
//it all down to either O(1), O(n), O(log n), and etc. Ideally you would have your code
//run at O(1) time complexity and with O(1) space complexity.

//PROBLEM 2
//Constant, log, linear, quadratic, and factorial
//1: O(1), 2: O(log n), 3: O(n), 4: O(n^2), 5: O(n!)
//You ideally want O(1) complexity as it is the fastest and most efficient. O(n!) 
//is the worst complexity as it takes too much time/space.

//O(1)
// function findSecondNum(arr) {
//     return arr[1]
// }

//O(log n)
const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

function findDoubleIndex(arr,num){
    while(num < arr.length){
       
        console.log(arr[num])
        if(num === 0){
            num = 1
        }
        num = 2*num
    }
}
console.log(findDoubleIndex(arr,1))

// function halfArr(arr){
//     console.log(arr)
//     if(arr.length === 1){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0, mid)
//     let right = arr.slice(mid, arr.length)

//     halfArr(left)
//     halfArr(right)

// }
// console.log(halfArr(arr))

// O(n)
arr.filter(elem => elem === 1);

//O(n^2)
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
    }
}

//O(n!)
for(let i = 0; i < arr.length; i++){
    for (let j = 1; j < arr.length; j++){
        for(let k = 2; k < arr.length; k++){
            //....
        }
    }
}

//PROBLEM 3
//We care about Big O because it tells us the speed of our code and how much space it takes.
//We want to make our code is as efficient as possible since when we deal with large amounts of data,
//time and space matter a lot more. It is also an easy way to compare code performance.

//PROBLEM 4
//We can not use that way to accurately measure performance as we all have different RAMs which affect
//how quick the code runs on our individual machines.

//PROBLEM 5
//Total time complexity: n^2 + 2n + 5
//Consolidated time complexity: n^2

//PROBLEM 6
//Total time complexity: n^3 + n + 3
//Consolidated time complexity: n^3

//PROBLEM 7
//We can ignore constants and consolidate our time complexities due to the fact that as we 
//approach larger and larger data sets, the constants and smaller order functions do not contribute
//majorly to the complexity. For example, let's say our total time complexity is n^2 + n. If our array size
//is 5 then we need 25 + 5 operations (remember n^2 + n). However, if our data size is 1,000,000
//we are now looking at 1 trillion + 1 million operations. The million or (n) becomes a lot less siginificant.
//This holds true as the data set gets even larger.

//PROBLEM 8
//Space complexity is how much memory is allocated for our code. We care because we don't
//want our code taking up all our space in our machine.

//PROBLEM 9
//Boolean - O(1)
//Undefined - O(1)
//Null - O(1)
//Numbers - O(1)
//Strings - O(n)
//Array - O(n)
//Object - O(n)

//PROBLEM 10
//You use an array when you want to store multiple elements in it. You use an object when you
//want to store key value pairs. Objects are good if you want to quickly access the data in them
//and arrays are good if you want data in a certain order.

//PROBLEM 11
//inserting = O(1)
//removing = O(1)
//searching 1 = O(1)
//searching 2 = O(n)
//accessing = O(1)
//retrieving keys = O(n)
//retrieving values = O(n)

//PROBLEM 12
//inserting 1 = O(1)
//inserting 2 = O(n)
//removing 1 = O(1)
//removing 2 = O(n)
//searching 1 = O(n)
//searching 2 = O(n)
//retrieving = O(1)
//method 1 = O(n)
//method 2 = O(1)
//method 3 = O(n)
//method 4 = O(n)
//method 5 = O(n)
//method 6  = O(n)

//PROBLEM 13
//Prob 1
    //Time complexity = O(n)
    //space complexity = O(1)
    //We have a for loop for O(n) and we are not adding any space with our operations.
//Prob 2
    //Time complexity = O(n)
    //Space complexity = O(n)
    //We have a for loop for O(n) time complexity and we are creating a new array for O(n) space complexity
//Prob 3
    //Time complexity = O(1)
    //Space complexity = O(1)
    //We are not iterating through the array so O(1) time complexity 
    //and we are just accessing the array given so O(1) space complexity.
//Prob 4
    //Time complexity = O(n)
    //Space complexity = O(1)
    //We are iterating through the array so O(n) time complexity
    //we are adding onto a constant so O(1) space complexity
//Prob 5
    //Time complexity = O(1)
    //Space complexity = O(1)
    //We are accessing the array so O(1) time complexity
    //we are returning a value without creating a new array so O(1) space complexity
//Prob 6
    //Time complexity = 0(log n)
    //Space complexity = O(1)
    //We are searching through the array but cutting it in half each time so we have O(log n)
    //We are not creating a new array and just accessing what we have so O(1) space complexity
//Prob 7
    //Time complexity = O(n^2)
    //Space complexity = O(n)
    //We are doing a nested for loop for O(n^2) and
    //we are pushing to a newly created array for O(n) space complexity
//Prob 8
    //Time complexity = O(n^2)
    //Space complexity = O(1)
    //We have a for loop nested inside a while loop for O(n^2) time complexity
    //We are swapping values within the array given and are using a constant for account
    //for swapCount. This is O(1) space complexity.
//Prob 9
    //Time complexity = O(n)
    //Space complexity = O(n)
    //We have a for each method for O(n) time complexity
    //We are pushing values into a new array for O(n) space complexity
//Prob 10
    //Time complexity = O(n^2)
    //Space complexity = O(1)
    //We have a reduce method nested in a filter method for O(n^2) time complexity
    //We are just initializing variables so we have space complexity of O(1)


