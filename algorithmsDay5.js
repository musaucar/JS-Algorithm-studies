const twoSum = function(numbers, target) {
    let start=0;
    let end=numbers.length-1;
    
    while(start<=end){
        let currSum = numbers[start]+numbers[end];
        if(currSum===target){
            return [start+1,end+1]
        }else if(currSum>target){
            end--;
        }else{
            start++
        }
    }
};

//console.log(twoSum([6,2,7,15],9));


const fizzBuzz = function(n) {
    let result = [];
    for(let i = 1 ; i <= n ;i++){
        let fizz = i%3===0;
        let buzz = i%5===0;
        if(!fizz && !buzz){
            result.push(`${i}`)
            continue;
        }
        if(fizz && buzz){
            result.push("FizzBuzz") 
            continue;
        }
        if(fizz){
            result.push("Fizz") 
            continue;
        }
        if(buzz){
            result.push("Buzz") 
            continue;
        }

    }
    return result;
};

//console.log(twoSum(5))