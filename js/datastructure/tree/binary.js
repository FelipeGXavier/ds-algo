class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      let current = this.root;
      while (current != null) {
        if (value > current.value) {
          if (current.right == null) {
            current.right = new Node(value);
            break;
          } else {
            current = current.right;
          }
        } else {
          if (current.left == null) {
            current.left = new Node(value);
            break;
          } else {
            current = current.left;
          }
        }
      }
    }
  }

  search(value) {
    let current = this.root;
    while (current != null) {
      if (current.value == value) {
        return true;
      } else if (value > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return false;
  }

  remove(value) {
    let reference = this.findCurrentParentNode(value, this.root);
    let parent = reference.parent;
    let current = reference.node;
    if (current.left == null && current.right == null) {
      parent[reference.side] = null;
    } else if (current.left != null && current.right == null) {
      parent[reference.side] = current.left;
    } else if (current.left == null && current.right != null) {
      parent[reference.side] = current.right;
    } else {
      const sucessor = this.findNextSucessor(current.right);
      const nextReference = this.findCurrentParentNode(sucessor.value, current);
      current.value = nextReference.node.value;
      if(nextReference.node.right != null) {
        nextReference.parent[nextReference.side] = nextReference.node.right;    
      }else{
        nextReference.parent[nextReference.side] = null;
      }
    }
  }

  findCurrentParentNode(value, current) {
    if (this.root.value === value) {
      return { side: null, parent: current, node: current };
    }
    while (current != null) {
      if (current.left != null && current.left.value === value) {
        return { side: "left", parent: current, node: current.left };
      } else if (current.right != null && current.right.value === value) {
        return { side: "right", parent: current, node: current.right };
      } else if (value > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return null;
  }

  findNextSucessor(node) {
    let current = node;
    while (current != null) {
      if (current.left == null) {
        return current;
      } else {
        current = current.left;
      }
    }
  }

  traverseInOrder(node) {
    if (node == null) return;
    this.traverseInOrder(node.left);
    console.log(node.value);
    this.traverseInOrder(node.right);
  }
}

const tree = new BinaryTree();
tree.add(3);
tree.add(7);
tree.add(4);
tree.add(5);
tree.add(1);
tree.add(2);
tree.add(9);
tree.add(11);
tree.add(8);
tree.add(23);
tree.add(10);

tree.traverseInOrder(tree.root);

tree.remove(3, tree.root);

console.dir(tree, { depth: null });
