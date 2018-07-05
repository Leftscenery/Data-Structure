//无序而且唯一，可以执行：交，差，并，子操作
function Set() {
    var items = {};
    var length = 0;

    this.add = function (element) {
        if(!this.has(element)){
            items[element] = element;
            length++;
        }
    };
    this.delete = function (element) {
        this.has(element)? (delete items[element],length--) : null;
    };
    this.has = function (element) {
        return element in items
    };
    this.clear = function () {
        items = {};
        length = 0;
    };
    this.size = function () {
        return length
    };
    this.values = function () {
        var ary = [];
        for (key in items){
            ary.push(key);
        }
        return ary;
    }

    this.union = function (other) {
        var newSet = new Set();
        this.values().concat(other.values()).forEach((a)=>{
            newSet.add(a);
        });
        return newSet
    };
    this.intersection = function (other) {
        var newSet = new Set();
        for (var item of other.values()) {
            console.log(item);
            this.has(item) ? newSet.add(item) : null;
        }
        return newSet
    };
    this.difference = function (other) {
        var newSet = (new Set()).union(other).union(this);
        for (var item of other.values()) {
            console.log(item);
            this.has(item) ? newSet.delete(item) : null;
        }
        return newSet
    };
    this.contains = function (other) {
        var otherSet = other.values();
        for (var i = 0; i < otherSet.length; i++) {
            if(!this.has(otherSet[i])){
                return false
            }
        }
        return true
    }

}