var longestCommonPrefix = function(strs) {
    if(!strs[0]) {
        return "";
    }
    let i = 0;
    let res = "", cur = "";
    while(i < str[0].length) {
        cur = str[0].substring(0, i+1);
        let flag = strs.every(x => {
            return x.startWith(cur);
        });
        if(flag) {
            res = cur;
        } else {
            return "";
        }
        i++;
    }
    return res;

};
