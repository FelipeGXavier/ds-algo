package datasructure.trie;

public class Trie {

    private final static int ALPHABET_SIZE = 26;
    private Node root;

    static class Node {
        private Node[] paths = new Node[ALPHABET_SIZE];
        private String target;
    }

    public Node getRoot() {
        return root;
    }

    public Trie() {
        this.root = new Node();
    }

    public void add(String key) {
        var current = this.root;
        for (int level = 0; level < key.length(); level++) {
            int index = key.charAt(level) - 'a';
            if (current.paths[index] == null) {
                current.paths[index] = new Node();
            }
            current = current.paths[index];
        }
        current.target = key;
    }

    public boolean search(String key) {
        var current = this.root;
        if (current == null) return false;
        for (int level = 0; level < key.length(); level++) {
            int index = key.charAt(level) - 'a';
            if (current.paths[index] == null) {
                return false;
            }
            current = current.paths[index];
        }
        if (current.target != null && current.target.equals(key)) {
            return true;
        }
        return false;
    }

    public boolean empty(Node root) {
        if (root == null) return true;
        for (int i = 0; i < ALPHABET_SIZE; i++) {
            if (root.paths[i] != null) {
                return false;
            }
        }
        return true;
    }

    public Node remove(Node root, String key, int depth) {
        if (root == null) return null;
        if (depth == key.length()) {
            if (root.target != null) {
                root.target = null;
            }
            if (this.empty(root)) {
                root = null;
            }
            return root;
        }
        int index = key.charAt(depth) - 'a';
        root.paths[index] = this.remove(root.paths[index], key, depth + 1);
        if (this.empty(root) && root.target != null) {
            root = null;
        }
        return root;
    }


}
