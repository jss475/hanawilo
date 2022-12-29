/*
Using the frequency counter pattern, write a function called sameOccurences. Given two positive integers,
find out if the two numbers have the same frequency of digits.
Write your algorithm in linear time complexity O(n) */
const sameOccurences = (num1, num2) => {
    //turn numbers into string to iterate through them
    let num1Str = num1.toString();
    let num2Str = num2.toString();

    //if lengths of num1 and num 2 are different return false
    if(num1Str.length !== num2Str.length) return false;

    //create a variable for seen numbers
    let seenStr1 = {}
    let seenStr2 = {}
    for(let i = 0; i < num1Str.length; i++) {
        seenStr1[num1Str[i]] = (seenStr1[num1Str[i]] + 1 || 1)
        seenStr2[num1Str[i]] = (seenStr2[num1Str[i]] + 1 || 1)
    }
    
    //if the values of the keys are different return false
    for(let key in seenStr1){
        if(seenStr1[key] !== seenStr2[key]) return false;
    }

    //the keys and values are all the same so return true
    return true

}
// Test Cases:
// console.log(sameOccurences(123, 321)) // true 
// console.log(sameOccurences(222, 22)) //false
// console.log(sameOccurences(83882, 23888)) //false

/*
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another,
such as cinema, formed from iceman.
*/


const validAnagram = (first, second) => { 
    //if lengths are different, not a valid anagram
    if(first.length !== second.length) return false;

    //create an object to store what we've seen 
    let firstSeen = {}
    let secondSeen = {}

    //loop through the strings to store what characters there are
    for(let i = 0; i < first.length; i++){
        firstSeen[first[i]] = (firstSeen[first[i]] + 1 || 1)
        secondSeen[second[i]] = (secondSeen[second[i]] + 1 || 1)
    }

    //loop through the object and check if the keys and values are the same for both strings
    for(let key in firstSeen){
        if(firstSeen[key] !== secondSeen[key]) return false;
    }

    //if all keys and values are the same return true
    return true
}

// console.log(validAnagram('', '')) // true
// console.log(validAnagram('aaz', 'zza')) // false 
// console.log(validAnagram('anagram', 'nagaram') )// true 
// console.log(validAnagram("rat","car") )// false) 
// console.log(validAnagram('awesome', 'awesom') )// false 
// console.log(validAnagram('qwerty', 'qeywrt')) // true 
// console.log(validAnagram('texttwisttime', 'timetwisttext')) // true
// console.log(validAnagram('anagrams', 'nagaramm')) //false

const areThereDuplicates = (arrOfLetters) => {

    //left is the start and right is the end of the array
    let left = 0
    let right = arrOfLetters.length - 1

    //create multiple pointers for searching through array
    while(left < right){
        
        if(arrOfLetters[left] === arrOfLetters[right]) return true;

        if(arrOfLetters[left] < arrOfLetters[left + 1]){
            left++
        }else{
            right--
        }
    }
    return false
}
//Tests
// console.log(areThereDuplicates(['a', 'd', 'd', 'c'])) //true
// console.log(areThereDuplicates(['a', 'b', 'c'])) // false

const avgPair = (arr, averageTarget) => {
    //left is the start and right is the end of the array
    let left = 0
    let right = arr.length - 1

    let avg
    while(left < right){
        //calculate the average of the left and right of the array
        avg = (arr[left] + arr[right])/2

        //if the avg is the same as the target return true
        if(avg === averageTarget) return true;

        //if our calculate average is greater than the target, move down the array
        if(avg > averageTarget){
            right--
        }else{
            left++
        }
    }

    //if we couldn't find the average then we return false
    return false
}
// Test Cases:
// console.log(avgPair([1,2,3],2.5)) //true
// console.log(avgPair([1,3,3,5,6,7,10,12,19],8)) //true 
// console.log(avgPair([-1,0,3,4,5,6], 4.1)) //false
// console.log(avgPair([],4)) //false

const subsequence = (str1, str2) => { 
    //edge case of if str1 length is greather than str2 length
    if(str1.length > str2.length) return false;

    //start to search from the start of both arrays
    let str1Start = 0
    let str2Start = 0

    while(str2Start !== str2.length -1){
        if(str1Start === str1.length - 1) return true;
        if(str1[str1Start] === str2[str2Start]){
            str1Start++
            str2Start++
        }else{
            str2Start++
        }
    }
    return false
}
// Test Cases:
console.log(subsequence('hello', 'hello world')) //)true // 
console.log(subsequence('sing', 'sting')) //true
console.log(subsequence('abc', 'abracadabra')) //)true // 
console.log(subsequence('abc', 'acb')) //false