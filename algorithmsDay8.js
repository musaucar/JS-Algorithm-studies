var addTwoNumbers = function(l1, l2) {
    let dizi = [];
    let s1 = +l1.join("");
    let s2 = +l2.join("");
    toplam = s1+s2;
    dizi.push(toplam).toString();
    return dizi.reverse();
};

//console.log(addTwoNumbers([2,4,3],[5,6,4]))


function calPoints(ops) {
    let arr = [];
    for(let i = 0;i<ops.length;i++){
        if(ops[i]=== '+'){
            arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        }
        else if(ops[i] === 'D'){
            arr.push(arr[arr.length - 1] * 2);
        }
        else if(ops[i]==='C'){
            arr.pop()
        } else {
            arr.push(parseInt(ops[i]))
        }
    }
    return arr.reduce((acc,current) => acc + current) //reduce metodu topluyor
};

//console.log(calPoints(["5","-2","4","C","D","9","+","+"]));