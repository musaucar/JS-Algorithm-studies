var sortedSquares = function(nums) {
    nums = nums.map(number =>  number*number)
    nums.sort((a,b) =>  a - b )  // sort() metodu sayılar üzerinde kullanılacaksa karşılaştırma fonksiyonu gerekir.
                                  // büyükten küçüğe yapmak için b-a
    return nums;
};

//console.log(sortedSquares([3,5,6,2,9,-3]));

var rotate = function(nums, k) {
    for(let i = 0;i<k;i++){
        nums.unshift(nums.pop());
    }
    return nums;
};

//console.log(rotate([-1,-100,3,99],2));