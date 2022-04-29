var singleNumber = function(nums) {
    for(let i = 0;i<nums.length;i++){
        if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])){
            return nums[i];
        }
    }
};

//console.log(singleNumber([1,1,2,2,3,4]));

var moveZeroes = function(nums) {
    for(let i = nums.length - 1;i>=0;i--){
        if(nums[i] == 0){
            nums.push(0);
            nums.splice(i,1);
        }
    }
    return nums;
};

//console.log(moveZeroes())