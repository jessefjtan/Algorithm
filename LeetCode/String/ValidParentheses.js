var isValid = function(s) {
    let map = {
        ")": "(",
        "]": "[",
        "}": "{"
    };
    let arr = [];
    for(let i = 0; i < s.length; i ++){
        console.log(" => ", s[i]);
        if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
            arr.push(s[i]);
        } else {
            console.log(arr[arr.length - 1] === map[s[i]]);
            if(arr[arr.length - 1] === map[s[i]]){
                arr.pop();
            } else {
                return false;
            };
        }
    }
    return arr.length === 0;
};

console.log( isValid("(([))]") );
