var longestCommonPrefix = function(strs) {
    if(!strs || !strs.length) {
        return "";
    }
    let common = strs[0];
    for(let i = 0; i < strs.length; i++) {
        while(0 !== strs[i].indexOf(common)) {
            if(common.length) {
                common = common.slice(0, -1);
            } else {
                return "";
            }
        }
    }
    return common;
};
