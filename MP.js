const subsequence = (str1, str2) => {
    
    //edge case is when second string has smaller length than first
    if(str2.length < str1.length) return false;

    let str1Start = 0
    //we iterate through the second string since it's longer/equal to first
    for(let i = 0; i < str2.length; i++){
        //we check for first letter to match and increment the counter by 1
        if(str1[str1Start] === str2[i]){
            str1Start++;
        }
    }
    //if the counter is equal to the length of the first string then return true
    if(str1Start === str1.length){
        return true
    }else{
        return false
    }
}

console.log(subsequence('hello', 'hello world'))
console.log(subsequence('sing', 'sting'))
console.log(subsequence('abc', 'abracadabra')) 
console.log(subsequence('abc', 'acb'))

const maxArea = (height) => {
    //edge case of array being less than length of 2
    if(height.length <= 1) return 0;

    //what are the cases that move the left and right arrows, but they can only move one at a time
    let left = 0
    let right = height.length - 1
    let max = 0
    let currArea = 0
    let minHeight = 0
    while(left < right){
        //need to take min of the two values for our height
        minHeight = Math.min(height[left], height[right])
        //calculate currArea
        currArea = minHeight * (right-left)
        //calc the max height now
        max = Math.max(max, currArea)

        //if the number on the left is less than the number from the right
        //move left up
        if(height[left] < height[right]){
            left++
        }else{
            right--
        }
    }

    return max
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([1,1]))
console.log(maxArea([5,3,2,1,8]))
console.log(maxArea([5,3,2,8,1]))
console.log(maxArea([1,2,8,2,5,4,8,3,7]))