var BinarySearchTree = function(value) {
  var binaryTree = Object.create(binaryTreeMethods);
  binaryTree.value = value;
  binaryTree.right = null;
  binaryTree.left = null;
  return binaryTree;
  
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  var newNode = BinarySearchTree(value);
  var headNode = this;
  var insertFunc = function(newNode, headNode) {
    if (newNode.value > headNode.value && headNode.right === null) {
      headNode.right = newNode;
      return;
    } else if(newNode.value < headNode.value && headNode.left === null) {
      headNode.left = newNode;
      return;
    } else {
      //if headNode.left.value < newNode.value
        if(newNode.value < headNode.value && headNode.left.value < newNode.value) {
        //headNode reassigned headNode.right
          headNode = headNode.left;
        } else {
        //headNode reassigned headNode.left
          headNode = headNode.right;
        }
      insertFunc(newNode, headNode);
    }
  }
  insertFunc(newNode, headNode);
};

binaryTreeMethods.contains = function(value) {
  var headNode = this;
  //return value for the contains function
  var truthy = false;
  var searchFunc = function(value, headNode) {
    //if headNode.value is equal to value
    
    if (headNode.value === value) {
      //toggle truthy to true bc there is a match
      truthy = true;
      return truthy;
    }
    //if value < headNode.value and headNode.left is not null
    if (value < headNode.value && headNode.left !== null) {
      //reassign headNode to left
      headNode = headNode.left;
    } else if (value > headNode.value && headNode.right !== null) {
      //reassign headNode to left
      headNode = headNode.right
    }else {
      return truthy;
    }
    //call recursive method on the new headNode
    searchFunc(value, headNode);
  }
  searchFunc(value, headNode);
  return truthy;
};



binaryTreeMethods.depthFirstLog = function(func) {
  var headNode = this;
  //call func on headNode.value
  func(headNode.value);
  //if headNode.left !== null
  if (headNode.left !== null) {
    //headNode.left.depthFirstLog(func)
    headNode.left.depthFirstLog(func);
  }
  //if headNode.right !== null
  if (headNode.right !== null) {
    //headNode.right.depthFirstLog(func)
    headNode.right.depthFirstLog(func);
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
