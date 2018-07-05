//哈希表的原理就是把输入的值通过哈希函数转成一个数字然后存期来，数字指向的是一个地址。
//处理冲突的两种方式
    //分离链接：使用链表
    //线性探查：如果index被占用就+1

function HashTable() {
    var items = [];


    //lose lose算法，转为二维码的和 mod 37
    var loseloseHashCode = function (n) {
        var total = 0;
        n.split('').forEach((a)=>{ total += a.charCodeAt()})
        return total % 37
    };

    //djb2算法，5381，1013(预测数据量的质数)
    var djb2HashCode = function (n) {
        var hash = 5381;
        for (var i = 0; i < n.length; i++) {
            hash = hash * 33 + n.charCodeAt[i];
        }
        return hash % 1013
    };

    var ItemPair = function (key,value) {
        this.key = key;
        this.value = value;
    };

    //分离链接
    this.put = function (key,value) {
        var newPair = new ItemPair(key,value);
        var hashKey = loseloseHashCode(newPair.key);
        if(items[hashKey]==undefined){
            var newLinkedList = new LinkedList();
            newLinkedList.append(newPair);
            items[hashKey]=newLinkedList
        }else{
            items[hashKey].append(newPair)
        }
    };
    this.remove = function (key) {
        var hashKey = loseloseHashCode(key);
        if(items[hashKey]!=undefined) {
            var current = items[hashKey].getHead();
            while(current != undefined){
                if(current.element.key != key){
                    current = current.next
                }else{
                    items[hashKey].remove(current.element);
                    return
                }
            }
        }
    };
    this.get = function (key) {
        var hashKey = loseloseHashCode(key);
        if(items[hashKey]!=undefined) {
            var current = items[hashKey].getHead();
            while(current != undefined){
                if(current.element.key != key){
                    current = current.next
                }else{
                    return current.element.value
                }
            }
        }
    };

    //线性探查
    // this.put = function (key,value) {
    //     var newPair = new ItemPair(key,value);
    //     var hashKey = loseloseHashCode(newPair.key);
    //     while(items[hashKey]!==undefined){
    //         hashKey++;
    //     }
    //     items[hashKey] = newPair;
    // };
    // this.remove = function (key) {
    //     var hashKey = loseloseHashCode(key);
    //     while(items[hashKey].key != key || items[hashKey] != undefined){
    //         hashKey++;
    //     }
    //     items[hashKey] = undefined;
    // };
    // this.get = function (key) {
    //     var hashKey = loseloseHashCode(key);
    //     while(items[hashKey] != undefined){
    //         if(items[hashKey].key == key){
    //             return items[hashKey].value
    //         }
    //         hashKey++;
    //     }
    //     return null
    // };
}