var TrieNode = function() {
    this.links = new Map();
}

var Trie = function() {
    this.root = new TrieNode();
    this.root.links.set(0, true);
};

Trie.prototype.insert = function(word) {
    let node = this.root;
    for (let letter of word) {
        if (node.links.has(letter)) {
            node = node.links.get(letter);
        } else {
            node.links.set(letter, new TrieNode())
            node = node.links.get(letter);
        }
    }
    if (!node.links.has(0)) {
        node.links.set(0, true);
    }
};

Trie.prototype.search = function(word) {
    let node = this.root;
    for (let letter of word) {
        if (!node.links.has(letter)) { return false; }
        node = node.links.get(letter);
    }
    return node.links.has(0);
};

Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for (let letter of prefix) {
        if (!node.links.has(letter)) { return false; }
        node = node.links.get(letter);
    }
    return true;
};
