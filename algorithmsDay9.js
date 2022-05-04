function pivotIndex(nums) {
    let total = 0;
    for(let i = 0;i<nums.length;i++){
        total += nums[i]
    }
    let leftSum = 0;
    for(let i = 0; i<nums.length;i++){
        if(leftSum == total - leftSum - nums[i]){
            return i;
        }
        leftSum += nums[i]
    }
    return -1;
};

//console.log(pivotIndex([1,7,3,6,5,6]))


var climbStairs = function(n) {
    let arr=[];
    arr[1] = 1;
    arr[2] = 2;
    for(let i = 3; i<=n;i++){
        arr[i]= arr[i-1] + arr[i-2];
    }
    return arr[n];
};

//console.log(climbStairs(4));