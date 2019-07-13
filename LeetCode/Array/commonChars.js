/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let [word1, ...remain] = [...A];
    let commonChars = [];
    let iLen = remain.length;
    let count = 0;
    let flag = false;
    for(let letter of word1) {
        console.log(letter);
        for(let i = 0, count = 0; i < iLen; i++) {
            if(remain[i].includes(letter)) {
                count++;
                remain[i] = remain[i].replace(letter,"");
            }
            flag = count === iLen;
        }
        if(flag) {
            commonChars.push(letter);
        }
        console.log(remain);
        flag = false;
    }
    return commonChars;
};

console.log( commonChars(["cool","lock","cook"]) );
