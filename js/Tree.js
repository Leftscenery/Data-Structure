//树结构
//根结点：顶层结构
//内部节点：至少有一子节点
//外部节点：叶节点
//深度：根节点0
//子树：由节点和它的后代组成

//使用callback的方式称之为访问者模式

function BinarySearchTree() {
    var Node = function (key) {
        this.left = null;
        this.key = key;
        this.right = null;
    };
    var root = null;

    //-------------访问函数-------------
    var printNodeKey =function (n) {
        console.log(n);
    };

    //-------------插入节点-------------
    var insertNode = function (node, newNode) {
        if(newNode.key<node.key){
            if(node.left == null){
                node.left = newNode;
            }else{
                insertNode(node.left, newNode);
            }
        }else{
            if(node.right == null){
                node.right = newNode;
            }else{
                insertNode(node.right, newNode);
            }
        }
    };
    this.insert = function (key) {
        var newNode = new Node(key);
        if(root == null){
            //是一个空树
            root = newNode;
        }else{
            //插入
            insertNode(root, newNode);
        }
    };


    //-------------搜索-------------
    this.search = function (key) {
        var node = root;
        while(node != null){
            if(node.left>key){
                node = node.left;
            }else if(node.right<key){
                node = node.right;
            }else{
                return true
            }
        }
        return false
    };



    //-------------中序遍历-------------
    var inOrderTeaverseNode = function (node,callback) {
        if(node.left!=null){
            inOrderTeaverseNode(node.left,callback);
        }
        callback(node.key);
        if(node.right!=null){
            inOrderTeaverseNode(node.right,callback);
        }
    };
    this.inOrderTraverse = function () {
        if(root!=null){
            inOrderTeaverseNode(root,printNodeKey)
        }
    };



    //-------------前序遍历-------------
    var preOrderTraverseNode = function (node,callback) {
        callback(node.key);
        if(node.left != null){
            preOrderTraverseNode(node.left,callback);
        }
        if(node.left != null){
            preOrderTraverseNode(node.right,callback);
        }
    };
    this.preOrderTraverse = function () {
        if(root != null){
            preOrderTraverseNode(root, preOrderTraverseNode)
        }
    };



    //-------------后序遍历-------------
    var postOrderTraverseNode = function (node,callback) {
        if(node.left != null){
            postOrderTraverseNode(node.left,callback);
        }
        if(node.left != null){
            postOrderTraverseNode(node.right,callback);
        }
        callback(node.key);
    };
    this.postOrderTraverse = function () {
        if(root != null){
            postOrderTraverseNode(root, postOrderTraverseNode)
        }
    };


    //-------------最小值-------------
    this.min = function () {
        var node = root;
        while(node.left != null){
            node = node.left;
        }
        return node.key
    };

    //-------------最大值-------------
    this.max = function () {
        var node = root;
        while(node.right != null){
            node = node.right;
        }
        return node.key
    };

    //-------------获取根-------------
    this.getRoot = function () {
        return root;
    };

    //--------------移除--------------
    //移除要注意上级指针
    this.remove = function (key) {
        root = removeNode(root, key);
    };
    var getMinNode = function (node) {
        while(node.left != null){
            node = node.left;
        }
        return node
    };
    var removeNode = function (node, key) {
        if(node == null){
            return null
        }
        if(key<node.key){
            node.left = removeNode(node.left, key);
            return node
        }else if(key>node.key){
            node.right = removeNode(node.right, key);
            return node
        }else{
            if(node.left == null && node.right == null){
                //叶节点
                return null
            }else if(node.left == null || node.right == null){
                //不完整子树
                if(node.left != null){
                    return node.left
                }else{
                    return node.right
                }
            }else{
                //完整子树
                //步骤：找到右边子树的最小值替换成要删除的节点，然后删掉右边子树的最小节点
                var minNode = getMinNode(node.right);
                node.key = minNode.key;
                //记得关联指针
                node.right = removeNode(node.right,minNode);
                return node
            }
        }
    }
}