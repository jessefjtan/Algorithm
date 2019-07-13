//s[i].charCodeAt(0) >= 97
var removeDuplicateLetters = function (s) {
    const m = new Array(26); //统计字符串中字母出现的次数
    const a = 'a'.charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        const k = s.charCodeAt(i) - a;
        m[k] = m[k] ? m[k] + 1 : 1;
    }
    const aChNo = [];
    const visited = new Array(26);
    for (let i = 0; i < s.length; i++) {
        const k = s.charCodeAt(i) - a;
        m[k]--;
        if (visited[k])
            continue;
        while (aChNo.length > 0) {
            const last = aChNo[aChNo.length - 1] - a;
            if (last > k && m[last] > 0) {
                visited[last] = false;
                aChNo.pop();
            } else
                break;
        }
        visited[k] = true;
        aChNo.push(k + a);
        // console.log(String.fromCharCode(...aChNo));
    }
    return String.fromCharCode(...aChNo);
};

console.log( removeDuplicateLetters("fgabcdcbcd") );

