var solution =  function(n) {
    const dizi = [];
    badVersion = 6;
    let sayac = 0;
    for(let i = 1;i <= n;i++){
        dizi.push(i);
        while(sayac == dizi.length){
            if(badVersion >= dizi[i]){
                return true;
            }else{
                return false;
            }
        }
        
    }
    return dizi;
};

//console.log(solution(8));


var dayOfTheWeek = function(day, month, year) {
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return days[new Date(`${month}/${day}/${year}`).getDay()];
};

/* console.log(dayOfTheWeek(02,09,1999)) */