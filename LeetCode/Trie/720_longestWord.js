// 给出一个字符串数组words组成的一本英语词典。从中找出最长的一个单词，该单词是由words词典中其他单词逐步添加一个字母组成。
// 若其中有多个可行的答案，则返回答案中字典序最小的单词。
// 若无答案，则返回空字符串。
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    words.sort()
    const wordSet = new Set(words)
    let res = ''
    for (const w of words) {
        let isValid = true
        let key = ''
        for (let i = 0; i < w.length - 1; i++) {
            key += w[i]
            if (!wordSet.has(key)) {
                isValid = false
                break;
            }
        }
        if (isValid && w.length > res.length) {
            res = w
        }
    }
    return res
};
