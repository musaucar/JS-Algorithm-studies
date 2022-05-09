var rotateString = function(s, goal) {
    if(s===goal) return true
    
    let len  = s.length;
    const arr = s.split('');
    
    while(len){
        const shiftedItem = arr.shift();
        arr.push(shiftedItem);

        if(arr.join('') === goal){
            return true
        }
        len--
    }
    return false

    /* s = s.split("");
    goal = goal.split("");
    let snc
    for(let i = 0;i<s.length;i++){
        let str = s.unshift(s.pop());
        if(str === goal){
            return snc = true;
        }else{
            return snc = false;
        } 
    } */
};

//console.log(rotateString("abcde","cdeab"));


var buddyStrings = function(s, goal) {
    if(s===goal) return true
    
    let len  = s.length;
    const arr = s.split('');
    
    while(len){
        const shiftedItem = arr.shift();
        arr.push(shiftedItem);

        if(arr.join('') === goal){
            return true
        }
        len--
    }
    return false
};

//console.log(buddyStrings("ab","ba"));


function merge(nums1, m, nums2, n) {
    let arr = [];
    for(let i = 0;i<m;i++){
        arr.push(nums1.shift());
    }
    for(let i = 0;i<n;i++){
        arr.push(nums2.shift());
    }
    arr.sort((a,b) =>  a - b )
    return arr;
};

//console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))
