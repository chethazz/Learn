// Also known as Prefix Tree

class Node {
    constructor(value) {
        this.children = new Map();
        this.isWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let curr = this.root;
        for (let char of word) {
            if (!(curr.children.has(char))) {
                curr.children.set(char, new Node());
            }
            curr = curr.children.get(char);
        }
        curr.isWord = true;
    }

    contains(word) {
        let curr = this.root;
        for (let char of word) {
            if (!(curr.children.has(char))) {
                return false;
            }
            curr = curr.children.get(char);
        }
        return curr.isWord;
    }

    startsWith(prefix) {
        let curr = this.root;
        for (let char of prefix) {
            if (!(curr.children.has(char))) {
                return false;
            }
            curr = curr.children.get(char);
        }
        return true;
    }
}

const trie = new Trie();
trie.insert("Chethas");
console.log(trie.contains("Chetha"));