var sumOfUnique = function(nums) {
    let sum = 0;
    nums.forEach(num =>{
        sum = nums.filter(number => number === num).length === 1 ? sum+=num : sum;
    })
    return sum;
};

//console.log(sumOfUnique([1,2,3,2]));


var mergeAlternately = function(word1, word2) {
    let res = "";
    let len = Math.max(word1.length, word2.length)
    for(let i = 0;i<len;i++){
        if(i<word1.length){
            res+=word1[i];
        }if(i<word2.length){
            res+=word2[i];
        }
    }
    return res;
};

//console.log(mergeAlternately("abc","pqr"))
