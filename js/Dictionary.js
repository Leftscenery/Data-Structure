//不重复的值，但是是键值对儿
function Dictionary() {
    var items = {};
    var length = 0;

    this.set = function (key, value) {
        items[key] = value;
        length++;
    }
    this.delete = function (key) {
        this.has(key)? (delete items[key],length) : null
    }
    this.has = function (key) {
        return key in items
    }
    this.get = function (key) {
        return this.has(key)? items[key] : null
    }
    this.clear = function () {
        items={};
        length = 0;
    }
    this.size = function () {
        return length
    }
    this.keys = function () {
        var keyList = [];
        for (var key in items) {
            keyList.push(key);
        }
        return keyList
    }
}