const reverseString = function(s) {
    for(let i = 0; i< s.length;i++){
        return s.reverse();
    } 
};


//console.log(reverseString(["h","e","l","l","o"]));


function everseWords(str) {
    for (let i = 0; i < str.length; i++) {
        str = str.split(" ");
        str = str.map((word)=>word.split("").reverse().join(""))
        return str.join(" ");
    }
};

//console.log(everseWords("Let's take LeetCode contest"))
