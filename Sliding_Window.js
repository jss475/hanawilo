/*
Write a function called minSubarraySum which accepts an array of integers and a number called n.
The function should calculate the min sum of n consecutive elements in the array.
*/

const minSubarraySum = (arr, num) => {
    //edge case of array length being empty or less than num
    if(!arr.length || arr.length < num) return undefined;

    //create minSum variable and tempSum variable for comparison later
    let minSum = 0
    for(let i = 0; i < num; i++){
        minSum += arr[i]
    }
    let tempSum = minSum

    //loop through the rest of the array to find a smaller sum
    for(let j = num; j < arr.length; j++){
        tempSum = tempSum + arr[j] - arr[j-num]
        minSum = Math.min(minSum, tempSum)
    }

    return minSum
}


// console.log(minSubarraySum([1,2,5,2,8,1,5],2)) // 3 
// console.log(minSubarraySum([1,2,5,2,8,1,5],4)) // 10 
// console.log(minSubarraySum([4,2,1,6],1)) // 1 
// console.log(minSubarraySum([4,2,1,6,2],4)) // 11 
// console.log(minSubarraySum([],4)) // null
// O(n)


/*
Write a function called longestSubstringInString, which accepts a string and returns the length of the longest substring with all distinct characters.
Please write in time complexity of O(n) */
const longestSubstringInString = (str) => { 

    //edge case of no str
    if(!str.length) return 0;


    //we are starting out with length of 1 as we assume one char is longest substring
    let maxLength = 1
    let tempLength = maxLength
    let currSubstr = str[0]

    //iterate through the array starting at position 1 of array
    for(let i = 1; i < str.length; i++) {
        //edge case of if current char is same as the one before, we start at this position
        //to find the longest substring as you cannot include the character before the current in it
        if(str[i] === str[i-1]){
            currSubstr=str[i]
            tempLength = 1
        }

        //if not in current sub string, push it into curr sub str and calculate curr length
        if(currSubstr.indexOf(str[i]) === -1){
            currSubstr+=str[i]
            tempLength = currSubstr.length
        //if it is in the current sub string
        //find index of where this occurs and calculate new temp length with this info while
        //including the current character
        }else{
            let indexOfSame = currSubstr.indexOf(str[i])
            currSubstr = currSubstr.slice(indexOfSame+1,tempLength) + str[i]
            tempLength = currSubstr.length
        }

        maxLength = Math.max(maxLength,tempLength)
    }

    return maxLength
}




// Test Cases:
console.log(longestSubstringInString('')) //0
console.log(longestSubstringInString('rithmschool')) //7
console.log(longestSubstringInString('thisisawesome')) //6 
console.log(longestSubstringInString('thecatinthehat')) //7 
console.log(longestSubstringInString('bbbbbb')) //1
console.log(longestSubstringInString('longestsubstring')) //8