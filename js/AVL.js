//AVL为自平衡树的一个实现
//通过计算并判断平衡因子是否在（左边比右边高-1 0 右边比左边高1）区间内，进行树的旋转
//LL旋转为只有左树长的时候（其实做到向右旋转）
//RR旋转为只有右树长的时候（其实做到向左旋转）
//二者可以叠加

function AVLTree() {
    var Node = function (key) {
        this.left = null;
        this.key = key;
        this.right = null;
    };
    var root = null;

    //-------------访问函数-------------
    var printNodeKey = function (n) {
        console.log(n);
    };
    
    //-------------检测当前node平衡因子-------------
    //原理为通过这个函数计算left和right然后相减，因此不需要知道正负
    var getDepth = function (node) {
        if(node == null){
            return -1
        }else{
            return Math.max(getDepth(node.left),getDepth(node.right)) + 1
        }
    };

    //-------------插入节点-------------
    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left == null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
                //判断是否需要平衡，在插入后执行，一般情况下只触发一次
                if(getDepth(node.left)-getDepth(node.right)){
                    
                }
            }
        } else {
            if (node.right == null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
                //判断是否需要平衡，在插入后执行，一般情况下只触发一次
            }
        }
    };
    this.insert = function (key) {
        var newNode = new Node(key);
        if (root == null) {
            //是一个空树
            root = newNode;
        } else {
            //插入
            insertNode(root, newNode);
        }
    };

    //-------------最小值-------------
    this.min = function () {
        var node = root;
        while (node.left != null) {
            node = node.left;
        }
        return node.key
    };

    //-------------最大值-------------
    this.max = function () {
        var node = root;
        while (node.right != null) {
            node = node.right;
        }
        return node.key
    };

    //-------------获取根-------------
    this.getRoot = function () {
        return root;
    };

    this.getRootDepth = function () {
        return getDepth(root)
    }
}