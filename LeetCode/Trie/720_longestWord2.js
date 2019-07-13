/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    const trie = new Trie();
    for (let i = 0; i < words.sort().length; i++) {
        trie.insert(words[i]);
    }

    const word = findLongestWord(trie);
    return word;
};

const findLongestWord = trie => {
    let result;

    let queue = bfs(trie.root);

    while (queue.length > 0) {
        const node = queue.shift();
        const next = bfs(node);

        result = node["$"];
        queue = [...queue, ...next];
    }
    return result;
};

const bfs = node => {
    return Object.keys(node)
        .filter(c => node[c]["$"])
        .map(c => node[c])
        .sort((a, b) => b["$"].localeCompare(a["$"]));
};

class Trie {
    constructor() {
        this.root = {};
    }

    insert(word) {
        let root = this.root;

        for (let i = 0; i < word.length; i++) {
            if (!root[word[i]]) {
                root[word[i]] = {};
            }

            root = root[word[i]];
        }

        root["$"] = word;
    }
}

console.log( longestWord(["w","wo","wor","worl", "world"]) );
