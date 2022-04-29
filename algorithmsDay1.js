const lastWord = function(s){
    // trim() ilk ve son boşlukları siler
    let word1 = s.trim().split(" ") // ilk ve son boşlukları kaldırıyoruz ve split ile bölüyoruz ve diziye ekliyoruz
    let word2 = word1[word1.length - 1]; // son kelimeyi alıyoruz
    return word2.length;
}; 
// console.log(lastWord("my name is 12345678"));


var plusOne = function(digits) {
    let i = digits.length - 1;
    while(i >= 0){
        if(digits[i] != 9){
            digits[i]+=1;
            return digits;
        }
        digits[i] = 0;
        i--;
    }
    digits.unshift(1);
    return digits;
};

//console.log(plusOne([4,3,2,1]))