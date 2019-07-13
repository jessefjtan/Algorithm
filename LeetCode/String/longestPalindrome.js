var longestPalindrome = function(s) {
    let str = s.split("").join("#");
    let c = 1;
    let maxR = 0;
    let center = 0;
    str = "~" + str + "#";
    for ( let j = 1, len = str.length - 1; j < len; j++, c = 1 )  {
        while ( str[j+c] === str[j-c] ) {
            c++;
        }
        if(c > maxR) {
            maxR = c;
            center = j;
        }
    }
    let start = center - maxR + 1;
    let end = center + maxR;

    return str.slice(start, end).replace(/#/g, "").replace(/~/g, "");
}
