function isPerfectSquare(num) {
    for(let i = 0;i<=num;i++){
        if(num === (i*i)){
            return true;
        }
    }
    return false;
};

//console.log(isPerfectSquare(4));


function detectCapitalUse(word) {
    if(word === word.toUpperCase()){
        return true;
    }
    if(word === word.toLowerCase()){
        return true;
    }
    if(word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase()){
        return true;
    }
    return false;
};

//console.log(detectCapitalUse("Google"))