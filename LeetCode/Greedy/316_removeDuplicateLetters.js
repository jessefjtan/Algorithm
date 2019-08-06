/**
 * @param {string} s
 * @return {string}
建立一个数组ct来统计每个字母出现的次数，还需要一个visited数字来纪录每个字母是否被访问过，
遍历整个字符串，对于遍历到的字符，先在ct中将其值减一，然后看visited中是否被访问过，
若访问过则继续循环，说明该字母已经出现在结果中并且位置已经安排妥当。如果没访问过，和结果中最后一个字母比较，
如果该字母的ASCII码小并且结果中的最后一个字母在哈希表中的值不为0(说明后面还会出现这个字母)，
那么此时就要在结果中删去最后一个字母且将其标记为未访问，然后加上当前遍历到的字母，并且将其标记为已访问，
以此类推直至遍历完整个字符串s，此时结果里的字符串即为所求
 */
var removeDuplicateLetters = function(s) {
    const ct = new Array(26);
    const a = 'a'.charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        const k = s.charCodeAt(i) - a;
        ct[k] = ct[k] ? ct[k] + 1 : 1;
    }
    const aChNo = [];
    const visited = {};
    for (let i = 0; i < s.length; i++) {
        const k = s.charCodeAt(i) - a;
        ct[k]--;
        if (visited[k])
            continue;
        while (aChNo.length > 0) {
            const last = aChNo[aChNo.length - 1] - a;
            if (last > k && ct[last] > 0) {
                visited[last] = 0;
                aChNo.pop();
            } else
                break;
        }
        visited[k] = 1;
        aChNo.push(k + a);
    }
    return String.fromCharCode(...aChNo);
};