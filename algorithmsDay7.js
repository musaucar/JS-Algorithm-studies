function isPowerOfFour(n) {
    while(n>0 && n%4==0){
        n = n / 4;
    }
    return n==1  // check this algorithm again.
};

//console.log(isPowerOfFour(12))


function removeNthFromEnd(head, n) {
    for(let i = 0;i<head.length;i++){
        if(head[i]===n){
            head.splice(n,1);
        }
    }
    return head;
};

//console.log(removeNthFromEnd([1,2,3,4,5],2));