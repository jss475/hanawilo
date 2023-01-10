//Given an integer array nums, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.

// const triangleNumber = (nums) => {
//     //edge case of less than 3 numbers
//     if(nums.length < 3) return 0;

//     //make sure array is sorted in order to do divide and conquer
//     nums = nums.sort((a,b) => a-b);

//     //initialize variables of count, start, mid, end, and target for divide and conquer
//     let count=0, start, mid, end, target;

//     //iterate through the nums array
//     for(let i = 0; i < nums.length-2; i++) {
//         //j is one more than i since we are sorted 
//         for(let j = i+1; j < nums.length-1; j++) {
//             //target has to be one less than nums[i] + nums[j] to make a triangle
//             target = nums[i] + nums[j] - 1
//             //lets start the binary search. Start is one after j since we are sorted
//             start = j+1
//             end = nums.length - 1
//             console.log('i',i,'j',j)
//             while(start <= end){
//                 //calculate mid 
//                 mid = Math.floor((start+end)/2)
//                 console.log('start',start,'mid',mid,'end',end)
//                 console.log('nums[mid]', nums[mid], 'nums[j]', nums[j])

//                 if(nums[mid] === nums[j]){
//                     console.log('mid=j')
//                     count = count + 1
//                     start = start + 1
//                 }else if(nums[mid] === target){
//                     console.log('mid=target')
//                     count = count + 1
//                     start = start + 1
//                 }else if(nums[mid] < target){
//                     start = mid + 1
//                 }else if(nums[mid] > target){
//                     end = mid - 1             
//                 }
//                 console.log('count',count) 
//             }
//         }
//     }
//     return count
// }

const triangleNumber = (nums) => {
    //edge case of less than 3 numbers
    if(nums.length < 3) return 0;

    //make sure array is sorted in order to do divide and conquer
    nums = nums.sort((a,b) => a-b);

    //initialize variables of count, start, mid, end, and target for divide and conquer
    let count=0, start, mid, end, target;

    //iterate through the nums array
    for(let i = 0; i < nums.length-2; i++) {
        //j is one more than i since we are sorted 
        for(let j = i+1; j < nums.length-1; j++) {
            //target is nums[i] + nums[j]. Has to be under this to make a triangle
            target = nums[i] + nums[j]
            //lets start the binary search. Start is one after j since we are sorted
            start = j+1
            end = nums.length - 1
            console.log('i',i,'j',j)
            while(start <= end){
                //calculate mid 
                mid = Math.floor((start+end)/2)
                console.log('start',start,'mid',mid,'end',end)
                console.log('nums[mid]', nums[mid], 'nums[j]', nums[j])

                if(nums[mid]>=target){
                    end = mid - 1
                }else{
                    start = mid + 1
                }
            }
            console.log('start',start)
            count = count + start -j - 1
        }
    }
    return count
}

console.log(triangleNumber([2,2,3,4])) //3 -> 2,3,4 2,3,4 2,2,3
// console.log(triangleNumber([4,2,3,4])) //4 -> 4,2,3 4,2,3 4,4,2 4,4,3
// console.log(triangleNumber([2,2,2,2,2,2,2,2]))

const findDuplicates = (nums) => { 
    //edge case of when nums has less than 2 numbers
    if(nums.length < 2) return [];

    //sort nums to ease finding of duplicates -> O(n)
    nums = nums.sort((a, b) => a - b);

    //create a count for how many duplicates there are
    let duplicateCount = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i+1]){
            nums.splice(i+1,1)
            duplicateCount++
            i = duplicateCount-1
        }else{
            nums.splice(i,1)
            i = i-1
        }
    }
    //we should only be left with the duplicate numbers at the beginning of the array
    //we splice from 0 to however many duplicates we've found
    // nums = nums.splice(0,duplicateCount)
    return nums

};

// console.log(findDuplicates([4,3,2,7,8,2,3,1,8])) //[2,3]
// console.log(findDuplicates([1,1,2])) //[1]
// console.log(findDuplicates([1])) //[]