//Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

//My solution below;


//Passed in an array
//If numbers in array = 0 OR array = EMPTY, we return an empty array
//ELSE numbers in array, we return the numbers in ascending order in array
function solution(nums){
    if (nums === 0 || nums === null ) {
      return [];
    } else {
       return nums.sort((a, b) => a - b);
    }
    }